'use client'

import { Space, theme } from 'antd'
import Layout, { Content } from 'antd/es/layout/layout'
import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import LayoutHeader from './header'
import Sider from 'antd/es/layout/Sider'
import Menu from 'antd/es/menu/menu'
import LayoutSidebar from './sidebar';



export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { token } = theme.useToken()

    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: token.colorBgBase,
    };

    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '120px',
        // color: token.colorTextBase,
        // backgroundColor: "white"
    };

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <LayoutHeader />
                <Layout hasSider>
                    <LayoutSidebar />
                    <Content style={contentStyle}>{children}</Content>
                </Layout>
                {children}
            </Layout>
        </Space>
    )
}

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
        };
    },
);
