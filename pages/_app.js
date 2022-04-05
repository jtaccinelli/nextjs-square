import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { intitializeStore } from "store";
const { store, persistor } = intitializeStore();

import { GlobalStyles, customTheme } from "helpers/styles";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider theme={customTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </>
  );
};

export default App;
