const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // Remove the hidden class on the click of the button (display: none will be removed)

  // We can also use this:
  // But not doing it because adding and removing classes is easy as compared to changing individual properties.

  // modal.style.display = 'block';
  // overlay.style.display = 'block';
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

// Stored the value of function in a variable so that we can use that variable in place of function to prevent writing the same code again and again
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Closing the modal window when 'X' is clicked.
btnCloseModal.addEventListener('click', closeModal);

// Closing the modal window when we click outside of the modal.
overlay.addEventListener('click', closeModal);

// Keypress events: Modal will be closed when we enter escape key.
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
