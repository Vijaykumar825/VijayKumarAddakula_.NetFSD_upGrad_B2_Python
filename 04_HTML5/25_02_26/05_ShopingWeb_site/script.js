const state = {
  products:[
    {id:1,name:"Men Nike Shoes",category:"Men",price:799,oldPrice:1299,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
    {id:2,name:"Men Puma T-Shirt",category:"Men",price:599,oldPrice:999,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
    {id:3,name:"Women Zara Dress",category:"Women",price:1299,oldPrice:1999,image:"https://images.unsplash.com/photo-1520975693410-0010f28d4b8d"},
    {id:4,name:"Women Adidas Shoes",category:"Women",price:999,oldPrice:1499,image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db"},
    {id:5,name:"Kids Jacket",category:"Kids",price:899,oldPrice:1299,image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},
    {id:6,name:"Kids Sneakers",category:"Kids",price:499,oldPrice:799,image:"https://images.unsplash.com/photo-1514995669114-6081e934b693"}
  ]
}

let currentCategory = "All"
let cartCount = 0

const productList = document.getElementById("productList")
const searchInput = document.getElementById("searchInput")
const noResult = document.getElementById("noResult")
const cartCounter = document.getElementById("cartCount")

function renderProducts(products){
  productList.innerHTML=""

  if(products.length===0){
    noResult.style.display="block"
    return
  }else{
    noResult.style.display="none"
  }

  products.forEach(product=>{
    const discount = Math.round(((product.oldPrice-product.price)/product.oldPrice)*100)

    const card=document.createElement("div")
    card.classList.add("card")

    card.innerHTML=`
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <div class="price">
        Rs.${product.price}
        <span class="old">Rs.${product.oldPrice}</span>
        <span class="discount">${discount}% OFF</span>
      </div>
      <button onclick="addToCart()">Add to Cart</button>
    `
    productList.appendChild(card)
  })
}

function filterCategory(category){
  currentCategory = category
  applyFilters()
}

function applyFilters(){
  const searchValue = searchInput.value.toLowerCase()

  let filtered = state.products.filter(product=>{
    const matchCategory = currentCategory==="All" || product.category===currentCategory
    const matchSearch = product.name.toLowerCase().includes(searchValue)
    return matchCategory && matchSearch
  })

  renderProducts(filtered)
}

function addToCart(){
  cartCount++
  cartCounter.innerText = cartCount
}

searchInput.addEventListener("input",applyFilters)

renderProducts(state.products)