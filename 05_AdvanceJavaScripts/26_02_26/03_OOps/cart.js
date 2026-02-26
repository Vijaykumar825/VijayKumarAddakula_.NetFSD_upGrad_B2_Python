class Product{
  constructor(){
    this.items=[]
  }
  addItem(product){
    this.items.push(product)

  }
  getTotal(){
    return this.items.reduce((sum,item)=>sum+item.price,0)
  }
}

const cart=new Product();
cart.addItem({name:"watch",price:4000})
cart.addItem({name:"Pen",price:50})
cart.addItem({name:"Shoe",price:3000})
cart.addItem({name:"Mat",price:200})
cart.addItem({name:"Chair",price:6000})
cart.addItem({name:"Phone",price:12000})
console.log(cart.items);
console.log("Total :",cart.getTotal())