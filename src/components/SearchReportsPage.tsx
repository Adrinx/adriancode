import React, { useState } from 'react';
import './../styles/SearchReportsPage.css'; // Importez le CSS spécifique
import { FaSearch, FaFilter, FaDownload, FaFileAlt } from 'react-icons/fa'; // Icônes

interface Report {
  id: string;
  title: string;
  type: string;
  category: string;
  date: string; // Format 'YYYY-MM-DD'
  description: string;
  author: string;
  downloadLink: string;
}

const mockReports: Report[] = [
  {
    id: 'RPT001',
    title: 'Rapport Financier Mensuel - Mars 2025',
    type: 'Financier',
    category: 'Ventes',
    date: '2025-03-31',
    description: 'Analyse des revenus et dépenses du mois de mars, incluant les tendances de vente.',
    author: 'Jean Dupont',
    downloadLink: '#download-RPT001'
  },
  {
    id: 'RPT002',
    title: 'Rapport d\'Activité Client - Q1 2025',
    type: 'Opérationnel',
    category: 'Clients',
    date: '2025-04-15',
    description: 'Synthèse des interactions clients et des retours pour le premier trimestre.',
    author: 'Marie Curie',
    downloadLink: '#download-RPT002'
  },
  {
    id: 'RPT003',
    title: 'Analyse de Marché - Nouvelle Stratégie',
    type: 'Stratégique',
    category: 'Marketing',
    date: '2025-05-20',
    description: 'Étude de faisabilité et projections pour le lancement d\'un nouveau produit.',
    author: 'Pierre Martin',
    downloadLink: '#download-RPT003'
  },
  {
    id: 'RPT004',
    title: 'Rapport de Performance RH - Année 2024',
    type: 'Ressources Humaines',
    category: 'Personnel',
    date: '2025-01-10',
    description: 'Évaluation des performances des employés et des initiatives de formation.',
    author: 'Sophie Dubois',
    downloadLink: '#download-RPT004'
  },
  {
    id: 'RPT005',
    title: 'Audit de Sécurité - Phase 1',
    type: 'Technique',
    category: 'Sécurité',
    date: '2025-06-01',
    description: 'Revue des protocoles de sécurité actuels et identification des vulnérabilités.',
    author: 'Marc Lefevre',
    downloadLink: '#download-RPT005'
  },
  {
    id: 'RPT006',
    title: 'Rapport des Ventes Régionales - Juin 2025',
    type: 'Financier',
    category: 'Ventes',
    date: '2025-06-30',
    description: 'Détail des chiffres de ventes par région et analyse des écarts.',
    author: 'Jean Dupont',
    downloadLink: '#download-RPT006'
  }
];

const SearchReportsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDate, setFilterDate] = useState(''); // Pour une date spécifique ou une plage

  // Obtenir les options uniques pour les filtres
  const availableTypes = Array.from(new Set(mockReports.map(report => report.type)));
  const availableCategories = Array.from(new Set(mockReports.map(report => report.category)));

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          report.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || report.type === filterType;
    const matchesCategory = filterCategory === 'all' || report.category === filterCategory;
    const matchesDate = filterDate === '' || report.date === filterDate; // Filtrage exact de date pour l'exemple

    return matchesSearch && matchesType && matchesCategory && matchesDate;
  });

  return (
    <div className="search-reports-page">
      <h1 className="reports-title">Rechercher des Rapports</h1>

      <div className="reports-search-controls">
        <div className="search-input-group">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher par titre, description ou auteur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <FaFilter className="filter-icon" />
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">Tous les Types</option>
            {availableTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">Toutes les Catégories</option>
            {availableCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            title="Filtrer par date exacte"
          />
          <button className="clear-filters-btn" onClick={() => {
              setFilterType('all');
              setFilterCategory('all');
              setFilterDate('');
              setSearchTerm('');
          }}>
            Effacer Filtres
          </button>
        </div>
      </div>

      <div className="reports-results">
        {filteredReports.length > 0 ? (
          filteredReports.map(report => (
            <div key={report.id} className="report-card">
              <div className="report-header">
                <FaFileAlt className="report-type-icon" />
                <h3>{report.title}</h3>
                <span className="report-date">{report.date}</span>
              </div>
              <p className="report-description">{report.description}</p>
              <div className="report-meta">
                <span>Type: <strong>{report.type}</strong></span>
                <span>Catégorie: <strong>{report.category}</strong></span>
                <span>Auteur: <strong>{report.author}</strong></span>
              </div>
              <div className="report-actions">
                <a href={report.downloadLink} className="btn-download" download>
                  <FaDownload /> Télécharger
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Aucun rapport trouvé correspondant à vos critères.</p>
        )}
      </div>
    </div>
  );
};

export default SearchReportsPage;