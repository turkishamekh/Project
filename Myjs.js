var count = 0;

function addToCart() {
  count++;
  document.getElementById("cart").innerHTML = "🛒 Items: " + count;
}
onclick="addToCart()"