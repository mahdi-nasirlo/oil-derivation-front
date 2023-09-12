import {AxiosResponse} from "axios";
import {customRequest} from "../customRequest";


export async function listFetcher(url: string) {


    try {

        const res: AxiosResponse = await customRequest.post(url)

        return res.data?.data

    } catch (error) {

        console.error("Error:", error);

        return []
    }

}