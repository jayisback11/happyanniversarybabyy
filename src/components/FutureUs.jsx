import React from 'react';
import { Plane, Home, Heart } from 'lucide-react';
import { mockData } from '../mock';

const FutureUs = () => {
  return (
    <section id="future-us" className="future-section">
      <div 
        className="future-background"
        style={{ backgroundImage: `url(${mockData.photos.sunset})` }}
      ></div>
      
      <div className="future-overlay"></div>
      
      <div className="section-container">
        <h2 className="section-title">Future Us</h2>
        
        <div className="future-content">
          <div className="future-promises">
            <div className="promise-item">
              <Plane size={32} strokeWidth={1.5} />
              <p>Every flight brings us closer</p>
            </div>
            
            <div className="promise-item">
              <Home size={32} strokeWidth={1.5} />
              <p>One day, one home, one life together</p>
            </div>
            
            <div className="promise-item">
              <Heart size={32} strokeWidth={1.5} />
              <p>No more screens between us</p>
            </div>
          </div>
          
          <div className="future-message">
            <p className="future-statement">
              This distance is temporary.
            </p>
            <p className="future-statement-emphasis">
              Us is permanent.
            </p>
          </div>
          
          <div className="future-quote">
            <p className="quote-text">
              "Babyy, you are worth every mile,<br />
              every wait,<br />
              every lonely night."
            </p>
            <p className="quote-text">
              "I'd choose this distance<br />
              a thousand times<br />
              if it always led me to you."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureUs;
