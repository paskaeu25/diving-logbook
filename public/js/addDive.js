const addDiveBtn = document.querySelector('#addDive');
const form = document.querySelector('#logDiveForm');

const toggleButtons = () => {
  form.classList.toggle('hidden');
};

addDiveBtn.addEventListener('click', toggleButtons);
