import React from 'react';
import './NeonTheme.css';

export default function NeonTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-neon">
      <div className="card-name">{name || 'Your Name'}</div>
      <div className="card-title">{title || 'Job Title'}</div>
      <div className="card-contact">
        {phone && <div className="card-contact-item">{phone}</div>}
        {email && <div className="card-contact-item">{email}</div>}
      </div>
      {description && <div className="card-desc">{description}</div>}
      {image && <img src={image} alt="Profile" className="card-img" />}
    </div>
  );
}
