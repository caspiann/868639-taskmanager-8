'use strict';

const mainFilterElement = document.querySelector(`.main__filter`);
const filterLabels = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];
const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createFilterTemplate = (label, number) => {
  return `
  <input
      type="radio"
      id="filter__${label}"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__${label}" class="filter__label">
      ${label.toUpperCase()} <span class="filter__${label}-count">${number(0, 100)}</span></label
    >
  `;
};

const createFilterTemplateList = (listTemplate, labels) => {
  const filterList = [];
  labels.forEach((label) => {
    filterList.push(listTemplate(label, generateNumber));
  });
  return filterList;
};

const renderFilterList = (filters) => {
  mainFilterElement.innerHTML = ``;
  filters.forEach((filter) => {
    mainFilterElement.insertAdjacentHTML(`afterbegin`, filter);
  });
};

const readyFilterList = createFilterTemplateList(createFilterTemplate, filterLabels);

renderFilterList(readyFilterList);

