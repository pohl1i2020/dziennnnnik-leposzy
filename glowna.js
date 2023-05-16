const form = document.querySelector('form');
const personName = document.querySelector('#person-name');
const personSubname = document.querySelector('#person-subname');
const klasa = document.querySelector('#klasa');
const company = document.querySelector('#company');
const rokSzkolny = document.querySelector('#rok-szkolny');
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const logbook = document.querySelector('#logbook');
const editButton = document.querySelector('#edit-button');

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const logbookContent = `
    <fieldset>
    <legend>Dane Ucznia i Praktyk</legend>
    <p>Imię: <strong><font color="#00FF00">${personName.value}</font></strong></p>
    <p>Nazwisko: <strong><font color="#00FF00">${personSubname.value}</font></strong></p>
    <p>Klasa: <strong><font color="#00FF00">${klasa.value}</font></strong></p>
    <p>Miejsce Praktyki: <strong><font color="#00FF00">${company.value}</font></strong></p>
    <p>Rok Szkolny: <strong><font color="#00FF00">${rokSzkolny.value}</font></strong></p>
    <p>Data Rozpoczęcia: <strong><font color="#00FF00">${startDate.value}</font></strong></p>
    <p>Data Zakończenia: <strong><font color="#00FF00">${endDate.value}</font></strong></p>
    </fieldset>
  `;
	display.innerHTML = logbookContent;
	form.classList.add('hidden');
	display.classList.remove('hidden');
	editButton.classList.remove('hidden');
});

const display = document.createElement('div');
display.classList.add('hidden');
logbook.appendChild(display);

editButton.addEventListener('click', () => {
	form.classList.remove('hidden');
	display.classList.add('hidden');
	editButton.classList.add('hidden');
});