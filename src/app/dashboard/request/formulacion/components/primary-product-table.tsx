import {Table, Typography} from "../../../../../../lib/antd";
import {ColumnsType} from "antd/es/table";
import React from "react";

interface DataType {
    key: React.Key;
    index: number;
    name: string;
    usage_per_unit: number;
    percent: number;
    usage: number;
    inside_supply: number;
    outside_supply: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ردیف',
        width: 100,
        dataIndex: 'index',
        key: 'name',
    },
    {
        title: 'نام مواد',
        width: 100,
        dataIndex: 'name',
        key: 'age',
    },
    {
        title: 'میزان مصرف برای یک واحد',
        dataIndex: 'usage_per_unit',
        key: '1',
        width: 150,
    },
    {
        title: 'درصد',
        dataIndex: 'percent',
        key: '2',
        width: 150,
    },
    {
        title: 'میزان مصرف',
        dataIndex: 'usage',
        key: '3',
        width: 150,
    },
    {
        title: "منابع عمده تامین",
        children: [
            {
                title: "درصد تامین خارجی",
                dataIndex: "inside_supply",
                key: '4',
                align: "center",
            },
            {
                title: "درصد تامین داخلی",
                dataIndex: "outside_supply",
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
        render: () => <>
            <div className={"flex justify-between"}>
                <Typography className={"text-primary-500"}>ویرایش</Typography>
                <Typography className={"text-red-500"}>حذف</Typography>
            </div>
        </>,
    },
];

const data: DataType[] = [];
for (let i = 0; i < 3; i++) {
    data.push({
        key: i,
        name: `Edward ${i}`,
        index: i,
        usage: i * 25,
        percent: 2 * i,
        usage_per_unit: 1 + i,
        inside_supply: 1.2 * i,
        outside_supply: 1.2 * i,
    });
}

export default function PrimaryProductTable() {
    return <>
        <Table className={"mt-6"} pagination={false} columns={columns} dataSource={data} scroll={{x: 1500, y: 300}}/>
    </>
}

