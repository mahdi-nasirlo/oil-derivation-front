import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../../lib/AntdRegistry'
import { ConfigProvider } from '../../lib/antd';
import theme from "../../theme/themeConfig";
import fa_IR from 'antd/locale/fa_IR';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <ConfigProvider direction='rtl' theme={theme} locale={fa_IR}>
                        {children}
                    </ConfigProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
