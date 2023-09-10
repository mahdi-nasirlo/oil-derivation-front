import {customRequest} from "../../lib/customRequest";
import {RequestDetail} from "../../interfaces/requestDetail";
import {notification} from "antd";
import {AxiosResponse} from "axios";

export async function updateRequestDetailMaterial(url: string, {arg}: { arg: RequestDetail }) {

    try {

        const res: AxiosResponse = await customRequest.post(`/api/RequestDetail/UpdateMaterial`, arg)

        notification.open({type: res.data?.success ? "success" : "error", message: res.data.message || ""})

        return res.data;


    } catch (error) {

        console.error("Error:", error);
    }

}