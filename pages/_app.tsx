import {InitOptions} from "@tma.js/sdk";
import {SDKProvider, useSDK} from '@tma.js/sdk-react';
import type {AppProps} from 'next/app';
import {PropsWithChildren} from "react";
import {Provider} from 'react-redux';
import {store} from "../redux/store";
import '../styles/globals.css';

function Loader({children}: PropsWithChildren<{}>) {
    const {didInit, components, error} = useSDK();

    // There were no calls of SDK's init function. It means, we did not
    // even try to do it.
    if (!didInit) {
        return <div>SDK init function is not yet called.</div>;
    }

    // Error occurred during SDK init.
    if (error !== null) {
        return <div>Something went wrong.</div>;
    }

    // If components is null, it means, SDK is not ready at the
    // moment and currently initializing. Usually, it takes like
    // several milliseconds or something like that, but we should
    // have this check.
    if (components === null) {
        return <div>Warming up SDK.</div>;
    }

    // Safely render application.
    return <>{children}</>;
}

function MyApp({Component, pageProps}: AppProps) {
    const options: InitOptions = {
        checkCompat: true,
        debug: true
    };
    return (
        <SDKProvider initOptions={options}>
            <Provider store={store}>
                <Loader>
                    <Component {...pageProps} />
                </Loader>
            </Provider>
        </SDKProvider>
    )
}

export default MyApp
