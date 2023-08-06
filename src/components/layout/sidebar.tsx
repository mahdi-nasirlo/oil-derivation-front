'use client '
import React from 'react';
import type { MenuProps } from 'antd';
import { Badge, Menu, Space } from 'antd';
import Image from 'next/image';
import { AppstoreOutlined, ClockCircleOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function LayoutSidebar() {
    return (
        <Menu
            style={{ width: "272px", padding: "0 16px", paddingTop: "40px" }}
            className='px-4'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    )
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}


const MakeRequest = () =>
(<>
    <div className='flex justify-between items-center'>
        <span>
            ثبت درخواست
        </span>
        <Badge style={{ marginLeft: "1px", boxShadow: "none" }} count={5} />
    </div>
</>)

export const SvgIcon = ({ src, width = 16, height = 16, className }:
    { src: string, width?: number, height?: number, className?: string }) => <Image src={src} width={width} height={height} className={className} alt='' />

const items: MenuProps['items'] = [


    getItem('خانه', 'home', <SvgIcon src="/static/home.svg" className='ml-1' />),

    { type: 'divider' },

    getItem('پیشخوان', 'dashboard', null, [
        getItem(<MakeRequest />, 'make_request', <SvgIcon src="/static/pencil.svg" className='ml-1' />),
        getItem('لیست درخواست', 'request_list', <SvgIcon src="/static/list-bullet.svg" className='ml-1' />)
    ], 'group'),

    { type: 'divider' },

    getItem('مدیریت', 'management', null, [
        getItem("تنظیمات حساب کاربری", 'profile-setting', <SvgIcon src="/static/cog-6-tooth.svg" className='ml-1' />),
        getItem('ارتباط با پشتیبان', 'connect-support', <SvgIcon src="/static/chat-bubble-left-ellipsis.svg" className='ml-1' />)
    ], 'group'),

];
