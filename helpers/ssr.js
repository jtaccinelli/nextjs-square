import { getCatalog, getItemByHandle, parseSquareResponse } from "./square";

export const buildGetPropsWrapper = (getNextProps) => {
  return (getPrevProps) => {
    return async (context) => {
      const prevValues = await getPrevProps(context);
      const nextValues = await getNextProps(context);

      const values = {
        notFound: prevValues?.notFound || nextValues?.notFound,
        redirect: prevValues?.redirect ?? nextValues?.redirect ?? null,
        props: {
          ...(prevValues?.props ?? {}),
          ...(nextValues?.props ?? {}),
        },
      };

      return Object.keys(values)
        .filter((key) => !!values[key])
        .reduce((obj, key) => ({ ...obj, [key]: values[key] }), {});
    };
  };
};

export const getCollectionProps = buildGetPropsWrapper(async (context) => {
  const data = await getCatalog();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      catalog: parseSquareResponse(data) ?? null,
    },
  };
});

export const getProductProps = buildGetPropsWrapper(async (context) => {
  const data = await getItemByHandle(context.query.handle);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item: parseSquareResponse(data) ?? null,
    },
  };
});
