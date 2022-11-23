import React from "react";
import styled from "styled-components";
import GalleryModule from "../components/GalleryModule";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductInfo from "../components/ProductInfo";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    max-width: 500px;
    margin: auto;
  }
`;

const PageSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 5.8rem 3.5rem;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    padding: 0 1.5rem;
  }
`;

function ProductPage({ product }) {
  return (
    <>
      <Navbar />
      <ProductContainer>
        <PageSection>
          <GalleryModule images={product.images} />
        </PageSection>
        <PageSection>
          <ProductInfo product={product} />
        </PageSection>
      </ProductContainer>
      <Footer />
    </>
  );
}

export default ProductPage;
