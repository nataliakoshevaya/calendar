function createEventCard() {
  let keys = Object.keys(localStorage);

  keys.forEach(item => {
    if (item !== 'newItem') {
      let data = localStorage.getItem(item);
      let objData = JSON.parse(data);
      let card = document.getElementById(`${item}`);
      console.log(item)
      console.log(card)
      let inner = card.querySelector('.inner');
      const {
        event,
        users
      } = objData;

      users.forEach(user => {
        card.classList.add(`${[user]}`);
      });
      
      card.classList.add('active');
      inner.classList.remove('hide');
      inner.classList.add('draggble-card');
      inner.setAttribute("draggable", true);
      inner.querySelector('.eventname').textContent = `${event}`;
    }
  })
}

export default createEventCard;