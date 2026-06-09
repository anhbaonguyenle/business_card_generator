import React from 'react';
import './BoldTheme.css';

export default function BoldTheme({ data }) {
  const { name, title, phone, email, description, image } = data;
  return (
    <div className="theme-bold">
      <div className="bg-text">{name ? name.split(' ')[0] : 'NAME'}</div>
      <div className="content">
        <div>
          <div className="card-name">{name || 'Your Name'}</div>
          <div className="card-title">{title || 'Job Title'}</div>
          {description && <div className="card-desc">{description}</div>}
        </div>
        <div className="bottom-row">
          <div className="card-contact">
            {phone && <div>{phone}</div>}
            {email && <div>{email}</div>}
          </div>
          {image && <img src={image} alt="Profile" className="card-img" />}
        </div>
      </div>
    </div>
  );
}
