"use client";

import { ColumnsType } from "antd/es/table";
import {
  Button,
  Col,
  DatePicker,
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
import React from "react";
import { SvgIcon } from "@/components/layout/sidebar";
import Link from "next/link";

export default function Home() {
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
                <MyFormItem name="lastName" label="نام و نام خانوادگی">
                  <Input size="large" />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="lastName" label="کد ملی / کد اتباع">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name="lastName" label="تاریخ تولد">
                  <DatePicker
                    className="w-full"
                    placeholder="13**/**/**"
                    size="large"
                  />
                </MyFormItem>
              </Col>
              <Col span={12}>
                <MyFormItem name="lastName" label="سمت">
                  <Select size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <MyFormItem name={"phone_number"} label="شماره تماس">
                  <Input size="large" />
                </MyFormItem>
              </Col>
            </Row>
            <Row dir="ltr">
              <Col span={2}>
                <Button
                  className="w-full management-info-form-submit"
                  size="large"
                  type="primary"
                >
                  <span
                    style={{ display: "flex" }}
                    className="flex gap-3 justify-center"
                  >
                    ذخیره
                    <SvgIcon src="/static/save.svg" />
                  </span>
                </Button>
              </Col>
            </Row>
          </MyFormItemGroup>
        </MyFormItemGroup>
      </Form>

      <Table
        pagination={false}
        className="mt-6"
        columns={columns}
        dataSource={data}
      />

      <Divider />
      <Button
        className="w-full management-info-form-submit btn-filter"
        size="large"
        type="primary"
        htmlType="submit"
      >
        <span className="flex gap-3 justify-center "> ثبت</span>
      </Button>
    </>
  );
}

interface DataType {
  key: string;
  name: string;
  row: number;
  nationalcode: number;
  phonenum: string;
  brithdate: string;

  role: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ردیف",
    dataIndex: "row",
    key: "1",
  },
  {
    title: "نام و نام خانوادگی",
    dataIndex: "name",
    key: "نام و نام خانوادگی",
  },
  {
    title: "کد ملی / اتباع",
    dataIndex: "nationalcode",
    key: "کد ملی / اتباع",
  },
  {
    title: "تاریخ تولد",
    dataIndex: "brithdate",
    key: "تاریخ تولد",
  },
  {
    title: "سمت",
    dataIndex: "role",
    key: "سمت",
  },
  {
    title: "شماره تماس",
    dataIndex: "phonenum",
    key: "شماره تماس",
  },
  {
    title: "جزئیات",
    key: "جزئیات",
    render: (_, record) => (
      <Space size="middle">
        <Link href={""} className="action-btn-edit">
          ویرایش
        </Link>
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
    name: "مهدی نصیرلو",
    nationalcode: 1111111111,
    phonenum: "09337161523",
    role: "مدیرعامل",
    brithdate: "1382/12/02",
  },
  {
    key: "2",
    row: 2,
    name: "امیر منصوری ",
    nationalcode: 2222222222,
    phonenum: "09322112345",
    role: "مدیرعامل",
    brithdate: "1382/12/02",
  },
  {
    key: "3",
    row: 3,
    name: "مرتضی وحدتی",
    nationalcode: 3333333333,
    phonenum: "09386151435",
    role: "مدیرعامل",
    brithdate: "1382/12/02",
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
