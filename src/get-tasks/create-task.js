import {
  cardControl,
  cardColorBar,
  cardTextarea,
  cardDateDeadline,
  cardRepeat,
  cardHashTagList,
  cardPicture,
  currentCardColor,
  cardColors,
  statusBtns
} from "./task-template-parts";

export default (data) => {
  const {isEdit, isDone, isFavorite, title, isDeadline, dueDate, isRepeat, repeatingDays, tags, picture, colorList} = data;
  let cardColor = currentCardColor(colorList);
  return `
    <article class="
        card card--${cardColor} 
        ${data.isEdit ? `card--edit` : ``} 
        ${data.isRepeat ? `card--repeat` : ``} 
        ${data.isDeadline ? `card--deadline` : ``}
     ">
       <form class="card__form" method="get">
         <div class="card__inner">
            ${cardControl(isEdit, isDone, isFavorite)}
            ${cardColorBar()}
            ${cardTextarea(title)}
            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  ${cardDateDeadline(isDeadline, dueDate)}
                  ${cardRepeat(isRepeat, repeatingDays)}
                </div>
                <div class="card__hashtag">
                  ${cardHashTagList(tags)}
                </div>
              </div>
              ${cardPicture(picture)}
              ${cardColors(colorList, cardColor)}
            </div>
            ${statusBtns()}
        </div>
       </form>
    </article>
  `;
};
