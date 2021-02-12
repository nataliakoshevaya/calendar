function createTable(table, day, time) {
  for (let row = 0; row < time.length; row += 1) {
    const newRow = document.createElement('tr');
    newRow.setAttribute('data-row', `row-${time[row]}`);

    for (let cell = 0; cell < day.length; cell += 1) {
      const newCell = document.createElement('td');
      if (row === 0) {
        newCell.setAttribute('id', `id-${time[row].toLowerCase()}`);
        newCell.innerHTML = `${day[cell]}`;
      } else if (cell === 0) {
        newCell.setAttribute('id', `${time[row].toLowerCase()}`);
        newCell.innerHTML = `${time[row]}`;
      } else {
        newCell.setAttribute('id', `${day[cell].toLowerCase()}${time[row]}`);
        newCell.classList.add('droppable');
        const inner = document.createElement('div');
        const btn = document.createElement('button');
        btn.classList.add('btn', 'close-btn');
        btn.textContent = 'x';
        inner.classList.add('inner', 'hide');
        inner.setAttribute('id', `${day[cell].toLowerCase()}${time[row]}`);
        const eventName = document.createElement('span');
        eventName.classList.add('eventname');
        newCell.append(inner);
        inner.append(eventName);
        inner.append(btn);
      }
      newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
  }
}

export default createTable;
