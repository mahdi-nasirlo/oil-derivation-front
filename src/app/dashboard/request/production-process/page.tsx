"use client";

import {Button, Col, Divider, Form, Input, Row, Typography, Upload} from "../../../../../lib/antd";
import React from "react";
import {UploadOutlined,} from "@ant-design/icons";
import {useRouter} from "next/navigation";
import {createRequestMaster} from "../../../../../units/RequestMaster/createRequestMaster";

export default function Page() {

    const router = useRouter()

    const onFinish = (values: RequestMasterForm) => {

        let data: RequestMaster = {...values, fileName: values.fileName.file.name}

        createRequestMaster(data).then(() => router.push("/dashboard/request/formulacion"))
        
    };
    // localStorage.setItem("requestMasterUid", res.data.data)
    // router.push("/dashboard/request/formulacion")

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Typography className="text-right font-medium text-base">
                لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
            </Typography>
            <Divider/>
            <Form onFinishFailed={onFinishFailed} onFinish={onFinish} name="form_item_path" layout="vertical">
                <Row gutter={32}>
                    <Col span={24}>
                        <Form.Item name="processDescription" label="شرح فرآیند تولید">
                            <Input.TextArea
                                maxLength={100}
                                style={{
                                    height: 120,
                                    resize: "none",
                                }}
                                placeholder="وارد کنید"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col span={24}>
                        <Form.Item
                            name="fileName"
                            label="نمودار شماتیک فرآیند"
                        >
                            <Upload
                                multiple={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                className="w-full"
                            >
                                <Button icon={<UploadOutlined/>}>بارگزاری نمایید</Button>
                            </Upload>
                        </Form.Item>

                    </Col>
                </Row>
                <Divider/>
                <div className="flex gap-6">
                    <Button htmlType="submit" type="primary" size="large" className="w-full py-3">
                        ذخیره و ادامه
                    </Button>
                </div>
            </Form>
        </>
    );
}

export type RequestMaster = {
    processDescription: string,
    fileName: string
}

type RequestMasterForm = {
    processDescription: string,
    fileName: { file: { name: string } }
}