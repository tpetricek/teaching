- title: Write your own tiny programming system(s)! (NPRG077)

*****************************************************************************************
- template: title
- class: nologo

# NPRG077
## Write your own tiny<br /> programming system(s)!

---

**Tomáš Petříček**, 309 (3rd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg077

<img src="img/qr.png" id="qr" />

*****************************************************************************************
- template: subtitle

# Introduction
## Why such a strange course?

-----------------------------------------------------------------------------------------
- template: largeicons

# Where I'm coming from?

- *fa-landmark* **PhD, University of Cambridge**  
  Context-aware programming languages

- *fa-industry* **Microsoft Research Cambridge**  
  F# and applied functional programming

- *fa-city* **The Alan Turing Institute, London**  
  Expert and non-expert tools for data science

- *fa-church* **University of Kent, Canterbury**  
  History and programming systems

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/intro/coeffects.png)

# Demo
## Coeffects playground

Did this to get my PhD...

---

**How to show potential uses of theoretical work?**

Tiny type system running in the web browser

Tiny demos of two potential applications

-----------------------------------------------------------------------------------------
- template: image

![](img/intro/tapl.png)

# Programming Languages

Programming is  
writing code

Formal semantics, implementation, paradigms, types

------

**We know how   
to study this!**

-----------------------------------------------------------------------------------------
- template: image
- class: noborder

![](img/intro/gops.png)

# Programming Systems

Interacting with a stateful system

Feedback, liveness, interactive user interfaces

------

**But how do we  
study this?**

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/intro/thegamma.png)

# Demo
## The Gamma project

Making programmatic data exploration accessible to non-programmers

---

**From language to system**

Small typed language

Interaction is the key.  
This is why it works!

-----------------------------------------------------------------------------------------
- template: lists

# Paradigm shift in 1990s

![](img/intro/revolution.png)

## From systems to languages

- From running system to code
- From state & interaction to semantics
- Incommensurable ways of thinking!

## History of science matters!

- How did we get where we are?
- What ideas got lost along the way?
- How to recover them?

-----------------------------------------------------------------------------------------
- template: icons

# Research
## What do I work on today?

- *fa-building-columns* History and philosophy of computing
- *fa-code* Programming languages, types and theory
- *fa-hand-point-up* Interactive programming environments
- *fa-hand-sparkles* Will artificial intelligence make me obsolete?

-----------------------------------------------------------------------------------------
- template: lists

# Programming languages at D3S

![](img/intro/d3s.png)

## Growing group of great people

- Jan Vitek (via Northeastern)
- Aleksander Boruch-Gruszecki
- Also talking to PRL-PRG at CTU!

## Growing number of activities!

- Programming languages reading group
- New courses (NSWI182, NPRG075, NPRG077)
- PL topics at the regular D3S seminar

-----------------------------------------------------------------------------------------
- template: content
- class: fullimg

![](img/intro/poster.png)

<style>.fullimg .mfflogo { display:none}
.fullimg img { max-height:1000px; width:820px; }</style>

*****************************************************************************************
- template: subtitle

# Starting points
## Writing tiny systems

-----------------------------------------------------------------------------------------
- template: content
- class: two-column

# Two uses of tiny systems

### Education

*fa-keyboard* **Best way to learn?**  
*fa-xx* Write it on your own!

*fa-atom* **Understand principles**  
*fa-xx* As well as subtle details

*fa-spaghetti-monster-flying* **I hope you'll have fun!**  
*fa-xx* Doing more with less?

---

### Research

*fa-puzzle-piece* **Imagine new paradigms**  
*fa-xx* Variable names

*fa-arrow-pointer* **Focus on interaction**  
*fa-xx* How exactly did it work

*fa-spinner* **Ignore practical details**  
*fa-xx* New mode of interaction

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/intro/kamin.jpg)

# Teaching tiny systems
(Kamin, 1990)

**Used in multiple  
courses worldwide**

Examples in Pascal

Languages covered are APL, Clu, LISP, Prolog, Smalltalk, Scheme, SASL

**Not always focused  
on the key aspect**

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/intro/schank.jpg)

# Tiny systems and AI
(Schank, Riesbeck, 1981)

**Miniature implementations of 5 Yale AI lab programs**

Faster, more efficient, easier to understand, modify and extend

"Miniatures, demos and artworks" by Warren Sack

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/intro/distil.png)

# Tiny systems and ML
(Distill, 2016-2021)

---

**Five affordances of interactive articles**

Connecting people & data  
Making systems playful  
Prompting self-reflection  
Personalizing reading  
Reducing cognitive load  

*****************************************************************************************
- template: subtitle

# Programming models
## Learning by implementing

-----------------------------------------------------------------------------------------
- template: icons

# Programming models
## Language paradigms

- *fa-arrow-right* **Functional programming**  
- *fa-memory* **Imperative programming**  
- *fa-shapes* **Object-oriented programming**  
- *fa-database* **Logic programming**  

-----------------------------------------------------------------------------------------
- template: largeicons

# Programming models
## System interaction

- *fa-image* **Image-based programming model**  
  Programming system is always running

- *fa-arrows-rotate* **Interactive and live programming**  
  System provides continuous feedback

- *fa-table* **Incremental or reactive evaluation**  
  Recompute on edit or when new data come

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Logic programming in Prolog

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Object-orientation in Smalltalk

-----------------------------------------------------------------------------------------
- template: lists

# What really matters?

![](img/intro/turing.jpg)

## Static structure

- Source code of the program
- What you have at the start

## Dynamic structure

- Runtime data structures
- What else do you need to run

## Logic of evaluation

- How the dynamic state evolves?

