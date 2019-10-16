import {date} from "../constants";
import {generateNumber} from "../helpers";

const generateTaskDate = () => ({
  month: `${new Date(date()).getDate()} ${new Date(date()).toLocaleString(`en-us`, {month: `long`})}`,
  time: new Date(date()).toLocaleString(`en-us`, {hour: `2-digit`, minute: `numeric`})
});

export const generateTaskCardData = () => {
  return {
    colorList: [`black`, `pink`, `yellow`, `blue`, `green`],
    title: [
      `Prepare for the pitch`,
      `find money for travel`,
      `eat something`,
    ][Math.floor(Math.random() * 3)],
    dueDate: generateTaskDate(),
    tags: new Set([
      `homework`, `theory`, `practice`, `intensive`, `keks`
    ]),
    picture: `//picsum.photos/100/100?r=${Math.random()}`,
    repeatingDays: {
      'mo': true,
      'tu': false,
      'we': true,
      'th': false,
      'fr': false,
      'sa': true,
      'su': false,
    },
    isRepeat: generateNumber(0, 10) > 7,
    isEdit: generateNumber(0, 10) > 7,
    isDeadline: generateNumber(0, 10) > 7,
    isFavorite: generateNumber(0, 1) === 1,
    isDone: generateNumber(0, 1) === 1
  };
};
