"use client";
import {Button, Col, Divider, Form, Input, InputNumber, Row, Select, Typography,} from "antd";
import {SvgIcon} from "@/components/layout/sidebar";
import useSWR from "swr";
import {getAllMaterial} from "../../../../../../units/Material/getAllMaterial";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {getCookie} from "cookies-next";
import {useForm} from "antd/lib/form/Form";
import useSWRMutation from "swr/mutation";
import {createRequestDetailProduct} from "../../../../../../units/RequestDetail/createRequestDetailProduct";

export default function PrimaryProductForm({mute}: { mute: any }) {
    const [form] = useForm();

    const router = useRouter();

    const {data: material, isLoading: isLoadingMaterial} = useSWR("/Material/GetAll", getAllMaterial);

    const {isMutating, trigger} = useSWRMutation("/RequestDetail/CreateMaterial", createRequestDetailProduct)


    const onFinish = async (values: MaterialRequest) => {
        values.requestMasterUid = `${getCookie("requestMasterUid")}`;
        values.materialImportDeclarationNumber =
            values.materialImportDeclarationNumber.toString();
        values.materialSupplyIranCode = values.materialSupplyIranCode.toString();
        values.materialSupplyNationalCode =
            values.materialSupplyNationalCode.toString();
        values.materialSupplyPersonTypeId = 1;
        values.materialSupplyMethodId = 1;


        // @ts-ignore
        const res = await trigger(values);

        if (res?.success) {
            form.resetFields()
        }
    };

    useEffect(() => {
        if (!getCookie("requestMasterUid")) {
            return router.push("/dashboard/request/production-process");
        }
    });

    return (
        <>
            <Form
                form={form}
                disabled={isMutating}
                name="form_item_path"
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="materialUid"
                            label="نام مواد اولیه"
                            rules={[
                                {required: true, message: "نام مواد اولیه اجباری است"},
                                {type: "string"},
                            ]}
                        >
                            <Select
                                loading={isLoadingMaterial}
                                fieldNames={{value: "Uid", label: "Name"}}
                                size="large"
                                placeholder="انتخاب نمایید"
                                tokenSeparators={[","]}
                                options={material || []}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name={"materialUnitConsumption"}
                            label="میزان مصرف برای تولید یک واحد"
                            rules={[
                                {
                                    required: true,
                                    message: "میزان مصرف برای تولید یک واحد اجباری است",
                                },
                                {type: "string"},
                            ]}
                        >
                            <Input size="large" type={"number"} placeholder={"وارد نمایید"}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name={"materialUsagePercentage"}
                            label={"درصد استفاده"}
                            rules={[
                                {required: true, message: " درصد استفاده اجباری است"},
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
                                placeholder="وارد کنید"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name={"materialTotalConsumption"}
                            label={"میزان مصرف کل"}
                            rules={[
                                {required: true, message: "میزان مصرف کل اجباری است"},
                                {type: "string"},
                            ]}
                        >
                            <Input size="large" type={"number"} placeholder="وارد کنید"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="materialSupplyMethodId"
                            label="نحوه تامین"
                            //   rules={[
                            //     { required: true, message: "نحوه تامین اجبار است" },
                            //     { type: "number" },
                            //   ]}
                        >
                            <Select
                                fieldNames={{value: "Uid", label: "Name"}}
                                size="large"
                                placeholder="انتخاب نمایید"
                                tokenSeparators={[","]}
                                options={HowToSupply}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name={"materialImportDeclarationNumber"}
                            label="شماره اظهارنامه واردات"
                            rules={[
                                {
                                    required: true,
                                    message: "شماره اظهارنامه واردات اجباری است",
                                },
                                {type: "number"},
                            ]}
                        >
                            <InputNumber
                                className="w-full rounded-lg"
                                size="large"
                                placeholder="وارد کنید"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Divider/>
                <Typography className="mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary">
                    منابع عمده تامین
                </Typography>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="materialInternalSupplyPercentage"
                            label="درصد تامین داخلی"
                            rules={[
                                {required: true, message: "درصد تامین داخلی اجباری است"},
                                {type: "number", min: 0, max: 100, message: "بین 0 تا 100"},
                            ]}
                        >
                            <InputNumber
                                className="w-full rounded-lg"
                                size="large"
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                placeholder="وارد کنید"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="materialForeignSupplyPercentage"
                            label="درصد تامین خارجی"
                            rules={[
                                {required: true, message: "درصد تامین خارجی اجباری است"},
                                {type: "number", min: 0, max: 100},
                            ]}
                        >
                            <InputNumber
                                className="w-full rounded-lg"
                                size="large"
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                placeholder="وارد کنید"
                                // onChange={onChange}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Divider/>
                <Typography className="mt-3 mb-6 text-right font-medium text-base text-secondary-500 text-secondary">
                    مشخصات تامین کننده مواد اولیه
                </Typography>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            name="materialSupplyName"
                            label="نام"
                            rules={[
                                {required: true, message: "نام اجباری است"},
                                {type: "string"},
                            ]}
                        >
                            <Input size="large" placeholder="وارد نمایید"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            name="materialSupplyPersonTypeId"
                            label="شخصیت"
                            //   rules={[
                            //     { required: true, message: "شخصیت اجباری است" },
                            //     { type: "number" },
                            //   ]}
                        >
                            <Select
                                fieldNames={{value: "Uid", label: "Name"}}
                                size="large"
                                placeholder="انتخاب نمایید"
                                tokenSeparators={[","]}
                                options={Character}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            name="materialSupplyNationalCode"
                            label="کد ملی / شناسه ملی"
                            rules={[
                                {required: true, message: "کد ملی اجباری است"},
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
                            <Input size="large" type={"number"} placeholder="انتخاب نمایید"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="materialSupplyIranCode"
                            label="ایرانکد"
                            rules={[
                                {required: true, message: "ایرانکد اجباری است"},
                                {type: "number"},
                            ]}
                        >
                            <InputNumber
                                className="w-full rounded-lg"
                                size="large"
                                type={"number"}
                                placeholder="انتخاب نمایید"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="materialSupplyAddress"
                            label="آدرس"
                            rules={[
                                {required: true, message: "آدرس اجباری است"},
                                {type: "string"},
                            ]}
                        >
                            <Input size="large" placeholder="انتخاب نمایید"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row dir="ltr">
                    <Button
                        icon={<SvgIcon src="/static/save.svg"/>}
                        loading={isMutating}
                        size="large"
                        danger
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

export type MaterialRequest = {
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

const RawMaterials = [
    {
        Uid: "1",
        Name: "کلر",
    },
    {
        Uid: "2",
        Name: "بوتادیین",
    },
    {
        Uid: "3",
        Name: "پروپیلن",
    },
    {
        Uid: "4",
        Name: "اتیلن",
    },
    {
        Uid: "5",
        Name: "آمونیاک",
    },
    {
        Uid: "6",
        Name: "سولفور",
    },
    {
        Uid: "7",
        Name: "تولوئن ",
    },
];

const HowToSupply = [
    {
        Uid: "1",
        Name: "کراکینگ کاتالیزی",
    },
    {
        Uid: "2",
        Name: "هیدروکراکینگ کاتالیستی",
    },
    {
        Uid: "3",
        Name: "آلکیلاسیون",
    },
];

const Character = [
    {
        Uid: "1",
        Name: "حقوقی",
    },
    {
        Uid: "2",
        Name: "حقیقی",
    },
];
