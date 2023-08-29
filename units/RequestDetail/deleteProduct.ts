import axios, { AxiosResponse } from "axios";

export async function DeleteProductRequestDetail(
  mute: () => void,
  Uid: string,
  setDeleting: any
) {
  try {
    setDeleting(true);

    const res: AxiosResponse = await axios.post(
      `${process.env["NEXT_PUBLIC_API_URL"]}/api/RequestDetail/DeleteProduct`,
      { Uid: Uid }
    );

    setDeleting(false);

    mute();
  } catch (error) {
    setDeleting(false);

    console.error("Error:", error);
  }
}
