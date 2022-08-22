// Сделать инпут который при потере фокуса выдает alert "ждем возвращения"

const input = document.querySelector('input');

input.addEventListener('blur', () => {
  alert('ждем возвращения');
});