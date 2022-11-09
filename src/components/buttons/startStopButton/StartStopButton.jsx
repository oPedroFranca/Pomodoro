import React from 'react';
import './style.css';
import '../../scripts/Scripts';

export default function StartButton() {
  return (
    <div className="startStopButtons">
      <button type="button" id="start" className="start-button" href="#">
        Start
      </button>

      <button type="button" id="stop" className="stop-button" href="#" hidden>
        Stop
      </button>
    </div>
  );
}
