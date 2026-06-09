import React, { useState } from 'react';
import './App.css';
import { Check, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { MinimalTheme, DarkElegantTheme, NeonTheme, NatureTheme, CorporateTheme, GlassTheme, BoldTheme, RetroTheme, CreativeTheme, LuxuryTheme } from './components/themes';
import Sidebar from './components/Sidebar';

const THEMES = [
  { id: 'minimal', name: 'Minimalist Modern' },
  { id: 'dark-elegant', name: 'Dark Elegance' },
  { id: 'neon', name: 'Tech Neon' },
  { id: 'nature', name: 'Nature Inspired' },
  { id: 'corporate', name: 'Corporate Blue' },
  { id: 'glass', name: 'Gradient Glass' },
  { id: 'bold', name: 'Bold Typography' },
  { id: 'retro', name: 'Vintage Retro' },
  { id: 'creative', name: 'Creative Portfolio' },
  { id: 'luxury', name: 'Luxurious Gold' },
];

const ThemeComponents = {
  'minimal': MinimalTheme,
  'dark-elegant': DarkElegantTheme,
  'neon': NeonTheme,
  'nature': NatureTheme,
  'corporate': CorporateTheme,
  'glass': GlassTheme,
  'bold': BoldTheme,
  'retro': RetroTheme,
  'creative': CreativeTheme,
  'luxury': LuxuryTheme,
};

export default function App() {
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    title: 'Senior Product Designer',
    phone: '+1 (555) 123-4567',
    email: 'alex.design@example.com',
    description: 'Specializing in UX/UI and modern web experiences that delight users.',
    image: null,
    font: 'Inter',
  });

  const [selectedCards, setSelectedCards] = useState(new Set(['minimal']));
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleCardSelection = (id) => {
    setSelectedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const downloadPDF = async () => {
    if (selectedCards.size === 0) return;
    setIsDownloading(true);

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [3.5, 2]
      });

      const selectedArray = Array.from(selectedCards);
      
      for (let i = 0; i < selectedArray.length; i++) {
        const themeId = selectedArray[i];
        const cardElement = document.getElementById(`card-${themeId}`);
        
        if (cardElement) {
          const canvas = await html2canvas(cardElement, {
            scale: 3,
            useCORS: true,
            backgroundColor: null,
            logging: false,
          });

          const imgData = canvas.toDataURL('image/png');
          
          if (i > 0) {
            pdf.addPage([3.5, 2], 'landscape');
          }
          
          pdf.addImage(imgData, 'PNG', 0, 0, 3.5, 2);
        }
      }

      pdf.save('business_cards.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="app-container">
      <Sidebar formData={formData} setFormData={setFormData} />

      <main className="main-content">
        <header className="main-header">
          <h2>Select Styles ({selectedCards.size} Selected)</h2>
          <button
            className="download-btn"
            onClick={downloadPDF}
            disabled={selectedCards.size === 0 || isDownloading}
          >
            <Download size={20} />
            {isDownloading ? 'Generating PDF...' : 'Download Selected PDF'}
          </button>
        </header>

        <div className="cards-grid">
          {THEMES.map(theme => {
            const ThemeComponent = ThemeComponents[theme.id];
            return (
              <div
                key={theme.id}
                className={`card-wrapper ${selectedCards.has(theme.id) ? 'selected' : ''}`}
              >
                <div
                  className="card-select-overlay"
                  onClick={() => toggleCardSelection(theme.id)}
                >
                  <Check size={20} />
                </div>
                
                <div 
                  id={`card-${theme.id}`}
                  className="card-inner"
                  style={{ fontFamily: formData.font }}
                  onClick={() => toggleCardSelection(theme.id)}
                >
                  <ThemeComponent data={formData} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
