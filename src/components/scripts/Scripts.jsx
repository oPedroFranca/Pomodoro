import '../buttons/settingsButton/SettingsButton';

window.onload = () => {
  const timerText = document.getElementById('timerText');
  const html = document.querySelector('html');

  let minutes = 25;
  let seconds = 0;
  let pomodoroMinutes = 25;
  let shortBreakMinutes = 5;
  let longBreakMinutes = 15;
  let namePressedButton = 'pomodoro'; // Nome do botão que está pressionado (pomodoro - short break - Long break), por padrão já está iniciado com pomodoro.

  function zeroLeft(time) {
    return time < 10 ? `0${time}` : time; // Insere um 0 a esquerda caso os valores forem menores que 10
  }

  timerText.innerHTML = `${zeroLeft(minutes)}:00`;

  // ------------------------------StartStopButton------------------------------
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  let countdown;

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline';

    // um setInterval que executa a cada 1 segundo
    // que faz o decremento de 1 em um das variaveis MINUTES e SECONDS
    countdown = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        if (namePressedButton === 'pomodoro') minutes = pomodoroMinutes;
        else if (namePressedButton === 'shortBreak')
          minutes = shortBreakMinutes;
        else minutes = longBreakMinutes;

        startBtn.style.display = 'inline';
        stopBtn.style.display = 'none';
        clearInterval(countdown);
      } else if (seconds !== 0) {
        seconds--;
      } else {
        seconds = 59;
        minutes--;
      }

      timerText.innerHTML = `${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
    }, 1000);

    // ao apertar o botão STOP o programa pausa
    stopBtn.addEventListener('click', () => {
      clearInterval(countdown);
      stopBtn.style.display = 'none';
      startBtn.style.display = 'inline';
    });
  });
  // ---------------------------------------------------------------------------

  // ---------------------------------- MODAL ----------------------------------
  const settingsButton = document.getElementById('settings-button');

  settingsButton.addEventListener('click', () => {
    clearInterval(countdown);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'inline';

    // um setTimeout que executa depois de um segundo,
    // adicionando o evento a baixo, coloquei dentro de um setInterval,  pois o
    // addEventListener estava sendo lido antes de carregar completamento o modal
    // que estava carregando depois dos scripts.
    // Causando um erro na ordem de leitura do código
    // Erro TypeError: Cannot read properties of null (reading 'addEventListener')
    setTimeout(() => {
      const okButton = document.getElementById('ok-button');

      okButton.addEventListener('click', () => {
        const pomodoroValue = document.getElementById('input-pomodoro').value;
        const shortBreakValue =
          document.getElementById('input-short-break').value;
        const longBreakValue =
          document.getElementById('input-long-break').value;

        // Pega o valor que o usuário inserir em um ou mais inputs,
        // caso o input estiver em branco ele mantém o valor
        if (pomodoroValue !== '') pomodoroMinutes = pomodoroValue;
        if (shortBreakValue !== '') shortBreakMinutes = shortBreakValue;
        if (longBreakValue !== '') longBreakMinutes = longBreakValue;

        // Verifica qual o botão está pressionado e atualiza o minutes
        if (namePressedButton === 'pomodoro') minutes = pomodoroMinutes;
        else if (namePressedButton === 'shortBreak')
          minutes = shortBreakMinutes;
        else minutes = longBreakMinutes;

        seconds = 0;
        timerText.innerHTML = `${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
      });
    }, 1000);
  });
  // ---------------------------------------------------------------------------

  // ----------------pomodoro - shortBreak - longBreak - Buttons----------------
  const buttons = document.querySelectorAll('.option-button');

  // Cria o efeito de botão pressionado mudando o estilo dos elementos
  function styleButtons(name) {
    // um laço que percorre a variavel BUTTONS
    // e aplica os estilos de botao pressionado
    for (let i = 0; i < 3; i++) {
      if (buttons[i] === name) {
        buttons[i].style.backgroundColor = 'var(--light-grey-color)';
        buttons[i].style.fontWeight = 'bold';
        continue;
      }
      buttons[i].style.backgroundColor = 'var(--grey-color)';
      buttons[i].style.fontWeight = '500';
    }

    seconds = 0;
    clearInterval(countdown);
    startBtn.style.display = 'inline';
    stopBtn.style.display = 'none';
  }

  function modalIsOpen(nameTag) {
    minutes = nameTag;
    timerText.innerHTML = `${zeroLeft(minutes)}:00`;
  }

  // botao pomodoro
  buttons[0].addEventListener('click', () => {
    namePressedButton = 'pomodoro'; // recebe o nome do botão pressionado
    html.classList = 'pomodoro-color'; // muda o estilo da pagina
    modalIsOpen(pomodoroMinutes); // ao pressionar o botao pomodoro a variavel MINUTES recebe o minuto inserido no modal e printa na tela
    styleButtons(buttons[0]); // passa o botão que vai ficar com o efeito de pressionado
  });

  // botao short break
  buttons[1].addEventListener('click', () => {
    namePressedButton = 'shortBreak';
    html.classList = 'short-break-color';
    modalIsOpen(shortBreakMinutes);
    styleButtons(buttons[1]);
  });

  // botao long break
  buttons[2].addEventListener('click', () => {
    namePressedButton = 'longBreak';
    html.classList = 'long-break-color';
    modalIsOpen(longBreakMinutes);
    styleButtons(buttons[2]);
  });

  // -------------------------------------------------------------------------
};
