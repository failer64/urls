import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../helpers";
import {
  Button,
  Card,
  Select,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
} from "antd";
import { UrlForm } from "./UrlForm";
import { API_BASE_URL } from "../../api";
import { fetchData } from "../../helpers";

const { Title } = Typography;

type ItemsType = { counter: number; id: number; short: string; target: string };

export interface TableParams {
  pagination: {
    current?: number | undefined;
    pageSize?: number | undefined;
    total?: number | undefined;
  };
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
  const [sort, setSort] = useState<SortType[]>(["desc_counter"]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 7,
      total: 0,
    },
  });

  useEffect(() => {
    setLoading(true);
    fetchData(sort, tableParams)
      .then((res) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: +(res.headers.get("x-total-count") || 0),
          },
        });
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [JSON.stringify(tableParams), sort]);

  const handleTableChange: TableProps["onChange"] = (pagination) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination.pageSize) {
      setData([]);
    }
  };

  const hanldeSumbit = async (link: string) => {
    const response = await fetchWithAuth(
      API_BASE_URL + `squeeze?link=${link}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setData((prev) => [data, ...prev]);
      // setTableParams((prev) => ({
      //   ...prev,
      //   pagination: {
      //     current: prev.pagination.current,
      //     pageSize: prev.pagination.pageSize,
      //     total: (prev.pagination.total ?? 0) + 1,
      //   },
      // }));
    } else {
      const error = await response.json();
      console.error(error);
    }
  };

  const handleChange = (value: SortType[]) => {
    setSort(value);
  };

  return (
    <Card style={{ width: 800 }}>
      <Title style={{ textAlign: "center" }}>Таблица</Title>
      <Table
        bordered
        rowKey={(row) => row.id}
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={handleTableChange}
        pagination={tableParams.pagination}
        style={{ marginBottom: "10px" }}
      />
      <Select
        mode="multiple"
        defaultValue={sort}
        style={{ width: "100% " }}
        onChange={handleChange}
        options={sortArr}
        disabled={loading || data.length < 2}
      />
      <UrlForm hanldeSumbit={hanldeSumbit} />
    </Card>
  );
};

export default Content;
