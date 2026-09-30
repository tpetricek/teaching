// ------------------------------------------------------------------
// DEMO #1: What is this code going to do?
// ------------------------------------------------------------------

type Product = { name:string, price?: number }
const defaults = { name:"", price:0.0 }

// If you enable 'exactOptionalPropertyTypes' this becomes type error
const macha : Product = { name:"Matcha latte", price:undefined }

// Without the flag, the following runs and throws an exception
const p = { ...defaults, ...macha }
console.log(`${p.name} costs ${p.price.toFixed(2)} CZK.`);

// ------------------------------------------------------------------
// DEMO #2: What is this code going to do?
// ------------------------------------------------------------------


function printPrice(product : {name:string; price?:number}) {
  let price = (product.price ?? 0).toFixed(2);
  console.log(`${product.name} costs ${price} CZK.`);
}

// This is a perfectly fine
const p1 = { name: "Flat white", price: 5.0 };
printPrice(p1)

// Type error because 'price' is not a number
const p2 = { name: "Matcha latte", price: "too much" };
// printPrice(p2) 

// The following is allowed, but fails at runtime!
const p3 : {name:string} = p2
printPrice(p3)

