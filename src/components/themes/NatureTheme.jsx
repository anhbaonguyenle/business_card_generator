import React from 'react';
import './NatureTheme.css';

export default function NatureTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-nature">
      <div className="leaf-bg"></div>
      <div className="left-col">
        <div className="card-name">{name || 'Your Name'}</div>
        <div className="card-title">{title || 'Job Title'}</div>
        <div className="card-contact">
          {phone && <div>{phone}</div>}
          {email && <div>{email}</div>}
        </div>
        {description && <div className="card-desc">{description}</div>}
      </div>
      <div className="right-col">
        {image && <img src={image} alt="Profile" className="card-img" />}
      </div>
    </div>
  );
}
