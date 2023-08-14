import {cookies} from "next/headers";
import DisplayData from "@/app/dashboard/components/showData";


export default async function Home() {

    const data = await getData()


    return (
        <>
            <div className="box-border w-full mt-8 p-6">
                <DisplayData data={data}/>
            </div>
        </>
    )
}

async function getData() {

    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env['NEXT_PUBLIC_API_URL']}/security/getId`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })

    if (res.ok) {
        return res.json()
    }

    return null
}