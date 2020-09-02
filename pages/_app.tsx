// Changes in this file are reflected in all of the pages. This is the global layout file.

import "../styles/globals.css";

import { AppProps } from "next/app";
import React from "react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
