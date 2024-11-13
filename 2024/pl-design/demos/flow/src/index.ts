// DEMO: Enable "strictNullChecks": true in tsconfig.json
// and see what needs to be done to get this to work 
// (Add "| null" and conditional with flow-based type checking)
function getPerson(personId:number) : { name:string, age:number} { 
  if (personId == 1)
    return { name: "Alfred", age: 4 };
  else 
    return null;
}

const person = getPerson(0);
let el = document.getElementById("msg")
el.innerText = "Hello " + person.name;

