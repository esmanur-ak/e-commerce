let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  if (!cartWrapper) return; // Sayfada cart-wrapper yoksa kodu durdur

  let result = "";
  cart.forEach((item) => {
    // Nesne veya resim verisi eksikse çökmesini engelle
    if (!item) return;

    // Resim yolunu güvenli şekilde al (singleImage yoksa doğrudan item.img kullan, o da yoksa boş bırak)
    const imgSrc = item.img?.singleImage || item.img || "";

    result += `
   <tr class="cart-item">
    <td></td>
    <td class="cart-image">
        <img src="${imgSrc}" alt="${item.name || ''}">
        <i class="bi bi-x delete-cart" data-id="${item.id}"></i>
    </td>
    <td>${item.name || "Ürün"}</td>
    <td>$${(item.price?.newPrice || 0).toFixed(2)}</td>
    <td class="product-quantity">${item.quantity}</td>
    <td class="product-subtotal">$${(
      (item.price?.newPrice || 0) * item.quantity
    ).toFixed(2)}</td>
   </tr>
   `;
  });

  cartWrapper.innerHTML = result;
  removeCartItem();
}

displayCartProduct();

function removeCartItem() {
  const btnDeleteCart = document.querySelectorAll(".delete-cart");
  let cartItems = document.querySelector(".header-cart-count");

  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      // dataset.id string gelebileceği için Number dönüşümü yaptık
      cart = cart.filter((item) => item.id !== Number(id));
      displayCartProduct();
      localStorage.setItem("cart", JSON.stringify(cart));
      
      if (cartItems) {
        cartItems.innerHTML = cart.length;
      }
      saveCartValues();
    });
  });
}

function saveCartValues() {
  const cartTotal = document.getElementById("cart-total");
  const subtotal = document.getElementById("subtotal");
  const fastCargo = document.getElementById("fast-cargo");

  // Eğer bu sayfa sepet sayfası değilse ve elemanlar yoksa fonksiyonu durdur
  if (!cartTotal || !subtotal) return;

  const fastCargoPrice = 15;
  let itemsTotal = 0;

  cart.length > 0 &&
    cart.map((item) => (itemsTotal += (item.price?.newPrice || 0) * item.quantity));

  subtotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  
  // Hızlı kargo seçeneği işaretli mi kontrol et
  if (fastCargo && fastCargo.checked) {
    cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`;
  } else {
    cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  }
}

// Hızlı kargo checkbox'ı için dinleyiciyi dışarı aldık
const fastCargo = document.getElementById("fast-cargo");
if (fastCargo) {
  fastCargo.addEventListener("change", function () {
    saveCartValues();
  });
}

saveCartValues();