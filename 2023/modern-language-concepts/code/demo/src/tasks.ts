// --------------------------------------------------------------------------------------
// TASK #1: Typing the createElement function
// --------------------------------------------------------------------------------------

let el = document.getElementById("out")
if (el == null) throw "out element missing"

// TODO: Can you come up with a correct null check 
// that breaks the flow-sensitive type checking?

let input = document.createElement("input")
let btn = document.createElement("button")
btn.innerText = "Greeet!"
btn.onclick = () => { alert("Hello " + input.value); }
el.appendChild(input)
el.appendChild(btn)


// --------------------------------------------------------------------------------------
// TASK #2: Implement bit increment
// --------------------------------------------------------------------------------------

type Bit = 0 | 1


type FourRange = 0 | 1 | 2 | 3
type MiniByte = [Bit,Bit,Bit,Bit]

function set(fourbit:MiniByte, i:FourRange, v:Bit) {
  fourbit[i] = v;
}

function get(fourbit:MiniByte, i:FourRange) : Bit {
  return fourbit[i];
}

function increment(fourbit:[Bit,Bit,Bit,Bit]) {
  // TODO: Write code that increments the number represented by 'fourbit'
  // (0,0,0,0 -> 0,0,0,1 -> 0,0,1,0 -> 0,0,1,1, -> etc.)
  // Can you do this in a way that makes the type checker happy?
  //
  // NOTE: If you index into fourbit using [i], the checker gives up.
  // You can try this using 'set' and 'get' which enforce range check.
  fourbit[0] = 1;
}

let demo : MiniByte = [0,0,0,0]

let count = document.createElement("p")
el.appendChild(count);
count.innerText = demo.join(",")

let inc = document.createElement("button")
el.appendChild(inc);
inc.innerText = "Increment!"

inc.onclick = () => {
  increment(demo);
  count.innerText = demo.join(",")
}


// --------------------------------------------------------------------------------------
// TASK #3: Implement a create animal function
// --------------------------------------------------------------------------------------

type Fish = {
  name:string
}
type Cat = {
  name:string
  sound:string
}

// TODO: Implement an overloaded function 'createAnimal' that returns
// the right type of animal, depending on the first parameter

// let a1 = createAnimal("fish", "Moby")
// let a2 = createAnimal("cat", "Cheshire cat", "We are all mad here")

let animals = document.createElement("p")
el.appendChild(animals)

// NOTE: Uncomment the following
// animals.innerHTML += a1.name + "<br />";
// animals.innerHTML += a1.sound + "<br />"; // This should be an error
// animals.innerHTML += a2.name + "<br />";
// animals.innerHTML += a2.sound + "<br />";


// --------------------------------------------------------------------------------------
// TASK #4: Write a simple expression evaluator
// --------------------------------------------------------------------------------------

interface Constant {
  kind:"constant"
  value:number
}

interface Binary {
  kind:"binary"
  operator:"+" | "*"
  left:Expression
  right:Expression
} 

type Expression = Binary | Constant

function evaluate(expr:Expression) : number {
  // TODO: Implement recursive evaluator of expressions
  return -1;
}

let konst = (n:number) : Expression => 
  ({ kind:"constant", value:n })
let binary = (op:"+" | "*", l:Expression, r:Expression) : Expression => 
  ({ kind:"binary", operator:op, left:l, right:r })

let e = binary("*", binary("+", konst(20), konst(1)), konst(2))
let evalres = document.createElement("h3")
evalres.innerText = `Evaluating (20+1)*2: ${evaluate(e)}`
el.appendChild(evalres)


// --------------------------------------------------------------------------------------
// TASK # ???: Implement well-typed join operation
// --------------------------------------------------------------------------------------

function join(a1:any[], a2:any[], key:string) : any[] {  
  let res = []
  for(var i = 0; i<a1.length; i++) {
    for(var j = 0; j<a2.length; j++) {
      let x : string = a1[i][key]
      let y : string = a2[j][key]
      if (x == y) {
        let r = { ...a1[i], ...a2[j] }
        res.push(r)
      }
    }        
  }  
  return res;
}

let r1 = 
  [ { name:"Tomas", bicycle:"Brompton" }, 
    { name:"Juliana", bicycle:"Beany" } ]
let r2 = 
  [ { name:"Tomas", language:"F#" },
    { name:"Juliana", language:"Scratch" } ]


let list = document.createElement("ul")
el.appendChild(list)

let r = join(r1, r2, "name")
r.forEach(el => 
  list.innerHTML += "<li>" + el.name + " rides " + 
    el.bicycle + " and likes " + el.language + "</li>")

/*










function foofn() : never[] {
  return [] //throw "oops"
}


interface X {
  (n:number) : number;
  bar(n:number) : number;
}

function foo(x:X) {
  return x(10) + x.bar(10);
}

function test(n:number) {
  return n+1;
}

foo(test)
test.bar = function (n:number) { return n + 1; }

//foo(test);

// talk about - language design motivated by: tools, use, gpt
// structural vs. nominal type systems
// demo self (code + slots in an object as in JS/TS - JS inspired by Self, implementation too, V8)

function speak1(animal:"dog") : void
function speak1(animal:"cat") : void
function speak1(animal:string) : void
function speak1(animal:string) {
  switch(animal) {
    case "dog": console.log("woof"); return
    case "cat": console.log("meow"); return
    default: console.log("aaargh")
  }
}

function speak2(animal:"dog") : void
function speak2(animal:"cat" | "dog") {
  switch(animal) {
    case "dog": console.log("woof"); return
    case "cat": console.log("meow"); return
  }
}

speak1("cat")
speak1("giraffe")

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
  "hi"

document.firstChild

res.
*/