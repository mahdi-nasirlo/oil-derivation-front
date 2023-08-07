import { Divider, Steps } from "antd"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Steps
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
                ]} />
            <div className="box-border w-full mt-8 p-6">
                {children}
            </div>
        </>
    )
}