-----------------------------------------------------------------------------------------
- template: code
- class: smallcode

```ocaml
(* A term like 'father(william, X)'
   consists of predicate 'father',
   atom 'william' and variable 'X' *)
type Term =
  | Atom of string
  | Variable of string
  | Predicate of string * Term list

(* A rule 'head(...) :- body.' *)
type Rule =
  { Head : Term
    Body : Term list }

(* A program is a list of rules *)
type Program = Rule list
```

# Why interpreters?

**A good way to explain the structures!**

Functional data types for the static and dynamic structure

A function to model the evaluation logic

-----------------------------------------------------------------------------------------
- template: image

![](img/intro/operational.png)

# Operational semantics

Standard approach<br/> to programming language theory

**Equations vs. Code**

Code actually runs!  
Easier to write?


-----------------------------------------------------------------------------------------
- template: icons

# Course scope
## What is not covered?

- *fa-code* Syntax choices and writing parsers
- *fa-hammer* Compilation and JIT-based runtimes
- *fa-pencil* Formal semantics and correctness
- *fa-cog* Supporting real-world use cases

*****************************************************************************************
- template: subtitle

# Tiny systems
## Programming systems research

-----------------------------------------------------------------------------------------
- template: lists

# Academic research

![](img/intro/transactions.jpg)

## What are we trying to study?

- Basic essential principles
- In isolation from other factors
- You have to ignore a lot!

## What to ignore in programming?

- Efficient implementation?
- Wide-spread user adoption?
- User interface of editor tools?

-----------------------------------------------------------------------------------------
- template: image

![](img/intro/theory.png)

# Programming language theory

**Ignore implementation and practical features**

Prove that the core idea is formally sound

-----------------------------------------------------------------------------------------
- template: image

![](img/intro/vlhcc.png)

# Human-computer interaction (HCI)

**Ignore inner working and implementation**

Show that users can actually use it and how

-----------------------------------------------------------------------------------------
- template: image

![](img/intro/perf.png)

# Performance evaluation

**Ignore usability and design implications**

Show that you can do better than a baseline

-----------------------------------------------------------------------------------------
- template: icons

# Tiny systems
## What can we study?

- *fa-arrow-pointer* Can talk about stateful interactive systems
- *fa-cog* Implement key aspects of inner working
- *fa-floppy-disk* Reconstruct interesting past systems
- *fa-paperclip* But cannot be printed on 12 pages of A4

-----------------------------------------------------------------------------------------
- template: image

![](img/intro/c64.png)

# Demo
## C64 BASIC

**Why study universally disliked programming language?**

Somehow allowed everyone to program!

Interesting mode of interaction!

*****************************************************************************************
- template: subtitle

# Course background
## Getting started with F#

-----------------------------------------------------------------------------------------
- template: lists
- class: noborder smaller

# The F# programming language

![](img/intro/fsharp.png)

## What is F# about?

- Functional-first based on OCaml
- Great interop with .NET and JS
- Open-source (MIT) with team in Prague!

## Who uses F# for what?

- Consultancies for full-stack web dev
- Finance and insurance companies for modelling
- TU Kaiserslautern for systems biology
- Success stories like Jet.com

-----------------------------------------------------------------------------------------
- template: icons

# Why F#?
## Building tiny programming systems

- *fa-shapes* Algebraic data types for structure modelling
- *fa-cog* Mostly functional is great for logic
- *fa-pen-to-square* Runs everywhere & has nice tools
- *fa-face-smile* I like the language and can help you!

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## First look at F#

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/intro/elmish.png)

# Elmish architecture

**Functional interactive user interface development**

Types for application  
`State` and user `Event`

Functions to `render`  
and `update` state

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Building a TODO list in F#

*****************************************************************************************
- template: subtitle

# Closing
## Write your own tiny system

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller noborder

# Practical details

![](img/qr.png)

## Course structure
- Videos + bi-weekly hands-on labs
- Watch before & finish after!
- Remote possible - email me
- Check the schedule on course web site!

## To get the credits
- Active participation in the labs
- Awarded based on a git repo
- Complete basic tasks for 4/6 systems

-----------------------------------------------------------------------------------------
- template: title

# Conclusions

**Write your own tiny programming system(s)!**

- Learn interesting programming models!
- Nice programming research methodology
- We have projects and PhD positions available :-)

---

**Tomáš Petříček**, 309 (3rd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg075

*****************************************************************************************
- template: content
- class: condensed

# References

**Tiny system examples**

- [Coeffects: Context-aware programming languages](https://tomasp.net/coeffects/)
- [The Gamma: Democratizing data science](http://turing.thegamma.net/)
- [The Lost Ways of Programming: Commodore 64 BASIC](https://tomasp.net/commodore64/)

**Starting points**

- Ingalls, D. (2020). [The Smalltalk Zoo: Smalltalk-78 (NoteTaker)](https://smalltalkzoo.thechm.org)
- Hohman, F. et al. (2020). [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)
- Schank, R. C., Riesbeck, C. K. (1981). [Inside Computer Understanding Five Programs Plus Miniatures](https://www.routledge.com/Inside-Computer-Understanding-Five-Programs-Plus-Miniatures/Schank-Riesbeck/p/book/9780898590715)
- Kamin, S. (1990) [Programming languages: an interpreter-based approach](https://dl.acm.org/doi/10.5555/78092). Addison-Wesley.
- Kamin, S. (1990) [PLIBA source code mirror on GitHub](https://github.com/pliba)
- Sack. W. (2020). [Miniatures, Demos and Artworks: Three <br/> Kinds of Computer Program, Their Uses and Abuses](https://www.shift-society.org/hapop5/boa.pdf)
