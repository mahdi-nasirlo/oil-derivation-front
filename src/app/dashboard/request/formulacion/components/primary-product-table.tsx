import {Button, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import React, {useState} from "react";
import {RequestDetail} from "../../../../../../interfaces/requestDetail";
import {DeleteProductRequestDetail} from "../../../../../../units/RequestDetail/deleteProduct";


export default function PrimaryProductTable({data, loading = false, mute}: {
    data: RequestDetail[],
    loading: any,
    mute: any
}) {

    const [isDeleting, setDeleting] = useState(false)

    const columns: ColumnsType<RequestDetail> = [
        {
            title: 'ردیف',
            width: 100,
            dataIndex: 'MaterialUid',
            key: 'MaterialUid',
        },
        {
            title: 'نام مواد',
            width: 100,
            dataIndex: 'MaterialName',
            key: 'MaterialName',
        },
        {
            title: 'میزان مصرف برای یک واحد',
            dataIndex: 'MaterialUsagePercentage',
            key: 'MaterialUsagePercentage',
            width: 150,
        },
        {
            title: 'درصد',
            dataIndex: 'MaterialUsagePercentage',
            key: 'MaterialUsagePercentage',
            width: 150,
        },
        {
            title: 'میزان مصرف',
            dataIndex: 'MaterialTotalConsumption',
            key: 'MaterialTotalConsumption',
            width: 150,
        },
        {
            title: "منابع عمده تامین",
            children: [
                {
                    title: "درصد تامین خارجی",
                    dataIndex: "MaterialInternalSupplyPercentage",
                    key: '4',
                    align: "center",
                },
                {
                    title: "درصد تامین داخلی",
                    dataIndex: "MaterialInternalSupplyPercentage",
                    key: '4',
                    align: "center",
                },
            ],
        },
        {
            title: 'جزئیات',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: (_, record) => <>
                <div className={"flex justify-between"}>
                    <Button type="link" className={"text-primary-500"}>ویرایش</Button>
                    <Button loading={isDeleting} type="link" onClick={() => {
                        DeleteProductRequestDetail(
                            () => {
                                mute()
                            }, record.Uid, setDeleting)
                    }} className={"text-red-500"}>حذف</Button>
                </div>
            </>,
        },
    ];


    return <>
        <Table loading={loading || isDeleting} className={"mt-6"} pagination={false} columns={columns}
               dataSource={data || []}
               scroll={{x: 1500, y: 300}}/>
    </>
}
