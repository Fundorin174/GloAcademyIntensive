let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];



// function hover() {
//   heading.textContent = 'Реально все'
// }
// function out() {
//   heading.textContent = 'Все включено'
// }
// function choose() {
//   if (heading == 'Все включено') {
//      hover()
//   }
   
//   else if (heading == 'Реально все') {
//     out()
//   }
  
// }
heading.addEventListener('click', function(){
if (heading.textContent == 'Все включено') {
  heading.textContent = 'Реально все';
} else {
  heading.textContent = 'Все включено';
}
});


// heading.addEventListener('click', hover); 
// heading.addEventListener('dblclick', out);
// heading.removeEventListener('mouseenter', hover);

receiveBtn.addEventListener('click', function() {
  modal.style.display = 'block'
});

// close.addEventListener('click', function() {
//   modal.style.display = 'none'
// });
// Или можно по-другому:
function closeModal(){
  modal.style.display = 'none'
};
close.addEventListener('click', closeModal);


nameInput.addEventListener('input', function(){
  text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить:';

  if (nameInput.value == '') {
    text.value = ''
  }
})