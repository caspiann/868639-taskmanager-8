export const mainFilterElement = document.querySelector(`.main__filter`);
export const boardTasksElement = document.querySelector(`.board__tasks`);

export const filterLabels = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];

export const date = () => Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000;
