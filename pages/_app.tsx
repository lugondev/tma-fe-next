import {InitOptions} from "@tma.js/sdk";
import {SDKProvider} from '@tma.js/sdk-react';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {store} from "../redux/store";
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    const options: InitOptions = {
        checkCompat: true,
        debug: true
    };
    return (
        <SDKProvider initOptions={options}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SDKProvider>
    )
}

export default MyApp
