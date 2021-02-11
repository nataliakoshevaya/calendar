import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';


const form = document.getElementById('form');

const selectInput = document.querySelector('.members_block'),
    membersBlock = document.querySelector('#checkbox'),
    membersTitle = document.querySelector('.members__title'),
    membersWrapper = document.querySelector('.members'),
    id = document.querySelector('#checkbox'),
    input = document.querySelectorAll('.memb__input');

document.addEventListener('click', (e) => {
    let target = e.target;
    if (target === membersTitle || target === membersWrapper) {
        if ('active' === id.getAttribute('data-state')) {
            membersBlock.classList.remove('members__checkboxs')
            membersBlock.classList.add('hide')
            id.setAttribute('data-state', '')
        } else {
            membersBlock.classList.remove('hide')
            membersBlock.classList.add('members__checkboxs')
            id.setAttribute('data-state', 'active')
        }
    } else if (target && target.classList.contains('member__label') === false && target.classList.contains('memb__input') === false) {
        membersBlock.classList.remove('members__checkboxs')
        membersBlock.classList.add('hide')
        id.setAttribute('data-state', '')
    }
})



function addUsers(arr) {
    input.forEach((item) => {
        
        item.addEventListener('change', () => {
            
            if (item.checked && !arr.includes(item.value)) {
                // item = `${item.value.charAt(0).toUpperCase()}${item.value.slice(1)}`
                arr.push(item.value);
            } else {

                let index = arr.indexOf(item.value);
                arr.splice(index, 1);
            }
            let str = arr.join(', ')

            membersTitle.innerHTML = arr.length > 0 ? `${str}` : "Select participants"
        })
    })
}


let users = [];

addUsers(users);

const day = document.querySelector('#day'),
    time = document.querySelector('#time'),
    event = document.querySelector('#event'),
    errorBlock = document.querySelector('.error'),
    errorBtn = document.querySelector('.error__btn'),
    closeBtn = document.querySelector('#btn-close'),
    createBtn = document.querySelector('#btn-create'),
    inputEv = document.querySelector('.form__input'),
    error = document.querySelector('.error__title');

    
function errorMessage() {
    errorBlock.classList.remove('hide');
    errorBtn.addEventListener('click', () => {
            errorBlock.classList.add('hide')
    })
}

function hideError() {
    errorBlock.classList.add('hide')
}


form.addEventListener('click', (e) => {
    let target = e.target;
    if(target && target === closeBtn) {
        e.preventDefault();
        document.location.href = 'calendar.html';
    }
    if(target && target === createBtn) {
        e.preventDefault();
        let data = JSON.stringify({
            'event': `${event.value}`,
            'day': `${day.value}`,
            'users': [...users],
            'time': `${time.value}`
        })

        
        
        let keys = Object.keys(localStorage);
    
        if(keys.indexOf(`${day.value}${time.value}`) != -1) {
            errorMessage();
            setTimeout(hideError, 2000);
        } else {
            document.location.href = 'calendar.html';
            localStorage.setItem(`${day.value}${time.value}`, data)
        }
    }
})
