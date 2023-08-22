import {
  DeleteFilled,
  DownloadOutlined,
  EditFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { Button } from "antd/lib";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Column } = Table;
const data = [
  {
    key: "1",
    urldomain: "http://localhost:3000/domain",
    description: "گروه جدید",
    groupname: "گروه اول  ", // firstName: "John",
    // lastName: "Brown",
    // age: 32,
    // address: "New York No. 1 Lake Park",
    dataIndex: "urldomain",
  },
  {
    key: "2",
    urldomain: "http://localhost:3000/domain",
    description: "گروه جدید",
    groupname: "گروه اول  ",
    // firstName: "Jim",
    // lastName: "Green",
    // age: 42,
    // address: "London No. 1 Lake Park",
    dataIndex: "description",
  },
  {
    key: "3",
    urldomain: "http://localhost:3000/domain",
    description: "گروه جدید",
    groupname: "گروه اول  ",
    // firstName: "Joe",
    // lastName: "Black",
    // age: 32,
    // address: "Sydney No. 1 Lake Park",
    dataIndex: "groupname",
  },
];
export default function GroupList() {
  const [size, setSize] = useState("large");
  return (
    <>
      <div style={{ display: "flex", direction: "ltr" }}>
        <Link to={"/creategroup"}>
          <Button
            style={{ marginRight: 5, marginTop: 50 }}
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size={size}
          >
            ایجاد
          </Button>
        </Link>
      </div>
      <div>
        <Table dataSource={data} style={{ marginTop: 60 }}>
          <Column title="دامنه url" dataIndex="urldomain" key="firstName" />
          <Column title="توضیحات" dataIndex="description" key="lastName" />
          <Column title="نام گروه بندی" dataIndex="groupname" key="address " />

          <Column
            title="عملیات"
            key="عملیات"
            render={() => (
              <>
                <div>
                  <Button
                    style={{ marginRight: 10 }}
                    type="primary"
                    shape="round"
                    icon={<DeleteFilled />}
                    size={size}
                  ></Button>

                  <Link to={"/editgroup"}>
                    <Button
                      style={{ marginRight: 10 }}
                      type="primary"
                      shape="round"
                      icon={<EditFilled />}
                      size={size}
                    ></Button>
                  </Link>
                </div>
              </>
            )}
          />
        </Table>
      </div>
    </>
  );
}
