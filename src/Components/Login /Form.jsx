import React, { useContext, useState } from "react";
import { Button, Form, Input, Card, Row } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";
import { ContentContext } from "./Context";

const FormLogin = () => {
  const { loginAuth } = useContext(ContentContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    const success = await loginAuth(values);
    setLoading(false);
    if (success) {
      navigate("/crud");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No tienes cuenta para iniciar sesión",
      });
    }
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-fondo">
      <h1 className="text-center">Bienvenidos</h1>

      <Row justify={"center"} className="top-login">
        <Card
          className="card-color"
          title="Iniciar Sesión"
          bordered={false}
          style={{
            width: 500,
            height: 400,
          }}
        >
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout={"vertical"}
            form={form}
          >
            <Form.Item
              label="Correo Electrónico"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Por favor, introduce tu correo electrónico",
                },
              ]}
            >
              <Input className="input" />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, introduce tu contraseña",
                },
              ]}
            >
              <Input.Password className="input" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Iniciar Sesión
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </div>
  );
};

export { FormLogin };
