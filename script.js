let selectedSize = null;
document.querySelectorAll(".sizes button").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedSize = btn.textContent;
      
    document.querySelectorAll(".sizes button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const style = document.createElement("style");
style.textContent = `
  .sizes button.active{
    background:black;
    color:white;
    border:none;
  }
`;
document.head.appendChild(style);

const cartBtn = document.getElementById("add-to-cart");
const cartMsg = document.getElementById("cart-msg");

cartBtn.addEventListener("click", () => {
  if (!selectedSize) {
    alert("Please select a size first!");
    return;
  }

  const product = {
    name: "Brightening Skin Toner",
    price: 12,
    size: selectedSize,
    qty: 1
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.name === product.name && item.size === product.size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  cartMsg.textContent = Added to cart ✅ (${product.size});
  setTimeout(() => (cartMsg.textContent = ""), 2500);
});
