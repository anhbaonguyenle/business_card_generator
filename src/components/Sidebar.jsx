import React from 'react';

const FONTS = [
  'Inter',
  'Playfair Display',
  'Roboto Mono',
  'Caveat',
  'Outfit',
];

export default function Sidebar({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>CardCraft</h1>
      </div>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g. John Doe"
        />
      </div>

      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="e.g. Software Engineer"
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="e.g. +1 234 567 890"
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="e.g. john@example.com"
        />
      </div>

      <div className="form-group">
        <label>Short Description (Optional)</label>
        <textarea
          name="description"
          className="form-control"
          rows="3"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Brief bio or tagline..."
        />
      </div>

      <div className="form-group">
        <label>Profile Image (Optional)</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageUpload}
        />
      </div>

      <div className="form-group">
        <label>Text Font</label>
        <select
          name="font"
          className="form-control"
          value={formData.font}
          onChange={handleInputChange}
        >
          {FONTS.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </div>
    </aside>
  );
}
