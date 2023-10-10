- title: TinyML interpreter | Write your own tiny programming system(s)! (NPRG077)

*****************************************************************************************
- template: title
- class: nologo

# NPRG077
## TinyML: A tiny functional<br/> programming language interpreter

---

**Tomáš Petříček**, 309 (3rd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077

<img src="img/qr.png" id="qr" />

-----------------------------------------------------------------------------------------
- template: lists

# Two sides of this lecture

![](img/tinyml/duckrabbit.png)

## Introducing the F# language

- Some practical information
- Enough so that you can use it!
- Some important things omitted

## Introducing ML-style languages

- Background for our TinyML
- Basic features & principles
- Some weird corner cases!

*****************************************************************************************
- template: subtitle

# The F# language
## What you need to know

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller noborder

# Getting started with F#

![](img/tinyml/fsharp.png)

## F# and .NET runtime

- .NET SDK for Mac, Linux, Windows
- OSS with .NET Foundation since 2017
- https://dotnet.microsoft.com

## F# editors and tools

- Microsoft Visual Studio (Win only)
- JetBrains Rider (Win, Linux, Mac)
- VS Code with Ionide (Win, Linux, Mac)
- https://ionide.io

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller noborder

# F# project types

![](img/tinyml/vscode.png)

## Script-based development

- Write code in `.fsx` file
- Run using F# Interactive REPL
- Can select & run out-of-order!

## Project-based development

- Project `.fsproj` with `.fs` sources
- Standard build and run workflow
- Live reload with Fable and JavaScript

-----------------------------------------------------------------------------------------
- template: lists
- class: noborder

# F# project structure

![](img/tinyml/structure.png)

## Declaration order matters!

- Helper function and types
- Types defining domain model
- Operations for working with it
- User interface

## How to organize F# projects

- Namespaces or modules
- Type declarations
- Functions (inside modules)

-----------------------------------------------------------------------------------------
- template: largeicons

# Data type declarations in F#

- *fa-clipboard* **Tuples and records**  
  Store multiple values of different types
- *fa-code-fork* **Discriminated unions**  
  Represent one of multiple possible options
- *fa-bars* **Collections, lists and maps**  
  Multiple values of the same type
- *fa-arrow-rotate-right* **Recursive declarations**  
  Type that can include values of itself
- *fa-user-secret* **Type aliases**  
  Shorthand for a type with a long name

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Simple expression evaluator

-----------------------------------------------------------------------------------------
- template: lists

# Selected advanced features

![](img/tinyml/progfs.png)

## Lists and maps

- Immutable collections
- Linked (cons) lists with head/tail
- Key-value maps with lookup

## Recursion and laziness

- Recursive functions using `let rec`
- Works also for values, but beware!
- `Lazy<T>` to represent lazy values

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Maps, lazy values, recursion

*****************************************************************************************
- template: subtitle

# TinyML
## Interpreter structure

-----------------------------------------------------------------------------------------
- template: code
- class: smaller

```ocaml
type Value =
  | Number of int

type Expression =
  | Constant of int
  | Binary of
      string *
      Expression *
      Expression

val evaluate :
  Expression -> Value      
```

# Basic interpreter structure (1/2)

`Expression` is the source  
code that user writes

`Value` is what we  
get as the result

`evaluate` takes expression  
and returns value


-----------------------------------------------------------------------------------------
- template: code
- class: smaller

```ocaml
type Value =
  | ValNum of int

type Expression =
  | Constant of int
  | Binary of   
      string *
      Expression *
      Expression
  | Variable of string

type VariableContext =
  Map<string, Value>

val evaluate :
  Expression -> VariableContext -> Value      
```

# Basic interpreter structure (2/2)

**Adding variables and variable context**

Variable can store only values (call-by-value)

`evaluate` takes context

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Adding values and variables

*****************************************************************************************
- template: subtitle

# TinyML
## How ML languages work

-----------------------------------------------------------------------------------------
- template: code

```ocaml
(* Functions *)
let f = (fun x -> 10 + x)
f 32

(* Tuples *)
let t = (1, "hi")
fst t
snd t

(* Unions *)
let c1 = Case1(10)
let c2 = Case2(32)
match c1 with
| Case1 n -> n + 32
| Case2 n -> n + 10
```

# Language features of TinyML (1/2)

**Functions** but only with single argument

**Tuples** of two element with getters

**Unions** without tag name with two cases

-----------------------------------------------------------------------------------------
- template: code

```ocaml
(* Let bindings *)
let x = 10 in x * 32

(* Let desugaring *)
(fun x -> x * 32) 10

(* Conditionals *)
if e then 10 else 32

(* Both are expressions *)
1 + (if e then 41 else 1)
1 + (let x = 1 in x + x)

(* Currying *)
let add = fun a -> fun b -> a + b
in (add 10) 32
```

# Language features of TinyML (2/2)

`let` is a syntactic sugar

Everything (`if` and `let` too) is an expression

Functions that return functions (currying) if
you need multiple parameters

*****************************************************************************************
- template: subtitle

# TinyML
## A bit of theory

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/tinyml/scope.png)

# Variable scoping

**Lexical**

Based on static block structure in code

Function value needs to capture variables (closure)

**Dynamic**

Based on dynamic evaluation structure

-----------------------------------------------------------------------------------------
- template: image

![](img/tinyml/semantics.png)

# Operational semantics

Formally specify how expression evaluate

**Substitution-based**

We do not need variable context!

-----------------------------------------------------------------------------------------
- template: image

![](img/tinyml/cbv-cbn.png)

# Call-by-name vs. call-by-value

**Call-by-value** (strict)

Evaluates function arguments first (ML)

**Call-by-name** (lazy)

Evaluates arguments when needed (Haskell)

*****************************************************************************************
- template: subtitle

# Lab overview
## TinyML interpreter step-by-step

-----------------------------------------------------------------------------------------
- template: content

# TinyML - Basic tasks

1. **Simple numerical evaluator as the starting point**  
This has already been done for you :-)

2. **Add unary operators (-) and conditional**  
We only have numbers, so treat `1` as `true`

3. **Functions and application**  
Tricky! Closure needs to capture variables!

4. **Let binding as syntactic sugar**  
Evaluate `let` by treating it as apply/lambda

5. **Add a simple data type - tuples**  
New value, constructor and destructor

-----------------------------------------------------------------------------------------
- template: content

# TinyML - Bonus & super tasks

1. **Add more data types - unions**  
New value, constructor and destructor (match)

2. **Add support for recursion**  
Needs `Lazy<Value>` in variable context to work

3. **Add unit and create a list value**  
`Case1(Const(1), Case1(Const(2), Case2(Unit)))`

4. **Implement call-by-name semantics**  
Change variable context to store expressions

5. **Implement evaluation by substitution**  
Toy approach, but you learn the semantics

*****************************************************************************************
- template: subtitle

# Closing
## A tiny functional language interpreter

-----------------------------------------------------------------------------------------
- template: title

# Conclusions

**A tiny functional programming language interpreter**

- Distinguishing `Value` and `Expression`
- Recursive function with variable scope
- Call-by-value and lexical variable scoping!
- Nice constructor and destructor symmetry

---

**Tomáš Petříček**, 309 (3rd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077
