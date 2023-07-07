
import {SessionProvider} from 'next-auth/react';


import { AppProps as NextAppProps } from 'next/app';
import { Session } from 'next-auth'; // or wherever Session type is defined

type AppProps = NextAppProps & { session: Session|null };

export default function App({Component, pageProps, session}: AppProps) {
    return <SessionProvider session={session}>
        <Component {...pageProps} />

    </SessionProvider>
}