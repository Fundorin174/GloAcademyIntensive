window.addEventListener('DOMContentLoaded', function(){
// Получаем инфо со страницы
  let products = document.querySelectorAll('.product'),
      buttons = document.getElementsByTagName('button'),
      open = document.getElementsByClassName('open')[0];
      // shop = document.querySelector('shop');

      for(let i=0; i<buttons.length; i++) {
        buttons[i].classList.add('buyButton');
      }

      buttons = document.getElementsByClassName('buyButton');
// Функция для создания корзины
      function createCard(){
        // Создание элементов корзины
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            close = document.createElement('button');
        //Подключение стилей к элементам корзины 
        cart.classList.add('cart');
        field.classList.add('cart-field');
        close.classList.add('close');

        // Наполнение элементов содержимым
        close.textContent = 'Закрыть';
        heading.textContent = 'В нашей корзине:'

        // Добавление созданных документов в конец html документа
        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(close);
      }

    createCard();

    let cart = document.querySelector('.cart'),
        field = document.querySelector('.cart-field'),
        close = document.querySelector('.close');

      // Закрепление обработчика события клика за каждой из кнопок "Купить"
      for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
          // Создание копии карточки с товаром
          let item = products[i].cloneNode(true),
              btn = item.querySelector('button');
              // Добавить карточку в корзину
              field.appendChild(item);
              // Удалить карточку из магазина
              products[i].remove();
              // Надпись на кнопке в корзине меняется на "Убрать из корзины" 
              btn.textContent = 'Убрать из корзины';
              // Размер кнопки в корзине увеличивается
              function BtnCartWidth(){
                 btn.style.width = '140px'
              };
              BtnCartWidth();
              // console.log(cartButton);
        })


      }
    

      // Убирание карточки из корзины
     
        //  let cartProducts = cart.querySelectorAll('.product'),
        //  cartButton = cart.getElementsByTagName('button'); 
      
        //   for(let i=0; i<(cartButton.length-1); i++) {
        //   cartButton[i].addEventListener('click', function(){
        //   // Создание копии карточки с товаром
        //   let cartItem = cartProducts[i].cloneNode(true);
              // cartBtn = cartItem.querySelector('button');
          // Надпись на кнопке в корзине меняется на "Купить" 
              // cartBtn.textContent = 'Купить';
          // Размер кнопки в корзине увеличивается
          // function CartWidth(){
          //    btn.style.width = '70px'
          // };
          // CartWidth();
          // Добавить карточку в корзину
          // shop.appendChild(cartItem);
          // // Удалить карточку из магазина
          // cartProducts[i].remove();
      //   })
      // }





      // кнопка Открыть карзину
      function openCart(){
        cart.style.display = 'block'
      };
     // кнопка закрыть карзину
      function closeCart(){
        cart.style.display = 'none'
      };
      open.addEventListener('click', openCart);
      close.addEventListener('click', closeCart);






});