import { Button } from "antd";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h1>404, Страница не найдена</h1>
      <Button>
        <Link to={"/"}>На главную</Link>
      </Button>
    </>
  );
};

export default ErrorPage;
