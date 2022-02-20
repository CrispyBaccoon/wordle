import chalk from "chalk";
import Guess from "./guess";

const guess = new Guess();

const line: string[] = [
  chalk.green(
    "Today's Word is " + `${chalk.cyanBright('"' + guess.todaysWord.word + '"')}`
  ),
  chalk.green(
    "Tomorrow's Word will be " +
      `${chalk.white('"' + guess.tomorrowsWord.word + '"')}`
  ),
  chalk.green(
    "Yesterday's Word was " +
      `${chalk.white(
        '"' + guess.getWord(guess.todaysWord.index - 1)[0]?.word + '"'
      )}`
  ),
];

console.log(line.join(`${chalk.white(".")}\n`) + chalk.white("."));
