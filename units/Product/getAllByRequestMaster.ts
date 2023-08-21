import axios from "axios";

export async function getAllByRequestMaster() {

    const res = await axios.request({
        method: 'get',
        url: `http://192.168.52.102:97/api/Product/GetAllByRequestMaster`,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            "requestMasterUid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "densityType": true
        },

    }).then((res) => {
        console.log(res.data)
    })

    return res
}