"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = __importDefault(require("./words"));
class Guess {
    constructor() {
        this.words = (0, words_1.default)();
        this.todaysWord = { index: 0, word: "" };
        this.tomorrowsWord = { index: 0, word: "" };
        this.start = () => {
            let date = new Date();
            let beginDate = new Date("Saturday 19 June 2021");
            const timeDifference = date.getTime() - beginDate.getTime();
            const dayDifference = timeDifference / (1000 * 3600 * 24);
            this.todaysWord = this.getWord(Math.floor(dayDifference))[0];
            this.tomorrowsWord = this.getWord(this.todaysWord.index + 1)[0];
            return this.todaysWord;
        };
        this.getWord = (day) => {
            return this.words
                .map((word, index) => {
                if (index == day) {
                    return { index, word };
                }
                else {
                    return null;
                }
            })
                .filter((item) => item != null);
        };
        this.start();
    }
}
exports.default = Guess;
