import { Link, Navigate } from "react-router-dom";
import UniversalForm, { FormFields } from "../UniversalForm";
import { useState } from "react";
import { Card, Typography } from "antd";
import { API_BASE_URL } from "../../api";
import Popup from "../Popup";

const { Title } = Typography;

const RegisterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  if (isRegister) return <Navigate to={`/login`} />;

  const onSubmit = async (values: FormFields) => {
    const { username, password } = values;
    const response = await fetch(
      API_BASE_URL + `register?username=${username}&password=${password}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
      setIsModalOpen(true);
    } else {
      const error = await response.json();
      setError(error.detail);
    }
  };

  return (
    <Card style={{ width: "400px" }}>
      <Title>Регистрация</Title>
      <UniversalForm onSubmit={onSubmit} error={error} setError={setError} />
      Или <Link to={"/login"}>войти!</Link>
      <Popup
        title="Вы успешно зарегистрировались!"
        text="Переход на страницу авторизации!"
        isOpen={isModalOpen}
        setAuth={setIsRegister}
        setIsModalOpen={setIsModalOpen}
      />
    </Card>
  );
};

export default RegisterPage;
