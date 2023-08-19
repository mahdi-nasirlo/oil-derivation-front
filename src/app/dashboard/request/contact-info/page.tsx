"use client";

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
              <Col span={12}>
                <MyFormItem name="year-establishment" label="استان ">
                  <Select size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="lastName" label="شهرستان">
                  <Select size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name="company-registratuon-num" label="شهرک">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="license-establish" label="خیابان اصلی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name="operation-license" label="خیابان فرعی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name={"phone_number"} label="کوچه">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <MyFormItem name="operation-license" label="نشانی دفتر مرکزی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name="operation-license" label="تلفن دفتر مرکزی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name={"phone_number"} label="تلفن تماس کارخانه">
                  <Input size="large" />
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
