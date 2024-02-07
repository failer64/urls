import { Link, Navigate } from "react-router-dom";
import UniversalForm, { FormFields } from "../UniversalForm";
import { Card, Typography } from "antd";
import { FC, useState } from "react";
import { API_BASE_URL } from "../../api";
import Popup from "../Popup";

const { Title } = Typography;

type Props = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

const LoginPage: FC<Props> = ({ isAuth, setIsAuth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (values: FormFields) => {
    const response = await fetch(API_BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const token = await response.json();
      sessionStorage.setItem("authToken", JSON.stringify(token));
      setIsModalOpen(true);
    } else {
      const error = await response.json();
      setError(error.detail);
    }
  };

  if (isAuth) return <Navigate to={`/`} />;

  return (
    <Card className="card">
      <Title>Авторизация</Title>
      <UniversalForm onSubmit={onSubmit} error={error} setError={setError} />
      Или <Link to={"/register"}>зарегистрироваться!</Link>
      <Popup
        title="Вы успешно вошли!"
        text="Переход на домашнюю страницу!"
        isOpen={isModalOpen}
        setAuth={setIsAuth}
        setIsModalOpen={setIsModalOpen}
      />
    </Card>
  );
};

export default LoginPage;
