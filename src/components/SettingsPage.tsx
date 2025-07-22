import React, { useState } from 'react';
import './../styles/SettingsPage.css'; // Importez le CSS spécifique à la page
import ThemeToggle from './ThemeToggle';

// Nous allons réutiliser l'avatar de l'utilisateur.
// Comme pour App.tsx, référencez-le depuis le dossier public.
import userAvatar from '../assets/me.png'; // Ou JessicaLofez.png, selon ce que vous préférez ici

interface SettingsPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ theme, toggleTheme }) => {
  // États locaux pour gérer les valeurs des champs de formulaire
  const [userName, setUserName] = useState('adriano Kamgang');
  const [userEmail, setUserEmail] = useState('adrianokamgang@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [selectedTimezone, setSelectedTimezone] = useState('UTC+1 Paris');

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour enregistrer les changements (à implémenter plus tard)
    console.log('Changements sauvegardés :', {
      userName,
      userEmail,
      notificationsEnabled,
      selectedLanguage,
      selectedTimezone,
      // Ne pas logguer les mots de passe en prod ! Ici pour le dév.
      newPassword: newPassword ? '********' : 'unchanged'
    });
    alert('Vos paramètres ont été mis à jour !');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Le nouveau mot de passe et sa confirmation ne correspondent pas.');
      return;
    }
    if (currentPassword === '' || newPassword === '') {
        alert('Veuillez remplir les champs de mot de passe.');
        return;
    }
    // Logique pour changer le mot de passe (à implémenter plus tard)
    console.log('Mot de passe changé !');
    alert('Votre mot de passe a été modifié !');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="settings-page">
      <h1 className="settings-title">Paramètres du Compte</h1>

      <div className="settings-sections-wrapper">
        <aside className="settings-sidebar">
          <div className="user-profile-summary">
            <div className="avatar-small">
              <img src={userAvatar} alt="User Avatar" />
            </div>
            <div className="profile-info">
              <h3>{userName}</h3>
              <p>{userEmail}</p>
            </div>
          </div>
          <nav className="settings-nav">
            <a href="#" className="settings-nav-item active">Général</a>
            <a href="#" className="settings-nav-item">Sécurité</a>
            <a href="#" className="settings-nav-item">Notifications</a>
            <a href="#" className="settings-nav-item">Apparence</a>
            <a href="#" className="settings-nav-item">Facturation</a>
          </nav>
        </aside>

        <main className="settings-content">
          {/* Section Informations Générales */}
          <section className="settings-section">
            <h2>Informations Générales</h2>
            <form onSubmit={handleSaveChanges} className="settings-form">
              <div className="form-group">
                <label htmlFor="userName">Nom d'utilisateur</label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Adresse Email</label>
                <input
                  type="email"
                  id="userEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary">Enregistrer les modifications</button>
            </form>
          </section>

          {/* Section Sécurité */}
          <section className="settings-section">
            <h2>Sécurité</h2>
            <form onSubmit={handlePasswordChange} className="settings-form">
              <div className="form-group">
                <label htmlFor="currentPassword">Mot de passe actuel</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">Nouveau mot de passe</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmNewPassword">Confirmer le nouveau mot de passe</label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary">Changer le mot de passe</button>
            </form>
          </section>

          {/* Section Notifications */}
          <section className="settings-section">
            <h2>Notifications</h2>
            <div className="settings-option-row">
              <label>Activer les notifications par email</label>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </section>

          {/* Section Apparence (inclut le ThemeToggle) */}
          <section className="settings-section">
            <h2>Apparence</h2>
            <div className="settings-option-row">
                <label>Mode Thème</label>
                {/* Réutilisation de votre composant ThemeToggle */}
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className="form-group">
                <label htmlFor="languageSelect">Langue</label>
                <select
                    id="languageSelect"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="timezoneSelect">Fuseau Horaire</label>
                <select
                    id="timezoneSelect"
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                >
                    <option value="UTC-5 NYC">UTC-5 New York</option>
                    <option value="UTC-4 Halifax">UTC-4 Halifax</option>
                    <option value="UTC+1 Paris">UTC+1 Paris</option>
                    <option value="UTC+9 Tokyo">UTC+9 Tokyo</option>
                </select>
            </div>
          </section>

          {/* Autres sections possibles : Facturation, Confidentialité, etc. */}
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;