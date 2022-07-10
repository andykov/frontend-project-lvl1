import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

function getUserName() {
  const message = 'May I have your name? ';
  const username = readlineSync.question(message);
  return username || getUserName();
}

export default getUserName;
