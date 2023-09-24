import React,{useState} from "react";
import { Button, Modal } from 'antd';
import { Form, Field } from "formik";

const Modals: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form> 
            <div className='modal-container'>
                <Field name="name"></Field>
                <Field name="is_active"></Field>
            </div>
        </Form>
      </Modal>
    </>
  );
};

export default Modals;