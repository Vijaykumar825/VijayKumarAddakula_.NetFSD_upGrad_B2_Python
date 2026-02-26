const state={
  products:[
    {id:1,name:"Nike" , gender:"male"},
    {id:2,name:"Addidas",gender:"male"},
    {id:3,name:"zara",gender:"female"},
    {id:4,name:"Puma",gender:"female"},
    {id:5,name:"Converse",gender:"female"},
  ],
}

const productList = document.getElementById("productList")

function displayProducts(items){
    productList.innerHTML=""

    if(items.length===0){
        productList.innerHTML="<h1>No Products found</h1>"
    }else{
      items.forEach(product=>{
        const li=document.createElement("li")
        li.innerText=product.name
        productList.appendChild(li)
      })
    }
}

function filterProducts(gender){
    const filtered = state.products.filter(product => product.gender === gender)
    displayProducts(filtered)
}

displayProducts(state.products)

document.getElementById("maleBtn").addEventListener("click",()=>{
  filterProducts("male")
})

document.getElementById("femaleBtn").addEventListener("click",()=>{
  filterProducts("female")
})