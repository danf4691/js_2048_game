'use strict';

// Uncomment the next lines to use your game instance in the browser
import Game from '../modules/Game.class';

const game = new Game();

window.game = game;

game.initDom();

const startButton = document.querySelector('.start');
const startMessage = document.querySelector('.message-start');
const winMessage = document.querySelector('.message-win');
const loseMessage = document.querySelector('.message-lose');

startButton.addEventListener('click', () => {
  if (startButton.classList.contains('start')) {
    startButton.classList.remove('start');
    startButton.classList.add('restart');
    startButton.textContent = 'Restart';
    game.start();
    updateUI();
  } else {
    startButton.classList.remove('restart');
    startButton.classList.add('start');
    startButton.textContent = 'Start';
    game.restart();
    updateUI();
  }
});

document.addEventListener('keydown', (e) => {
  if (game.getStatus() !== 'playing') {
    return;
  }

  if (e.key === 'ArrowLeft') {
    game.moveLeft();
  }

  if (e.key === 'ArrowRight') {
    game.moveRight();
  }

  if (e.key === 'ArrowUp') {
    game.moveUp();
  }

  if (e.key === 'ArrowDown') {
    game.moveDown();
  }

  updateUI();
  game._render();
});

function updateUI() {
  if (game.getStatus() === 'win') {
    hideAllMessages();
    winMessage.classList.remove('hidden');
  }

  if (game.getStatus() === 'lose') {
    hideAllMessages();
    loseMessage.classList.remove('hidden');
  }

  if (game.getStatus() === 'idle') {
    hideAllMessages();
    startMessage.classList.remove('hidden');
  }

  if (game.getStatus() === 'playing') {
    hideAllMessages();
  }
}

function hideAllMessages() {
  startMessage.classList.add('hidden');
  winMessage.classList.add('hidden');
  loseMessage.classList.add('hidden');
}
