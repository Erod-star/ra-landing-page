import React from "react";
import styled from "styled-components";

const Bibliographies = () => {
  return (
    <Layout
      id="bibliographies"
      className="component-container"
      // data-aos="fade-right"
    >
      <h1>Bibliografías de los compañeros</h1>
      <ClassmatesGrid>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Edson Arturo Rodríguez Govea</h4>
          <p>Aquí la foto del QR</p>
        </BibliographieCard>
      </ClassmatesGrid>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #f8c630;
  color: white;
  margin: 10px;
  padding-top: 58px;
  border: 5px solid black;
  height: auto;
  padding-bottom: 45px;
`;

const ClassmatesGrid = styled.ul`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 80px);
  place-items: center;
  text-align: center;
`;

const BibliographieCard = styled.li`
  list-style: none;
`;

export default Bibliographies;
