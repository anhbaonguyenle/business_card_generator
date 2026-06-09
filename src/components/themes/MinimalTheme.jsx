import React from 'react';
import './MinimalTheme.css';

export default function MinimalTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-minimal">
      <div>
        <div className="card-name">{name || 'Your Name'}</div>
        <div className="card-title">{title || 'Job Title'}</div>
        {description && <div className="card-desc">{description}</div>}
      </div>
      <div className="card-contact">
        {phone && <div className="card-contact-item">{phone}</div>}
        {email && <div className="card-contact-item">{email}</div>}
      </div>
      {image && <img src={image} alt="Profile" className="card-img" />}
    </div>
  );
}
