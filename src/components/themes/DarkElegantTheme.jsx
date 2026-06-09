import React from 'react';
import './DarkElegantTheme.css';

export default function DarkElegantTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-dark-elegant">
      <div className="border-accent"></div>
      <div className="content">
        {image && <img src={image} alt="Profile" className="card-img" />}
        <div className="card-name">{name || 'Your Name'}</div>
        <div className="card-title">{title || 'Job Title'}</div>
        <div className="card-contact">
          {phone && <span>{phone}</span>}
          {phone && email && <span>|</span>}
          {email && <span>{email}</span>}
        </div>
        {description && <div className="card-desc">{description}</div>}
      </div>
    </div>
  );
}
