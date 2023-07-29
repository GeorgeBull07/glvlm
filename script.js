// script.js

// Обработчик события для кнопок "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('h3').innerText;
    const productPrice = button.parentElement.querySelector('.price').innerText;
    addToCart(productName, productPrice);
  });
});

// Массив для хранения товаров в корзине
let cartItems = [];

// Функция для добавления товара в корзину
function addToCart(name, price) {
  const item = {
    name: name,
    price: price
  };
  cartItems.push(item);
  showConfirmationModal(name, price);
}

// Функция для отображения модального окна с подтверждением добавления товара в корзину
function showConfirmationModal(name, price) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <p>Товар "${name}" добавлен в корзину за ${price}</p>
    </div>
  `;

  document.body.appendChild(modal);

  // Обработчик события для закрытия модального окна при клике на крестик
  const closeModalButton = modal.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}