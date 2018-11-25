let username = prompt ('Имя, сестра?', 'Валькирия'),
    tel = prompt ('Даш телефончик?', '02'),
    email = prompt ('Ну и почту тоже', 'dura@mail.com');


let chooseBtn = document.getElementById('choose'),
  receiveBtn = document.getElementById('receive'),
  heading = document.getElementsByTagName('h2')[0],
  nameInput = document.getElementsByClassName('contactform_name')[0],
  phoneInput = document.querySelectorAll('.contactform_phone')[1],
  mailInput = document.querySelectorAll('.contactform_mail')[0],
  modal = document.querySelector('.modal'),
  close = document.querySelector('.close'),
  text = document.getElementsByName('message')[0];

  nameInput.value = username;
  phoneInput.value = tel;
  let emailInput = document.querySelectorAll('.contactform_mail')[1];
  emailInput.value = email;
console.log(phoneInput);
// Это по заданию:
// function hover() {
//   heading.textContent = 'Реально все'
// }
// function out() {
//   heading.textContent = 'Все включено'
// }
// heading.addEventListener('click', hover); 
// heading.addEventListener('dblclick', out);

// А вот так интереснее:
heading.addEventListener('click', function () {
  if (heading.textContent == 'Все включено') {
    heading.textContent = 'Реально все';
  } else {
    heading.textContent = 'Все включено';
  }
});

receiveBtn.addEventListener('click', function () {
  modal.style.display = 'block'
});

// Это по заданию:
// close.addEventListener('click', function() {
//   modal.style.display = 'none'
// });

// Или можно по-другому:
function closeModal() {
  modal.style.display = 'none'
};
close.addEventListener('click', closeModal);

text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить:';
nameInput.addEventListener('input', function () {
  text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить:';

  if (nameInput.value == '') {
    text.value = ''
  }
})