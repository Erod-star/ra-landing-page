import React from "react";
import styled from "styled-components";

const BibliographicCards = () => {
  return (
    <Layout
      id="bibliograficCards"
      className="d-flex justify-content-center component-container"
      data-aos="fade-right"
    >
      <h1>Fichas bibliográficas</h1>
    </Layout>
  );
};

const Layout = styled.div`
  color: white;
  margin: 10px;
  padding-top: 58px;
`;

export default BibliographicCards;
