'use client'

import AppLayout from "@/components/layout/layout";
import React from "react";
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <ProgressBar
                height="1.5px"
                color="#18948a"
                options={{showSpinner: false}}
                shallowRouting
            />
            <AppLayout>
                {children}
            </AppLayout>
        </>
    )
}
