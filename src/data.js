import {cardClasses, filterLabels} from "./constants";
import filter from "./make-filter";

export const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const generateFilterData = (labelNumber) => {
  return {
    label: filterLabels[labelNumber],
    number: generateNumber(0, 50),
  };
};

const generatefilterDataList = (number) => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push(generateFilterData(i));
  }
  return data;
};

const createFilterTemplateList = (filterTemplate, labels) => {
  const filterList = [];
  labels.forEach((label) => {
    filterList.unshift(filterTemplate(label, generateNumber));
  });
  return filterList;
};

export const readyFilterList = createFilterTemplateList(filter, generatefilterDataList(7));

export const generateTaskCardData = () => {
  return {
    color: cardClasses[0][generateNumber(0, 3)],
    info: cardClasses[1][generateNumber(0, 2)]
  };
};
