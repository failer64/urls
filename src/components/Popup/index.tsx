import { Modal } from "antd";
import { FC } from "react";

type Props = {
  title: string;
  text: string;
  isOpen: boolean;

  setIsModalOpen: (value: boolean) => void;
  setAuth: (value: boolean) => void;
};
const Popup: FC<Props> = ({ title, text, isOpen, setIsModalOpen, setAuth }) => {
  const handleOk = () => {
    setIsModalOpen(false);
    setAuth(true);
  };
  return (
    <Modal title={title} open={isOpen} footer={null} onCancel={handleOk}>
      <p>{text}</p>
    </Modal>
  );
};

export default Popup;
