- title: History and philosophy of programming | Programming language design (NPRG075)

*****************************************************************************************
- template: title

# NPRG075
## History and philosophy of programming

---

**Tomáš Petříček**, 204 (2nd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)

**Lectures:** Tuesday 12:20, S6  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg075

<img src="img/qr.png" id="qr" />

*****************************************************************************************
- template: subtitle

# Philosophy of science
## Why does it matter?

-----------------------------------------------------------------------------------------
- template: icons

# Philosophy of science
## What can we learn about programming?

- *fa-fire* What designers assume and never question
- *fa-tape* How to understand odd designs of the past
- *fa-draw-polygon* What is the nature of programming concepts
- *fa-person-dress* What social forces shape programming

-----------------------------------------------------------------------------------------
- template: image

![](img/philosophy/reflections.jpg)

# What do philosophers do?

**Origins, languages, systems, correctness**

How could it have  
gone differently?

-----

**Reflections on ethics, politics, development**

What if we took one aspect as primary?

-----------------------------------------------------------------------------------------
- template: content
- class: three-column smaller

# Doing philosophy of programming

### *fa-cog* Methods

Try to explain  
how scientists think and work

![](img/philosophy/kuhn.jpg)

-----

### *fa-city* Entities

How concepts evolve & what  
are they?

![](img/philosophy/lakatos.jpg)

-----

### *fa-city* Social forces

How social aspects shape technology

![](img/philosophy/gender.jpg)

*****************************************************************************************
- template: subtitle

# Paradigm shifts
## Classic philosophy of science

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/kuhn.jpg)

# Scientific revolutions

**Periods of normal science disrupted by revolutions**

New era with new assumptions when the old ways stop working

**New incommensurable with the old thinking**

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller border

# Philosophy of science

![](img/philosophy/feyerabend.jpg)

## Research programmes (Lakatos)

- Groups of scientists share assumptions
- Explain failures by blaming  
  secondary auxiliary assumptions

## Against method (Feyerabend)

- No single rule explains science
- Hard to say what is reasonable!

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Case study

![](img/philosophy/qr-extensible.png)

## Extensible programming languages

- Extensibility in programming  
  language design (Standish, 1975)
- [tinyurl.com/nprg075-extensible](https://dl.acm.org/doi/pdf/10.1145/1499949.1500003) (PDF)

## What is the idea?

- Look at page 2 (left column)
- Can you make sense of the list?
- Are there extensible programming languages today?

-----------------------------------------------------------------------------------------
- template: image
- class: smaller2x

![](img/philosophy/els.png)

# Chairman's intro (1969)

**The ultimate [objective] is simple and attractive.
A single universal programming system [that] includes a base language & a meta-language.**

A program [consists of], sta&shy;tements in the meta-language which expand (...) the base
language, [followed by a program in the<br />derived language.]

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# A failed 1960s quest

![](img/philosophy/history.jpg)

## Universal Language
- Respectable disciplines (physics)   
  have one (mathematics)

## From Algol to PL/1
- Algol 60 only good for scientific use
- PL/1 aims to do all, but is too complex!  

## Extensible languages
- Last-ditch attempt for universality?

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/revolution.png)

# Programming language revolution

(Gabriel, 2012)

---

**From thinking about programming systems**

Running, with evolving state, modified interactively

**To thinking about programming languages**

Relationships in static code

-----------------------------------------------------------------------------------------
- template: image

![](img/philosophy/wiki.png)

# Smalltalk language

"Smalltalk is an object-oriented, dynamically typed reflective programming language"

**What makes it interesting?**

-----------------------------------------------------------------------------------------
- template: image

![](img/philosophy/browser.png)

# Smalltalk as a programming system

Think not about source code, but about evolving system state!

-----------------------------------------------------------------------------------------
- template: subtitle
- class: stdemo

![](img/philosophy/st72.png)

# Demo
## Smalltalk [72](https://smalltalkzoo.thechm.org/HOPL-St72.html) and [78](https://smalltalkzoo.thechm.org/HOPL-St78.html)


<style>.stdemo img { float:right; border:3px solid black; max-width:360px; }</style>

-----------------------------------------------------------------------------------------
- template: icons

# Smalltalk
## Programming system view

- *fa-floppy-disk* Image-based persistence rather than source
- *fa-square-pen* Application ships with developer tools
- *fa-table-columns* Class browser allows inspecting & editing
- *fa-rotate* Reflection lets the system change itself

-----------------------------------------------------------------------------------------
- template: content
- class: noborder

# LISP language

Functional programming language  
derived from the lambda calculus?

![](img/philosophy/lispxkcd.png)

-----------------------------------------------------------------------------------------
- template: lists
- class: border

# LISP environment

![](img/philosophy/tx0.jpg)

## Time-sharing

