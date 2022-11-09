import React from 'react';
import './style.css';

export default function DescriptionPomodoro() {
  return (
    <div className="pomodoroDescription">
      <h1>Um temporizador Pomodoro online para aumentar sua produtividade</h1>

      <h2>O que é a Técnica Pomodoro?</h2>

      <p>
        A Técnica Pomodoro foi criada por Francesco Cirillo para uma forma mais
        produtiva de trabalhar e estudar. A técnica usa um cronômetro para
        dividir o trabalho em intervalos, tradicionalmente de 25 minutos,
        separados por pequenos intervalos. Cada intervalo é conhecido como
        pomodoro, da palavra italiana para &quot;tomate&quot;, em homenagem ao
        cronômetro de cozinha em forma de tomate que Cirillo usou quando
        estudante universitário. -
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </p>

      <h2>Como usar o temporizador Pomodoro?</h2>

      <ol>
        <li>
          1. <strong>Definir pomodoro estimado</strong> (25min) para cada
          tarefa.
        </li>
        <li>
          2. <strong>Inicie o cronômetro</strong> e concentre-se na tarefa.
        </li>
        <li>
          3. <strong>Faça uma pausa</strong> de 5 minutos quando o tempo acabar
        </li>
        <li>
          4. <strong>Repetir</strong> de 3 a 5 vezes até concluir a tarefa
        </li>
      </ol>
    </div>
  );
}
