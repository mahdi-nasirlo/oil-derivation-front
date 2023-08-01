'use client'

import { Space } from 'antd'
import Layout, { Content } from 'antd/es/layout/layout'
import React from 'react'
import LayoutHeader from './header'
import Sider from 'antd/es/layout/Sider'

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};


export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <LayoutHeader />
                <Layout hasSider>
                    <Content style={contentStyle}>{children}</Content>
                    <Sider style={siderStyle}>Sider</Sider>
                </Layout>
                {children}
            </Layout>
        </Space>
    )
}
