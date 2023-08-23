import {AxiosResponse} from "axios";
import {customRequest} from "../../lib/customRequest";

export async function createRequestDetailProduct(data: { productUid: string }, setLoading: any, callback: any = null) {

    try {

        setLoading(true)

        const res: AxiosResponse = await customRequest.post(`/api/RequestDetail/CreateProduct`, data)

        setLoading(false)

        const requestMasterUid = res.data.data;

        if (res.data.success) {
            callback()
        }

    } catch (error) {
        setLoading(false)
        console.error("Error:", error);
    }

}