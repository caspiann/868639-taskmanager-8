import {filterLabels} from "../constants";
import filter from "./create-filter";
import {generateNumber} from "../helpers";

const generateFilterData = (labelNumber) => {
  return {
    label: filterLabels[labelNumber],
    number: generateNumber(0, 20),
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

export const readyFilterList = createFilterTemplateList(filter(), generatefilterDataList(7));
