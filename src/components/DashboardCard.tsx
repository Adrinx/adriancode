import React from 'react';

interface DashboardCardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, className, children }) => {
  return (
    <div className={`dashboard-card ${className || ''}`}>
      {title && <h3>{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;