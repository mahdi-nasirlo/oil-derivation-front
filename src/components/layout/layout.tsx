"use client";
import type { MenuProps } from "antd";
import { Button, ConfigProvider, Divider, Drawer, Grid, Space } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import LayoutHeader from "./header";
import LayoutSidebar from "./sidebar";
import LayoutBreadcrumb from "./breadcrumb";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import StyledComponentsRegistry from "../../../lib/AntdRegistry";
import theme from "../../../theme/themeConfig";
import fa_IR from "antd/locale/fa_IR";

const { useBreakpoint } = Grid;

export default function AppLayout({
    children,
    sidebarItems,
}: {
    children: React.ReactNode;
    sidebarItems: MenuProps["items"];
}) {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const screens = useBreakpoint();
    const isLgSize = screens.lg;
    const [isMenuVisible, setIsMenuVisible] = useState(isLgSize);

    useEffect(() => {
        setIsMenuVisible(isLgSize);
    }, [isLgSize]);

    const contentStyle: React.CSSProperties = {
        textAlign: "center",
        minHeight: 120,
        lineHeight: "120px",
        color: "#fff",
    };


    return (
        <>
            <ProgressBar
                height="3px"
                color="#18948a"
                options={{ showSpinner: false }}
                shallowRouting={false}
            />
            <StyledComponentsRegistry>
                <ConfigProvider direction="rtl" theme={theme} locale={fa_IR}>
                    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
                        <Layout style={{ minHeight: "100vh" }}>
                            <LayoutHeader
                                isLgSize={isLgSize}
                                showDrawer={showDrawer}
                            />
                            <Layout className="bg-gray-50" hasSider>
                                <LayoutSidebar menu={sidebarItems} onClose={onClose} open={open} isLgSize={isLgSize} />
                                <Layout className="mt-6 mx-10 bg-gray-50">
                                    <span>
                                        <LayoutBreadcrumb />
                                    </span>
                                    <Divider className="my-8" />
                                    <Content style={contentStyle}>
                                        {children}
                                    </Content>
                                </Layout>
                            </Layout>
                        </Layout>
                    </Space>
                </ConfigProvider>
            </StyledComponentsRegistry>
        </>
    );
}
