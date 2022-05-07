import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState({
    activeObject: 1,
  });

  const toggleActive = (value) => {
    setActive({ activeObject: value });
  };

  const toggleActiveStyles = (value) => {
    if (value === active.activeObject) return "nav-link active";
    return "nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Examen 3era parcial
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={toggleActiveStyles(1)}
                aria-current="page"
                href="#metaverse"
                onClick={() => {
                  toggleActive(1);
                }}
              >
                Metaverso
              </a>
            </li>
            <li className="nav-item">
              <a
                className={toggleActiveStyles(2)}
                href="#raVideos"
                onClick={() => {
                  toggleActive(2);
                }}
              >
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={toggleActiveStyles(3)}
                href="#bibliograficCards"
                onClick={() => {
                  toggleActive(3);
                }}
              >
                Fichas bibliográficas
              </a>
            </li>
            <li className="nav-item">
              <a
                className={toggleActiveStyles(4)}
                href="#activitiesPortfolio"
                onClick={() => {
                  toggleActive(4);
                }}
              >
                Portafolio de actividades
              </a>
            </li>
            <li className="nav-item">
              <a
                className={toggleActiveStyles(5)}
                href="#bibliographies"
                onClick={() => {
                  toggleActive(5);
                }}
              >
                Bibliografías
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
