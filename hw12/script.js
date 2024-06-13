document.addEventListener("DOMContentLoaded", function() {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const featuredItemsContainer = document.querySelector('.featured-items');
        data.products.forEach(product => {
          const productItem = document.createElement('div');
          productItem.classList.add('product-item');
  
          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.title;
  
          const productTitle = document.createElement('h3');
          productTitle.textContent = product.title;
  
          const productDescription = document.createElement('p');
          productDescription.textContent = product.description;
  
          const productPrice = document.createElement('p');
          productPrice.classList.add('price');
          productPrice.textContent = `$${product.price}`;
  
          const addToCartButton = document.createElement('button');
          addToCartButton.textContent = 'Add to cart';
          addToCartButton.addEventListener('click', () => addToCart(product));
  
          productItem.appendChild(productImage);
          productItem.appendChild(productTitle);
          productItem.appendChild(productDescription);
          productItem.appendChild(productPrice);
          productItem.appendChild(addToCartButton);
  
          featuredItemsContainer.appendChild(productItem);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  
  function addToCart(product) {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartList = document.getElementById('cart-list');
  
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
  
    const cartItemText = document.createElement('span');
    cartItemText.textContent = `${product.title} - $${product.price}`;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', () => removeFromCart(cartItem));
  
    cartItem.appendChild(cartItemText);
    cartItem.appendChild(removeButton);
    cartList.appendChild(cartItem);
  
    cartItemsContainer.style.display = 'block';
  }
  
  function removeFromCart(cartItem) {
    const cartList = document.getElementById('cart-list');
    cartList.removeChild(cartItem);
  
    if (cartList.children.length === 0) {
      document.querySelector('.cart-items').style.display = 'none';
    }
  }
  