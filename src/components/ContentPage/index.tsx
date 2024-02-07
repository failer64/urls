import { useEffect, useState } from "react";
import { fetchData, fetchWithAuth } from "../../helpers";
import {
  Button,
  Card,
  Select,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { UrlForm } from "./UrlForm";
import { API_BASE_URL } from "../../api";

const { Title } = Typography;

export type ItemsType = {
  counter: number;
  id: number;
  short: string;
  target: string;
};

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export type SortType =
  | "asc_short"
  | "asc_target"
  | "asc_counter"
  | "desc_short"
  | "desc_target"
  | "desc_counter";

const sortArr = [
  { value: "asc_short", label: "По алфавиту короткой ссылки" },
  { value: "asc_target", label: "По алфавиту исходной ссылки" },
  { value: "asc_counter", label: "По увелечению просмотров" },
  { value: "desc_short", label: "С конца алфавита по короткой ссылке" },
  { value: "desc_target", label: "С конца алфавита по исходной ссылке" },
  { value: "desc_counter", label: "По убыванию просмотров" },
];

const redirectUrl = "https://front-test.hex.team/s/";

const columns: TableColumnsType<ItemsType> = [
  {
    title: "Короткие ссылки",
    dataIndex: "short",
    render: (text) => (
      <Space>
        <a target="_blank" href={redirectUrl + text}>
          {text}
        </a>
        <Button
          type="default"
          href="#"
          onClick={() => navigator.clipboard.writeText(redirectUrl + text)}
        >
          copy
        </Button>
      </Space>
    ),
  },
  {
    title: "Исходные Ссылки",
    dataIndex: "target",
  },
  {
    title: "Посещений",
    dataIndex: "counter",
  },
];

export const Content = () => {
  const [data, setData] = useState<ItemsType[]>([]);
  const [sort, setSort] = useState<SortType[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 7,
    total: 0,
  });

  useEffect(() => {
    setLoading(true);
    fetchData(sort, pagination)
      .then((res) => {
        setPagination((prev) => ({
          ...prev,
          total: +(res.headers.get("x-total-count") || 0),
        }));
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [JSON.stringify(pagination), sort]);

  const hanldeSumbit = async (link: string) => {
    const response = await fetchWithAuth(
      API_BASE_URL + `squeeze?link=${link}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
      const link = await response.json();
      if (data.length === pagination.pageSize) {
        setData((prev) => [link, ...prev.slice(0, -1)]);
        setPagination((prev) => ({
          ...prev,
          total: (prev.total ?? 0) + 1,
        }));
      } else {
        setData((prev) => [link, ...prev]);
      }
    } else {
      const error = await response.json();
      console.error(error);
    }
  };

  const handleTableChange = (pagination: Pagination) => {
    setPagination({
      ...pagination,
    });
  };

  const handleChange = (value: SortType[]) => {
    setSort(value);
  };

  return (
    <Card style={{ width: "700px" }}>
      <Title style={{ textAlign: "center" }}>Таблица</Title>
      <Table
        bordered
        rowKey={(row) => row.id}
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={handleTableChange}
        pagination={pagination}
        style={{ marginBottom: "10px" }}
      />
      <Select
        mode="multiple"
        defaultValue={sort}
        style={{ width: "100% " }}
        onChange={handleChange}
        options={sortArr}
        disabled={loading || data.length < 1}
        placeholder={"Выберите сортировку"}
      />
      <UrlForm hanldeSumbit={hanldeSumbit} />
    </Card>
  );
};

export default Content;
