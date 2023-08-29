"use client";

import { SvgIcon } from "@/components/layout/sidebar";
import { Button, Col, Form, Row, Select } from "../../../../../../lib/antd";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getAllProductSelectable } from "../../../../../../units/RequestDetail/getAllProductSelectable";
import { useRouter } from "next/navigation";
import { createRequestDetailProduct } from "../../../../../../units/RequestDetail/createRequestDetailProduct";

export default function PrimaryProductForm({ mute }: { mute: any }) {
  // const [dunsite, setDunsite] = useState("");
  // const [selectableProductt, setSelectableProduct] = useState([]);
  // const [secondSelectVisible, setSecondSelectVisible] = useState(false);
  const [dunsite, setdunsite] = useState<any>([{}]);

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const { data: selectableProduct } = useSWR(
    "/RequestDetail/GetAllProductSelectable",
    getAllProductSelectable
  );

  // const onFinish = (values: { dansite: boolean; productUid: string }) => {
  //   createRequestDetailProduct(
  //     { productUid: values.productUid },
  //     setLoading,
  //     () => {
  //       router.push("/dashboard/request/select-product");
  //     }
  //   );

  //   mute();
  // };

  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  // const [dunsite, setDunsite] = useState<string>("");
  const [selectableProductt, setSelectableProduct] = useState<any[]>([]); // Adjust the type as needed
  const [secondSelectVisible, setSecondSelectVisible] = useState<
    boolean | undefined
  >(undefined);

  const handleChange = (value: boolean) => {
    // setdunsite(value);
    // if (value !== "") {
    //   setSelectableProduct([]);
    // } else if (value === value) {
    //   setSelectableProduct([]);
    // }

    setSecondSelectVisible(value);

    console.log(value);
  };

  useEffect(() => {
    console.log(secondSelectVisible, typeof secondSelectVisible);
  }, [secondSelectVisible]);

  return (
    <>
      <Form
        disabled={isLoading}
        // onFinish={onFinish}
        name="form_item_path"
        layout="vertical"
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="dansite" label="دانسیته محصول ">
              <Select
                placeholder="انتخاب نمایید"
                onChange={handleChange}
                tokenSeparators={[","]}
                options={Character}
                size="large"
                value={dunsite}
                fieldNames={{ value: "is_Active", label: "Name" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="lastName" label="نام محصول">
              <Select
                fieldNames={{ value: "Uid", label: "Name" }}
                size="large"
                placeholder="انتخاب نمایید"
                onChange={handleChange}
                value={dunsite}
                disabled={typeof secondSelectVisible !== "boolean"}
                tokenSeparators={[","]}
                options={selectableProduct || []}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row dir="ltr">
          <Col xs={10} md={3} lg={2}>
            <Button
              disabled={typeof secondSelectVisible !== "boolean"}
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
