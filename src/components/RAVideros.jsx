import React from "react";
import styled from "styled-components";

const RAVideos = () => {
  return (
    <Layout
      id="raVideos"
      className="d-flex justify-content-center component-container"
      data-aos="fade-right"
    >
      <h1>Videos de realidad aumentada</h1>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #451f55;
  color: white;
  margin: 10px;
  padding-top: 58px;
  border: 5px solid black;
`;

export default RAVideos;
