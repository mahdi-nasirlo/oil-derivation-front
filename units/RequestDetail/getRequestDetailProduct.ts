import {AxiosResponse} from "axios";
import {customRequest} from "../../lib/customRequest";
import {getCookie} from "cookies-next";
import {addIndexToData} from "../../lib/addIndexToData";

export async function getRequestDetailProduct() {

    const requestMasterUid = getCookie("requestMasterUid")

    try {

        const res: AxiosResponse = await customRequest.post(`/api/RequestDetail/GetAllProduct`, {
            requestMasterUid: requestMasterUid,
        })

        return addIndexToData(res.data.data, "index");

    } catch (error) {
        console.error("Error:", error);
    }

    return null
}