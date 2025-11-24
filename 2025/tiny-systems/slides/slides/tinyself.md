- title: TinySelf: Tiny prototype-based object-oriented language | Write your own tiny programming system(s)! (NPRG077)

*****************************************************************************************
- template: title
- class: nologo swapped

# TinySelf: Tiny object-oriented language
## History and foundations

---

**Tomas Petricek**, Charles University

_<i class="fa fa-envelope"></i>_ [tomas@tomasp.net](mailto:tomas@tomasp.net)  
_<i class="fa-brands fa-bluesky"></i>_ [@tomasp.net](https://bsky.app/profile/tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ [https://tomasp.net](https://tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077

<img src="img/qr.png" id="qr" />

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/tinyself/cpl.jpg)

# Object-orientation

**Dynamic lookup** - object chooses how to respond

**Abstraction** - object state can be hidden from user

**Subtyping** - any compatible object can be used

**Inheritance** - reuse to implement a new object

-----------------------------------------------------------------------------------------
- template: content
- class: three-column tcimg nologo

# Brief history

### 1960s-70s

![](img/tinyself/cover-byte.jpg)

Algol-based and scientific Simula  

Tools for thought and messaging in Smalltalk

---

### 1980s

![](img/tinyself/cover-eiffel.jpg)

Rigorous Eiffel and "serious" C++  

Prototypes and materialized objects in Self

---

### 1990s-2000s

![](img/tinyself/cover-java.jpg)

Class-based safe Java and C#

Prototypes in JavaScript and typed TypeScript

<style>.tcimg img { max-height:200px; margin-left:20px }
.tcimg h3 { margin:-20px 0px 10px 0px !important; }</style>

-----------------------------------------------------------------------------------------
- template: lists

# Why TinySelf?

![](img/tinyself/self.png)

## "Pure" object-orientation

- Simple, uniform system
- Everything is an object (for real)
- Simpler than class-based Smalltalk

## Shows the potential of objects

- Not Java-style organization of code
- Objects for code, state and execution!
- Objects with introspection and debugging!
- Objects and graphical interfaces!

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/tinyself/morphic.png)

# Self & Morphic user interface framework

**Visual programming**

Programming by graphically manipulating objects on screen

**Direct programming**

Objects on screen *are* objects in the system

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## (Not so) Tiny Smalltalk

-----------------------------------------------------------------------------------------
- template: icons

# TinySelf
## Scope of the implementation

- *fa-diagram-project* Prototype-based multiple inheritance
- *fa-table-list* Explaining basic runtime structures
- *fa-play* Methods with simple interpreted code
- *fa-gear* Inaccurate interpreter in "Self style"

*****************************************************************************************
- template: title
- class: nologo swapped

# TinySelf: Tiny object-oriented language
## Using the Self programming system

---

**Tomas Petricek**, Charles University

