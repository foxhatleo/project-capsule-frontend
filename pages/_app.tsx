// Changes in this file.

import "../styles/globals.css";

import { AppProps } from "next/app";
import React from "react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
