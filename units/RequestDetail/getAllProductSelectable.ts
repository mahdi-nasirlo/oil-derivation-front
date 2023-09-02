import { AxiosResponse } from "axios";
import { customRequest } from "../../lib/customRequest";
import { getCookie } from "cookies-next";

export async function getAllProductSelectable(
  densityType: boolean | undefined
) {
  const requestMasterUid = getCookie("requestMasterUid");

  try {
    const res: AxiosResponse = await customRequest.post(
      `/api/RequestDetail/GetAllProductSelectable`,
      {
        requestMasterUid: requestMasterUid,
        densityType: densityType,
      }
    );

    return res.data.data;
  } catch (error) {
    console.error("Error:", error);
  }

  return null;
}