_<i class="fa fa-envelope"></i>_ [tomas@tomasp.net](mailto:tomas@tomasp.net)  
_<i class="fa-brands fa-bluesky"></i>_ [@tomasp.net](https://bsky.app/profile/tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ [https://tomasp.net](https://tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077

<img src="img/qr.png" id="qr" />

-----------------------------------------------------------------------------------------
- template: lists
- class: listsm

# Everything is an object

![](img/tinyself/objects.png)

## Really everything
Objects, methods, lambdas,  
expressions, activation records

## What is an object
Object has a list of slots and   
optionally contains code

## Object = slots* + code?

- Data object has just slots
- Method object has code
- Closure has code and slots!
- Data object has methods as slots

<style>.listsm li, .listsm p { font-size:26pt } .listsm h2 { font-size:28pt; margin:-15px 0px 0px 0px; }</style>

-----------------------------------------------------------------------------------------
- template: code

```fsharp

// Object consists of zero or more
// slots and optionally code
type Objekt =
  { mutable Code : Objekt option
    mutable Slots : Slot list }

// A slot has name and contents;
// Some slots are parents
and Slot =
  { Name : string
    Contents : Objekt
    IsParent : bool }

```

# TinySelf objects

**Object consists of zero or more slots and optional code!**

In Self parent slot names end with *

TinySelf objects can  
also be special things

-----------------------------------------------------------------------------------------
- template: content
- class: catsimg

![](img/tinyself/cheshire.jpg)
![](img/tinyself/larry.jpg)
![](img/tinyself/mog.jpg)

<style type="text/css">.catsimg img {
  max-width:360px;
  max-height:360px; float:left; margin:20px; }</style>

-----------------------------------------------------------------------------------------
- template: image
- class: noborder smaller

![](img/tinyself/cats.png)

# Prototypes and slots

Message send looks at target object first,
then searches parents

```csharp
cheshire name  // OK
cheshire book  // OK

larry name  // OK
larry book  // Fail
```

Message send fail if none or multiple slots found

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Representing cats in Self

-----------------------------------------------------------------------------------------
- template: code

```js
"""Data object with name"""
(| book = 'Alice in Wonderland' |)

"""Method with  some code"""
( self name printLine )

"""Data object with parent
 slot and a 'speak' method"""
(| parent* = cat
   name = 'Cheshire Cat'
   speak = (
     self sound printLine
   )
|)

"""Data access or method call"""
cheshire name
cheshire speak
```

# Message sending

Lookup slot with a matching name, then:

* If it contains data object, it is returned
* If it contains method, the method is called

Assignment slots and special calls differ...

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Hello world and traits

-----------------------------------------------------------------------------------------
- template: lists

# The power of simplicity...

![](img/tinyself/simpl.png)

## Simplicity and uniformity

- All objects can be opened!
- Activation records for debugging
- Self-sustainable system

## Morphic framework

- Things on screen are objects!
- Object with a morph prototype can draw itself
- User interface is just morphs - no special code!

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Morphic and graphical objects

*****************************************************************************************
- template: title
- class: nologo swapped

# TinySelf: Tiny object-oriented language
## Working with mutable data in F#

---

**Tomas Petricek**, Charles University

_<i class="fa fa-envelope"></i>_ [tomas@tomasp.net](mailto:tomas@tomasp.net)  
_<i class="fa-brands fa-bluesky"></i>_ [@tomasp.net](https://bsky.app/profile/tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ [https://tomasp.net](https://tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077

<img src="img/qr.png" id="qr" />

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Mutable records in F#

![](img/tinyself/fsharp.png)

## Defining mutable objects

- Records with `mutable` fields
- We could use classes too

## Equality and records

- Still use structural equality by default
- Not if records (can) contain functions!
- `ReferenceEquality` attribute to override

-----------------------------------------------------------------------------------------
- template: code

```fsharp
type Person =
  { mutable Name : string
    mutable Book : string option }

let setName n p =
  p.Name <- n
let setBook b p =
  p.Book <- Some b

let x = { Name = "Bill"; k = None }
x |> setName "William"
x |> setBook "Alice in Wonderland"

match x with
| { Book = Some book } ->
  printfn "%s likes %s" x.Name book
| _ ->
  printfn "%s is sad :-(" x.Name
```

# Mutable records

**Helper functions**  
Make code a bit nicer  
Can support `|>` pipe

**Pattern matching**  
Same as immutable  
Nice data extraction!

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Working with mutable records

-----------------------------------------------------------------------------------------
- template: content
- class: two-column smallcode

# TinySelf programming style

### Different than before!

**Everything is an `Objekt`**  
Type definition stays  
We change what we put in!

**Uniformity has drawbacks**
Everything type checks!

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## TinySelf object visualizer


-----------------------------------------------------------------------------------------
- template: content
- class: two-column smallcode

# TinySelf programming style

### Different than before!

**Everything is an `Objekt`**  
Type definition stays  
We change what we put in!

**Uniformity has drawbacks**
Everything type checks!

---

### Helper methods

**Simplify object construction**

```fsharp
let makeString s =
  makeDataObject [
    makeParentSlot "parent*"
      stringPrototype
    makeSlot "value"
      (makeSpecial(String s))
    makeAssignmentSlot "value"
  ]
```

*****************************************************************************************
- template: title
- class: nologo swapped

# TinySelf: Tiny object-oriented language
## Code structure and step-by-step guide

---

**Tomas Petricek**, Charles University

_<i class="fa fa-envelope"></i>_ [tomas@tomasp.net](mailto:tomas@tomasp.net)  
_<i class="fa-brands fa-bluesky"></i>_ [@tomasp.net](https://bsky.app/profile/tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ [https://tomasp.net](https://tomasp.net)  
_<i class="fa-solid fa-globe"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077

<img src="img/qr.png" id="qr" />

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/tinyself/etosy.png)

# How Self-like systems put things on screen?

---

**Escape hatch is a must**  
Smalltalk system calls  
Self primitive calls  
(primitives primitiveList)

**TinySelf special objects**  
Primitive string values  
Native F# methods

-----------------------------------------------------------------------------------------
- template: code
- class: smallcode

```fsharp
// Special TinySelf objects!
type Special =
  | String of string
  | Native of (Objekt -> Objekt)

// Optionally special object
and Objekt =
  { mutable Code : Objekt option
    mutable Special : Special option
    mutable Slots : Slot list }

// Code to clone an object
let cloneCode =
  { Slots = []; Code = None
    Special = Some(Native(fun arcd ->
      lookupSlotValue "self*" arcd
      |> cloneObject )) }

// Method with special code object
let cloneMethod =     
  { Slots = []; Special = None;
    Code = Some cloneCode }
```

# Special objects

**String values**

No other way to represent strings!

**Native methods**

F# function taking "activation record" and returning the result

Used as method code

-----------------------------------------------------------------------------------------
- template: imageanim
- class: image

![](img/tinyself/lookup.png)

# Slot lookup logic

---

**Find a set of  
matching slots**

1) Search target object

2) Search parents and union the results

