// ----------------------------------------------------------------------------
// HOMEWORK: Copy this code into 'app.ts' and add types!
// You will need to make some minor changes in the code (mostly to handle
// potential errors), but the logic & code structure should not change.
//
// Go to `index.html` and remove the reference to `app.js` once you start!
//
// You will need to use flow-sensitive typing to handle potential 'null'
// values, algebraic data types (encoded using interfaces and union of
// string literal types) to represent different kinds of tokens and events
// and you will need to use the fancy 'keyof' type to make sure that your
// calculator only invokes operators that actually exist!
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Operators that our calculator supports
// ----------------------------------------------------------------------------

let operators /* : Operators */ = { // TODO: Define 'Operators' as an interface!
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
}

// TODO: Define types for the 'state' value below along the following lines:
//
// type Token = ...
// type CalculatorEvent = ...
// interface State { ... }
//
// TODO: This is mostly algebraic data type definition, but you can make
// the type of operators (in tokens and in th event) a key of your 
// `Operators` type to make sure that only valid operators are used!


// ----------------------------------------------------------------------------
// Create the user interface
// ----------------------------------------------------------------------------

let pad = document.getElementById("pad");
let ops = document.getElementById("ops");

// Input that displays the RPN expression
let expr = document.createElement("input");
expr.value = ""
pad.appendChild(expr)

// Input for editting the current number
let num = document.createElement("input");
num.value = "0"
pad.appendChild(num)

// Buttons for individual digits
for(let i=9; i>=0; i--) {
  let btn = document.createElement("button")
  btn.innerText = i.toString();
  btn.onclick = () => trigger({kind:"number", value:i})
  pad.appendChild(btn)
}

// Pushes current number onto the RPN stack
let btnu = document.createElement("button")
btnu.innerText = "⇑";
btnu.onclick = () => trigger({kind:"pushnum"})
pad.appendChild(btnu)

// Clears the current number in case of an error
let btnc = document.createElement("button")
btnc.innerText = "C";
btnc.onclick = () => trigger({kind:"clearnum"})
pad.appendChild(btnc)


// TODO: This one is tricky to get right! But it needs to be a generic
// function `typedKeys<T>` that takes a value of `T` and returns 
// the collection of keys of the type `T` (use keyof). You cannot
// implement this in a type-safe way, so the implementation will
// need to use casting to `any`. You can cast expression `e` to `any`
// using `<any>e`. You may need to do this in two places.
function typedKeys(value) {
  return Object.keys(value);
}

// Evaluate button triggers evaluation
let btn = document.createElement("button")
btn.innerText = "⇓"
btn.id="eval"
btn.onclick = () => trigger({kind:"eval" })
ops.appendChild(btn)

// Buttons for all the operators
typedKeys(operators).forEach(op => {
  let btn = document.createElement("button")
  btn.innerText = op
  btn.onclick = () => trigger({kind:"pushop", operator:op })
  ops.appendChild(btn)
})

// ----------------------------------------------------------------------------
// Calculator logic
// ----------------------------------------------------------------------------

// Initial state of the program - keeps the current number
// (initally zero) and a list of RPN tokens (initally empty)
var state = { number:0, tokens:[] } 


// Displays the current state on the calculator screen
function update() {
  num.value = state.number.toString()
  expr.value = state.tokens.map(tok => {  
    switch(tok.kind) {
      case "operator": return tok.operator;
      case "number": return tok.value.toString(); 
    }
  }).join(" ")
}

// Evaluates the list of tokens in the RPN 
function evaltokens() {
  var stack = []
  for(var i = 0; i<state.tokens.length; i++) {
    let tok = state.tokens[i]
    switch(tok.kind) {
      case "number": 
        stack.push(tok.value)
        break;
      case "operator": 
        stack.push(operators[tok.operator](stack.pop(), stack.pop()))
        break;
    }
  }
  return stack.pop()
}

// Handles an event triggered by clicking on some button
function trigger(evt) {
  switch(evt.kind) {
    case "number":
      state.number = state.number * 10 + evt.value;
      break;
    case "pushop":
      state.tokens.push({ kind:"operator", operator:evt.operator })
      break;
    case "pushnum":
      state.tokens.push({ kind:"number", value:state.number })
      state.number = 0;
      break;  
    case "clearnum":
      state.number = 0;
      break;  
    case "eval":
      state.number = evaltokens();
      state.tokens = []
      break;  
  }
  update()
}

// TODO: All of these calls are allowed in JavaScript because of the
// lack of type checking. You should make sure each of the following
// lines causes a type error!
function evilCalls() { 
  state.tokens.push({ kind:"operator", operator:"^" })
  state.tokens.push({ kind:"number", value:"42" })
  state.tokens.push({ kind:"magic" })
  trigger({ kind:"reset" })
  trigger({ kind:"pushop", operator:"^" })
}