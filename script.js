function rollDie() {
  const result = getRandomInt();
  document.getElementById('diceResult').textContent = `You rolled: ${result}`;
}

function getRandomInt() {
  return Math.ceil(Math.random() * 20);
}