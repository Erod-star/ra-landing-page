import React from "react";
import styled from "styled-components";

// ? QRs
import qrEdson from "../assets/qrs/EdsonQr.png";
import qrKenia from "../assets/qrs/KeniaQr.png";
import qrFlorencio from "../assets/qrs/FlorencioQr.png";

import qrJonny from "../assets/qrs/JonathanQr.png";
import qrTerrones from "../assets/qrs/TerronesQr.png";
import qrVanessa from "../assets/qrs/VanessaQr.png";

import qrCortes from "../assets/qrs/CortesQr.png";
import qrCuevas from "../assets/qrs/CuevasQr.png";
import qrMichel from "../assets/qrs/GarciaMichelQr.png";
import qrContreras from "../assets/qrs/ContrerasQr.png";
import qrHerrera from "../assets/qrs/HerreraRomanQr.png";
import qrLeonel from "../assets/qrs/LeonelQr.png";
import qrManzo from "../assets/qrs/ManzoQr.png";
import qrMedrano from "../assets/qrs/MedranoQr.png";
import qrMontelongo from "../assets/qrs/MontelongoQr.png";
import qrRosales from "../assets/qrs/RosalesQr.png";
import qrSaucedo from "../assets/qrs/SaucedoQr.png";
import qrSolis from "../assets/qrs/SolisQr.png";
import qrRenteria from "../assets/qrs/RenteriaQr.png";
import qrCastro from "../assets/qrs/CastroQr.png";

const Bibliographies = () => {
  return (
    <Layout id="bibliographies">
      <h1 className="section-title">Bibliografías de los compañeros</h1>
      <hr />
      <ClassmatesGrid>
        <BibliographieCard>
          <h4>Castro Barreto Francisco fidel</h4>
          <img className="img-fluid qr-image" src={qrCastro} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Contreras Hernandez Irieno</h4>
          <img
            className="img-fluid qr-image"
            src={qrContreras}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Cortes Comparan Daniel</h4>
          <img className="img-fluid qr-image" src={qrCortes} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Covarrubias Nava Alondra Vanessa</h4>
          <img
            className="img-fluid qr-image"
            src={qrVanessa}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Cuevas Ceballos Erick</h4>
          <img className="img-fluid qr-image" src={qrCuevas} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Garcia Michel Sergio</h4>
          <img className="img-fluid qr-image" src={qrMichel} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Gonzalez Montelongo Edgar Jose</h4>
          <img
            className="img-fluid qr-image"
            src={qrMontelongo}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Herrera Espinoza Alberto Román</h4>
          <img
            className="img-fluid qr-image"
            src={qrHerrera}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Manzo Martinez Enelida Natalia</h4>
          <img className="img-fluid qr-image" src={qrManzo} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Medrano Ríos Ivan Joshue</h4>
          <img
            className="img-fluid qr-image"
            src={qrMedrano}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Orozco Valdez Florencio Miguel</h4>
          <img
            className="img-fluid qr-image"
            src={qrFlorencio}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Renteria Barreto Diego Eduardo</h4>
          <img
            className="img-fluid qr-image"
            src={qrRenteria}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Rodríguez Govea Edson Arturo</h4>
          <img className="img-fluid qr-image" src={qrEdson} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Rodríguez Villaseñor Jonathan Eduardo</h4>
          <img className="img-fluid qr-image" src={qrJonny} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Rosales Gonzalez Alberto</h4>
          <img
            className="img-fluid qr-image"
            src={qrRosales}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Solis Gonzalez Luis Alberto</h4>
          <img className="img-fluid qr-image" src={qrSolis} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Terrones Díaz Francisco Javier</h4>
          <img
            className="img-fluid qr-image"
            src={qrTerrones}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Ugarte Saucedo Alan Eduardo</h4>
          <img
            className="img-fluid qr-image"
            src={qrSaucedo}
            alt="student qr"
          />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Villa Serratos Kenia Elizabeth</h4>
          <img className="img-fluid qr-image" src={qrKenia} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
        <BibliographieCard>
          <h4>Leonel Arroyo Elizarraraz</h4>
          <img className="img-fluid qr-image" src={qrLeonel} alt="student qr" />
          <p>¡Escanea el QR para acceder a la biografía!</p>
        </BibliographieCard>
      </ClassmatesGrid>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 10px;
  margin-right: 30px;
  padding-top: 58px;
  height: auto;
  padding-bottom: 45px;
`;

const ClassmatesGrid = styled.ul`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 300px);
  grid-gap: 20px;
  place-items: center;
  text-align: center;
`;

const BibliographieCard = styled.li`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  list-style: none;
  padding-top: 10px;
  transition: all 300ms;
  width: 100%;
  cursor: pointer;
  box-shadow: 0px 1px 5px black;
  &:hover {
    color: white;
    background-color: #141212;
    border: 10px solid #833ab4;
    box-shadow: none;
  }
`;

export default Bibliographies;
