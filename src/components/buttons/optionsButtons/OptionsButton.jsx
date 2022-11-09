import React from 'react';
import './style.css';
import '../../scripts/Scripts';

export default function OptionsSettings() {
  return (
    <div className="options">
      <button type="button" id="pomodoro" className="option-button">
        Pomodoro
      </button>
      <button type="button" id="short-break" className="option-button">
        Short Break
      </button>
      <button type="button" id="long-break" className="option-button">
        Long Break
      </button>
    </div>
  );
}
