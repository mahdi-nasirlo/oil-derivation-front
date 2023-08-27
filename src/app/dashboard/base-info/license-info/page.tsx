"use client";

import {
  Button,
  Col,
  Divider,
  Form,
  FormItemProps,
  Input,
  Row,
  Typography,
} from "../../../../../lib/antd";
import React from "react";

export default function Page() {
  return (
    <>
      <Typography className="text-right font-medium text-base">
        لطفا اطلاعات را با دقت بررسی کرده و سپس در صورت صحیح بودن باقی مراحل را
        کامل نمایید.
      </Typography>
      <Divider />
      <Form name="form_item_path" layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="year-establishment" label="سال تاسیس">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="lastName" label="نام شرکت ثبت شده">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="company-registratuon-num" label=" شماره ثبت شرکت">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="license-establish"
              label="شماره پروانه بهره برداری / جواز تاسیس"
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="operation-license"
              label="تاریخ صدور پروانه بهره برداری / جواز تاسیس"
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name={"phone_number"} label="شناسه کسب و کار">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Divider />
      <div className="flex gap-6">
        <Button
          className="w-full management-info-form-submit btn-filter"
          size="large"
          type="primary"
          htmlType="submit"
        >
          <span className="flex gap-3 justify-center "> ثبت</span>
        </Button>
        {/* <Button type="primary" size="large" className="w-full py-3  btn-error">
          گزارش اطلاعات اشتباه
        </Button> */}
      </div>
    </>
  );
}

// const MyFormItemContext = React.createContext<(string | number)[]>([]);

// interface MyFormItemGroupProps {
//   prefix: string | number | (string | number)[];
//   children: React.ReactNode;
// }

// function toArr(
//   str: string | number | (string | number)[]
// ): (string | number)[] {
//   return Array.isArray(str) ? str : [str];
// }

// const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(
//     () => [...prefixPath, ...toArr(prefix)],
//     [prefixPath, prefix]
//   );

//   return (
//     <MyFormItemContext.Provider value={concatPath}>
//       {children}
//     </MyFormItemContext.Provider>
//   );
// };

// const MyFormItem = ({ name, ...props }: FormItemProps) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatName =
//     name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

//   return <Form.Item name={concatName} {...props} />;
// };
