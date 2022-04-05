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

export const getSampleProps = buildGetPropsWrapper(async (context) => {
  // Get async data
  const data = {};

  // Return 404 if not found
  if (!data) {
    return {
      notFound: true,
    };
  }

  // Otherwise return props
  return {
    props: {},
  };
});
