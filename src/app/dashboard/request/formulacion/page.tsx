"use client"
import { Button, Col, Divider, Form, FormItemProps, Input, Row, Select, Typography } from "../../../../../lib/antd";
import React from "react";
import { SvgIcon } from "@/components/layout/sidebar";
import PrimaryProductTable from "@/app/dashboard/request/formulacion/components/primary-product-table";
import { customRequest } from "../../../../../lib/customRequest";
import axios from "axios";


export default function Formulacion() {
    const onFinish = (values: any) => {
        return axios
            .post('http://192.168.52.102:97/api/RequestDetail/CreateMaterial', values)
            .then((response) => {
                alert(response.data.message);
            })
            .catch(() => { });
    };
    return <>
        <Typography className='text-right font-medium text-base'>
            لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
        </Typography>
        <Typography className='mt-3 text-right font-medium text-base text-secondary-500 text-secondary'>
            * برای وارد کردن درصد مواد اولیه تمامی اعداد را با حجمی یا وزنی وارد نمایید.
        </Typography>

        <Divider />
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={['user']}>
                <MyFormItemGroup prefix={['name']}>
                    <Row gutter={32}>
                        <Col span={12}>
                            <MyFormItem name="materialUid" label="نام مواد اولیه">
                                <Select size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                        <Col span={12}>
                            <MyFormItem name={'materialUnitConsumption'} label="میزان مصرف برای تولید یک واحد">
                                <Input size='large' placeholder={"وارد نمایید"} />
                            </MyFormItem>
                        </Col>
                    </Row>
                    <Row gutter={32}>
                        <Col span={12}>
                            <MyFormItem name={'materialUsagePercentage'} label={"درصد استفاده"}>
                                <Input size='large' type={"number"} placeholder={"وارد نمایید"} />
                            </MyFormItem>
                        </Col>
                        <Col span={12}>
                            <MyFormItem name={'materialTotalConsumption'} label={"میزان مصرف کل"}>
                                <Input size='large' type={"number"} placeholder={"وارد نمایید"} />
                            </MyFormItem>
                        </Col>
                    </Row>
                    <Row gutter={32}>
                        <Col span={12}>
                            <MyFormItem name="materialSupplyMethodId" label="نحوه تامین">
                                <Select size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                        <Col span={12}>
                            <MyFormItem name={'materialImportDeclarationNumber'} label="شماره اظهارنامه واردات">
                                <Input size='large' placeholder={"وارد نمایید"} />
                            </MyFormItem>
                        </Col>
                    </Row>
                    <Divider />
                    <Typography
                        className='mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary'>
                        منابع عمده تامین
                    </Typography>
                    <Row gutter={32}>
                        <Col span={12}>
                            <MyFormItem name="materialInternalSupplyPercentage" label="درصد تامین داخلی">
                                <Input type={"number"} max={"100"} min={"0"} size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                        <Col span={12}>
                            <MyFormItem name="materialForeignSupplyPercentage" label="درصد تامین خارجی">
                                <Input type={"number"} max={"100"} min={"0"} size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                    </Row>
                    <Divider />
                    <Typography
                        className='mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary'>
                        مشخصات تامین کننده مواد اولیه
                    </Typography>
                    <Row gutter={32}>
                        <Col span={8}>
                            <MyFormItem name="materialSupplyName" label="نام">
                                <Input size='large' placeholder="وارد نمایید" />
                            </MyFormItem>
                        </Col>
                        <Col span={8}>
                            <MyFormItem name="materialSupplyPersonTypeId" label="شخصیت">
                                <Select size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                        <Col span={8}>
                            <MyFormItem name="materialSupplyNationalCode" label="کد ملی / شناسه ملی">
                                <Input size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                    </Row>
                    <Row gutter={32}>
                        <Col span={12}>
                            <MyFormItem name="materialSupplyIranCode" label="ایرانکد">
                                <Input size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                        <Col span={12}>
                            <MyFormItem name="materialSupplyAddress" label="آدرس">
                                <Input size='large' placeholder="انتخاب نمایید" />
                            </MyFormItem>
                        </Col>
                    </Row>
                    <Row dir='ltr'>
                        <Col span={2}>
                            <Button className='w-full management-info-form-submit' size='large' type='primary' htmlType="submit">
                                <span style={{ display: "flex" }} className='flex gap-3 justify-center'>
                                    ذخیره
                                    <SvgIcon src='/static/save.svg' />
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </MyFormItemGroup>
            </MyFormItemGroup>
        </Form>
        <PrimaryProductTable />
        <Divider />
        <Button type="primary" size="large" className="w-full py-3" htmlType="submit">
            ذخیره و ادامه
        </Button>
    </>
}

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
    prefix: string | number | (string | number)[];
    children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
};

