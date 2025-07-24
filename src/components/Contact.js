import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Insta from "../images/instagram.png"

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ff4aj1q',         // Remplace par ton service ID
      'template_tqf4zy4',        // Remplace par ton template ID
      form.current,
      'zdCMsZ7Q6TmIOdanh'         // Remplace par ta clé publique EmailJS
    ).then(
      () => {
        alert("Message envoyé avec succès !");
        form.current.reset();
      },
      (error) => {
        alert("Erreur lors de l'envoi : " + error.text);
      }
    );
  };

  return (
    <section className="contact">
      <h1>Contactez-nous</h1>
      <p>Une idée ? Un projet ? Parlons-en !</p>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Nom complet" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Votre message" required />
        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-info">
        <p>📞 +213 5 60 04 60 28</p>
        <p>📞 +213 5 42 69 63 99</p>
        <p>📧 deverenterprise@gmail.com</p>
        <p><img src={Insta}></img><a href="https://www.instagram.com/deverdz?igsh=MXN3Ym1ueGFjODR2"  rel="noopener noreferrer">Suivez-nous sur Instagram</a></p>
      </div>
    </section>
  );
}