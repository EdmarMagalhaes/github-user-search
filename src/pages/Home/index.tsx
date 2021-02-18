import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGen from 'core/components/Button';
import './styles.scss'


const Home = () => (
  <div className="home-container">
    <div className="row home-content">
      <div className="col-6">
        <h1 className="text-title">Desafio do Capítulo 3, <br />
        BootCamp DevSuperior
        </h1>
        <p className="text-subtitle">
          <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>

          <p>Favor observar as instruções passadas no capítulo sobre a
        elaboração deste projeto.</p>

          <p>Este design foi adaptado a partir de Ant Design System for Figma, de <br />
        Mateusz Wierzbicki: antforfigma@gmail.com</p>
        </p>
        <Link to="/search">
          <ButtonGen text="Começar" />
        </Link>
      </div>
    </div>
  </div>

);

export default Home;
