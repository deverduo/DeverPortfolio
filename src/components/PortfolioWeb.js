import React from 'react';
import './PortfolioWeb.css'; // pour le style
import Pharmacy from "../images/pharmacy.jpg"
import Sergec from "../images/sergec.PNG";
import Zenbrush1 from "../images/zenbrush1.PNG"
import Zenbrush2 from "../images/zenbrush2.PNG"
import Coffee from "../images/coffee.PNG"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // styles par défaut

const projects = [
  {
    title: 'ZenBrush',
    desc: 'Site pour un dentifrice innovant 100% algérien',
    images: [Zenbrush1, Zenbrush2],
    link: ''
  },
  {
    title: 'COFFEHOUSE',
    desc: 'Site vitrine pour afficher le menu d\'un cafétéria donnant la possibilité de le consulter en scannant un Qr code.',
    images: [Coffee],
    link: ''
  },
  {
    title: 'SARL SERGEC',
    desc: 'Site vitrine pour une entreprise locale. Design épuré & responsive.',
    images: [Sergec],
    link: ''
  },
  {
    title: 'Benhabib Pharmacy',
    desc: 'Boutique e-commerce avec recherche et paiement intégrés.',
    images: [Pharmacy],
    link: ''
  },
  // ...
];

const PortfolioWeb = () => {
  return (
    <section className="portfolio">
      <h1>Nos Réalisations Web</h1>
      <p>Découvrez nos créations de sites vitrine, e-commerce, sur mesure et autres. Chaque projet est unique.</p>
      

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
  {project.images.length > 1 ? (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      emulateTouch
      autoPlay
      interval={5000}
    >
      {project.images.map((image, i) => (
        <div key={i} className="carousel-frame">
          <img src={image} alt={`${project.title} ${i + 1}`} />
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="carousel-frame">
      <img src={project.images[0]} alt={project.title} />
    </div>
  )}

  <h3>{project.title}</h3>
  <p>{project.desc}</p>
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
    Voir le site
  </a>
</div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioWeb;