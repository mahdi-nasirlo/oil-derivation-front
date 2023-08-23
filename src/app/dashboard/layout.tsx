'use client'

import AppLayout from "@/components/layout/layout";
import React from "react";
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <ProgressBar
                height="3px"
                color="#18948a"
                options={{showSpinner: false}}
                shallowRouting={false}
            />
            <AppLayout>
                {children}
            </AppLayout>
        </>
    )
}
