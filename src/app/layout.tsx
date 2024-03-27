'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Header } from '@components/Header/Header';
import '@styles/globals.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="root">
                    <Header />
                    <main>{children} </main>
                    {/* <Footer /> */}
                </div>
                <ProgressBar
                    height="4px"
                    color="#fffd00"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
            </body>
        </html>
    );
}
