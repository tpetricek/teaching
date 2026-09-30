"use strict";
// ------------------------------------------------------------------
// DEMO #1: What is this code going to do?
// ------------------------------------------------------------------
/*
type Product = { name:string, price?: number }
const defaults = { name:"", price:0.0 }

const macha : Product = { name:"Macha late", price:undefined }

const p = { ...defaults, ...macha }
console.log(`${p.name} costs ${p.price.toFixed(2)} CZK.`);
*/
// ------------------------------------------------------------------
// DEMO #2: What is this code going to do?
// ------------------------------------------------------------------
function printPrice(product) {
    let price = (product.price ?? 0).toFixed(2);
    console.log(`${product.name} costs ${price} CZK.`);
}
const p1 = { name: "Flat white", price: 5.0 };
const p2 = { name: "Macha late", price: "too much" };
const p3 = p2;
printPrice(p3);
