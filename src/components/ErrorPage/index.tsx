import { Link } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

export const ErrorPage = () => {
  return (
    <>
      <Title style={{ color: "inherit" }}>404, Страница не найдена</Title>
      <Link to={"/"}>На главную</Link>
    </>
  );
};

export default ErrorPage;
