import React, { useContext, useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { ContentContext } from "./Context";

const ModalForm = ({ isEdit, modal2Open, setModal2Open }) => {
  const { createUsers, editUsers, oneUsers } = useContext(ContentContext);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Success:", values);

    const newProduct = {
      email: values.email,
      password: values.password,
      name: values.name,
      role: values.role,
      avatar: values.avatar,
    };

    if (isEdit === "Editar") {
      await editUsers(oneUsers.id, newProduct);
    } else {
      await createUsers(newProduct);
    }

    form.resetFields();
    setModal2Open(false);
  };

  useEffect(() => {
    form.resetFields();
    if (isEdit !== "Editar") {
      form.setFieldsValue({
        email: "",
        password: "",
        name: "",
        role: "",
        avatar: "",
      });
    } else if (oneUsers) {
      form.setFieldsValue({
        email: oneUsers.email,
        password: oneUsers.password,
        name: oneUsers.name,
        role: oneUsers.role,
        avatar: oneUsers.avatar,
      });
    }
  }, [isEdit, oneUsers]);

  return (
    <>
      <Modal
        forceRender
        title={`${isEdit === "Editar" ? "Editar" : "Crear"} Usuario`}
        centered
        open={modal2Open}
        okText={`${isEdit === "Editar" ? "Editar" : "Crear"}`}
        onOk={() => {
          form.submit();
        }}
        onCancel={() => {
          setModal2Open(false);
          form.resetFields();
        }}
      >
        <Form
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          form={form}
        >
          <Form.Item
            label="Correo Electrónico"
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el correo electrónico!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la contraseña!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el nombre!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rol"
            name="role"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el rol!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Avatar"
            name="avatar"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el URL del avatar!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
