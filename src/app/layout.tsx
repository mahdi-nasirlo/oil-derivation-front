import "./globals.css";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "سازمان ملی استاندارد",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa">
        <body>
        {/*<StyledComponentsRegistry>*/}
        {/*<ConfigProvider direction="rtl" theme={theme} locale={fa_IR}>*/}
        {children}
        {/*</ConfigProvider>*/}
        {/*</StyledComponentsRegistry>*/}
        </body>
        </html>
    );
}
