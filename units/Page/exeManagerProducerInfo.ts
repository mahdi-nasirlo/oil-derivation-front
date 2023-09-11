import {notification} from "antd";
import {AxiosResponse} from "axios";
import {customRequest} from "../../lib/customRequest";
import {addIndexToData} from "../../lib/addIndexToData";

export async function exeManagerProducerInfo() {

    try {

        const res: AxiosResponse = await customRequest.post("api/Page/ExeManagerProducers")


        notification.open({type: res.data?.success ? "success" : "error", message: res.data.message || ""})

        return addIndexToData(res.data?.data?.persons, "Row");


    } catch (error) {

        console.error("Error:", error);

        return []
    }

}