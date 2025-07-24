import React from 'react';
import './Services.css';

const services = [
  { icon: "🖥️", title: "Création de site web", desc: "Sites vitrines, e-commerce et sur mesure" },
  { icon: "🎨", title: "Design graphique", desc: "Identité visuelle, logos, flyers" },
  { icon: "🖨️", title: "Impression", desc: "Cartes, brochures, impressions pro" },
  { icon: "🎥", title: "Création vidéo", desc: "Clips, animations, montage" },
  { icon: "📢", title: "Publicité & réseaux", desc: "Campagnes digitales et sociales" },
  { icon: "🏪", title: "Design extérieur & impression grand format", desc: "Habillage de façade & signalétique" },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <h2>Nos Services</h2>
      <div className="grid">
        {services.map((s, i) => (
          <div key={i} className="card">
            <span className="icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}