import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const MyApp = function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
