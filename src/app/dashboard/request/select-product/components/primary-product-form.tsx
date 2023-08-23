"use client";

import {SvgIcon} from "@/components/layout/sidebar";
import {Button, Col, Form, Row, Select} from "../../../../../../lib/antd";
import React, {useState} from "react";
import useSWR from "swr";
import {getAllProductSelectable} from "../../../../../../units/RequestDetail/getAllProductSelectable";
import {useRouter} from "next/navigation";
import {createRequestDetailProduct} from "../../../../../../units/RequestDetail/createRequestDetailProduct";

export default function PrimaryProductForm({mute}: { mute: any }) {

    const [dunsite, setdunsite] = useState('true')

    const [isLoading, setLoading] = useState(false)

    const router = useRouter();

    const {data: selectableProduct} = useSWR("/RequestDetail/GetAllProductSelectable", getAllProductSelectable)

    const onFinish = (values: { dansite: boolean, productUid: string }) => {

        createRequestDetailProduct({productUid: values.productUid}, setLoading, () => {
            router.push("/dashboard/request/select-product")
        })

        mute()
    }

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <Form disabled={isLoading} onFinish={onFinish} name="form_item_path" layout="vertical">
                <Row gutter={32}>
                    <Col span={12}>
                        <Form.Item name="dansite" label="دانسیته محصول ">
                            <Select
                                mode="tags"
                                placeholder="انتخاب نمایید"
                                onChange={handleChange}
                                tokenSeparators={[',']}
                                options={Character}
                                size="large"
                                value={dunsite}
                                // options={product}
                                // options={product}
                                fieldNames={{value: "is_Active", label: "Name"}}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="lastName" label="نام محصول">
                            <Select
                                fieldNames={{value: "Uid", label: "Name"}}
                                size="large"
                                placeholder="انتخاب نمایید"
                                onChange={handleChange}
                                tokenSeparators={[',']}
                                options={selectableProduct || []}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row dir="ltr">
                    <Col span={2}>
                        <Button
                            loading={isLoading}
                            className="w-full management-info-form-submit"
                            size="large"
                            type="primary"
                            htmlType="submit"
                        >
              <span
                  style={{display: "flex"}}
                  className="flex gap-3 justify-center"
              >
                ذخیره
                <SvgIcon src="/static/save.svg"/>
              </span>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}


const Character = [
    {
        is_Active: 'true',
        Name: "بالا تر از 7/4"
    },
    {
        is_Active: 'false',
        Name: "پایین تر از 7/4"
    },
]
