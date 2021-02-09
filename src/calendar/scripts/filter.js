function filterUsers(activeCardSelector, dropdownSelector) {
    const  activeCard = document.querySelectorAll(activeCardSelector);
    const dropdown = document.querySelector(dropdownSelector);
    dropdown.addEventListener('input', () => {
     
      let filter = dropdown.value;
      activeCard.forEach(item => {
        if(item.classList.contains(filter)) {
          item.classList.add('active');
          item.querySelector('.inner').classList.remove('hide')
        } else if (filter === 'all') {
          item.querySelector('.inner').classList.remove('hide');
          item.classList.add('active');
        } else {
          item.classList.remove('active');
          item.querySelector('.inner').classList.add('hide')
        }
     });
  });
}

export default filterUsers;
