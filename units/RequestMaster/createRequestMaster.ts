import {RequestMaster} from "@/app/dashboard/request/production-process/page";
import axios, {AxiosResponse} from "axios";

export async function createRequestMaster(url: string, {arg}: { arg: RequestMaster }) {

    try {

        const res: AxiosResponse = await axios.post(
            `${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestMaster/Create`,
            arg
        );

        // Set the cookie with the requestMasterUid
        setCookie("requestMasterUid", res.data.data, 7);

        return res.data;

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