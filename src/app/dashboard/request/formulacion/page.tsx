"use client";

import {Button, Divider, Row, Typography} from "antd";
import React from "react";
import PrimaryProductTable from "@/app/dashboard/request/formulacion/components/primary-product-table";
import PrimaryProductForm from "./components/primary-product-form";
import useSWR from "swr";
import {getAllRequestDetailMaterial} from "../../../../../units/RequestDetail/getAllRequestDetailMaterial";

export default function Formulacion() {

    const {
        mutate,
        data: requestMasterMaterial,
        isLoading: requestMasterMaterialLoading,
    } = useSWR("/RequestDetail/GetPageMaterial", getAllRequestDetailMaterial);

    return (
        <>
            <Typography className="text-right font-medium text-base">
                لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
            </Typography>
            <Typography className="mt-3 text-right font-medium text-base text-secondary-500 text-secondary">
                * برای وارد کردن درصد مواد اولیه تمامی اعداد را با حجمی یا وزنی وارد
                نمایید.
            </Typography>

            <Divider/>
            <PrimaryProductForm mute={mutate}/>
            <PrimaryProductTable
                mute={mutate}
                data={requestMasterMaterial}
                loading={requestMasterMaterialLoading}
            />
            <Row>
                <Divider/>
                <Button
                    className="w-full management-info-form-submit btn-filter"
                    size="large"
                    type="primary"
                    htmlType="submit"
                >
                    <span className="flex gap-2 justify-center ">ذخیره و ادامه</span>
                </Button>
            </Row>
        </>
    );
}
