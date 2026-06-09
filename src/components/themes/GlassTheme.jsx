import React from 'react';
import './GlassTheme.css';

export default function GlassTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-glass">
      {image && <img src={image} alt="Profile" className="card-img" />}
      <div className="glass-panel">
        <div className="card-name">{name || 'Your Name'}</div>
        <div className="card-title">{title || 'Job Title'}</div>
        <div className="card-contact">
          {phone && <div>{phone}</div>}
          {email && <div>{email}</div>}
        </div>
        {description && <div className="card-desc">{description}</div>}
      </div>
    </div>
  );
}
