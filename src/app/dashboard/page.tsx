'use client'
import {Button} from "../../../lib/antd";
import {useEffect, useState} from "react";


export default function Home() {
    const [state, setState] = useState()

    useEffect(() => {
        const res = fetch(`${process.env['NEXT_PUBLIC_API_URL']}/security/getToken`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwibmJmIjoxNjkyMDExMDc1LCJleHAiOjE3NTUxNjk0NzUsImlhdCI6MTY5MjAxMTA3NSwiaXNzIjoiTXlXZWJzaXRlLmNvbSJ9.dyjPzqDy4h9V4t-Pbl6Vr0r7b6x56Y6OO_k1dwhpbhg`
            },
        })
        
    })

    return (
        <>
            <Button type="primary">
                test
            </Button>
        </>
    )
}

// async function getData() {
//     const res = await fetch(`${process.env['NEXT_PUBLIC_API_URL']}/security/getId`, {
//         headers: {Authentication: `Bearer `}
//     })
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
//
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//
//     return res.json()
// }