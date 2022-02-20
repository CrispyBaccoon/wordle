"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const guess_1 = __importDefault(require("./guess"));
const guess = new guess_1.default();
const line = [
    chalk_1.default.green("Today's Word is " + `${chalk_1.default.cyanBright('"' + guess.todaysWord.word + '"')}`),
    chalk_1.default.green("Tomorrow's Word will be " +
        `${chalk_1.default.white('"' + guess.tomorrowsWord.word + '"')}`),
    chalk_1.default.green("Yesterday's Word was " +
        `${chalk_1.default.white('"' + ((_a = guess.getWord(guess.todaysWord.index - 1)[0]) === null || _a === void 0 ? void 0 : _a.word) + '"')}`),
];
console.log(line.join(`${chalk_1.default.white(".")}\n`) + chalk_1.default.white("."));
