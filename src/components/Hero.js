import React from 'react';
import './Hero.css';
import imagehero from "../images/AFE3FD61-D9B9-492A-A196-81AED763BBE0.PNG"
import deverlogo from "../images/IMG_1656.PNG"
import Services from './Services';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={deverlogo} alt="deverlogo"/>
        <h1>Votre agence digitale créative</h1>
        <p>Création de site web, design, impression, vidéo & publicité – Tout ce qu’il vous faut pour briller.</p>
        <button
  onClick={() => {
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Voir nos services
</button>
        <div className="stats">
          <div><strong>5++</strong><span>ans d’expérience</span></div>
          <div><strong>100%</strong><span>clients satisfaits</span></div>
          <div><strong>100%</strong><span>Taux de livraison à temps</span></div>
        </div>
      </div>
      <div className="hero-right">
      <img src={imagehero} alt=" agence digitale" />
      </div>
    </section>
  );
}