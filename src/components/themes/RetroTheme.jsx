import React from 'react';
import './RetroTheme.css';

export default function RetroTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-retro">
      {image && <img src={image} alt="Profile" className="card-img" />}
      <div className="inner-border">
        <div className="card-name">{name || 'Your Name'}</div>
        <div className="card-title">{title || 'Job Title'}</div>
        <div className="card-contact">
          {phone && <div>Tel: {phone}</div>}
          {email && <div>Eml: {email}</div>}
        </div>
        {description && <div className="card-desc">{description}</div>}
      </div>
    </div>
  );
}
