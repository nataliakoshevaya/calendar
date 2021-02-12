import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

const form = document.getElementById('form');

const membersBlock = document.querySelector('#checkbox');
const membersTitle = document.querySelector('.members__title');
const membersWrapper = document.querySelector('.members');
const id = document.querySelector('#checkbox');
const input = document.querySelectorAll('.memb__input');

document.addEventListener('click', (e) => {
  const { target } = e;
  if (target === membersTitle || target === membersWrapper) {
    if (id.getAttribute('data-state') === 'active') {
      membersBlock.classList.remove('members__checkboxs');
      membersBlock.classList.add('hide');
      id.setAttribute('data-state', '');
    } else {
      membersBlock.classList.remove('hide');
      membersBlock.classList.add('members__checkboxs');
      id.setAttribute('data-state', 'active');
    }
  } else if (target && target.classList.contains('member__label') === false && target.classList.contains('memb__input') === false) {
    membersBlock.classList.remove('members__checkboxs');
    membersBlock.classList.add('hide');
    id.setAttribute('data-state', '');
  }
});

function addUsers(arr) {
  input.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.checked && !arr.includes(item.value)) {
        arr.push(item.value);
      } else {
        const index = arr.indexOf(item.value);
        arr.splice(index, 1);
      }
      const str = arr.join(', ');
      membersTitle.innerHTML = arr.length > 0 ? `${str}` : 'Select participants';
    });
  });
}

const users = [];

addUsers(users);

const day = document.querySelector('#day');
const time = document.querySelector('#time');
const event = document.querySelector('#event');
const errorBlock = document.querySelector('.error');
const errorBtn = document.querySelector('.error__btn');
const closeBtn = document.querySelector('#btn-close');
const createBtn = document.querySelector('#btn-create');
const inputEv = document.querySelector('.form__input');
const error = document.querySelector('.error__title');

function hideErrorMessage() {
  errorBlock.classList.add('hide');
}

function errorMessage() {
  errorBlock.classList.remove('hide');
  errorBtn.addEventListener('click', () => {
    hideErrorMessage();
  });
}

form.addEventListener('click', (e) => {
  const { target } = e;
  if (target && target === closeBtn) {
    e.preventDefault();
    document.location.href = 'calendar.html';
  }
  if (target && target === createBtn) {
    e.preventDefault();
    const data = JSON.stringify({
      event: `${event.value}`,
      day: `${day.value}`,
      users: [...users],
      time: `${time.value}`,
    });

    const keys = Object.keys(localStorage);

    if (keys.indexOf(`${day.value}${time.value}`) !== -1) {
      errorMessage();
      setTimeout(hideErrorMessage, 5000);
    } else if (inputEv.value === '') {
      error.textContent = 'Fill this field!';
      errorMessage();
      setTimeout(hideErrorMessage, 5000);
    } else if (users.length === 0) {
      error.textContent = 'Select the participants!';
      errorMessage();
      setTimeout(hideErrorMessage, 5000);
    } else {
      document.location.href = 'calendar.html';
      localStorage.setItem(`${day.value}${time.value}`, data);
    }
  }
});
