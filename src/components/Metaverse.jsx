import React from "react";
import styled from "styled-components";

// ? Styles
import "../styles/components/Metaverse.css";

//  ? Activities images
import metaverse from "../assets/metaverse/metaverse.jpg";
import activity2 from "../assets/metaverse/decentraland.jpg";

const Metaverse = () => {
  return (
    <Layout id="metaverse" className="component-container">
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
          <h3 className="mb-3">Cartel y exposición del Metaverso</h3>
          <span>Descripción:</span>
          <p>
            Eiusmod non fugiat id consequat officia fugiat. Eiusmod mollit
            labore nisi excepteur labore. Do sint ullamco ullamco elit ex
            laborum incididunt quis in quis ex nulla anim. Sunt occaecat dolor
            magna est cillum et sunt cillum reprehenderit. Aute laboris ullamco
            ut dolor elit esse ea est. Veniam dolor excepteur consequat nulla
            pariatur ut ea excepteur est est sint.
            <br />
            Cupidatat voluptate mollit reprehenderit do nostrud pariatur irure
            pariatur et do qui nostrud fugiat et. Consequat fugiat irure minim
            enim consequat tempor non consequat aliquip incididunt do quis.
            Pariatur cillum ipsum deserunt qui ipsum nulla aliqua sunt. Veniam
            culpa nostrud laborum duis reprehenderit deserunt occaecat dolor.
          </p>
          <a
            href="https://classroom.google.com/u/2/c/NDU3MzQxNzA3OTkx/m/NTEzODkwNzU0NTU2/details"
            target="_blank"
            className="text-end"
          >
            ¡Ir a la asignación!
          </a>
        </ActivitieDescription>
        <ActivitieImage
          className="activity-one"
          src={metaverse}
          alt="Actividad 1"
        />
      </ActivitieContainer>
      <ActivitieContainer>
        <ActivitieDescription className="activitie-description">
          <h3>Título de la actividad</h3>
          <span>Descripción:</span>
          <p>
            Eiusmod non fugiat id consequat officia fugiat. Eiusmod mollit
            labore nisi excepteur labore. Do sint ullamco ullamco elit ex
            laborum incididunt quis in quis ex nulla anim. Sunt occaecat dolor
            magna est cillum et sunt cillum reprehenderit. Aute laboris ullamco
            ut dolor elit esse ea est. Veniam dolor excepteur consequat nulla
            pariatur ut ea excepteur est est sint. Cupidatat voluptate mollit
            reprehenderit do nostrud pariatur irure pariatur et do qui nostrud
            fugiat et.
          </p>
          <a
            href="https://classroom.google.com/u/2/c/NDU3MzQxNzA3OTkx/m/NTEzODkwNzU0NTU2/details"
            target="_blank"
            className="text-start"
          >
            ¡Ir a la asignación!
          </a>
        </ActivitieDescription>
        <ActivitieImage src={activity2} alt="Actividad 2" />
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

export default Metaverse;
