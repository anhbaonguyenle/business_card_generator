import React from 'react';
import './CreativeTheme.css';

export default function CreativeTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-creative">
      <div className="shape1"></div>
      <div className="shape2"></div>
      {image && <img src={image} alt="Profile" className="card-img" />}
      <div className="content">
        <div className="card-name">{name || 'Your Name'}</div>
        <div className="card-title">{title || 'Job Title'}</div>
        {description && <div className="card-desc">{description}</div>}
        <div className="card-contact" style={{ marginTop: '8px' }}>
          {phone && <div>{phone}</div>}
          {email && <div>{email}</div>}
        </div>
      </div>
    </div>
  );
}
