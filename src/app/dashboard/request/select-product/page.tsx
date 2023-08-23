"use clinet";
import { SvgIcon } from "@/components/layout/sidebar";
import axios from "axios";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "../../../../../lib/antd";
import React from "react";
import Link from "next/link";
import { ColumnsType } from "antd/es/table";
import PrimaryProductForm from "./components/primary-product-form";

// async function getAllProduct() {
//   return await axios
//     .request({
//       method: "get",
//       url: `http://192.168.52.102:97/api/Product/GetAll`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         name: null,
//         is_Active: true,
//       },
//     })
//     .then((res: any) => res.data.data);
// }

export default function Page() {
  // const product: Product[] = await getAllProduct();
  // const product: Product[] = await getAllMaterial();
  return (
    <>
      <Typography className="text-right font-medium text-base">
        لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
      </Typography>
      <Divider />
      <Typography className="mt-3 text-right font-medium text-base text-secondary-500 text-secondary mb-10">
        محصول تولیدی
      </Typography>
      <PrimaryProductForm />

      <Table
        pagination={false}
        className="mt-6"
        columns={columns}
        dataSource={data}
      />
      <Divider />
      <div className="flex">
        <Checkbox></Checkbox>
        <Typography className="mr-3 font-medium">
          شرایط و قوانین را خوانده و می پذیرم!
        </Typography>
      </div>
      <Divider />
      <div className="flex gap-6">
        <Button
          className="w-full management-info-form-submit btn-filter"
          size="large"
          type="primary"
          htmlType="submit"
        >
          <span className="flex gap-3 justify-center ">
            ذخیره
          </span>
        </Button>
      </div>
    </>
  );
}

interface DataType {
  key: string;
  name: string;
  row: number;
  nationalcode: number;
  productname: string;
  density: string;

  role: string;
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
    // render: (_, record) => (
    //   <Space size="middle">
    //     <Link href={""} className="action-btn-delete">
    //       حذف
    //     </Link>
    //   </Space>
    // ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    row: 1,
    name: "مهدی نصیرلو",
    nationalcode: 1111111111,
    role: "مدیرعامل",
    productname: "هیدروکربن سبک",
    density: "بالا تر از 900gr/cm3",
  },
  {
    key: "2",
    row: 2,
    name: "امیر منصوری ",
    nationalcode: 2222222222,
    role: "مدیرعامل",
    productname: " هیدروکربن سنگین",
    density: "پایین تر از 900gr/cm3",
  },
];
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
