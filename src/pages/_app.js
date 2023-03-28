import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store/index";
import { persistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
let persister = persistStore(store);
function myApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Next JS</title>
        <meta name="description" content="E-commerce Website For All" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <persistGate loading={null} persister={persister}>
            <Component {...pageProps} />
          </persistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
export default myApp;
