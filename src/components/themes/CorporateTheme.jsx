import React from 'react';
import './CorporateTheme.css';

export default function CorporateTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-corporate">
      <div className="top-bar"></div>
      <div className="content">
        <div className="info">
          <div className="card-name">{name || 'Your Name'}</div>
          <div className="card-title">{title || 'Job Title'}</div>
          {description && <div className="card-desc">{description}</div>}
          <div className="card-contact" style={{ marginTop: 'auto' }}>
            {phone && <div>{phone}</div>}
            {email && <div>{email}</div>}
          </div>
        </div>
        {image && <img src={image} alt="Profile" className="card-img" />}
      </div>
    </div>
  );
}
