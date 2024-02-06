import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Preloader = () => {
  return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
};

export default Preloader;
