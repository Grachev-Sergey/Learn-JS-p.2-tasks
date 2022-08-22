// Сделать поле ввода с кнопкой, при нажатии на которую текст из инпута появляется в кнопке, дефолтный текст кнопки "опубликовать"

const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  let inputValue = input.value;
  button.value = inputValue;
  input.value = '';
});