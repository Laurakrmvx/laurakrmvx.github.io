$(document).ready(function () {
  // Product cards fade-in animation
  $(".card")
    .hide()
    .each(function (index) {
      $(this)
        .delay(200 * index)
        .fadeIn(1000);
    });

  // Cart functionality
  $(".add-to-cart").click(function () {
    const productId = $(this).data("product-id");
    const productName = $(this).closest(".card").find("h3").text();
    const productPrice = $(this).closest(".card").find("p:last").text();

    // Debugging log
    console.log("[products.js] Add button clicked", {
      productId,
      productName,
      productPrice,
    });

    if (typeof productId === "undefined") {
      console.warn(
        "[products.js] data-product-id is undefined for this button",
        this
      );
    }

    // Add to cart array in localStorage
    try {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("[products.js] Cart saved to localStorage", cart);
    } catch (err) {
      console.error("[products.js] Failed to save cart to localStorage:", err);
    }

    // Animation effect
    $(this).text("Added!").addClass("added");
    setTimeout(() => {
      $(this).text("Add to Cart").removeClass("added");
    }, 2000);
  });

  // Interactive hover effect on cards
  $(".card").hover(
    function () {
      $(this).css({
        transform: "scale(1.05)",
        "box-shadow": "0 8px 16px rgba(0,0,0,0.2)",
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        "box-shadow": "0 4px 8px rgba(0,0,0,0.1)",
      });
    }
  );
});
