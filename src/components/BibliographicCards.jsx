import React, { useState } from "react";
import styled from "styled-components";

import "../styles/components/BibliographieCards.css";

const BibliographicCards = () => {
  const [activeArticle, setActiveArticle] = useState({
    // ! Como estado por defecto deja la primera ficha
    id: 1,
    title: "El arte de la Guerra",
    description:
      "Bibliografía. México: Anaya Editores, 2007. El Arte de la guerra ilustrado / Sun Tzu ; versión de Thomas Cleary. Madrid: EDAF, 2004.",
    link: "https://www.amazon.com.mx/El-Arte-Guerra-Cl%C3%A1sicos-literatura-ebook/dp/B011VIVOFO",
    image:
      "https://i.imgur.com/zLhcylu.png",
  });

  const setArticle = (value) => {
    switch (value) {
      case 1:
        setActiveArticle({
          id: 1,
          title: "El arte de la guerra",
          description:
            "Bibliografía. México: Anaya Editores, 2007. El Arte de la guerra ilustrado / Sun Tzu ; versión de Thomas Cleary. Madrid: EDAF, 2004.",
          link: "https://www.amazon.com.mx/El-Arte-Guerra-Cl%C3%A1sicos-literatura-ebook/dp/B011VIVOFO",
          image:
            "https://i.imgur.com/zLhcylu.png",
        });
        return;

      case 2:
        setActiveArticle({
          id: 2,
          title: "Dracula: Deluxe Edition",
          description:
            "Stoker, B., & Gorey, E. (2021). Dracula: Deluxe Edition. Union Square & Co.",
          link: "https://www.amazon.com.mx/Dracula-Deluxe-Bram-Stoker/dp/1454944218",
          image:
            "https://i.imgur.com/LeGS4W6.png",
        });
        return;

      case 3:
        setActiveArticle({
          id: 3,
          title: "Dime quien soy",
          description:
            "Navarro, J. (2013). Dime quién soy (1.a ed.). Penguin Random House Grupo Editorial SA de CV.",
          link: "https://www.amazon.com.mx/Dime-qui%C3%A9n-soy-Julia-Navarro/dp/6073105142/ref=asc_df_6073105142/?tag=gledskshopmx-20&linkCode=df0&hvadid=295447233299&hvpos=&hvnetw=g&hvrand=9455093088528404515&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9073783&hvtargid=pla-435427430315&psc=1",
          image:
            "https://i.imgur.com/94ZHyP1.png",
        });
        return;

      case 4:
        setActiveArticle({
          id: 4,
          title: "El guardian entre el centeno",
          description:
            "Salinger, J. (2021). The Catcher in the Rye (Reissue ed.). Little Brown.",
          link: "https://google.com",
          image:
            "https://i.imgur.com/fWT4SXp.png",
        });
        return;

      case 5:
        setActiveArticle({
          id: 5,
          title: "Cementerio de animales",
          description:
            "King, S., & Suárez, D. A. L. F. M. (2012). Cementerio de animales. DEBOLS!LLO.",
          link: "https://www.amazon.com.mx/Cementerio-Animales-Cemetary-Stephen-King/dp/8497930991",
          image:
            "https://i.imgur.com/cNMn0xM.png",
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
      <h3 className="mt-5 mb-5 ms-5 d-flex activities-metaverse">Para observar estas fichas es necesario tener instalada la app Zappar</h3>
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
          src="https://ss365.liverpool.com.mx/xl/1115314862.jpg"
          onClick={() => {
            setArticle(1);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 2 ? "active-card" : 0}
          type="image"
          src="https://images-na.ssl-images-amazon.com/images/I/51b5eWrRawS._SX370_BO1,204,203,200_.jpg"
          onClick={() => {
            setArticle(2);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 3 ? "active-card" : 0}
          type="image"
          src="https://images-na.ssl-images-amazon.com/images/I/91yu2bAqlDL.jpg"
          onClick={() => {
            setArticle(3);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 4 ? "active-card" : 0}
          type="image"
          src="https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
          onClick={() => {
            setArticle(4);
          }}
        />
        <ArticleOption
          className={activeArticle.id === 5 ? "active-card" : 0}
          type="image"
          src="https://images-na.ssl-images-amazon.com/images/I/71Gr11n+1FL.jpg"
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
