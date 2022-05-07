import React from "react";
import styled from "styled-components";

const ActivitiesPortfolio = () => {
  return (
    <Layout
      id="activitiesPortfolio"
      className="d-flex justify-content-center component-container"
      data-aos="fade-right"
    >
      <h1>Portafolio de actividades</h1>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #e54f6d;
  color: white;
  margin: 10px;
  padding-top: 58px;
  border: 5px solid black;
`;

export default ActivitiesPortfolio;
