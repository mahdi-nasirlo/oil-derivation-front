"use client"
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button, Col, Form, Input, Row, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'

export default function page() {
    return (
        <>
            <div className="box-border w-full mt-4 p-6">
                <Form name="form_item_path" layout="vertical">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item name="year-establishment" label="نام آزمایشگاه ">
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item name="lastName" label="نام مدیرعامل">
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item name="year-establishment" label="شماره تلفن آزمایشگاه">
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item name="lastName" label="کد">
                                <Input size="large" placeholder="وارد کنید" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="year-establishment"
                                label="آدرس"
                            >
                                <Input size="large" placeholder="انتخاب کنید" />
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
                        className="max-md:w-full flex items-center gap-2"
                        size="large"
                        type="primary"
                        htmlType="submit"
                    >
                        <span className="flex justify-center ">
                            افزودن آزمایشگاه
                        </span>
                        <PlusIcon width={24} height={24} />

                    </Button>
                </div>
                <Table
                    scroll={{ x: 1500, y: 300 }}
                    dataSource={data || []}
                    className="mt-4"
                    columns={columns}
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
        </>
    )
}


interface DataType {
    key: string;
    Row: number;
    NameLaboratory: string;
    NameCEO: string;
    phoneLaboratory: string;
    code: string;
    Address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "ردیف",
        dataIndex: "Row",
        key: "1",
    },
    {
        title: "نام آزمایشگاه",
        dataIndex: "NameLaboratory",
        key: "2",
    },
    {
        title: "نام مدیرعامل",
        dataIndex: "NameCEO",
        key: "3",
    },
    {
        title: "شماره تلفن آزمایشگاه",
        dataIndex: "phoneLaboratory",
        key: "4",
    },
    {
        title: "کد",
        dataIndex: "code",
        key: "5",
    },
    {
        title: "آدرس",
        dataIndex: "Address",
        key: "6",
    },
    {
        title: "عملیات",
        key: "عملیات",
        fixed: 'right',
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
        NameLaboratory: "رازی",
        NameCEO: "امیر خالویی",
        phoneLaboratory: "021326846",
        code: "32154421",
        Address: "تهران, سهروردی شمالی, هویزه",

    },
    {
        key: "2",
        Row: 2,
        NameLaboratory: "رازی",
        NameCEO: "امیرحسام خالویی",
        phoneLaboratory: "021326846",
        code: "32154421",
        Address: "تهران, سهروردی شمالی, هویزه",

    },
];