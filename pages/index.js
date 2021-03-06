import Navigation from "components/Navigation";
import { getCollectionProps } from "helpers/ssr";
import React from "react";

const Page = ({ catalog }) => {
  console.log(catalog);
  return <Navigation />;
};

const getProps = async (context) => {
  return {
    props: {},
  };
};

export const getServerSideProps = getCollectionProps(getProps);

export default Page;
