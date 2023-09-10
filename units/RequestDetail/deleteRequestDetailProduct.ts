import {AxiosResponse} from "axios";
import {customRequest} from "../../lib/customRequest";
import {notification} from "antd";

export async function deleteRequestDetailProduct(url: string, {arg}: { arg: string }) {

    try {

        const res: AxiosResponse = await customRequest.post(`/api/RequestDetail/DeleteProduct`, {uid: arg})

        notification.open({type: res.data?.success ? "success" : "error", message: res.data.message})

        return res.data;


    } catch (error) {

        console.error("Error:", error);
    }

}