$(document).ready(function () {
  // Display cart items from localStorage
  function displayCart() {
    const raw = localStorage.getItem("cart");
    console.log("[cart.js] localStorage raw:", raw);
    const cart = JSON.parse(raw) || [];
    console.log("[cart.js] parsed cart:", cart);

    const cartList = $("#cart-items");
    cartList.empty();
    let total = 0;

    if (cart.length === 0) {
      cartList.append('<p class="empty-cart">Your cart is empty.</p>');
    } else {
      cart.forEach((item, index) => {
        const price =
          parseFloat(
            (item.price || "").toString().replace(/[^0-9.\-]+/g, "")
          ) || 0;
        total += price;

        const itemElement = $(
          `
								<div class="cart-item" data-index="${index}">
										<h3>${item.name}</h3>
										<p>${item.price}</p>
										<button class="remove-item">Remove</button>
								</div>
						`
        )
          .hide()
          .fadeIn(300);

        cartList.append(itemElement);
      });
    }

    $("#cart-total").text(`Total: $${total.toFixed(2)}`);
  }

  // Remove single item
  $(document).on("click", ".remove-item", function () {
    const index = $(this).closest(".cart-item").data("index");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("[cart.js] removing index", index, "from cart", cart);

    $(this)
      .closest(".cart-item")
      .slideUp(300, function () {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
      });
  });

  // Clear cart
  $("#clear-cart").click(function () {
    console.log("[cart.js] clearing cart");
    localStorage.removeItem("cart");
    displayCart();
  });

  // Initial render
  displayCart();
});
