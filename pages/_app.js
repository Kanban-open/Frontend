import '@styles/global.css';
import { Header } from 'components/general/Header';
import React from 'react';

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Header />
            <Component {...pageProps} />
        </React.Fragment>
    );
}
export default MyApp;
