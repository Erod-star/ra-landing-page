import React from "react";
import styled from "styled-components";

// ? Styles
import "../styles/components/Metaverse.css";

//  ? Activities images
import zappar from "../assets/metaverse/zappar.png";
import metaverse from "../assets/metaverse/metaverse.jpg";
import activity2 from "../assets/metaverse/decentraland.jpg";
import activity3 from "../assets/metaverse/sandbox.png";
import activity4 from "../assets/metaverse/somniumSpace.png";

const Metaverse = () => {
  return (
    <Layout className="component-container">
      <WarningApps>
        <h5 className="text-center">
          NOTA: Para acceder a ciertos marcadores y QRs dentro de este proyecto
          es necesario tener instalada la aplicación Zappar
        </h5>
        <a
          className="zappar"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.zappar.Zappar"
        >
          Descargar aquí
        </a>
        <p> O por Qr </p>
        <img className="zappar-warning" id="metaverse" src={zappar} />
      </WarningApps>
      <h1 className="text-center section-title">Metaverso</h1>
      <hr />
      <div className="mt-5 mb-5 ms-5 d-flex activities-metaverse">
        <ActivitiesToDisplay>
          Aquí se muestra lo trabajado a lo largo del semestre...
        </ActivitiesToDisplay>
        <div className="activities-loading">👇</div>
      </div>
      <ActivitieContainer>
        <ActivitieDescription className="activitie-description">
          <h3 className="mb-3">Metaverso Facebook</h3>
          <span>Descripción:</span>
          <p>
            Realización de una presentación en papel bond y una investigación
            dígital sobre el metaverso de Facebook en donde se incluye Que es,
            Como funciona, Quien lo creo, Cuál es la arquitectura del metaverso,
            Componentes del metaverso, Cuál es el motivo por el que se crea,
            Tecnologías que intervienen en el metaverso, Como me registro, Que
            necesito para hacer uso del metaverso, Que fines y/o usos tiene,
            Empresas que ya colaboran en el metaverso, ¿existen reglas? Países
            disponibles.
          </p>
        </ActivitieDescription>
        <ActivitieImage
          className="activity-one"
          src={metaverse}
          alt="Actividad 1"
        />
      </ActivitieContainer>
      <ActivitieContainer>
        <ActivitieDescription className="activitie-description">
          <h3>Decentraland</h3>
          <span>Descripción:</span>
          <p>
            Realización de una presentación en papel bond de alguno de los temas
            proporcionados para la actividad referente al metaverso
            "Decentraland". <br />
            En este caso se desarrollo la pregunta{" "}
            <strong>¿Quién creó decentraland?</strong>
          </p>
        </ActivitieDescription>
        <ActivitieImage src={activity2} alt="Actividad 2" />
      </ActivitieContainer>
      <ActivitieContainer>
        <ActivitieDescription className="activitie-description">
          <h3>The Sandbox</h3>
          <span>Descripción:</span>
          <p>
            Realización de una presentación en el software de Microsoft Sway
            sobre el metaverso The sandbox en donde se incluye Que es, Como
            funciona, Quien lo creo, Cuál es la arquitectura del metaverso,
            Componentes del metaverso, Cuál es el motivo por el que se crea,
            Tecnologías que intervienen en el metaverso, Como me registro, Que
            necesito para hacer uso del metaverso, Que fines y/o usos tiene,
            Empresas que ya colaboran en el metaverso, ¿existen reglas? Países
            disponibles.
          </p>
        </ActivitieDescription>
        <ActivitieImage src={activity3} alt="Actividad 3" />
      </ActivitieContainer>
      <ActivitieContainer>
        <ActivitieDescription className="activitie-description">
          <h3>Somnium space</h3>
          <span>Descripción:</span>
          <p>
            Realización de una presentación sobre el metaverso de Somnium space
            en donde se incluye Que es, Como funciona, Quien lo creo, Cuál es la
            arquitectura del metaverso, Componentes del metaverso, Cuál es el
            motivo por el que se crea, Tecnologías que intervienen en el
            metaverso, Como me registro, Que necesito para hacer uso del
            metaverso, Que fines y/o usos tiene, Empresas que ya colaboran en el
            metaverso, ¿existen reglas? Países disponibles.
          </p>
        </ActivitieDescription>
        <ActivitieImage src={activity4} alt="Actividad 4" />
      </ActivitieContainer>
    </Layout>
  );
};

const Layout = styled.div`
  color: black;
  margin: 10px;
  padding-top: 58px;
  height: 100%;
`;

const ActivitiesToDisplay = styled.h3`
  font-style: italic;
`;

const ActivitieContainer = styled.div`
  margin: 30px 0px;
  margin: 30px 100px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
  &:nth-child(odd) {
    text-align: right;
    flex-direction: row-reverse;
  }
`;

const ActivitieDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 50px;
  width: 80%;
`;

const ActivitieImage = styled.img`
  border-radius: 20px;
  width: 350px;
  height: 350px;
`;

const WarningApps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 20px 0px;
  padding: 20px 0px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
`;

export default Metaverse;