3) Avoid infinite loops!

-----------------------------------------------------------------------------------------
- template: content
- class: two-column

# Message sending logic

### Self handbook

> A normal send does a look&shy;up to obtain the target slot;
>
> If the slot contains a data object, then the data object is simply returned.
>
> If the slot contains a method, an activation is created and run.

----

### TinySelf translation

1. Find slot using lookup!
2. Check it is exactly one
3. If there is no code, return it
4. If there is code, run it...
   * Create activation record
   * Run (non-)native code

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/tinyself/activation.png)

# Activation record

Lookup in activation record to get all our code needs!

**Clone of method**  
It could have data!

**Self as parent**  
Access target's slots!

**Arguments as parent**  
Access arguments!

-----------------------------------------------------------------------------------------
- template: subtitle

# Sketch
## How methods are invoked

-----------------------------------------------------------------------------------------
- template: lists

# Representing TinySelf code

![](img/tinyself/code.png)

## AST is a tree of objects
- Objects store sub-expressions etc.
- Ordinary recursive F# interpreter

## More object oriented?
- All nodes have `eval` method
- Becomes (a bit) too hard to implement!

## Benefits and drawbacks
- Both options differ from actual Self/Smalltalk
- Simpler than actual compiled methods!

-----------------------------------------------------------------------------------------
- template: image
- class: smaller2x exprimg

![](img/tinyself/expr.png)

# Simple expression

`'Hello world' print`

<br />

**Send expression**  
Receiver, message, arguments to be used

**String expression**  
String value to be returned


<style>.exprimg img { margin-top:-50px; }</style>

-----------------------------------------------------------------------------------------
- template: subtitle

# Lab overview
## TinySelf system step-by-step

-----------------------------------------------------------------------------------------
- template: content

# TinySelf - Basic tasks

1. **Implementing slot lookup and strings**  
   Traversing the prototype hierarchy to find slots

1. **Implementing (basic) message sending**  
   Returning data slots and calling (native) methods

1. **Adding method arguments and assignments**  
   Creating assignment slots and revised activation records

1. **Object-oriented Booleans and conditionals**  
   Higher-order methods with blocks

1. **Representing & interpreting TinySelf expressions**  
   Creating expression objects and an interpreter

-----------------------------------------------------------------------------------------
- template: content

# TinySelf - Bonus and super tasks

1. **Arguments and sequencing of expressions**  
   Adding more types of expressions to TinySelf

1. **Revisiting Booleans and conditionals**  
   Representing TinySelf code with conditions

1. **Objects as lists and more expressions**  
   Adding more infrastructure before the next step...

1. **Creating web-based visualizers**  
   A small step towards TinyMorphic framework

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/tinyself/cpl.jpg)

# TinySelf and OO

**Dynamic lookup**  
Find method using lookup

**Abstraction**  
No private slots in TinySelf

**Subtyping**  
Object with required slots

**Inheritance**  
By setting a parent slot

-----------------------------------------------------------------------------------------
- template: image

![](img/tinyself/nanospeak.png)

# What is missing

**Self-sustainable**  
Complete basic library  
Reflection capabilities

**Reflection via mirrors**  
Mirror objects  
Inspect & modify    
Done in Nanospeak

-----------------------------------------------------------------------------------------
- template: icons

# Lessons learned
## A tiny prototype-based OO language

- *fa-shapes* Basic logic of object-oriented languages
- *fa-wrench* Shows how to build self-sustainable system  
- *fa-object-group* Different implementation - everything is object
- *fa-window-restore* Hard to implement! Need debuggers, not types

******************************************************************************************
- template: content

https://bibliography.selflanguage.org/

https://bibliography.selflanguage.org/_static/self-power.pdf

https://handbook.selflanguage.org/SelfHandbook2017.1.pdf

https://sin-ack.github.io/posts/a-tour-of-self/

https://github.com/sin-ack/zigself/ ??

https://github.com/tpetricek/nanospeak/

https://www.cambridge.org/core/books/concepts-in-programming-languages/1C05841AB47B49D12C7FC48D1022F11E

http://blog.rfox.eu/en/Programming/Series_about_Self/index.html

http://blog.rfox.eu/en/Programming/tinySelf.html
