import React, { useState } from "react";
import styled from "styled-components";

import "../styles/components/BibliographieCards.css";

const BibliographicCards = () => {
  const [activeArticle, setActiveArticle] = useState({
    // ! Como estado por defecto deja la primera ficha
    id: 1,
    title: "Título",
    description:
      "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur. Esse laboris proident est etVelit sunt sint exercitation in aliquip veniam cillum. Quis deserunt ut laboris nostrud tempor sint.",
    link: "https://google.com",
    image:
      "https://www.xtrafondos.com/wallpapers/vertical/star-lord-marvels-guardianes-de-la-galaxia-8283.jpg",
  });

  const setArticle = (value) => {
    switch (value) {
      case 1:
        setActiveArticle({
          id: 1,
          title: "Título uno",
          description:
            "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur. Esse laboris proident est etVelit sunt sint exercitation in aliquip veniam cillum. Quis deserunt ut laboris nostrud tempor sint.",
          link: "https://google.com",
          image:
            "https://www.xtrafondos.com/wallpapers/vertical/star-lord-marvels-guardianes-de-la-galaxia-8283.jpg",
        });
        return;

      case 2:
        setActiveArticle({
          id: 2,
          title: "Título dos",
          description:
            "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur.",
          link: "https://google.com",
          image:
            "https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=240&h=320&fit=crop",
        });
        return;

      case 3:
        setActiveArticle({
          id: 3,
          title: "Título tres",
          description:
            "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur.",
          link: "https://google.com",
          image:
            "https://images.unsplash.com/photo-1506045412240-22980140a405?w=240&h=320&fit=crop",
        });
        return;

      case 4:
        setActiveArticle({
          id: 4,
          title: "Título cuatro",
          description:
            "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur.",
          link: "https://google.com",
          image:
            "https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=240&h=320&fit=crop",
        });
        return;

      case 5:
        setActiveArticle({
          id: 5,
          title: "Título cinco",
          description:
            "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur.",
          link: "https://google.com",
          image:
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=240&h=320&fit=crop",
        });
        return;

      default:
        // Aquí pones la primera ficha
        setActiveArticle({
          title: "Título",
          description:
            "Nostrud anim commodo eiusmod proident cupidatat irure commodo enim pariatur. Esse laboris proident est etVelit sunt sint exercitation in aliquip veniam cillum. Quis deserunt ut laboris nostrud tempor sint.",
          link: "https://google.com",
          image:
            "https://www.xtrafondos.com/wallpapers/vertical/star-lord-marvels-guardianes-de-la-galaxia-8283.jpg",
        });
        return;
    }
  };

  return (
    <Layout id="bibliograficCards">
      <h1 className="text-center section-title">Fichas bibliográficas</h1>
      <hr />
      <ArticleContainer className="bibligraphic-card mt-4">
        <ArticleImage src={activeArticle.image} alt={activeArticle.title} />
        <ArticleInfo className="bibliographic-card-info">
          <h3>{activeArticle.title}</h3>
          <p>{activeArticle.description}</p>
          <a href={activeArticle.link} target="_blank">
            Ver más...
          </a>
        </ArticleInfo>
      </ArticleContainer>
      <ButtonsContainer className="image-buttons">
        <ArticleOption
          className={activeArticle.id === 1 ? "active-card" : 0}
          type="image"
          src="https://www.xtrafondos.com/wallpapers/vertical/star-lord-marvels-guardianes-de-la-galaxia-8283.jpg"
          onClick={() => {
            setArticle(1);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 2 ? "active-card" : 0}
          type="image"
          src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=125&h=125&fit=crop"
          onClick={() => {
            setArticle(2);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 3 ? "active-card" : 0}
          type="image"
          src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=125&h=125&fit=crop"
          onClick={() => {
            setArticle(3);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 4 ? "active-card" : 0}
          type="image"
          src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=125&h=125&fit=crop"
          onClick={() => {
            setArticle(4);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 5 ? "active-card" : 0}
          type="image"
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=123&h=125&fit=crop"
          onClick={() => {
            setArticle(5);
          }}
        />
      </ButtonsContainer>
    </Layout>
  );
};

const Layout = styled.div`
  color: white;
  margin: 10px;
  padding-top: 58px;
`;

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    &:before {
      opacity: 1;
    }
    .bibliographic-card-info {
      opacity: 1;
      transform: translateY(24px);
    }
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1.5rem;
  justify-content: center;
`;

const ArticleImage = styled.img`
  border-radius: 15px;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 300ms ease;
`;

const ArticleInfo = styled.div`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(198, 197, 197, 0.4);
  border-radius: 15px;
  color: white;
  opacity: 0;
  padding: 15px;
  position: relative;
  transition: 0.5s;
  z-index: 3;
  height: 320px;
  width: 240px;
  &:hover {
    cursor: pointer;
  }
`;

const ArticleOption = styled.input`
  border-radius: 15px;
  transition: all 300ms ease;
  height: 125px;
  width: 125px;
  &:hover {
    opacity: 0.7;
    border: 5px dashed green;
  }
`;

export default BibliographicCards;
