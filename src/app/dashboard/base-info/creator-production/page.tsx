"use client";

import {
  Alert,
  Button,
  Col,
  Divider,
  Form,
  FormItemProps,
  Input,
  Row,
} from "../../../../../lib/antd";
import React from "react";
import staticMessages from "../../../../../lib/staticMessages";
import Link from "next/link";

export default function NewRequest() {
  return (
    <>
      <Alert
        className="border-none w-full text-right text-base font-normal text-red-500"
        message={staticMessages.formAlert}
        type="error"
      />
      <Divider />
      <Form name="form_item_path" layout="vertical">
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name="lastName" label="مدیرعامل">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="lastName" label="شناسه ملی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name="lastName" label="نام واحد تولیدی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="lastName" label="نوع مالکیت">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
          </MyFormItemGroup>
        </MyFormItemGroup>

        <Divider />
        <Link href={"/dashboard/request/management-info"}>
          <Button type="primary" size="large" className="w-full py-3">
            ثبت
          </Button>
        </Link>
      </Form>
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
