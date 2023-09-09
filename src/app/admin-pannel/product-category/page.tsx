"use client";

import { Button, Col, Form, Input, Modal, Row, Select, Switch, Table, } from "antd";
import React, { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useForm } from "antd/lib/form/Form";

export default function Page() {

    const [modalVisible, setModalVisible] = useState(false);

    const [form] = useForm()

    const showModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleFormSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log("Form values:", values); // Log the form values to the console
            closeModal();
        } catch (error) {
            console.error("Form validation failed:", error);
        }
    };


    return (
        <>
            <div className="box-border w-full p-6">
                <Form name="form_item_path" layout="vertical">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="year-establishment"
                                label="دسته بندی محصول"
                            >
                                <Select size="large" placeholder="انتخاب کنید" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item name="lastName" label="نام محصول">
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row dir="ltr">
                        <Col xs={10} md={3} lg={2}>
                            <div className="flex gap-4">
                                <Button
                                    className="w-full management-info-form-submit btn-filter"
                                    size="large"
                                    type="primary"
                                >
                                    <span className="flex gap-2 justify-center ">
                                        اعمال فیلتر
                                    </span>
                                </Button>
                                <Button
                                    className="w-full management-info-form-submit btn-delete-filter"
                                    size="large"
                                    type="primary"
                                >
                                    <span className="flex gap-2 justify-center ">حذف فیلتر</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="box-border w-full mt-8 p-6">
                <div className="flex justify-end">
                    <Button
                        className="max-md:w-full flex items-center justify-center gap-2"
                        size="large"
                        type="primary"
                        onClick={showModal}
                    >
                        <span className="flex justify-center ">
                            افزودن دسته بندی محصول
                        </span>
                        <PlusIcon width={24} height={24} />

                    </Button>
                </div>
                <Table
                    className="mt-4"
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        defaultPageSize: 10,
                        showSizeChanger: true,
                        pageSizeOptions: ["10", "20", "50"],
                        defaultCurrent: 1,
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            margin: "16px 0",
                        },
                    }}
                />
            </div>
            <Modal
                width={800}
                title={<div>
                    <div className="text-base mb-2">افزودن محصول جدید</div>
                    <div className="font-normal text-sm">لطفا اطلاعات را وارد نمایید.</div>
                </div>}
                visible={modalVisible}
                onCancel={closeModal}
                footer={[
                    <Row key={"box"} gutter={[16, 16]} className="my-2">
                        <Col xs={24} md={12}>
                            <Button
                                size="large"
                                className="w-full"
                                type="primary"
                                onClick={handleFormSubmit}
                                key={"submit"} >
                                ثبت
                            </Button >
                        </Col>
                        <Col xs={24} md={12}>
                            <Button
                                size="large"
                                className="w-full bg-gray-100 text-warmGray-500"
                                onClick={closeModal}
                                key={"cancel"} >
                                انصراف
                            </Button >
                        </Col>
                    </Row>
                ]}
            >
                <Form form={form} >
                    <Row gutter={[32, 1]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                name="year"
                                label="نام"
                            >
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }} name="lastName" label="نام محصول">
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[32, 1]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                name="establishment"
                                label="وضعیت محصول"
                            >
                                <Select size="large" placeholder="انتخاب کنید" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Modal >
        </>
    );
}

interface DataType {
    key: string;
    Row: number;
    ProductName: string;
    TrackingCode: string;
    ConfirmedRequestCode: string;
    DateRegistration: string;
    ActivityStatus: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: "ردیف",
        dataIndex: "Row",
        key: "1",
    },
    {
        title: "  دسته بندی محصول",
        dataIndex: "ProductName",
        key: "2",
    },
    {
        title: "  نام محصول",
        dataIndex: "TrackingCode",
        key: "3",
    },

    {
        title: "فعال/غیر فعال ",
        dataIndex: "ConfirmedRequestCode",
        key: "4",
        render: (e, record) => <Switch defaultChecked />,
    },

    {
        title: "جزئیات",
        key: "جزئیات",
        render: (_, record) => (
            <div className={"flex justify-start"}>
                <Button type="link" className="text-secondary-500">ویرایش</Button>
                <Button type="link" className={"text-red-500"}>حذف</Button>
            </div>
        ),
    },
];

// const MyFormItemContext = React.createContext<(string | number)[]>([]);

// interface MyFormItemGroupProps {
//   prefix: string | number | (string | number)[];
//   children: React.ReactNode;
// }

// function toArr(
//   str: string | number | (string | number)[]
// ): (string | number)[] {
//   return Array.isArray(str) ? str : [str];
// }

// const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(
//     () => [...prefixPath, ...toArr(prefix)],
//     [prefixPath, prefix]
//   );

//   return (
//     <MyFormItemContext.Provider value={concatPath}>
//       {children}
//     </MyFormItemContext.Provider>
//   );
// };

// const MyFormItem = ({ name, ...props }: FormItemProps) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatName =
//     name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

//   return <Form.Item name={concatName} {...props} />;
// };

const data: DataType[] = [
    {
        key: "1",
        Row: 1,
        ProductName: "   دسته اول",
        TrackingCode: "بنزین پیرولیز",
        ConfirmedRequestCode: "علی امیری",
        DateRegistration: "خصوصی",
        ActivityStatus: [" غیرفعال"],
    },
    {
        key: "2",
        Row: 2,
        ProductName: "   دسته دوم ",
        TrackingCode: "بنزین پیرولیز",
        ConfirmedRequestCode: "امیرحسام خالویی",
        DateRegistration: "خصوصی",
        ActivityStatus: ["  در انتظار بررسی"],
    },
];
