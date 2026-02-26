const state={
  products:[
    {id:1,name:"Nike"},
    {id:2,name:"Addidas"},
    {id:3,name:"MRF"},
    {id:4,name:"Puma"},
    {id:5,name:"Converse"},


  ],
  filteredProduct:[]
  
}




const searchInput = document.getElementById("searchInput")

const productList = document.getElementById("productList")

function renderShoes(products){

    productList.innerHTML = ""

    if(products.length === 0){
        productList.innerHTML = "<li>No Search Results</li>"
    }

    products.forEach(product => {
        const li = document.createElement("li");
        li.innerText = product.name;
        productList.appendChild(li);
    });
}

function filterShoes(query){
    state.filteredProduct = state.products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase())
    })
    renderShoes(state.filteredProduct)
}

renderShoes(state.products)

searchInput.addEventListener("input", (event) => {
    const query = event.target.value
    

    filterShoes(query)
})