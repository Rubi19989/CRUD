import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";


const ModalForm = () => {

  const [modal2Open, setModal2Open] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Crear
      </Button>
      <Modal
        title="Crear Producto"
        centered
        open={modal2Open}
        // onOk={() => setModal2Open(false)}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Producto"
            name="product"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese el nombre del producto!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Precio"
            name="price"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese el Precio!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Categoria"
            name="category"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese el nombre de la Categoria!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
