document.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const featuredItemsContainer = document.querySelector(".featured-items");
      data.products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        const productTitle = document.createElement("h3");
        productTitle.textContent = product.title;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.textContent = `$${product.price}`;

        productItem.appendChild(productImage);
        productItem.appendChild(productTitle);
        productItem.appendChild(productDescription);
        productItem.appendChild(productPrice);

        featuredItemsContainer.appendChild(productItem);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
