import React from 'react';
import './About.css';
import anim from "../images/40BFB180-2346-426A-AC8E-67A8217748E6.PNG"

export default function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>À propos de dever</h2>
        <p>
          Dever est une agence créative spécialisée dans la création digitale, le design, l'impression, la vidéo et la publicité. 
          Nous aidons les marques à atteindre leurs objectifs à travers des solutions innovantes et un accompagnement personnalisé.
        </p>
      </div>
      <div className="about-image">
        <img src={anim} alt="Équipe Dever" />
      </div>
    </section>
  );
}