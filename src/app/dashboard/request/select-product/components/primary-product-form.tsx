"use client";

import { SvgIcon } from "@/components/layout/sidebar";
import { Button, Col, Form, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getAllProductSelectable } from "../../../../../../units/RequestDetail/getAllProductSelectable";
import { createProduct } from "../../../../../../units/RequestDetail/createproduct";

export default function PrimaryProductForm({ mute }: { mute: any }) {

    const [isLoading, setLoading] = useState(false);

    const [dunsite, Setdunsite] = useState();

    const { data: selectableProduct } = useSWR(
        "/RequestDetail/GetAllProductSelectable",
        () => { getAllProductSelectable(dunsite) }
    );

    const onFinish = (values: { productUid: string, densityType: boolean }) => {
        console.log(values);
        createProduct(values.productUid, setLoading);
        mute();
    };

    // const [secondSelectVisible, setSecondSelectVisible] = useState<
    //     boolean | undefined
    // >(undefined);

    const ChangeDunsite = (value: any) => {
        Setdunsite(value)
    };

    return (
        <>
            <Form
                disabled={isLoading}
                onFinish={onFinish}
                name="form_item_path"
                layout="vertical"
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item name="densityType" label="دانسیته محصول ">
                            <Select
                                placeholder="انتخاب نمایید"
                                onChange={ChangeDunsite}
                                tokenSeparators={[","]}
                                options={Character}
                                size="large"
                                value={dunsite}
                                fieldNames={{ value: "is_Active", label: "Name" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item name="productUid" label="نام محصول">
                            <Select
                                fieldNames={{ value: "Uid", label: "Name" }}
                                size="large"
                                placeholder="انتخاب نمایید"
                                // disabled={typeof secondSelectVisible !== "boolean"}
                                tokenSeparators={[","]}
                                options={selectableProduct || []}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row dir="ltr">
                    <Col xs={10} md={3} lg={2}>
                        <Button
                            // disabled={typeof secondSelectVisible !== "boolean"}
                            loading={isLoading}
                            className="w-full management-info-form-submit"
                            size="large"
                            type="primary"
                            htmlType="submit"
                        >
                            <span
                                style={{ display: "flex" }}
                                className="flex gap-2 justify-center"
                            >
                                ذخیره
                                <SvgIcon src="/static/save.svg" />
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
        is_Active: true,
        Name: "بالا تر از 7/4",
    },
    {
        is_Active: false,
        Name: "پایین تر از 7/4",
    },
];
