import readlineSync from 'readline-sync';

function getUserName() {
  return readlineSync.question('May I have your name? ');
}

export default getUserName;
