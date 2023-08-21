"use client";
import {
  Button,
  Col,
  Divider,
  Form,
  FormItemProps,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "../../../../../lib/antd";
import React, { ChangeEvent } from "react";
import { SvgIcon } from "@/components/layout/sidebar";
import PrimaryProductTable from "@/app/dashboard/request/formulacion/components/primary-product-table";
import axios from "axios";
import TypedInputNumber from "antd/es/input-number";

export default function Formulacion() {
  const onChange = (value: number | string | null) => {
    if (typeof value === "string") {
      // Remove the percent symbol and convert the remaining value to a number
      const numericValue = parseFloat(value.replace("%", ""));

      if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
        // Now you have the numeric value without the percent symbol
        console.log("Numeric Value:", numericValue);
      }
    }
  };

  const onFinish = (values: MaterialRequest) => {
    values.requestMasterUid = localStorage.getItem("requestMasterUid");
    values.materialUid = "5f1fd82b-92fc-4f36-8c24-07a0baf45211";
    values.materialSupplyPersonTypeId = 1;
    values.materialSupplyMethodId = 1;

    console.log(values);

    return axios
      .post("http://192.168.52.102:97/api/RequestDetail/CreateMaterial", values)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch(() => {});
  };

  // useEffect(() => {
  //     console.log(localStorage.getItem("requestMasterUid"))
  // })
  return (
    <>
      <Typography className="text-right font-medium text-base">
        لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
      </Typography>
      <Typography className="mt-3 text-right font-medium text-base text-secondary-500 text-secondary">
        * برای وارد کردن درصد مواد اولیه تمامی اعداد را با حجمی یا وزنی وارد
        نمایید.
      </Typography>

      <Divider />
      <Form
        colon={false}
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item
              name="materialUid"
              label="نام مواد اولیه"
              rules={[
                { required: true, message: "نام مواد اولیه اجباری است" },
                { type: "string" },
              ]}
            >
              <Select size="large" placeholder="انتخاب نمایید" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={"materialUnitConsumption"}
              label="میزان مصرف برای تولید یک واحد"
              rules={[
                {
                  required: true,
                  message: "میزان مصرف برای تولید یک واحد اجباری است",
                },
                { type: "string" },
              ]}
            >
              <Input size="large" placeholder={"وارد نمایید"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item
              colon={true}
              name={"materialUsagePercentage"}
              label={"درصد استفاده"}
              rules={[
                { required: true, message: " درصد استفاده اجباری است" },
                {
                  type: "number",
                  min: 0,
                  max: 100,
                  message: "لطفاً مقداری بین 0 تا ۱۰۰ وارد کنید",
                },
              ]}
            >
              <InputNumber
                className="w-full rounded-lg"
                size="large"
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                placeholder={"وارد نمایید"}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={"materialTotalConsumption"}
              label={"میزان مصرف کل"}
              rules={[
                { required: true, message: "میزان مصرف کل اجباری است" },
                { type: "string" },
              ]}
            >
              <Input size="large" placeholder={"وارد نمایید"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item
              name="materialSupplyMethodId"
              label="نحوه تامین"
              rules={[
                { required: true, message: "نحوه تامین اجبار است" },
                { type: "number" },
              ]}
            >
              <Select size="large" placeholder="انتخاب نمایید" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={"materialImportDeclarationNumber"}
              label="شماره اظهارنامه واردات"
              rules={[
                {
                  required: true,
                  message: "شماره اظهارنامه واردات اجباری است",
                },
                { type: "number" },
              ]}
            >
              <InputNumber
                className="w-full rounded-lg"
                size="large"
                placeholder={"وارد نمایید"}
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Typography className="mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary">
          منابع عمده تامین
        </Typography>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item
              name="materialInternalSupplyPercentage"
              label="درصد تامین داخلی"
              rules={[
                { required: true, message: "درصد تامین داخلی اجباری است" },
                { type: "number", min: 0, max: 100, message: "بین 0 تا 100" },
              ]}
            >
              <InputNumber
                className="w-full rounded-lg"
                size="large"
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                placeholder={"وارد نمایید"}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="materialForeignSupplyPercentage"
              label="درصد تامین خارجی"
              rules={[
                { required: true, message: "درصد تامین خارجی اجباری است" },
                { type: "number", min: 0, max: 100 },
              ]}
            >
              <InputNumber
                className="w-full rounded-lg"
                size="large"
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                placeholder={"وارد نمایید"}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Typography className="mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary">
          مشخصات تامین کننده مواد اولیه
        </Typography>
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item
              name="materialSupplyName"
              label="نام"
              rules={[
                { required: true, message: "نام اجباری است" },
                { type: "string" },
              ]}
            >
              <Input size="large" placeholder="وارد نمایید" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="materialSupplyPersonTypeId"
              label="شخصیت"
              rules={[
                { required: true, message: "شخصیت اجباری است" },
                { type: "number" },
              ]}
            >
              <Select size="large" placeholder="انتخاب نمایید" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="materialSupplyNationalCode"
              label="کد ملی / شناسه ملی"
              rules={[
                { required: true, message: "کد ملی اجباری است" },
                {
                  validator: (_, value) => {
                    if (!value || value.length === 10) {
                      return Promise.resolve();
                    }
                    return Promise.reject("کد ملی باید ۱۰ رقم باشد");
                  },
                },
              ]}
            >
              <Input size="large" placeholder="انتخاب نمایید" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item
              name="materialSupplyIranCode"
              label="ایرانکد"
              rules={[
                { required: true, message: "ایرانکد اجباری است" },
                { type: "number" },
              ]}
            >
              <InputNumber
                className="w-full rounded-lg"
                size="large"
                type={"Number"}
                placeholder="انتخاب نمایید"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="materialSupplyAddress"
              label="آدرس"
              rules={[
                { required: true, message: "آدرس اجباری است" },
                { type: "string" },
              ]}
            >
              <Input size="large" placeholder="انتخاب نمایید" />
            </Form.Item>
          </Col>
        </Row>
        <Row dir="ltr">
          <Col span={2}>
            <Button
              className="w-full management-info-form-submit"
              size="large"
              type="primary"
              htmlType="submit"
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
        <PrimaryProductTable />
        <Divider />
        <Button
          type="primary"
          size="large"
          className="w-full py-3"
          htmlType="submit"
        >
          ذخیره و ادامه
        </Button>
      </Form>
    </>
  );
}

type MaterialRequest = {
  requestMasterUid: string | null;
  materialUid: string;
  materialSupplyMethodId: number;
  materialTotalConsumption: string;
  materialUnitConsumption: string;
  materialUsagePercentage: number;
  materialInternalSupplyPercentage: number;
  materialForeignSupplyPercentage: number;
  materialImportDeclarationNumber: string;
  materialSupplyName: string;
  materialSupplyPersonTypeId: number;
  materialSupplyNationalCode: string;
  materialSupplyIranCode: string;
  materialSupplyAddress: string;
};

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};
