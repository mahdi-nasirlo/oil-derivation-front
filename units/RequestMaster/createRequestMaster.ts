import axios, {AxiosResponse} from "axios";
import {RequestMaster} from "@/app/dashboard/request/production-process/page";

export async function createRequestMaster(data: RequestMaster, callback: any) {
    try {
        const res: AxiosResponse = await axios.post(
            `${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestMaster/Create`,
            data
        );

        const requestMasterUid = res.data.data;

        // Set the cookie with the requestMasterUid
        setCookie("requestMasterUid", requestMasterUid, 7); // Set the expiry as desired

        if (res.data.success) {
            callback()
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to set a cookie
function setCookie(name: string, value: string, days: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}