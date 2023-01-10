import Head from "next/head";
import { useContext } from "react";
import HeadContext from "../../context/HeadContext";

const HeadComponent = () => {
  const { pageTitle } = useContext(HeadContext);

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};

export default HeadComponent;
