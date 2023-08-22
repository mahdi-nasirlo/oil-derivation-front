import axios, {AxiosResponse} from "axios";
import {RequestMaster} from "@/app/dashboard/request/production-process/page";

export async function createRequestMaster(data: RequestMaster) {
    try {
        const res: AxiosResponse = await axios.post(
            `${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestMaster/Create`,
            data
        );

        const requestMasterUid = res.data.data;

        // Set the cookie with the requestMasterUid
        setCookie("requestMasterUid", requestMasterUid, 7); // Set the expiry as desired

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