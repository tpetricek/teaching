// --------------------------------------------------------------------------------------
// DEMO #1: Typing the createElement function
// --------------------------------------------------------------------------------------

// TODO: Implement the greeting code in 'main.ts'


// --------------------------------------------------------------------------------------
// DEMO #2: Unions, typeof, array literal types
// --------------------------------------------------------------------------------------

// TODO: Illustrate using the following snippets
let even = new Date().getTime() % 2 == 0
let value : number | string = even ? 42 : "fourty two"

"fourty two".toUpperCase()

// TODO: Illustrate typeof
// value.toUpperCase()

type Language = "cz" | "en"
let data = [
    ["en", "hello world"],
    ["cz", "ahoj svete"],
    ["en", "how are you?"],
    ["cz", "jak se dari?"]
  ]

// TODO: Function taking multilanguage strings
//
// function printMessage(lang,data) {
// }
// 
// printMessage(data)


// --------------------------------------------------------------------------------------
// DEMO #3: What can and cannot be done with never
// --------------------------------------------------------------------------------------

// function alwaysBad() : never {
// }

let magic : any = null
let a1 : [never] = magic
let a2 : never[] = magic


// --------------------------------------------------------------------------------------
// DEMO #4: Record extension via intersection types
// --------------------------------------------------------------------------------------

function annotate<T extends {title:string}>(x:T) : T & { title_upper : string } {
  return { title_upper:x.title.toUpperCase(), ...x }
}

let res = annotate({ title:"ahoj", count:10 })


// --------------------------------------------------------------------------------------
// DEMO #5: Defining simple expression type
// --------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------
// DEMO #6: Algebraic data types
// --------------------------------------------------------------------------------------

interface ContactEmail {
  type: 'email'
  email: string
}
interface ContactPhone {
  type: 'phone'
  number: number[]
}
interface ContactAll {
  type: 'none'
  number: number[]
  email: string
}

type Contact = ContactEmail | ContactPhone | ContactAll

type Student1 = {
  name: string
  email: string | undefined
  number: number[] | undefined
}
type Student2 = {
  name: string
  contact: Contact
}


// --------------------------------------------------------------------------------------
// DEMO #7: Book info with optional details
// --------------------------------------------------------------------------------------

const books = [
  { title: "Ubik",
    year: 1969,
    description: `Ubik is a 1969 science fiction novel by American writer Philip K. Dick. 
      The story is set in a future 1992 where psychic powers are utilized in corporate 
      espionage, while cryonic technology allows recently deceased  people to be maintained 
      in a lengthy state of hibernation.` },
  { title: "The Man in the High Castle",
    year: 1962,
    description: `The Man in the High Castle (1962) is an alternative history novel by Philip 
      K. Dick wherein the Axis Powers won  World War II. The story occurs in 1962, fifteen years 
      after the end of the war in 1947, and depicts the life of several characters living 
      under Imperial Japan or Nazi Germany as they rule the partitioned United States.` }
]

type BookInfo<T extends boolean> = 
  { title: string, year: number } & (T extends true ? { description: string } : { })
    

// TODO: Needs a better type
function getBook(index:number, detailed:boolean) : BookInfo<boolean> 
{
  if (detailed) 
    return { 
      title:books[index].title, 
      year:books[index].year, 
      description:books[index].description }
  else
    return { 
      title:books[index].title, 
      year:books[index].year }
}

// TODO: Which of these is OK?
//
// let b1 = getBook(0, true)
// b1.description
// 
// let b2 = getBook(0, false)
// b2.description

// --------------------------------------------------------------------------------------
// DEMO #8: Filtering book records by key
// --------------------------------------------------------------------------------------

function select(data:any[], key:string) : any[] {
  return data.map(el => el[key]);
}

let titles = select(books, "title")
let years = select(books, "year")

// --------------------------------------------------------------------------------------
// DEMO #8: Transforming record types using keyof
// --------------------------------------------------------------------------------------

type Bike = {
  name: string
  gears: number
}
type Person = {
  name: string
  bike: Bike 
}

type Formatted<T> = { [K in keyof T]:T[K] }

function format<T extends {}>(obj:T) : Formatted<T>
function format(obj:any) : any {
  // if (typeof obj == "string" || typeof obj == "number") return obj.toString();
  // let res : any = {}
  // Object.keys(obj).forEach(k => res[k] = format(obj[k]))
  // return res;
  return obj
}

let p : Person = { name:"Tomas", bike:{name:"Brompton", gears:6} }
p.bike.gears

let pf = format(p)
pf.bike.gears

//alert(JSON.stringify(format(p)))

// --------------------------------------------------------------------------------------
// DEMO #8: Transforming record types using keyof
// --------------------------------------------------------------------------------------

type UnArray<T> = any // TODO: Implement me

type Z1 = UnArray<number>
type Z2 = UnArray<number[]>
type Z3 = UnArray<number[][]>
type Z4 = UnArray<number[][][]>

function flatten<T>(array:T[]) : UnArray<T[]> {
  var res : any = []
  function loop(obj:any) {
    if (Array.isArray(obj)) obj.forEach(e => loop(e));
    else res.push(obj);
  }
  loop(array);
  return res;
}

let fres = flatten([[[1,2]], [[3,4], [5,6]]])
alert(fres);

// --------------------------------------------------------------------------------------
// DEMO #8: Transforming record types using keyof
// --------------------------------------------------------------------------------------

type Split<
  Str extends string,
  SplitBy extends string,
  Acc extends string[] = []
> = Str extends ""
  ? Acc
  : Str extends `${infer P1}${SplitBy}${infer P2}`
  ? Split<P2, SplitBy, [...Acc, P1]>
  : [...Acc, Str];

type X = Split<"hello world", " ">  






type S<N> = { prev:N }

type Add<N, M> = 
  N extends 0 ? M : 
    N extends { prev:infer K } ? { prev:Add<K, M> } : never

type Q = Add<S<0>, S<S<0>>> 

type Length<Str extends string> = 
  Str extends `${infer _}${infer StrTail}` ? S<Length<StrTail>> : 0
