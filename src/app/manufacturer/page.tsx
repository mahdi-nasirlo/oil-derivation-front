import { cookies } from "next/headers";
import DisplayData from "@/app/dashboard/components/showData";
import {Typography} from "../../../lib/antd";


export default async function Manufacturer() {


    return (
        <>
            <div className="box-border w-full mt-8 p-6 text-gray-900">
               <Typography className="text-right text-2xl font-bold">
                   پنل ريیس اجرایی
               </Typography>
            </div>
        </>
    )
}
