import Navigation from "components/Navigation";
import { getProductProps } from "helpers/ssr";
import React from "react";

const Page = ({ item }) => {
  console.log(item);
  return <Navigation />;
};

const getProps = async (context) => {
  return {
    props: {},
  };
};

export const getServerSideProps = getProductProps(getProps);

export default Page;
