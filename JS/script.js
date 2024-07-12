document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".card");
  

    function updateTotalPrice() {
      let totalPrice = 0;
      products.forEach((product) => {
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        const unitPrice = parseFloat(product.querySelector(".unit-price").textContent.slice(0, -2));
        totalPrice += quantity * unitPrice;
      });
      document.querySelector(".total").textContent = totalPrice.toFixed(2) + " $"; 
    }
  

    updateTotalPrice();
  
 
    products.forEach((product) => {
      const plusBtn = product.querySelector(".fa-plus-circle");
      const minusBtn = product.querySelector(".fa-minus-circle");
      const quantity = product.querySelector(".quantity");
  
      plusBtn.addEventListener("click", function () {
        let currentQuantity = parseInt(quantity.textContent);
        quantity.textContent = currentQuantity + 1;
        updateTotalPrice();
      });
  
      minusBtn.addEventListener("click", function () {
        let currentQuantity = parseInt(quantity.textContent);
        if (currentQuantity > 0) {
          quantity.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      });
  

      const deleteBtn = product.querySelector(".fa-trash-alt");
      deleteBtn.addEventListener("click", function () {
        const unitPrice = parseFloat(product.querySelector(".unit-price").textContent.slice(0, -2)); 
        const quantity = parseInt(product.querySelector(".quantity").textContent); 
        const totalPriceElement = document.querySelector(".total");
        let totalPrice = parseFloat(totalPriceElement.textContent.slice(0, -2)); 
        totalPriceElement.textContent = totalPrice.toFixed(2) + " $"; 
        product.remove();
      });
  
      const likeBtn = product.querySelector(".fa-heart");
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("liked");
      });
    });
  });
  