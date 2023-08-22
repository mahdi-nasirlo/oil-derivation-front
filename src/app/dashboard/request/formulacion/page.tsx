import {Button, Divider, Typography,} from "../../../../../lib/antd";
import React from "react";
import PrimaryProductTable from "@/app/dashboard/request/formulacion/components/primary-product-table";
import axios from "axios";
import PrimaryProductForm, {MaterialRequest} from "./components/primary-product-form";
import {cookies} from "next/headers";

export default async function Formulacion() {

    const onChange = (value: number | string | null) => {
        if (typeof value === "string") {
            // Remove the percent symbol and convert the remaining value to a number
            const numericValue = parseFloat(value.replace("%", ""));

            if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
                // Now you have the numeric value without the percent symbol
                console.log("Numeric Value:", numericValue);
            }
        }
    };

    const onFinish = (values: MaterialRequest) => {
        values.requestMasterUid = localStorage.getItem("requestMasterUid");
        values.materialUid = "5f1fd82b-92fc-4f36-8c24-07a0baf45211";
        values.materialSupplyPersonTypeId = 1;
        values.materialSupplyMethodId = 1;

        console.log(values);

        return axios
            .post(`${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestDetail/CreateMaterial`, values)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch(() => {
            });
    };

    const data: { records: []; count: number } = await getAllRequestMaster();

    const material: Material[] = await getAllMaterial();

    return (
        <>
            <Typography className='text-right font-medium text-base'>
                لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
            </Typography>
            <Typography className='mt-3 text-right font-medium text-base text-secondary-500 text-secondary'>
                * برای وارد کردن درصد مواد اولیه تمامی اعداد را با حجمی یا وزنی وارد نمایید.
            </Typography>

            <Divider/>
            <PrimaryProductForm material={material}/>
            <PrimaryProductTable data={data.records}/>
            <Divider/>
            <Button type="primary" size="large" className="w-full py-3" htmlType="submit">
                ذخیره و ادامه
            </Button>
        </>
    );
}

async function getAllRequestMaster() {
    const cookieStore = cookies();
    const requestMasterUid = cookieStore.get("requestMasterUid")?.value;


    return await axios
        .request({
            method: "get",
            url: `${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestDetail/GetPageMaterial`,
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
            url: `${process.env["NEXT_PUBLIC_API_URL"]}/api/Material/GetAll`,
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
