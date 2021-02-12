import '../styles/main.scss';
import createTable from './scripts/create-table';
import { openModal, Modal } from './scripts/modal';
import dragNDrop from './scripts/drag-n-drop';
import createEventCard from './scripts/craete-event';
import filterUsers from './scripts/filter';

const table = document.querySelector('.table');
const day = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const time = ['', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

createTable(table, day, time);

const closeBtns = document.querySelectorAll('.close-btn');

closeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target || e.target.classList.contains('close-btn')) {
      const parent = e.target.parentNode;
      openModal('.modal');
      Modal(parent, '.btn--yes', '.btn--no', '.modal');
    }
  });
});

createEventCard();

const addEvBtn = document.querySelector('.header__btn');

addEvBtn.addEventListener('click', () => {
  document.location.href = 'form.html';
});

filterUsers('.active', '#filter');

dragNDrop();
