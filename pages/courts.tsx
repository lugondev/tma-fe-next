import {useBackButton, useCloudStorage, useInitData, useMainButton, useSDK, useWebApp} from "@tma.js/sdk-react";
import {PropsWithChildren, useEffect, useMemo, useState} from "react";


function MainButtonTest() {
    const cloudStorage = useCloudStorage()
    const mainButton = useMainButton();
    const backButton = useBackButton();

    const [count, setCount] = useState(0);
    useEffect(() => {
        cloudStorage.getValues(['count']).then((values) => {
            console.log('count:', values.count)
            setCount(parseInt(values['count'] || '0'))
        })
    }, []);

    useEffect(() => {
        const onMainButtonClick = async () => {
            setCount((prevCount) => {
                cloudStorage.saveValue('count', (prevCount + 1).toString()).catch()
                    .finally(() => {
                        console.log('saved count:', prevCount + 1)
                    })
                return prevCount + 1
            });
        };
        const onBackButtonClick = () => setCount((prevCount) => prevCount - 1);

        mainButton.enable().show();
        mainButton.on('click', onMainButtonClick);
        backButton.on('click', onBackButtonClick);

        return () => {
            mainButton.off('click', onMainButtonClick);
            mainButton.hide();
            backButton.off('click', onBackButtonClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        mainButton.setText(`Count is ${count}`);
    }, [mainButton, count]);

    useEffect(() => {
        if (count === 0) {
            backButton.hide();
            return;
        }
        backButton.show();
    }, [backButton, count]);

    return null;
}

/**
 * Displays current application init data.
 */
function InitData() {
    const initData = useInitData();

    const initDataJson = useMemo(() => {
        if (!initData) {
            return 'Init data is empty.';
        }
        const {authDate, chat, hash, canSendAfter, queryId, receiver, user, startParam} = initData;

        return JSON.stringify({
            authDate,
            chat,
            hash,
            canSendAfter,
            queryId,
            receiver,
            user,
            startParam,
            env: process.env.NODE_ENV,
        }, null, 2);
    }, [initData]);

    return <pre>
          <code>
            {initDataJson}
          </code>
    </pre>
}

/**
 * This component is the layer controlling the application display. It displays
 * application in case, the SDK is initialized, displays an error if something
 * went wrong, and a loader if the SDK is warming up.
 */
function DisplayGate({children}: PropsWithChildren) {
    const {didInit, components, error} = useSDK();
    const errorMessage = useMemo<null | string>(() => {
        if (!error) {
            return null;
        }

        return error instanceof Error ? error.message : 'Unknown error';
    }, [error]);

    // There were no calls of SDK's init function. It means, we did not
    // even try to do it.
    if (!didInit) {
        return <div>SDK init function is not yet called.</div>;
    }

    // Error occurred during SDK init.
    if (error !== null) {
        return (
            <>
                <p>
                    SDK was unable to initialize. Probably, current application is being used
                    not in Telegram Web Apps environment.
                </p>
                <blockquote>
                    <p>{errorMessage}</p>
                </blockquote>
            </>
        );
    }

    // If components is null, it means, SDK is not ready at the
    // moment and currently initializing. Usually, it takes like
    // several milliseconds or something like that, but we should
    // have this check.
    if (components === null) {
        return <div>Loading..</div>;
    }

    // Safely render application.
    return children;
}

export default function Courts() {
    const backButton = useBackButton();
    const webApp = useWebApp();
    //
    // // When App is attached to DOM, lets show back button and
    // // add "click" event handler, which should close current application.
    useEffect(() => {
        const listener = () => webApp.close();
        backButton.on('click', listener);
        backButton.show();

        return () => {
            backButton.off('click', listener);
            backButton.hide();
        };
        // We know, that backButton and webApp will never change,
        // but let's follow React rules.
    }, [backButton, webApp]);
    //
    // return <div>My application!</div>;
    return <DisplayGate>
        <InitData/>
        <MainButtonTest/>
    </DisplayGate>
}
