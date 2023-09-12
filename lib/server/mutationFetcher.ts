import {AxiosResponse} from "axios";
import {customRequest} from "../customRequest";


export async function mutationFetcher(url: string, {arg}: { arg: { success: boolean, message: string, data: any } }) {


    try {

        const res: AxiosResponse = await customRequest.post(url, arg)

        return res.data?.data

    } catch (error) {

        console.error("Error:", error);

        return []
    }

}