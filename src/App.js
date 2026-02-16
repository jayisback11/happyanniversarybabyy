import { useState, useEffect } from "react";
import "@/App.css";
import PasswordGate from "@/components/PasswordGate";
import HomePage from "@/components/HomePage";
import OurStory from "@/components/OurStory";
import TheSeventeenth from "@/components/TheSeventeenth";
import LoveLetter from "@/components/LoveLetter";
import FutureUs from "@/components/FutureUs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem('anniversary_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleCorrectPassword = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordGate onCorrectPassword={handleCorrectPassword} />;
  }

  return (
    <div className="App">
      <main className="main-content">
        <HomePage />
        <LoveLetter />
        <OurStory />
        <TheSeventeenth />
        <FutureUs />
      </main>
      
      <footer className="site-footer">
        <p className="footer-text">Different skies. Same love.</p>
        <p className="footer-date">February 17, 2025 — Forever</p>
      </footer>
    </div>
  );
}

export default App;
