import React, { useState, useEffect } from 'react';
import { Calendar, Heart } from 'lucide-react';
import { getNextSeventeenth } from '../mock';

const TheSeventeenth = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const next17th = getNextSeventeenth();
      const now = new Date();
      const diff = next17th - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        setCountdown({ days, hours, minutes });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="the-17th" className="seventeenth-section">
      <div className="section-container">
        <div className="seventeenth-icon">
          <Calendar size={48} strokeWidth={1.5} />
        </div>
        
        <h2 className="section-title">The 17th</h2>
        
        <div className="seventeenth-content">
          <p className="seventeenth-verse">
            Most people celebrate once a year.
          </p>
          <p className="seventeenth-verse">
            We celebrate every 17th.
          </p>
          <p className="seventeenth-verse">
            Because loving you, babyy,
          </p>
          <p className="seventeenth-verse">
            isn't something I wait for.
          </p>
          <p className="seventeenth-verse">
            It's something I wake up grateful for.
          </p>
        </div>
        
        <div className="countdown-container">
          <p className="countdown-label">Until our next celebration</p>
          <div className="countdown-grid">
            <div className="countdown-item">
              <span className="countdown-number">{countdown.days}</span>
              <span className="countdown-unit">days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.hours}</span>
              <span className="countdown-unit">hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.minutes}</span>
              <span className="countdown-unit">minutes</span>
            </div>
          </div>
        </div>
        
        <div className="seventeenth-decoration">
          <Heart size={24} className="heart-pulse" />
        </div>
      </div>
    </section>
  );
};

export default TheSeventeenth;
