function createEventCard() {
  const keys = Object.keys(localStorage);

  keys.forEach((item) => {
    if (item !== 'newItem') {
      const data = localStorage.getItem(item);
      const objData = JSON.parse(data);
      const card = document.getElementById(`${item}`);
      const inner = card.querySelector('.inner');
      const {
        event,
        users,
      } = objData;

      users.forEach((user) => {
        card.classList.add(`${[user]}`);
      });

      card.classList.add('active');
      inner.classList.remove('hide');
      inner.classList.add('draggble-card');
      inner.setAttribute('draggable', true);
      inner.querySelector('.eventname').textContent = `${event}`;
    }
  });
}

export default createEventCard;
