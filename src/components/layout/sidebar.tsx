'use client'
import Link from "next/link";
import React from 'react';
import type { MenuProps } from 'antd';
import { Badge, Menu } from 'antd';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, HomeIcon, PencilIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/solid";


export default function LayoutSidebar() {
    const pathname = usePathname()

    return (
        <>

            <Menu
                defaultSelectedKeys={[pathname]}
                style={{ width: "272px", padding: "0 16px", paddingTop: "40px" }}
                className='px-4'
                mode="inline"
                items={items}
            />
        </>
    )
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    href?: string
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        href,
    } as MenuItem;
}


const MakeRequest = () =>
(<>
    <div className='flex justify-between items-center'>
        <Link href="/dashboard/request/personnel-info">
            ثبت درخواست
        </Link>
        <Badge style={{ marginLeft: "1px", boxShadow: "none" }} count={5} />
    </div>
</>)


const RequestList = () =>
(<>
    <div className='flex justify-between items-center'>
        <Link href="/dashboard/request-list">
            لیست درخواست
        </Link>
    </div>
</>)


export const SvgIcon = ({ src, width = 16, height = 16, className }:
    { src: string, width?: number, height?: number, className?: string }) => <Image src={src}
        width={width}
        height={height}
        className={className}
        alt='' />

const items: MenuProps['items'] = [


    getItem(<Link href="/dashboard">خانه</Link>, '/dashboard', <HomeIcon width={16} height={16} />),

    { type: 'divider' },

    getItem('پیشخوان', 'dashboard', null, [
        getItem(<MakeRequest />, "/dashboard/request/personnel-info", <PencilIcon width={16} height={16} />),
        getItem(<RequestList />, 'request_list', <ListBulletIcon width={16} height={16} />)
    ], 'group'),

    { type: 'divider' },

    getItem('مدیریت', 'management', null, [
        getItem("تنظیمات حساب کاربری", 'profile-setting', <Cog6ToothIcon width={16} height={16} />),
        getItem('ارتباط با پشتیبان', 'connect-support', <ChatBubbleLeftEllipsisIcon width={16} height={16} />)
    ], 'group'),
];
