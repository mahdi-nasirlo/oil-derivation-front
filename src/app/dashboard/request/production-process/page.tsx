"use client";

import TextArea from "antd/es/input/TextArea";
import {
  Button,
  Col,
  Divider,
  Form,
  FormItemProps,
  Input,
  Row,
  Select,
  Typography,
} from "../../../../../lib/antd";
import React from "react";
import {
  InboxOutlined,
  InfoCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Upload from "antd/es/upload/Upload";
import Dragger from "antd/es/upload/Dragger";

export default function Page() {
  return (
    <>
      <Typography className="text-right font-medium text-base">
        لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
      </Typography>
      <Divider />
      <Form name="form_item_path" layout="vertical">
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <Row gutter={32}>
              <Col span={24}>
                <MyFormItem name="year-establishment" label="شرح فرآیند تولید">
                  <TextArea
                    showCount
                    maxLength={100}
                    style={{
                      height: 120,
                      resize: "none",
                    }}
                    placeholder="وارد کنید"
                  />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={24}>
                <MyFormItem
                  name="company-registratuon-num"
                  label="نمودار شماتیک فرآیند"
                >
                  <Dragger className="hy-10">
                    <div className="inset-y-0 left-0">
                      <UploadOutlined />
                    </div>
                  </Dragger>
                  <div className="flex mt-2 mr-2 message-info ">
                    <span>
                      <InfoCircleOutlined />
                    </span>
                    <p className="mr-2  ">
                      فایل OPC فقط به صورت png یا jpg بارگذاری شود!
                    </p>
                  </div>
                </MyFormItem>
              </Col>
            </Row>
          </MyFormItemGroup>
        </MyFormItemGroup>
      </Form>

      <Divider />
      <div className="flex gap-6">
        <Button type="primary" size="large" className="w-full py-3">
          ذخیره و ادامه
        </Button>
      </div>
    </>
  );
}

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};
