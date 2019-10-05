const filter = () => (data) => {
  return `
  <input
      type="radio"
      id="filter__${data.label}"
      class="filter__input visually-hidden"
      name="filter"
      ${data.label === `all` ? `checked` : ``}
      ${data.number === 0 ? `disabled` : ``}
    />
    <label for="filter__${data.label}" class="filter__label">
      ${data.label.toUpperCase()} <span class="filter__${data.label}-count">${data.number}</span></label
    >
  `;
};

export default filter();
