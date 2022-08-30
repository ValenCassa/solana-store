import ProductContainer from "components/Product";
import Wallet from "components/Wallet";
import React from "react";
import HeadComponent from "../components/Head";
import Container from "../components/Layout/Container";
import MainSection from "../components/Main";

const App = () => {
  return (
    <>
      <div className="App">
        <HeadComponent />
        <Container>
          <MainSection />
          <ProductContainer />
        </Container>
      </div>
      <Wallet />
    </>
  );
};

export default App;
