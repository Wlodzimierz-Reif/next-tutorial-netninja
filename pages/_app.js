import Layout from "../components/Layout";
import "../styles/globals.css";

import HeadContext from "../context/HeadContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState("Home");

  return (
    <HeadContext.Provider value={{ pageTitle, setPageTitle }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeadContext.Provider>
  );
}
