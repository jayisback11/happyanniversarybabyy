import React from 'react';
import { mockData } from '../mock';

const LoveLetter = () => {
  return (
    <section id="love-letter" className="letter-section">
      <div className="section-container">
        <h2 className="section-title">A Letter for you Babyy</h2>
        
        <div className="letter-content">
          <p className="letter-opening">{mockData.letter.opening}</p>
          
          {mockData.letter.paragraphs.map((paragraph, index) => (
            <p key={index} className="letter-paragraph">
              {paragraph}
            </p>
          ))}
          
          <p className="letter-closing">
            {mockData.letter.closing}
          </p>
          
          <div className="letter-signature">
            <p className="letter-ps">Happy One Year, Babyy.</p>
            <p className="letter-ps">Happy Every 17th,</p>
            <p className="letter-ps">Forever us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
