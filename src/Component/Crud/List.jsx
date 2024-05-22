import React, { useContext, useEffect, useState } from "react";
import { Table, Card, Row, Col, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import "../Crud/style.css";
import ModalForm from "./Form";
import { ContentContext } from "./Context";

const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 1,
    };
  }
  return {};
};

const List = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [isEdit, setIsEdit] = useState("");

  const { users, deleteUsers, getUsers, getOneUsers } = useContext(ContentContext);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      rowScope: "row",
    },
    {
      title: "Correo Electrónico",
      dataIndex: "email",
      onCell: sharedOnCell,
    },
    {
      title: "Contraseña",
      dataIndex: "password",
      onCell: sharedOnCell,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      onCell: sharedOnCell,
    },
    {
      title: "Rol",
      dataIndex: "role",
      onCell: sharedOnCell,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      onCell: sharedOnCell,
      render: (avatar) => (
        <img
          src={avatar}
          alt="Avatar"
          style={{ marginRight: "8px", verticalAlign: "middle", width: "40px", height: "40px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      render: (_, record) => (
        <Row justify="center">
          <Col>
            <Popconfirm
              title="¿Deseas eliminar el usuario?"
              onConfirm={() => deleteUsers(record.id)}
            >
              <Button
                className="button-margin"
                icon={<DeleteFilled />}
                type="primary"
                danger
              />
            </Popconfirm>
          </Col>
          <Col offset={1}>
            <Button
              className="button-margin"
              icon={<EditOutlined />}
              type="primary"
              onClick={async () => {
                await getOneUsers(record.id);
                setIsEdit("Editar");
                setModal2Open(true);
              }}
            />
          </Col>
        </Row>
      ),
      onCell: sharedOnCell,
    },
  ];

  return (
    <Row justify="center" className="Component">
      <Col>
        <Card
          title="Crud"
          bordered={false}
          extra={
            <Button onClick={() => { setIsEdit(""); setModal2Open(true); }}>
              Crear
            </Button>
          }
          style={{ width: "auto" }}
        >
          <ModalForm
            isEdit={isEdit}
            modal2Open={modal2Open}
            setModal2Open={setModal2Open}
          />
          <Table
            rowKey="id"
            columns={columns}
            dataSource={users}
            bordered
            scroll={{ x: 1100 }}
            style={{ width: "auto" }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default List;
