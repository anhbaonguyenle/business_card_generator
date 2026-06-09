import React from 'react';
import './LuxuryTheme.css';

export default function LuxuryTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-luxury">
      <div className="card-name">{name || 'Your Name'}</div>
      <div className="card-title">{title || 'Job Title'}</div>
      <div className="divider"></div>
      {description && <div className="card-desc">{description}</div>}
      <div className="bottom-section">
        <div className="card-contact">
          {phone && <div>{phone}</div>}
          {email && <div>{email}</div>}
        </div>
        {image && <img src={image} alt="Profile" className="card-img" />}
      </div>
    </div>
  );
}
