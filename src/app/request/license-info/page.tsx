'use client'


import { Button, Col, DatePicker, Divider, Form, FormItemProps, Input, Row, Select, Space, Table, Tag, Typography } from '../../../../lib/antd';
import React from 'react'



export default function Page() {
    return (
        <>
            <Typography className='text-right font-medium text-base'>
                لطفا اطلاعات را با دقت بررسی کرده و سپس در صورت صحیح بودن باقی مراحل را کامل نمایید.
            </Typography>
            <Divider />
            <Form name="form_item_path" layout="vertical" >
                <MyFormItemGroup prefix={['user']}>
                    <MyFormItemGroup prefix={['name']}>
                        <Row gutter={32}>
                            <Col span={12}>
                                <MyFormItem name="year-establishment" label="سال تاسیس">
                                    <Input size='large' />
                                </MyFormItem>
                            </Col>
                            <Col span={12}>
                                <MyFormItem name="lastName" label="نام شرکت ثبت شده">
                                    <Input size='large' />
                                </MyFormItem>
                            </Col>
                        </Row>
                        <Row gutter={32}>
                            <Col span={12}>
                                <MyFormItem name="company-registratuon-num" label=" شماره ثبت شرکت">
                                    <Input size='large' />
                                </MyFormItem>
                            </Col>
                            <Col span={12}>
                                <MyFormItem name="license-establish" label="شماره پروانه بهره برداری / جواز تاسیس">
                                    <Input size='large' />
                                </MyFormItem>
                            </Col>
                        </Row>
                        <Row gutter={32}>
                            <Col span={12}>
                                <MyFormItem name='operation-license' label="تاریخ صدور پروانه بهره برداری / جواز تاسیس">
                                    <Input size='large' />
                                </MyFormItem>
                            </Col>
                            <Col span={12}>
                                <MyFormItem name={'phone_number'} label="شناسه کسب و کار">
                                    <Input size='large' />
                                </MyFormItem>
                            </Col>
                        </Row>


                    </MyFormItemGroup>
                </MyFormItemGroup>
            </Form>



            <Divider />
            <div className='flex gap-6'>
                <Button type="primary" size="large" className="w-full py-3" >
                    ذخیره و ادامه
                </Button>
                <Button type="primary" size="large" className="w-full py-3  btn-error" >
                    گزارش اطلاعات اشتباه
                </Button>
            </div>
        </>
    )
}




const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
    prefix: string | number | (string | number)[];
    children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
};

