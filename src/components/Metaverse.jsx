import React from "react";
import styled from "styled-components";

const Metaverse = () => {
  return (
    <Layout
      id="metaverse"
      className="d-flex justify-content-center component-container"
      data-aos="fade-right"
    >
      <h1>Metaverso</h1>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #22162b;
  color: white;
  margin: 10px;
  padding-top: 58px;
  border: 5px solid black;
`;

export default Metaverse;
