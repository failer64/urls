import { Button, Form, Input } from "antd";
import { FC, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export type FormFields = {
  username: string;
  password: string;
};

type Props = {
  error: string;
  onSubmit: (body: FormFields) => void;
  setError: (value: string) => void;
};

const UniversalForm: FC<Props> = ({ error, setError, onSubmit }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [text, setText] = useState(" ");
  const handleSubmit = async (event: FormFields) => {
    setIsFetching(true);
    await onSubmit(event);
    setIsFetching(false);
  };

  return (
    <Form
      layout="vertical"
      autoComplete="off"
      onChange={() => setError("")}
      onFinish={handleSubmit}
    >
      <Form.Item
        required
        name="username"
        label="Логин"
        validateStatus={error || !text ? "error" : "success"}
        help={(error && error) || (!text && "Пожалуйста, введите логин!")}
      >
        <Input
          onChange={(e) => setText(e.target.value)}
          value={text}
          prefix={<UserOutlined />}
          placeholder="Логин"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={isFetching || !!error || !text.trim()}
          type="primary"
          htmlType="submit"
        >
          ОК
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UniversalForm;
