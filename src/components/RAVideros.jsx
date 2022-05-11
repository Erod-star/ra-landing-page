import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

//  ? Styles
import "../styles/components/RAVideos.css";

//  ? Components

const RAVideos = () => {
  return (
    <Layout id="raVideos">
      <h1 className="section-title">Videos de los tipos de realidad</h1>
      <hr />
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center flex-column">
          <h2 className="text-center mt-4 videos-section-title">
            Realidad Aumentada
          </h2>
          <VideoGrid>
            <VideoWrapper className="video-wrapper">
              <h4>¿Qué es realidad aumentada?</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=7-gbG_yuUE8&ab_channel=EducarPortal"
                height="280px"
              />
              <a
                href="https://www.youtube.com/watch?v=7-gbG_yuUE8&ab_channel=EducarPortal"
                target="_blank"
              >
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Historia de la realidad aumentada</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=064dw0r7xuE&ab_channel=MemoRodriguez"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=064dw0r7xuE&ab_channel=MemoRodriguez">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Como emplear la realidad aumentada</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=6Ss_SSvLJgw&ab_channel=Platzi"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=6Ss_SSvLJgw&ab_channel=Platzi">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Elementos de la realidad aumentada</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=4r84r_fBDHc&ab_channel=JoseJulianPrieto"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=4r84r_fBDHc&ab_channel=JoseJulianPrieto">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Ejemplos de aplicaciones con realidad aumentada</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=uCYG8gcBLHU&ab_channel=Globalzepp"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=uCYG8gcBLHU&ab_channel=Globalzepp">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Futuro de la realidad aumentada</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=oVxYya79_ew&ab_channel=LuisFont"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=oVxYya79_ew&ab_channel=LuisFont">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
          </VideoGrid>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <h2 className="text-center mt-4 videos-section-title">
            Realidad Virtual
          </h2>
          <VideoGrid>
            <VideoWrapper className="video-wrapper">
              <h4>¿Qué es la realidad virtual?</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=e2JubEBWwaQ&ab_channel=WarnerBros.PicturesEspa%C3%B1a"
                height="280px"
              />
              <a
                href="https://www.youtube.com/watch?v=e2JubEBWwaQ&ab_channel=WarnerBros.PicturesEspa%C3%B1a"
                target="_blank"
              >
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Historia de la realidad virtual</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=LMv329VkZVw&ab_channel=CulturaVJ"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=LMv329VkZVw&ab_channel=CulturaVJ">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Elementos de la realidad virtual</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=D6pa1C_cEok&ab_channel=LauraReyes"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=D6pa1C_cEok&ab_channel=LauraReyes">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Usos de la realidad virtual</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=TxOtDhrqiXw&ab_channel=CNETenEspa%C3%B1ol"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=TxOtDhrqiXw&ab_channel=CNETenEspa%C3%B1ol">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Ejemplos de aplicaciones con realidad virtual</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=BPuI35VJRJI&ab_channel=MediaMarktEspa%C3%B1a"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=BPuI35VJRJI&ab_channel=MediaMarktEspa%C3%B1a">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
            <VideoWrapper className="video-wrapper">
              <h4>Futuro de la realidad virtual</h4>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=haF0vL7Sies&ab_channel=DWEspa%C3%B1ol"
                height="280px"
              />
              <a href="https://www.youtube.com/watch?v=haF0vL7Sies&ab_channel=DWEspa%C3%B1ol">
                ¡Ver vídeo en Youtube!
              </a>
            </VideoWrapper>
          </VideoGrid>
        </div>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  /* background-color: #451f55; */
  color: white;
  margin: 10px;
  padding-top: 58px;
  overflow: hidden;
`;

const VideoGrid = styled.div``;

const VideoWrapper = styled.div`
  align-items: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 30px 0px;
  transition: all 300ms;
  width: 100%;
  color: black;
  background-color: white;
  box-shadow: 0px 4px 15px black;
`;

export default RAVideos;
