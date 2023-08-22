'use client'
import {Button, Col, Divider, Form, Input, Row, Select, Typography} from "../../../../../../lib/antd";
import {SvgIcon} from "@/components/layout/sidebar";
import {getCookie} from "cookies-next";
import axios from "axios";

export default function PrimaryProductForm({material}: { material: Material[] }) {
    const onFinish = (values: MaterialRequest) => {

        values.requestMasterUid = `${getCookie("requestMasterUid")}`
        values.materialSupplyPersonTypeId = 1
        values.materialSupplyMethodId = 1

        return axios
            .post(`${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestDetail/CreateMaterial`, values)
            .then((response: any) => {
                console.log(response.data.message);
            })
            .catch(() => {
            });
    };

    return <>
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item name="materialUid" label="نام مواد اولیه">
                        <Select fieldNames={{value: "Uid", label: "Name"}} options={material} size='large'
                                placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={'materialUnitConsumption'} label="میزان مصرف برای تولید یک واحد">
                        <Input size='large' type={"number"} placeholder={"وارد نمایید"}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item name={'materialUsagePercentage'} label={"درصد استفاده"}>
                        <Input size='large' type={"number"} placeholder={"وارد نمایید"}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={'materialTotalConsumption'} label={"میزان مصرف کل"}>
                        <Input size='large' type={"number"} placeholder={"وارد نمایید"}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item name="materialSupplyMethodId" label="نحوه تامین">
                        <Select size='large' placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={'materialImportDeclarationNumber'} label="شماره اظهارنامه واردات">
                        <Input size='large' placeholder={"وارد نمایید"}/>
                    </Form.Item>
                </Col>
            </Row>
            <Divider/>
            <Typography
                className='mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary'>
                منابع عمده تامین
            </Typography>
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item name="materialInternalSupplyPercentage" label="درصد تامین داخلی">
                        <Input type={"number"} max={"100"} min={"0"} size='large' placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="materialForeignSupplyPercentage" label="درصد تامین خارجی">
                        <Input type={"number"} max={"100"} min={"0"} size='large' placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
            </Row>
            <Divider/>
            <Typography
                className='mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary'>
                مشخصات تامین کننده مواد اولیه
            </Typography>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item name="materialSupplyName" label="نام">
                        <Input size='large' placeholder="وارد نمایید"/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="materialSupplyPersonTypeId" label="شخصیت">
                        <Select size='large' placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="materialSupplyNationalCode" label="کد ملی / شناسه ملی">
                        <Input size='large' type={"number"} placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item name="materialSupplyIranCode" label="ایرانکد">
                        <Input size='large' type={"number"} placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="materialSupplyAddress" label="آدرس">
                        <Input size='large' placeholder="انتخاب نمایید"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row dir='ltr'>
                <Col span={2}>
                    <Button className='w-full management-info-form-submit' size='large' type='primary'
                            htmlType="submit">
                        <span style={{display: "flex"}} className='flex gap-3 justify-center'>
                            ذخیره
                            <SvgIcon src='/static/save.svg'/>
                        </span>
                    </Button>
                </Col>
            </Row>
        </Form>

    </>
}


export type MaterialRequest = {
    requestMasterUid: string | null,
    materialUid: string,
    materialSupplyMethodId: number,
    materialTotalConsumption: string,
    materialUnitConsumption: string,
    materialUsagePercentage: number,
    materialInternalSupplyPercentage: number,
    materialForeignSupplyPercentage: number,
    materialImportDeclarationNumber: string,
    materialSupplyName: string,
    materialSupplyPersonTypeId: number,
    materialSupplyNationalCode: string,
    materialSupplyIranCode: string,
    materialSupplyAddress: string
}
