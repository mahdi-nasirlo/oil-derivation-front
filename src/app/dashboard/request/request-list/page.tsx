"use client";

import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  FormItemProps,
  Input,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "../../../../../lib/antd";
import React, { useState } from "react";
import Link from "next/link";
import { ColumnsType } from "antd/es/table";

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
                <MyFormItem name="year-establishment" label="نام محصول ">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="lastName" label=" وضعیت فعالیت">
                  <Select size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row dir="ltr">
              <Col span={2}>
                <div className="flex gap-6 ">
                  <Button
                    className="w-full management-info-form-submit btn-delete-filter"
                    size="large"
                    type="primary"
                  >
                    <span className="flex gap-3 justify-center ">
                      حذف فیلتر
                    </span>
                  </Button>
                  <Button
                    className="w-full management-info-form-submit btn-filter"
                    size="large"
                    type="primary"
                  >
                    <span className="flex gap-3 justify-center ">
                      اعمال فیلتر
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
          </MyFormItemGroup>
        </MyFormItemGroup>
      </Form>
    </>
  );
}

interface DataType {
  key: string;
  row: number;
  productname: string;
  density: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ردیف",
    dataIndex: "row",
    key: "1",
  },
  {
    title: "نام محصول",
    dataIndex: "productname",
    key: "2",
  },
  {
    title: "دانسیته",
    dataIndex: "density",
    key: "2",
  },

  {
    title: "جزئیات",
    key: "جزئیات",
    render: (_, record) => (
      <Space size="middle">
        <Link href={""} className="action-btn-delete">
          حذف
        </Link>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    row: 1,
    productname: "هیدروکربن سبک",
    density: "بالا تر از 900gr/cm3",
  },
  {
    key: "2",
    row: 2,
    productname: " هیدروکربن سنگین",
    density: "پایین تر از 900gr/cm3",
  },
];
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
