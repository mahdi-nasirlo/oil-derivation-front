"use client";

import { SvgIcon } from "@/components/layout/sidebar";
import { Button, Col, Form, Input, Row, Select } from "../../../../../../lib/antd";
import React from "react";

export default function PrimaryProductForm() {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Form name="form_item_path" layout="vertical">
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item name="year-establishment" label="دانسیته محصول ">
              <Select
                mode="tags"
                placeholder="انتخاب نمایید"
                onChange={handleChange}
                tokenSeparators={[',']}
                options={Character}
                size="large"
                // options={product}
                // options={product}
                fieldNames={{ value: "is_Active", label: "Name" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName" label="نام محصول">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row dir="ltr">
          <Col span={2}>
            <Button
              className="w-full management-info-form-submit"
              size="large"
              type="primary"
            >
              <span
                style={{ display: "flex" }}
                className="flex gap-3 justify-center"
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

// {
//   product,
// }: {
//   product: Product[];
// }



const Character = [
  {
    is_Active: "1",
    Name: "بالا تر از 7/4"
  },
  {
    is_Active: "2",
    Name: "پایین تر از 7/4"
  },
]
