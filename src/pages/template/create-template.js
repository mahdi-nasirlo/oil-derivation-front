import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
export default function CreateTemplate() {
  const [size, setSize] = useState("large");
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div>
        <h2 style={{ color: "blue " }}> </h2>
      </div>
      <div>
        <Form
          name="wrap"
          labelCol={{
            flex: "110px",
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: "100%",
            height: "80%",
          }}
          onFinish={handleSubmit} // Use the handleSubmit function as the value for onFinish prop
        >
          <div
            style={{ backgroundColor: "white", borderRadius: 5, padding: 15 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="متن قالب"
                style={{ width: "49%" }}
                name="username"
                rules={[
                  {
                    required: true,
                    message: "لطفا اسم قالب  را وارد کنید",
                  },
                  {
                    whitespace: true,
                    message: "اسم قالب نمی تواند خالی باشد",
                  },
                ]}
                hasFeedback
              >
                <Input style={{ height: 50 }} />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label="عنوان قالب"
                style={{ width: "49%" }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "لطفا عنوان قالب  را وارد کنید",
                  },

                  {
                    whitespace: true,
                    message: " عنوان قالب نمی تواند خالی باشد",
                  },
                ]}
                hasFeedback
              >
                <Input style={{ height: 50 }} />
              </Form.Item>
            </div>
            <Form.Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label=" کروه قالب"
              style={{ width: "49%" }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "لطفا گروه قالب  را وارد کنید",
                },

                {
                  whitespace: true,
                  message: " عنوان گروه نمی تواند خالی باشد",
                },
              ]}
              hasFeedback
            >
              <Input style={{ height: 50 }} />
            </Form.Item>
            <div
              style={{
                direction: "ltr",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Form.Item style={{ direction: "ltr" }} label=" ">
                <Button
                  style={{ marginRight: 10 }}
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  icon={<PlusOutlined />}
                  size={size}
                >
                  ایجاد
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
