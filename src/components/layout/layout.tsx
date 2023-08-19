'use client'
import type {MenuProps} from 'antd';
import {Divider, Space} from 'antd'
import Layout, {Content} from 'antd/es/layout/layout'
import React from 'react'
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import LayoutHeader from './header'
import LayoutSidebar from './sidebar';
import LayoutBreadcrumb from './breadcrumb';


export default function AppLayout({children}: { children: React.ReactNode }) {
    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
    };

    return (
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
            <Layout style={{minHeight: "100vh"}}>
                <LayoutHeader />
                <Layout className='bg-gray-50' hasSider>
                    <LayoutSidebar />
                    <Layout className='mt-6 mx-10 bg-gray-50'>
                        <span>
                            <LayoutBreadcrumb />
                        </span>
                        <Divider className='my-8' />
                        <Content style={contentStyle}>{children}</Content>
                    </Layout>
                </Layout>
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
