import createEventCard from './craete-event';

function dragNDrop() {
  const droppable = document.querySelectorAll('.droppable');

  function dragStart() {
    setTimeout(() => {
      this.classList.remove('active');
      this.querySelector('.inner').classList.add('hide');
      const id = this.getAttribute('id');
      const obj = localStorage.getItem(id);
      localStorage.setItem('newItem', obj);
    }, 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }

  function dragLeave() {
    this.classList.remove('hovered');
  }

  function dragDrop() {
    this.classList.remove('hovered');

    this.classList.add('active');
    this.querySelector('.inner').classList.remove('hide');
    const newId = this.getAttribute('id');
    const obj = JSON.parse(localStorage.getItem('newItem'));
    const { time } = obj;
    const { day } = obj;

    const newDay = newId.slice(0, 3);
    const newTime = newId.slice(3);

    const newData = JSON.stringify(
      {
        event: `${obj.event}`,
        day: `${newDay}`,
        users: [...obj.users],
        time: `${newTime}`,
      },
    );

    localStorage.setItem(`${newDay}${newTime}`, newData);
    localStorage.removeItem(`${day}${time}`);

    createEventCard();
  }

  droppable.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
  });
}

export default dragNDrop;
