export const withLayout = (Component) => {
  const WrappedComponent = (props) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return WrappedComponent;
};
