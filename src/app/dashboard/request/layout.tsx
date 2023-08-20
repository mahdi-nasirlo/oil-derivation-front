'use client'
import {Steps} from "../../../../lib/antd"
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const currentNumber = stepLinks.find((step) => step.href === pathname)?.number

    const [current, setCurrent] = useState(currentNumber);
    const router = useRouter()

    const onChange = (value: number) => {
        let currentLink = stepLinks.find((step) => step.number === value)?.href

        router.push(`${currentLink}`)
        setCurrent(value);
    };

    useEffect(() => {

        setCurrent(currentNumber);

    }, [currentNumber, pathname])

    return (
        <>
            <Steps
                current={current}
                onChange={onChange}
                className="pb-8"
                items={[
                    {
                        title: 'اطلاعات واحد تولیدی',
                        description: 'اطلاعات عمومی'
                    },
                    {
                        title: 'اطلاعات مدیریتی',
                        description: 'اطلاعات اشخاص'
                    },
                    {
                        title: 'اطلاعات پرسنلی',
                        description: 'تعداد پرسنل'
                    },
                    {
                        title: 'اطلاعات مجوز',
                        description: 'مجوز تولید'
                    },
                    {
                        title: 'اطلاعات تماس',
                        description: 'آدرس و شماره تماس'
                    },
                    {
                        title: 'فرآیند تولید',
                        description: 'شرح فرایند'
                    },
                    {
                        title: 'آزمایشگاه',
                        description: 'تجهیزات مورد نیاز'
                    },
                    {
                        title: 'فرمولاسیون',
                        description: 'تولید محصول'
                    },
                ]} />
            <div className="box-border w-full mt-8 p-6">
                {children}
            </div>
        </>
    )
}


const stepLinks: { number: number, href: string }[] = [
    { number: 0, href: "/dashboard/request/creator-production" },
    { number: 1, href: "/dashboard/request/management-info" },
    { number: 2, href: "/dashboard/request/personnel-info" },
    { number: 3, href: "/dashboard/request/license-info" },
    { number: 4, href: "/dashboard/request/contact-info" },
    { number: 5, href: "/dashboard/request/production-process" },
    { number: 6, href: "/dashboard/request/laboratory" },
    { number: 7, href: "/dashboard/request/formulacion" },
]