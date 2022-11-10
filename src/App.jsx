import React from 'react';
import './App.css';
import './components/style/globalStyle.css';
import './components/style/animations.css';

import SettingsButton from './components/buttons/settingsButton/SettingsButton';
import OptionsButton from './components/buttons/optionsButtons/OptionsButton';
import StartStopButton from './components/buttons/startStopButton/StartStopButton';
import DescriptionPomodoro from './components/descriptionPomodoro/DescriptionPomodoro';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pomodoro</h1>
        <span />
      </header>

      <main>
        <SettingsButton />

        <div className="container ">
          <div className="containerTimer">
            <OptionsButton />

            <h1 id="timerText" className="timer">
              00:00
            </h1>

            <div className="buttons-options">
              <StartStopButton />
            </div>
          </div>
        </div>

        <div className="description">
          <DescriptionPomodoro />
        </div>
      </main>

      <footer>
        <div id="icon-links">
          <a href="https://github.com/oPedroFranca" target="_blank" rel="noreferrer">
            <ion-icon name="logo-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-henrique-frança/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin" />
          </a>
        </div>

        <p>
          Create by <strong>Pedro Henrique</strong>
        </p>

        <p className="copyright">©Pomodoro 2022. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
