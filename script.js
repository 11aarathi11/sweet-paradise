document.addEventListener('DOMContentLoaded', function() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalAmountElement = document.getElementById('total-amount');
  let totalAmount = 0;
  let cartData = [];

  document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
      console.log('Button clicked!');
      const productName = button.getAttribute('data-product');
      const productPrice = parseInt(button.getAttribute('data-price'));
      const productImage = button.getAttribute('data-image');

      // Add item to cart data
      cartData.push({
        productName: productName,
        productPrice: productPrice,
        productImage: productImage
      });

      // Update local storage
      localStorage.setItem('cartData', JSON.stringify(cartData));

      // Display cart item
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      const img = document.createElement('img');
      img.src = productImage;
      const name = document.createElement('p');
      name.textContent = `${productName} - Rs ${productPrice}`;
      name.style.margin = '0';
      cartItem.appendChild(img);
      cartItem.appendChild(name);
      cartItemsContainer.appendChild(cartItem);

      // Update total amount
      totalAmount += productPrice;
      totalAmountElement.textContent = `Total: Rs ${totalAmount}`;
    });
  });
});
