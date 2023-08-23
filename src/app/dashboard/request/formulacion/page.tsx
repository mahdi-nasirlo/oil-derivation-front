import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "../../../../../lib/antd";
import React, { ChangeEvent } from "react";
import { SvgIcon } from "@/components/layout/sidebar";
import PrimaryProductTable from "@/app/dashboard/request/formulacion/components/primary-product-table";
import axios from "axios";
import PrimaryProductForm, {
  MaterialRequest,
} from "./components/primary-product-form";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Formulacion() {
  const data: { records: []; count: number } = await getAllRequestMaster();

  const material: Material[] = await getAllMaterial();

  return (
    <>
      <Typography className="text-right font-medium text-base">
        لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
      </Typography>
      <Typography className="mt-3 text-right font-medium text-base text-secondary-500 text-secondary">
        * برای وارد کردن درصد مواد اولیه تمامی اعداد را با حجمی یا وزنی وارد
        نمایید.
      </Typography>

      <Divider />
      <PrimaryProductForm material={material} />
      <PrimaryProductTable data={data.records} />
      <Divider />
      <Link href={"/dashboard/request/select-produt"}>
        <div className="flex gap-6">
          <Button
            type="primary"
            size="large"
            className="w-full py-3  "
            htmlType="submit"
          >
            <div className="save-btn">ذخیره و ادامه</div>
          </Button>
        </div>
      </Link>
    </>
  );
}

async function getAllRequestMaster() {
  const cookieStore = cookies();
  const requestMasterUid = cookieStore.get("requestMasterUid")?.value;

  return await axios
    .request({
      method: "get",
      url: `http://192.168.52.102:97/api/RequestDetail/GetPageMaterial`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        requestMasterUid: requestMasterUid,
        fromRecord: 0,
        selectRecord: 20,
      },
    })
    .then((res: any) => res.data.data);
}

async function getAllMaterial() {
  return await axios
    .request({
      method: "get",
      url: `http://192.168.52.102:97/api/Material/GetAll`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: null,
        is_Active: true,
      },
    })
    .then((res: any) => res.data.data);
}
