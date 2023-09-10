import {getCookie} from "cookies-next";
import {AxiosResponse} from "axios";
import {customRequest} from "../../lib/customRequest";

export async function getAllProductSelectable(url: string, {arg}: { arg: boolean }) {
    const requestMasterUid = getCookie("requestMasterUid");

    console.log(arg)

    try {
        const res: AxiosResponse = await customRequest.post(
            `/api/RequestDetail/GetAllProductSelectable`,
            {
                requestMasterUid: requestMasterUid,
                densityType: arg,
            }
        );

        return res.data.data;
    } catch (error) {
        console.error("Error:", error);
    }

    return [];
}
