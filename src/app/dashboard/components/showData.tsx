'use client'
import {Descriptions} from "../../../../lib/antd";

export default function DisplayData({data}: { data: { success: boolean, message: string | null, data: string } }) {

    return (<>
        <Descriptions className="text-right" title="دمو اطلاعات security/getId">
            <Descriptions.Item label="پیام">{data.message}</Descriptions.Item>
            <Descriptions.Item label="وضعیت">{data.success ? "true" : "false"}</Descriptions.Item>
            <Descriptions.Item label="data">{data.data}</Descriptions.Item>
        </Descriptions>;
    </>)
}