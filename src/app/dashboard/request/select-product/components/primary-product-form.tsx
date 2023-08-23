"use client";

import { SvgIcon } from "@/components/layout/sidebar";
import { Button, Col, Form, Row, Select } from "antd";
import React from "react";
import axios from "axios";

export default function PrimaryProductForm() {
  return (
    <>
      <Form name="form_item_path" layout="vertical">
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item name="year-establishment" label="دانسیته محصول ">
              <Select
                size="large"
                // options={product}
                // options={product}
                fieldNames={{ value: "is_Active", label: "Name" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName" label="نام محصول">
              <Select size="large" />
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
