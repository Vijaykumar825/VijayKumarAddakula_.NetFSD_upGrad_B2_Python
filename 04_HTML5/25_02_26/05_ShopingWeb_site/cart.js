function addToCart(productId){

  const product = state.products.find(p => p.id === productId)

  let cart = JSON.parse(localStorage.getItem("cart")) || []

  const existingItem = cart.find(item => item.id === productId)

  if(existingItem){
    existingItem.quantity += 1
  }else{
    cart.push({...product, quantity:1})
  }

  localStorage.setItem("cart", JSON.stringify(cart))

  updateCartCount()
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const totalItems = cart.reduce((sum,item)=> sum + item.quantity, 0)
  document.getElementById("cartCount").innerText = totalItems
}