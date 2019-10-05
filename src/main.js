import taskCard from './make-task';
import {mainFilterElement, boardTasksElement} from './constants';
import {readyFilterList, generateTaskCardData, generateNumber} from './data';

const renderFilterList = (filters) => {
  mainFilterElement.innerHTML = ``;
  filters.forEach((f) => {
    mainFilterElement.insertAdjacentHTML(`afterbegin`, f);
  });
};
const renderCards = (cardTemplate, number) => {
  boardTasksElement.innerHTML = ``;
  for (let i = 0; i < number; i++) {
    boardTasksElement.insertAdjacentHTML(`afterbegin`, cardTemplate(generateTaskCardData()));
  }
};
const renderCardsInFilterHandler = (evt) => {
  evt.preventDefault();
  renderCards(taskCard, generateNumber(3, 10));
};

renderFilterList(readyFilterList);
renderCards(taskCard, 7);

mainFilterElement.addEventListener(`click`, renderCardsInFilterHandler);


