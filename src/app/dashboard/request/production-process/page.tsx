"use client";

import {Button, Col, Divider, Form, FormItemProps, Input, Row, Typography, Upload} from "../../../../../lib/antd";
import React from "react";
import {UploadOutlined,} from "@ant-design/icons";

export default function Page() {
    return (
        <>
            <Typography className="text-right font-medium text-base">
                لطفا اطلاعات خواسته شده را با دقت وارد نمایید.
            </Typography>
            <Divider/>
            <Form name="form_item_path" layout="vertical">
                <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["name"]}>
                        <Row gutter={32}>
                            <Col span={24}>
                                <MyFormItem name="year-establishment" label="شرح فرآیند تولید">
                                    <Input.TextArea
                                        maxLength={100}
                                        style={{
                                            height: 120,
                                            resize: "none",
                                        }}
                                        placeholder="وارد کنید"
                                    />
                                </MyFormItem>
                            </Col>
                        </Row>
                        <Row gutter={32}>
                            <Col span={24}>
                                <MyFormItem
                                    name="company-registratuon-num"
                                    label="نمودار شماتیک فرآیند"
                                >
                                    {/*<Dragger maxCount={1}>*/}
                                    {/*  <div className="inset-y-0 left-0 flex justify-between px-3">*/}
                                    {/*    <span className="text-gray-300">*/}
                                    {/*      بارگزاری نمایید*/}
                                    {/*    </span>*/}
                                    {/*    <UploadOutlined/>*/}
                                    {/*  </div>*/}
                                    {/*</Dragger>*/}
                                    <Upload
                                        maxCount={1}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"
                                        className="w-full"
                                    >
                                        <Button icon={<UploadOutlined/>}>بارگزاری نمایید</Button>
                                    </Upload>
                                </MyFormItem>

                            </Col>
                        </Row>
                    </MyFormItemGroup>
                </MyFormItemGroup>
            </Form>

            <Divider/>
            <div className="flex gap-6">
                <Button type="primary" size="large" className="w-full py-3">
                    ذخیره و ادامه
                </Button>
            </div>
        </>
    );
}

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
