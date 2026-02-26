const state = {
  cart: []
}


function addToCart(name, price) {

  const existing = state.cart.find(item => item.name === name)

  if (existing) {
    existing.quantity += 1
  } else {
    state.cart.push({
      name,
      price,
      quantity: 1
    })
  }

  renderCart()
}


function renderCart() {
  const cartContainer = document.getElementById("cart")
  const totalElement = document.getElementById("total")

  cartContainer.innerHTML = ""

  let total = 0

  state.cart.forEach((item, index) => {

    total += item.price * item.quantity

    const div = document.createElement("div")
    div.className = "cart-item"

    div.innerHTML = `
      ${item.name} ${item.price} x ${item.quantity}
      <span class="controls">
        <button onclick="increase(${index})">+</button>
        <button onclick="decrease(${index})">-</button>
        <button onclick="removeItem(${index})">Remove</button>
      </span>
    `

    cartContainer.appendChild(div)
  })

  totalElement.innerText = "Total " + total
}


function increase(index) {
  state.cart[index].quantity++
  renderCart()
}


function decrease(index) {
  if (state.cart[index].quantity > 1) {
    state.cart[index].quantity--
  } else {
    state.cart.splice(index, 1)
  }
  renderCart()
}


function removeItem(index) {
  state.cart.splice(index, 1)
  renderCart()
}