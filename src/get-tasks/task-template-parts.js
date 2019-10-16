import {generateNumber} from "../helpers";

export const currentCardColor = (colors) => colors[generateNumber(0, 4)];

export const cardControl = (edit, done, favorite) => `
  <div class="card__control">
    <button type="button" class="card__btn card__btn--edit ${edit ? `` : `card__btn--disabled`}">
      edit
    </button>
    <button type="button" class="card__btn card__btn--archive ${done ? `` : `card__btn--disabled`}">
      archive
    </button>
    <button
      type="button"
      class="card__btn card__btn--favorites ${favorite ? `` : `card__btn--disabled`}">
      favorites
    </button>
  </div>
`;

export const cardColorBar = () => `
  <div class="card__color-bar">
  <svg class="card__color-bar-wave" width="100%" height="10">
    <use xlink:href="#wave"></use>
  </svg>
</div>
`;

export const cardTextarea = (title) => `
  <div class="card__textarea-wrap">
    <label>
      <textarea
        class="card__text"
        placeholder="Start typing your text here..."
        name="text"
      >${title}
      </textarea>
    </label>
  </div>
`;

export const cardDateDeadline = (deadline, date) => `
    <button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${deadline ? `yes` : `no`}</span>
    </button>
    <fieldset class="card__date-deadline" ${deadline ? `` : `disabled`} >
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder="${date.month}"
          name="date"
        />
      </label>
      <label class="card__input-deadline-wrap">
        <input
          class="card__time"
          type="text"
          placeholder="${date.time}"
          name="time"
        />
      </label>
    </fieldset>
`;

export const cardRepeat = (repeat, days) => {
  const dayList = Object.keys(days);
  const repeatDayList = dayList.map((day, index) => `
  <input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${day}-${index}"
      name="repeat"
      value="${day}"
      ${days[`${day}`] ? `checked` : ``}
    />
    <label class="card__repeat-day" for="repeat-${day}-${index}"
      >${day}</label
    >
  `).join(``);
  return `
  <button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">${repeat ? `yes` : `no`}</span>
  </button>
  <fieldset class="card__repeat-days" ${repeat ? `` : `disabled`} >
    <div class="card__repeat-days-inner">
      ${repeatDayList}
    </div>
  </fieldset>
  `;
};

export const cardHashTagList = (tags) => {
  const getTags = () => {
    let tagList = [];
    for (let i = 0; i < generateNumber(2, 4); i++) {
      tagList.push([...tags][i]);
    }
    return tagList;
  };
  const hashTagList = getTags().map((tag) => `
      <span class="card__hashtag-inner">
        <input
          type="hidden"
          name="hashtag"
          value="repeat"
          class="card__hashtag-hidden-input"
        />
        <button type="button" class="card__hashtag-name">
          #${tag}
        </button>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
     </span>
    `).join(``);
  return `
  <div class="card__hashtag-list">
    ${hashTagList}
  </div>
  `;
};

export const cardPicture = (img) => {
  return `
  <label class="card__img-wrap ${img ? `` : `card__img-wrap--empty`}">
    <input
      type="file"
      class="card__img-input visually-hidden"
      name="img"
    />
    <img
      src="${img}"
      alt="task picture"
      class="card__img"
    />
  </label>
  `;
};

export const cardColors = (colors, currentColor) => {
  const generateColorList = colors.map((color, index) => `
    <input
      type="radio"
      id="color-${color}-${index}"
      class="card__color-input card__color-input--${color} visually-hidden"
      name="color"
      value="${color}"
      ${currentColor === color ? `checked` : ``}
    />
    <label
      for="color-${color}-${index}"
      class="card__color card__color--${color}"
      >${color}</label
    >
  `).join(``);

  return `
    <div class="card__colors-inner">
      <h3 class="card__colors-title">Color</h3>
      <div class="card__colors-wrap">
           ${generateColorList}
      </div>
  </div>
  `;
};

export const statusBtns = () => `
  <div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>
`;
