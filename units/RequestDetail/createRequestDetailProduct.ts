import {AxiosResponse} from "axios";
import {customRequest} from "../../lib/customRequest";
import {getCookie} from "cookies-next";

export async function createRequestDetailProduct(url: string, {arg}: { arg: string }) {
    try {

        const requestMasterUid = getCookie("requestMasterUid");

        const res: AxiosResponse = await customRequest.post(
            `/api/RequestDetail/CreateProduct`,
            {requestMasterUid, productUid: arg}
        );


    } catch (error) {
        console.error("Error:", error);
    }
}