- Batch processing in the 1950s
- TX-0 ('58) allowed interactive use
- Multi-user machines via teletype

## AI research requirements

- Programming with symbolic data
- Interactive experimentation
- Programs that improve themselves

-----------------------------------------------------------------------------------------
- template: image

![](img/philosophy/lispeditor.png)

# LISP editor

(Deutsch, 1967)

**Interactive program editing on the terminal**

Teletype, not a screen!

Print using: `P`  
Delete child: `(3)`  
Replace child: `(2 ..)`

-----------------------------------------------------------------------------------------
- template: lists
- class: border smaller

# Interlisp: Interactive Lisp

![](img/philosophy/interlisp.png)

## PILOT (1966)
- Edit code via list transformations
- Advising to enhance procedures
- Modifying state of a running system

## DWIM (1974)
- Interactive program correction
- Suggests automatic fixes when error occurs
- Do What I Mean / Damn Warren's Infernal Machine

-----------------------------------------------------------------------------------------
- template: image

![](img/philosophy/symbolics.jpg)

# Symbolics Lips Machines (1980s)

Machines optimized for LISP with LISP-based environment

Persistent memory with just cons-cells

**Response to new hardware architecture**

-----------------------------------------------------------------------------------------
- template: icons

# Scientific revolutions
## Paradigm shifts in programming

- *fa-brain* Understand what people really thought!
- *fa-arrow-down-a-z* The invention of a programming language
- *fa-laptop-code* The shift from systems to languages
- *fa-people-group* Functional programming "research programme"


*****************************************************************************************
- template: subtitle

# Entities
## Evolution of programming concepts

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/lakatos.jpg)

# How mathematical concepts evolve?

**Polyhedra, space, graph, function, convergence, measurable set**

----

How does the definition change and why?

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/poly1.png)

# Polyhedra

**Euler's formula**

$V-E+F=2$

A polyhedron is a solid whose surface consists of polygonal faces?

-----------------------------------------------------------------------------------------
- template: lists
- class: border

# Counter example?

![](img/philosophy/poly2.png)

## Convex polygons!

Through any point in space there will be at least one plane whose
cross-section with the polyhedron will consist of one single polygon.

## Monster-barring

I turn aside with a shudder of horror from this
lamentable plague of functions which have no derivatives.  
(Charles Hermite, 1893)

-----------------------------------------------------------------------------------------
- template: icons

# Concepts
## Proofs and refutations

- *fa-dna* Concept definitions are not constant but change
- *fa-square fa-regular* Arising from proofs, counter-examples, lemmas
- *fa-dragon* Monster-barring and exception-barring
- *fa-draw-polygon* Concept stretching when understanding evolves

-----------------------------------------------------------------------------------------
- template: lists
- class: border smaller

# Concepts in programming

![](img/philosophy/byte.jpg)

## Change over time!

- Data types, logical types
- Monads and "railway" metaphor
- Processes become abstract

## Multiple forces for change

- New implementation of the concept
- Different metaphor for thinking
- New formalization in a proof

-----------------------------------------------------------------------------------------
- template: lists
- class: border smaller condensed

# Evolution of types

![](img/philosophy/tapl.jpg)

## Implementation & formal modality
Data types like records, modelled as sets

## Implementation modality evolves
Abstract data types for modularity  
Type checking ala lambda calculus

## Intuitive modality evolves
Well-typed programs do not go wrong  
New type systems based on this

## Implementation modality evolves
Types for documentation and editor tooling  

-----------------------------------------------------------------------------------------
- template: lists

# Understanding Monads

![](img/philosophy/qr-monads.png)

## What are monads

- Origins in category theory
- Abstraction in functional programming
- Used for stateful computations

## Writing about monads

