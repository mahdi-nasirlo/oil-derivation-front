"use client";

import {Button, Col, Form, Row, Select} from "antd";
import React, {useState} from "react";
import {getAllProductSelectable} from "../../../../../../units/RequestDetail/getAllProductSelectable";
import {createProduct} from "../../../../../../units/RequestDetail/createProduct";
import {SvgIcon} from "@/components/layout/sidebar";
import useSWRMutation from "swr/mutation";


export default function PrimaryProductForm({mute}: { mute: any }) {

    const [isLoading, setLoading] = useState(false);

    const [dunsite, Setdunsite] = useState();

    const {
        data: selectableProduct,
        isMutating: isLDSelectable,
        trigger
    } = useSWRMutation("/RequestDetail/GetAllProductSelectable", getAllProductSelectable);

    const onFinish = (values: { productUid: string, densityType: boolean }) => {
        createProduct(values.productUid, setLoading);
        mute();
    };

    // const [secondSelectVisible, setSecondSelectVisible] = useState<
    //     boolean | undefined
    // >(undefined);

    const ChangeDunsite = async (value: any) => {

        Setdunsite(value)
        
        await trigger(value)

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
                                fieldNames={{value: "is_Active", label: "Name"}}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item name="productUid" label="نام محصول">
                            <Select
                                loading={isLDSelectable}
                                fieldNames={{value: "Uid", label: "Name"}}
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
                    <Button
                        // disabled={typeof secondSelectVisible !== "boolean"}
                        icon={<SvgIcon src="/static/save.svg"/>}
                        loading={isLoading}
                        className="management-info-form-submit"
                        size="large"
                        type="primary"
                        htmlType="submit"
                    >
                        ذخیره
                    </Button>
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
