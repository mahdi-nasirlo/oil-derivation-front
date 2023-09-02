import { AxiosResponse } from "axios";
import { customRequest } from "../../lib/customRequest";
import { getCookie } from "cookies-next";

export async function createProduct(
  productUid: string,
  setLoading: any,
  callback: any = null
) {
  try {
    setLoading(true);
    const requestMasterUid = getCookie("requestMasterUid");

    const res: AxiosResponse = await customRequest.post(
      `/api/RequestDetail/CreateProduct`,
      { requestMasterUid, productUid }
    );

    setLoading(false);

    if (res.data.success) {
      callback();
    }
  } catch (error) {
    setLoading(false);
    console.error("Error:", error);
  }
}
