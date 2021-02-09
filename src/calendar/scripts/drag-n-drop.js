import createEventCard from './craete-event';

function dragNDrop() {
    const droppable = document.querySelectorAll('.droppable');
  
    const dragStart = function () {
      setTimeout(() => {
        this.classList.remove('active');
        this.querySelector('.inner').classList.add('hide');
        const id = this.getAttribute('id');
        const obj = localStorage.getItem(id);
        localStorage.setItem('newItem', obj);
      }, 0);
  
    };
  
    // const dragEnd = function() {
    //   setTimeout(() => {
    //     this.classList.add('active');
    //     this.querySelector('.inner').classList.remove('hide');
    //   }, 0);
    // };
  
    const dragOver = function (e) {
      e.preventDefault();
    };
  
    const dragEnter = function (e) {
      e.preventDefault();
      this.classList.add('hovered');
    };
  
    const dragLeave = function () {
      this.classList.remove('hovered');
    };
  
    const dragDrop = function (e) {
      this.classList.remove('hovered');
  
      this.classList.add('active');
      this.querySelector('.inner').classList.remove('hide');
      const newId = this.getAttribute('id');
      let obj = JSON.parse(localStorage.getItem('newItem'));
      const time = obj.time;
      const day = obj.day;
   
      const newDay = newId.slice(0, 3);
      const newTime = newId.slice(3);
  
      let newData = JSON.stringify(
        {
          'event': `${obj.event}`,
          'day': `${newDay}`,
          'users': [...obj.users],
          'time': `${newTime}`
        }
      )
  
      
      localStorage.setItem(`${newDay}${newTime}`, newData);
      localStorage.removeItem(`${day}${time}`);

      createEventCard();
    };
  
    droppable.forEach(item => {
      item.addEventListener('dragstart', dragStart);
    //   item.addEventListener('dragend', dragEnd);
      item.addEventListener('dragover', dragOver);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('dragleave', dragLeave);
      item.addEventListener('drop', dragDrop);
    });
}
  
export default dragNDrop;