import React from "react";
import { Table, Card, Row, Col, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import "../Crud/style.css";
import ModalForm from "./Form";

const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 1,
    };
  }
  return {};
};
const columns = [
  {
    title: "Id",
    dataIndex: "key",
    rowScope: "row",
  },
  {
    title: "Producto",
    dataIndex: "product",
    // render: (text) => <a>{text}</a>,
    onCell: sharedOnCell,
  },
  {
    title: "Precio",
    dataIndex: "price",
    onCell: sharedOnCell,
  },
  {
    title: "Categoria",
    dataIndex: "category",
    onCell: sharedOnCell,
  },
  {
    title: "Acciones",
    dataIndex: "actions",
    render: (text) => (
      <div>
      <Row justify={"center"}>
        <Col>
          <Popconfirm
            title="Deseas eliminar el usuario?"
            // onConfirm={() => handleDelete(record)}
          >
            <Button icon={<DeleteFilled />} type="primary" danger />
          </Popconfirm>
        </Col>

        <Col offset={1}>
          <Button
            icon={<EditOutlined />}
            type="primary"
          />
        </Col>
      </Row>
    </div>
    ),
    onCell: sharedOnCell,
  },
];

const data = [
  {
    key: "1",
    product: "Producto 1",
    price: 32,
    category: "Categoria 1",
  },
  {
    key: "2",
    product: "Producto 2",
    price: 42,
    category: "Categoria 2",
  },
  {
    key: "3",
    product: "Producto 3",
    price: 40,
    category: "Categoria 3",
  },
  {
    key: "4",
    product: "Producto 4",
    price: 18,
    category: "Categoria 4",
  },
  {
    key: "5",
    product: "Producto 5",
    price: 18,
    category: "Categoria 5",
  },
];

const List = () => (
  <>
    <Row justify={"center"} className="Component">
      <Col>
        <Card
          title="Crud"
          bordered={false}
          extra={<ModalForm />}
          style={{
            width: "auto",
          }}
        >
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: 1100 }}
            style={{
              width: "auto",
            }}
          />
        </Card>
      </Col>
    </Row>
  </>
);
export default List;
