import readlineSync from "readline-sync";

export function getUserName() {
  return readlineSync.question("May I have your name? ");
}
