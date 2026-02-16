import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const PasswordGate = ({ onCorrectPassword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normalize the input - accept various formats
    const normalized = input.trim().replace(/\//g, "/");
    const correctAnswer = "11/19/2024";

    if (normalized === correctAnswer) {
      setError(false);
      localStorage.setItem("anniversary_authenticated", "true");
      onCorrectPassword();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="password-gate">
      <div className="password-container">
        <div className="password-content">
          <Heart className="heart-icon" size={48} strokeWidth={1.5} />

          <h1 className="password-title">For My Alyssa Only</h1>

          <p className="password-subtitle">A Private Space Made Just For You</p>

          <form onSubmit={handleSubmit} className={shake ? "shake" : ""}>
            <div className="password-input-group">
              <label htmlFor="password-input" className="password-label">
                What was the date when I first said hi to you?{" "}
              </label>

              <Input
                id="password-input"
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(false);
                }}
                placeholder="MM/DD/YYYY"
                className={`password-input ${error ? "error" : ""}`}
                autoFocus
              />

              {error && (
                <p className="password-error">
                  Not quite, babyy. Think back to our beginning...
                </p>
              )}
            </div>

            <Button type="submit" className="password-submit">
              Enter Our World
            </Button>
          </form>

          <div className="password-footer">
            <p className="password-hint">Different skies. Same love.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
