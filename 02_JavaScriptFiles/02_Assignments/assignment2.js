let amount=1500;

if(amount > 5000){
  //20%discount
  let discount=amount*0.2;
  let finalAmount=amount-discount;
  console.log("Final amount after discount:", finalAmount);
}else if(amount > 3000){
  //10%discount
  let discount=amount*0.1;
  let finalAmount=amount-discount;
  console.log("Final amount after discount:", finalAmount);
}else{
  console.log("No discount");
}

