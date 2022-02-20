import Aa from "./words";

type Word = { index: number; word: string };

export default class Guess {
  constructor() {
    this.start();
  }

  words: string[] = Aa();
  todaysWord: Word = { index: 0, word: "" };
  tomorrowsWord: Word = { index: 0, word: "" };

  start = () => {
    let date = new Date();
    let beginDate = new Date("Saturday 19 June 2021");

    const timeDifference = date.getTime() - beginDate.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    this.todaysWord = this.getWord(Math.floor(dayDifference))[0] as Word;
    this.tomorrowsWord = this.getWord(this.todaysWord.index + 1)[0] as Word;

    return this.todaysWord;
  };

  getWord = (day: number) => {
    return this.words
      .map((word: string, index: number) => {
        if (index == day) {
          return { index, word };
        } else {
          return null;
        }
      })
      .filter((item: { index: number; word: string } | null) => item != null);
  };
}
