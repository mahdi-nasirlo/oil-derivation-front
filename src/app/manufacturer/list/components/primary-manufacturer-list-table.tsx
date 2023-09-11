import { Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


interface DataType {
    key: string;
    Row: number;
    ProductName: string;
    TrackingCode: string;
    ConfirmedRequestCode: string;
    DateRegistration: string;
    ActivityStatus: string[];
}


export default function PrimaryManufacturerListTable() {
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        // Make an HTTP request to fetch the data from the server
        fetch('http://192.168.52.102:97/api/Page/ExeManagerProducers', { method: "POST" })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setData(result.data.persons.map((person: any, index: any) => ({
                        key: index.toString(),
                        Row: index + 1,
                        name: person.name,
                        nationalCode: person.nationalCode,
                        ceoName: person.ceoName,
                        companyOwnershipTypeName: person.companyOwnershipTypeName,
                        status: [person.status],
                    })));
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const columns: ColumnsType<DataType> = [
        {
            title: "ردیف",
            dataIndex: "Row",
            key: "1",
        },
        {
            title: "نام واحد تولیدی",
            dataIndex: "name",
            key: "2",
        },
        {
            title: " شناسه ملی",
            dataIndex: "nationalCode",
            key: "3",
        },
        {
            title: "نام مدیرعامل   ",
            dataIndex: "ceoName",
            key: "4",
        },
        {
            title: "نوع مالکیت",
            dataIndex: "companyOwnershipTypeName",
            key: "5",
        },
        {
            title: " وضعیت حساب کاربری ",
            dataIndex: "status",
            key: "6",
            render: (_, record: any) => {
                console.log(record);
                return (
                    <>
                        {record.status.map((item: any) => {
                            let color = "";

                            if (item === "غیرفعال") {
                                color = "red";
                            } else if (item === "فعال") {
                                color = "green";
                            } else {
                                color = "yellow";
                            }
                            return (
                                <Tag color={color} key={item}>
                                    {item}
                                </Tag>
                            );
                        })}
                    </>
                );
            },

        },
        {
            title: "جزئیات",
            key: "جزئیات",
            render: (_, record) => (
                <Space size="middle">
                    <Link href={""} className="action-btn-info">
                        مشاهده اطلاعات
                    </Link>
                </Space>
            ),
        },
    ];
    return (
        <Table
            className="mt-8"
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
    )
}