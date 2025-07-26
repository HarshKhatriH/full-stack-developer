const products = [
  { id: 1, name: "Shirt", price: 499 },
  { id: 2, name: "Jeans", price: 999 },
  { id: 3, name: "Shoes", price: 1499 },
  { id: 4, name: "Hat", price: 299 },
  { id: 5, name: "Watch", price: 1999 }
];



if (document.getElementById("product-list")) {
  const list = document.getElementById("product-list");

  products.forEach(product => {
   const productCard = document.createElement("div");
  productCard.className = "product";
  productCard.innerHTML = `
  <h3>${product.name}</h3>
  <p>Price: ₹${product.price}</p>
  <button onclick="addToCart(${product.id})">Add to Cart</button>`;
   list.appendChild(productCard);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) ;
  let item = products.find(p => p.id === productId);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}


