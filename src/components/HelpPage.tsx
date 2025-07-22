import React, { useState } from 'react';
import './../styles/HelpPage.css'; // Importez le CSS spécifique à la page
import { FaQuestionCircle, FaEnvelope, FaPhone, FaBook } from 'react-icons/fa'; // Icônes utiles

interface HelpPageProps {
  // Aucune prop spécifique nécessaire pour l'instant, mais peut être étendue
}

const HelpPage: React.FC<HelpPageProps> = () => {
  // Un état pour gérer l'ouverture/fermeture des réponses de la FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      question: "Comment puis-je changer mon mot de passe ?",
      answer: "Pour changer votre mot de passe, allez dans la section 'Paramètres' de votre tableau de bord, puis naviguez vers la sous-section 'Sécurité'. Vous y trouverez les champs nécessaires pour mettre à jour votre mot de passe actuel et en définir un nouveau."
    },
    {
      id: 2,
      question: "Où puis-je consulter mes transactions ?",
      answer: "Vos transactions sont affichées dans l'onglet 'Aperçu' du tableau de bord principal, sous les cartes 'Outgoing' et 'Incoming'. Vous pouvez également trouver un résumé dans la section 'Account Overview'."
    },
    {
      id: 3,
      question: "Comment contacter le support technique ?",
      answer: "Vous pouvez nous contacter par email à support@adriano.corp, par téléphone au +1 (555) 123-4567, ou via le formulaire de contact disponible sur cette page."
    },
    {
      id: 4,
      question: "Puis-je changer le thème de l'application ?",
      answer: "Oui, un bouton de bascule de thème est disponible dans l'en-tête de la page. Vous pouvez passer du mode sombre au mode clair à tout moment pour adapter l'interface à vos préférences."
    },
    {
      id: 5,
      question: "Mes données sont-elles sécurisées ?",
      answer: "Nous prenons la sécurité de vos données très au sérieux. Toutes les informations sont cryptées et stockées sur des serveurs sécurisés. Pour plus de détails, veuillez consulter notre politique de confidentialité."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="help-page">
      <h1 className="help-title">Centre d'Aide</h1>

      <div className="help-sections-wrapper">
        {/* Section FAQ */}
        <section className="help-section faq-section">
          <h2><FaQuestionCircle className="section-icon" /> Questions Fréquemment Posées (FAQ)</h2>
          <div className="faq-list">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <button
                  className={`faq-question ${openFaq === item.id ? 'active' : ''}`}
                  onClick={() => toggleFaq(item.id)}
                >
                  {item.question}
                  <span className="faq-arrow">{openFaq === item.id ? '▲' : '▼'}</span>
                </button>
                {openFaq === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section Contact */}
        <section className="help-section contact-section">
          <h2><FaEnvelope className="section-icon" /> Nous Contacter</h2>
          <p>Si vous n'avez pas trouvé la réponse à votre question dans la FAQ, n'hésitez pas à nous contacter.</p>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p><a href="mailto:support@adriano.corp">support@adriano.corp</a></p>
            </div>
            <div className="contact-info-item">
              <FaPhone className="contact-icon" />
              <h3>Téléphone</h3>
              <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
            </div>
            <div className="contact-info-item">
              <FaBook className="contact-icon" />
              <h3>Documentation</h3>
              <p><a href="#">Consulter notre documentation complète</a></p>
            </div>
          </div>

          {/* Formulaire de contact (simplifié ici, sans logique d'envoi réelle) */}
          <form className="contact-form">
            <h3>Envoyez-nous un message</h3>
            <div className="form-group">
              <label htmlFor="contactName">Votre Nom</label>
              <input type="text" id="contactName" placeholder="Entrez votre nom" />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail">Votre Email</label>
              <input type="email" id="contactEmail" placeholder="Entrez votre adresse email" />
            </div>
            <div className="form-group">
              <label htmlFor="contactMessage">Votre Message</label>
              <textarea id="contactMessage" rows={5} placeholder="Décrivez votre problème ou question..."></textarea>
            </div>
            <button type="submit" className="btn-primary">Envoyer le Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;