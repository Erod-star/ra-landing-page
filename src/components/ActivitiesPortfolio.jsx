import React, { useState } from "react";
import styled from "styled-components";

// ? Styles
import "../styles/components/Metaverse.css";

//  ? Activities
import { firstPartActivities, secondPartActivities } from "../utils/activities";

const ActivitiesPortfolio = () => {
  return (
    <Layout id="activitiesPortfolio" className="component-container">
      <h1 className="text-center section-title">Portafolio de actividades</h1>
      <hr />
      <div className="mt-5 mb-5 ms-5 d-flex activities-metaverse">
        <ActivitiesToDisplay>Primera parcial</ActivitiesToDisplay>
        <div className="activities-loading-portfolio">👇</div>
      </div>
      {firstPartActivities.map((activity, index) => {
        return (
          <ActivitieContainer>
            <ActivitieDescription className="activitie-description">
              <h3 className="mb-3">{activity.title}</h3>
              <span>Descripción:</span>
              <p>{activity.description}</p>
              <a href={activity.link} target="_blank" className="text-end">
                ¡Ir a la asignación!
              </a>
            </ActivitieDescription>
            <ActivitieImage src={activity.image} alt={activity.id} />
          </ActivitieContainer>
        );
      })}
      <div className="mt-5 mb-5 ms-5 d-flex activities-metaverse">
        <ActivitiesToDisplay>Segunda parcial</ActivitiesToDisplay>
        <div className="activities-loading">👇</div>
      </div>
      {secondPartActivities.map((activity, index) => {
        return (
          <ActivitieContainer>
            <ActivitieDescription className="activitie-description">
              <h3 className="mb-3">{activity.title}</h3>
              <span>Descripción:</span>
              <p>{activity.description}</p>
              <a href={activity.link} target="_blank" className="text-end">
                ¡Ir a la asignación!
              </a>
            </ActivitieDescription>
            <ActivitieImage src={activity.image} alt={activity.id} />
          </ActivitieContainer>
        );
      })}
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
  padding: 10px 30px;
  font-size: 32px;
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

export default ActivitiesPortfolio;