- Compare how mathematicians and programmers talk about monads!
- [tinyurl.com/nprg075-mcat](https://ncatlab.org/nlab/show/monad)
- [tinyurl.com/nprg075-mprog](https://blog.ploeh.dk/2022/04/19/the-list-monad/)

-----------------------------------------------------------------------------------------
- template: lists
- class: border smaller condensed

# Evolution of monads

![](img/philosophy/railway.png)

## Formal and intuitive modality
Standard construction in algebraic topology
Monad as a "box" intuition

## Implementation modality appears
Used for sequencing effectful computations  
Definition in terms of _bind_ and _return_

## Implementation & intuition evolves
Monads in Haskell and the `do` notation  
Monad as a "sequencing" intuition

-----------------------------------------------------------------------------------------
- template: icons

# Concepts
## Programming language design

- *fa-tornado* There is more to concepts than just a name
- *fa-virus* Ideas come from logic, linguistics, biology!
- *fa-splotch* Beware of concept stretching as with types?
- *fa-ruler-combined* Capture a new intuition in the design?

*****************************************************************************************
- template: subtitle

# Social forces
## What shapes programming?

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/mit.png)

# Social history<br /> of computing

**How commercial  
interests or gender bias shape computing**

Redefinition of programming as more masculine software engineering in the 1960s

-----------------------------------------------------------------------------------------
- template: content
- class: noborder

# Structured programming

![](img/philosophy/goto.png)

-----------------------------------------------------------------------------------------
- template: lists
- class: border

# Goto considered harmful (1968)

![](img/philosophy/dijkstra.png)

The quality of programmers is a decreasing function of the density  
of go to statements in the programs they produce.

## Problems with goto

- Hard to reason about informally
- Hard to reason about formally
- Code structure does not match runtime behaviour

-----------------------------------------------------------------------------------------
- template: lists
- class: border

# Structured programming

![](img/philosophy/structured.png)

## Not obvious at the time!

- Everyone used to assembly!
- Can the compiler optimize code?
- Is it possible to avoid gotos?

## Structured Programming Theorem (1966)

Us converts waved this interesting bit of news under the noses of the
unreconstructed assembly-language programmers who kept trotting forth
twisty bits of logic and saying, 'I betcha can’t structure this.'

-----------------------------------------------------------------------------------------
- template: image

![](img/philosophy/datamation.png)

# Datamation (1973)

**What is structured programming and how to do it in practice**

From engineering concept to managerial concept

-----------------------------------------------------------------------------------------
- template: icons

# Chief programmer teams
## Top-down management technique

- *fa-people-group* Structured programming for organizing people
- *fa-person-chalkboard* Chief-programmer leading & dividing code
- *fa-sitemap* Supported by programmers, secretary, backup
- *fa-comments* Hostile exchanges between Dijkstra and Mills

-----------------------------------------------------------------------------------------
- template: image
- class: noborder smaller

![](img/philosophy/conway.jpg)

# Conway's law

Any organization that designs a system will produce a
design whose structure is a copy of the organization's communication structure.

-----------------------------------------------------------------------------------------
- template: icons

# Social forces
## Programming language design

- *fa-link* Language features linked to social structures
- *fa-diagram-project* Organizational structure and escape hatches
- *fa-server* Structured, microservices, information hiding
- *fa-tape* Origins of languages - COBOL, Fortran, Algol

*****************************************************************************************
- template: subtitle

# Conclusions
## History and philosophy

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/interdisciplinary.png)

# History and philosophy

**Learning from the past**

Complex reasons why & how programming ideas work and do not work

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Reading

![](img/philosophy/qr-10.png)

## 10 PRINT CHR$(205.5+RND(1));<br />20 GOTO 10

- 15: REM Variations in Basic
- https://10print.org (look for the PDF)

## Why should you read this?

- Fun look at an unexpected bit of programming history
- What can we learn from the past?

-----------------------------------------------------------------------------------------
- template: title

# Conclusions

**History and philosophy of programming**

- Scientific paradigms and paradigm shifts
- The history of programming concepts
- How social forces shape programming

---

**Tomáš Petříček**, 204 (2nd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg075

-----------------------------------------------------------------------------------------
- template: content
- class: condensed

# References (1/2)

**Philosophy of science**

- Kuhn, T. S., (2012). [The Structure of Scientific Revolutions](https://press.uchicago.edu/ucp/books/book/chicago/S/bo13179781.html). Chicago
- Feyerabend, P. (1975). [Against Method](https://www.versobooks.com/books/442-against-method). Verso
- Lakatos, I. (1976). [Proofs and Refutations](https://www.cambridge.org/core/books/proofs-and-refutations/575FC8A6B4FAB79E649EDF5FBB9C6E10). Cambridge

**History & reflections**

- De Mol, L., Primiero, G. eds. (2018). [Reflections on Programming Systems: Historical and Philosophical Aspects](https://link.springer.com/book/10.1007/978-3-319-97226-8). Springer
- Gabriel, R. (2012). [The Structure of a Programming Language Revolution](https://dreamsongs.com/Files/Incommensurability.pdf). Onward!
- Petricek, T. (2022). [Cultures of Programming](http://tomasp.net/academic/drafts/cultures/draft-2022.pdf). Draft
- Petricek, T. (2018). [What we talk about when we talk about monads](http://tomasp.net/academic/papers/monads/)

-----------------------------------------------------------------------------------------
- template: content
- class: condensed

# References (2/2)

**Historical materials**

- Teitelman, W. (1966). [PILOT: A Step Toward Man-Computer Symbiosis](http://publications.csail.mit.edu/lcs/pubs/pdf/MIT-LCS-TR-032.pdf). MIT
- Teitelman, W. (1974). [Interlisp Reference Manual](https://www.softwarepreservation.org/projects/LISP/interlisp/Interlisp-Oct_1974.pdf). Xerox PARC
- Deutsch, P. (1967). [Preliminary Guide to the LISP Editor](https://www.softwarepreservation.org/projects/LISP/bbnlisp/W-21_LISP_Editor_Apr67.pdf). Berkeley
- Dijkstra, E. (1968). [Go To Statement Considered Harmful](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf). ACM
- McCracken et al. (1973). [Revolution in Programming](https://archive.org/details/bitsavers_datamation_34111538). Datamation 12
