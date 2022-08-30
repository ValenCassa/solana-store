import React from "react";
import "../styles/globals.css";
import "../styles/App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import NetworkProvider from "context/NetworkProvider";

const App = ({ Component, pageProps }) => {
  return (
    <NetworkProvider>
      <Component {...pageProps} />
    </NetworkProvider>
  );
};

export default App;
