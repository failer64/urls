import { Button, Form, Input } from "antd";
import { FC } from "react";

type PropsType = {
  hanldeSumbit: (value: string) => void;
};
export const UrlForm: FC<PropsType> = ({ hanldeSumbit }) => {
  const [form] = Form.useForm();

  const onHandleSubmit = ({ link }: { link: string }) => {
    hanldeSumbit(link);
    form.resetFields();
  };

  return (
    <Form
      autoComplete="off"
      form={form}
      onFinish={onHandleSubmit}
      style={{ marginTop: "20px" }}
    >
      <Form.Item
        name="link"
        label="Ссылка"
        rules={[
          {
            required: true,
            validator(_, value) {
              if (
                value &&
                value.match(
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._=+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
                )
              ) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Введите корректный URL!"));
            },
          },
        ]}
      >
        <Input placeholder="Ссылка" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить ссылку
        </Button>
      </Form.Item>
    </Form>
  );
};
