- title: Functions, trees, processes (NPRG086)

****************************************************************************************************
- template: title
- style: h1 { font-size:42pt; } h2 { font-size:35pt; margin-top:-30px; }

# NPRG086: **Functions, trees, processes**
## Functions from the programming perspective

---

**Tomáš Petříček**, 204 (2nd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-brands fa-bluesky"></i>_ [@tomasp.net](https://bsky.app/profile/tomasp.net)   
_<i class="fa fa-globe"></i>_ [https://tomasp.net](https://tomasp.net)  

****************************************************************************************************
- template: subtitle

# Course
## Background

----------------------------------------------------------------------------------------------------
- template: content

todo: timeline (for the course)

----------------------------------------------------------------------------------------------------
- template: content

todo: ...?

****************************************************************************************************
- template: subtitle

# Functions
## Background

----------------------------------------------------------------------------------------------------
- template: content

Three layers

- intuition
- formalism
- implementation

----------------------------------------------------------------------------------------------------
- template: content

# Mathematical background

(Many different views, to be clarified by David's lectures!)

* **Leibniz (17th century)** function as a geometrical curve?
* **Euler (18th century)** function as a dependence; function as analytical formula
* **Bourbaki (1939)** function as a subset of a cartesian product
* **Church (1941)** function a correspondence rule (applied to obtain another thing)

Typically numerical operations; Church starts thinking about more symbolic operations

****************************************************************************************************
- template: subtitle

# Functions
## Early machines

----------------------------------------------------------------------------------------------------
- template: content

TODO: What 1940s computers looked like!

----------------------------------------------------------------------------------------------------
- template: content

### ASCC (Harvard Mark 1), early 40s

> As described above, subroutines, as reusable sequences of instructions, were held
as physically distinct program tapes on the ASCC and the Bell Labs machine (Priestley)

(word routine in use already, but not subroutine)

### Curry (1949/50) c.f. de Mol & Bullynck (Haskell paper)

Curry (lack of subroutines on ENIAC before reprogramming):

>The present report is an attack on this prob-
lem from the standpoint of composition of computing schedules [...] This
problem is here attacked theoretically by using techniques similar to
those used in some phases of mathematical logic.

ENIAC after reprogramming:

> This is in fact, another new “first” claim. Haigh et. al. claim that the Monte Carlo program “was the first code with a closed subroutine to be executed,”
[CHM](https://computerhistory.org/blog/the-neverending-quest-for-firsts/)

----------------------------------------------------------------------------------------------------
- template: content

### von Neumann - Draft report on EDVAC; Turing's ACE

EDVAC "automatic calculator" vs. ACE "universal machine"


### Turing's Automatic Computing Engine (ACE)

**Subsidiary operations & BURY/UNBURRY (stack)**

(reminiscent of the way things are defined in his mathematical formalism of m-machines c.f. Priestley p.144)

> When we wish to start on a **subsidiary operation** we need only
> make a note of where we left off the major operation and then
> apply the first instruction of the subsidiary.  When the subsidiary
> is over we look up the note and continue with the major operation.

<!--
Each subsidiary operation can end with instructions for this
recovery of the note.  How is the burying and disinterring of the
note to be done?  There are of course many ways.  One is to keep a
list of these notes in one or more standard size delay lines (1024),
with the most recent last.  The position of the most recent of these
will be kept in a fixed TS, and this reference will be modified
every time a subsidiary is started or finished.  The burying and
disinterring processes are fairly elaborate, but there is
fortunately no need to repeat the instructions involved, each time,
the burying being done through a standard instruction table BURY,
and the disinterring by the table UNBURY.
-->

BURY/UNBURRY instructions

https://mark.people.clemson.edu/subroutines.html

----------------------------------------------------------------------------------------------------
- template: content

### Goldstine & von Neumann - Planning and coding report

Free vs. bound variables ("borrowed from formal logic")

> [First kind] assumes a sequence of different values in the course of the
procedure (...) it "from the outside". Such a variable is called
a **bound variable**. Second [is]
essentially the same thing as a parameter (...) a value has to be substituted for it
and attributed to it ("from the outside"), ... Such a variable is called a
**free variable**.

But **not in the context of subroutines!**

----------------------------------------------------------------------------------------------------
- template: content

### Goldstine & von Neumann - Planning and coding report

**Background** Coding vs. programming in the 1940s

>  We call the coded sequence of a problem a routine, and one which
is formed with the purpose of possible stibstitution into other routines, a
subroutine.

(Also imagine "library" of such subroutines)

Concerned with "substitution" (copying order sequence into the problem c.f. linking)

Orders of different kinds; those with addresses require rewriting the address

----------------------------------------------------------------------------------------------------
- template: content

### Mauchly

(PREPARATION OF PROBLEMS FOR EDVAC-TYPE MACHINES)

> ... even fairly elementary processes should be made a matter of subroutine.
(...) those of any complexity presumably ought to be in a library - that is, a set of magnetic
 tapes  in which previously coded problems of permanent value are stored.

----------------------------------------------------------------------------------------------------
- template: content

### Hopper's A-0

program = "a sequence of subroutines and its arguments"; "compiling" = assembling a program from programs made up previously

### Mauchly's Short Code

talks about "library of functions"

----------------------------------------------------------------------------------------------------
- template: content

# EDSAC (Cambridge)

Second edition report (1951)

> Since an automatic computing machine can perform
only a very limited number of basic operations, a mathematical calcula
tion usually requires an extended sequence of orders. It is often convenient
to break up this sequence of orders into self-contained groups of orders
called subroutines.

Rewriting addresses:

> The written and punched form is called the
external form, and the form inside the machine the internal form.

"library of subroutines" [c.f. PHOTO FROM POSTER]

----------------------------------------------------------------------------------------------------
- template: content

### Open vs. closed subroutines

[An **open] subroutine** .. is entered immediately after the execution of
the order coming before it in the store and, when the subroutine has done
its work, control passes to the order immediately following it.

**closed subroutine** ... can be
placed anywhere in the store, and is entered by a jump order and left by
another jump order.  [TP: Stores return address]

**Interpretive subroutines** ..  enable the programmer to write
.. in an order code which may be quite
different from the basic order code of the machine. [These]
interpretive orders .. do not enter the control circuits of the machine
but are extracted .. one by one, by the interpretive subroutine, which
examines them, and carries out the appropriate operations.


----------------------------------------------------------------------------------------------------
- template: content

# Early machines

1. Subroutines terminology used consistently
2. Subroutines implement mathematical functions (sin, etc.)
3. Occasional link to logic (von Neumann) but not functions
4. Engineering concerns about rewriting addresses
5. Library metaphor based on actual shelves; occasional "library of functions"

----------------------------------------------------------------------------------------------------
- template: content

# Other notes

c.f. numerical analysis - Sam (correctness of approximations)
-> done but not visible in technical manuals

Intel's FDIV error
(and floating point numbers generally - date to FORTRAN or earlier?)

(when programming hits real entities)

****************************************************************************************************
- template: subtitle

# Functions
## From FORTRAN to Algol

----------------------------------------------------------------------------------------------------
- template: content

### ADES (Automatic Digital Encoding System)

(1955; still before FORTRAN and Algol)

> The ADES language is essentially mathematical in structure. It
is based on the theory of the recursive functions and the schemata
for such functions, as given by Kleene. [BL 56', p. 72]
The ADES approach to automatic programming is believed to be
entirely new. Mathematically, it has its foundations in the
bedrock of the theory of recursive functions.

(knuth-trabb-pardo, p81)

* line 2 defines a function (using Polish notation)

**Talks about function definitions!**

----------------------------------------------------------------------------------------------------
- template: content

### 1945 FORTRAN [report](https://softwarepreservation.computerhistory.org/FORTRAN/BackusEtAl-Preliminary%20Report-1954.pdf)

- functions are single-valued; no specific list e.g., sin, sqrt, ...
- formulas; even for print/IO, goto formula; no mention of (sub)routines

### 1956 FOTRAN for IBM 704 [manual](https://archive.computerhistory.org/resources/text/Fortran/102649787.05.01.acc.pdf)

- "Pre-written routines to evaluate any single-valued functions of any number o f arguments"
- Library subroutines exist on the master FORTRANtape in relocatable binary form.
- `[X]SIN[0|1]F` naming scheme for functions; modes for floating/fixed

[towards FORTRAN II](https://mcjones.org/dustydecks/archives/2005/08/07/46/) - adding CALL, SUB DEF

----------------------------------------------------------------------------------------------------
- template: content

### 1958 - FOTRAN II

- `CALL` / `SUBROUTINE` (called using `CALL`) / `FUNCTION` (called as functions)
- uses `<name> = expr` for returns (`RETURN` dropped)

----------------------------------------------------------------------------------------------------
- template: content

# Algol

[Preliminary report (1958)](https://dl.acm.org/doi/pdf/10.1145/377924.594925)

- Function (call) is expression; Procedure (call) is a statement
- Function declaration (=expr) vs. procedure declaration (statements with return)
  - hidden parameters are bound variables within function

Algol 60
 - unifies functions and procedures as just procedures that may return
 - admins side-effects in procedures
 - added recursive procedure declarations (hard to implement!)
 - call by name vs. call by value

(Controversy reported in HOPL papers)

>  essentially the mathematical concept of a function as a mapping from domain to range ...
absolutely excludes any kind of so-called side effects.

----------------------------------------------------------------------------------------------------
- template: content

Early programming languages

1. Subroutine terminology slowly abandoned
2. Functions vs. procedures (this will keep playing role later)
3. More mathematical motivations, some worry about side effects


****************************************************************************************************
- template: subtitle

# Functions
## From BCLP to C

----------------------------------------------------------------------------------------------------
- template: content

### CPL (1963) - includes Strechey, Landin (TODO: semantics history)

- function (inside expressions) vs. routine (as a command)
- but make explicit reference to Church and lambda calculus (where clauses)

Free variables in function definitions [1965 manual](https://www.chilton-computing.org.uk/acl/pdfs/cpl.pdf)

- a function defined with ≡ uses its free variables directly (by reference), one defined with = has them evaluated and fixed at the time of definition (by value).
- direct lambda calculus terminology use!

> In addition to single values, the results of functions
may be lists, arrays (see later) and functions themselves,
but not routines. (1963)

----------------------------------------------------------------------------------------------------
- template: content

Strachey complains [in 1967 lecture notes [published 2000]](https://facweb.cdm.depaul.edu/smitsch/courses/csc447fa23/assets/articles/strachey-fundamental-concepts-in-programming-languages.pdf):

> procedures in ALGOL are second class citizen

```
(if x > 1 then a else b) + 6
(if x > 1 then sin else cos)(x)
```

> nor can we write a type procedure (ALGOL’s nearest approach to a function) with a result
which is itself a procedure.

----------------------------------------------------------------------------------------------------
- template: content

**CPL** was slow to be implemented

**BCPL** (1967) - Basic Combined Programming Language
 - drops closures and uses only 'functions', no routines

**B** - Thompson & Ritchie - directly based on BCPL, leading to "functions" in C

----------------------------------------------------------------------------------------------------
- template: content

### From CPL to C

1. More direct links to lambda calculus (via work on semantics)
2. Importing interesting concepts (variable capture, first class)
3. Implementation limits the potential (CPL -> BCPL -> B simplification)
4. Name _function_ is left, but without the content!

****************************************************************************************************
- template: subtitle

# Functions
## LISP

----------------------------------------------------------------------------------------------------
- template: content

[Priestley on origins of LISP](https://link.springer.com/article/10.1007/s11023-017-9432-7)

> LISP was not based on the lambda calculus, despite using the word
"LAMBDA" to denote functions. At the time he invented LISP. McCarthy
was aware of (Church 1941) but had not studied it.

### Real history of LISP

1. AI origins (Newell and Simon languages for list processing and AI)
2. McCarthy's involvement in FLPL adding lists to FORTRAN (do not make a new language!)
3. conditional expression `XIF`, recursive function theory (again!)
    (see [letter to the editor](https://dl.acm.org/doi/pdf/10.1145/368405.1773349))
4. Lambda notation for creating functions to be used as arguments

----------------------------------------------------------------------------------------------------
- template: content

# LISP 1.5

Borrows the lambda notation from lambda calculus

Implementation in terms of association list (a-list); variables pushed on a-list, looked up in the current a-list on call

**This is dynamic scoping not what you get in lambda calculus!**

Also, `print` is a function of one argument (side-effects)

----------------------------------------------------------------------------------------------------
- template: content

# Funarg problem

How to find values for free variables e.g. `X` in `(LAMBDA (Y) (CONS (CAR X) Y))`

[History of LISP](http://jmc.stanford.edu/articles/lisp/lisp.pdf)

- James R. Slagle's program that does not work (assumes lexical scoping)
- Steve Russell's `FUNARG` captures current a-list (environment)

----------------------------------------------------------------------------------------------------
- template: content

# Meanwhile

Landin's work on modelling ALGOL using Church's lambda calculus
[paper](https://www.cs.cmu.edu/~crary/819-f09/Landin64.pdf)

> We represent the value of a $\lambda$-expression by a
bundle of information called a "closure," comprising the
$\lambda$-expression and the environment relative to which
it was evaluated.

Work in the context of formal semantics of programming languages

----------------------------------------------------------------------------------------------------
- template: content

### Back to LISP

Moses's "The function of FUNCTION in LISP, or why the FUNARG problem should be called the environment problem"

identifies the funarg problem, with reference to Landin and lambda calculus

Sussman and Steele's Scheme made lexical scoping with full closures the default following Landin

----------------------------------------------------------------------------------------------------
- template: content

# LISP History

1. Origins in AI, with weak inspiration from lambda calculus
2. Funarg problem shows it is different; fixed via workarounds
3. Later rethinking takes lambda calculus seriously -> Scheme

----------------------------------------------------------------------------------------------------
- template: content

# Conclusions

Theory finally meets practice, but only after LISP?

****************************************************************************************************
- template: subtitle

# Functions
## Functional programming

----------------------------------------------------------------------------------------------------
- template: content

### Actual history of FP <-> LC

Landin (introduced to LC by Penrose via Mervy Pragnell's underground reading group)
[see talk](https://smlfamily.github.io/history/ML2015-talk.pdf)

- The mechanical evaluation of expressions (1964)
- A correspondence between ALGOL 60 and LC (1965)
- A Generalization of Jumps and Labels (1965)  
  (program body closure - a precursor of continuations)
- The next 700 programming languages (1966) - ISWIM  
  (implemented as PAL at MIT; in BCPL! included James H. Morris, whose PhD introduced types in modern PL sense in 1968)

**Prehistory of "modern FP" here...**

----------------------------------------------------------------------------------------------------
- template: content

### Mechanical evaluation (1964)

Introduces "closure" (see above) noting

> Closures are roughly the same as McCarthy's "FUNARG" lists

### 700 PLs - Landin (1966)

> The word "denotative" seems more appropriate than nonprocedural, declarative or functional.
> The antithesis of denotative is "imperative."

"Function definitions" in a modern FP sense

----------------------------------------------------------------------------------------------------
- template: content

# Early FP-like languages

### PAL (MIT, 1967) [manual](https://softwarepreservation.computerhistory.org/PAL/Pal-ref-man.pdf)

- simple applicative subset (lambdas, functions, tuples, conditional, let)
- imperative (assignment, goto)

### POP-2 (Edinburgh, 1970)

Inspired by Algol, but "functions first-class" (Burstall addressing Strachey's complaint about Algol); but maybe less function-oriented than PAL

**Scoping still not settled**

- POP-1 had dynamic scoping, with _frozen formals_ `(% ... %)` akin to FUNARG

----------------------------------------------------------------------------------------------------
- template: content

# More theory

### Dana Scott (70s)

denotational semanitcs, domain theory... (later link to categiries)

### Morris, Reynolds (70s)

theory of type structure (typed lambda calculus as a programming language)

----------------------------------------------------------------------------------------------------
- template: content

# LCF/ML (from late 70s)

- Stanford - LCF an interactive theorem prover (made thinkable by hardware advances?)
- Edinburgh LCF (late 70s)
- ML as a meta-language for LCF
- becomes a programming language; HOPE adds data types etc.
- VAX ML, Standard ML (formal definition in 1990)

----------------------------------------------------------------------------------------------------
- template: content

### Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs

Backus, Turing Award lecutre (1978)

- **functional programming** terminology
- algebra of programs and formal reasoning about them

> Just as structured programming eschews many control statements to obtain programs
> with simpler structure, better properties, and uniform methods for understanding their behavior,
> so functional programming eschews the lambda expression, substitution, and multiple
> function types.

----------------------------------------------------------------------------------------------------
- template: content

# Unexpected effects!?

* People agree with the diagnosis (von Neumann bottleneck)
* People adopted the term **functional programming**
* They mostly kept lambda functions and variables
* Historiographical impact - links FP to lambda calculus -> Mythology
  (ignores "styles" c.f. Priestley; only languages)

----------------------------------------------------------------------------------------------------
- template: content

Caveats:

[Dijkstra](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD692.html)

>In short, the article is a progress report on a valid research effort but suffers badly from aggressive overselling of its significance, long before convincing results have been reached. This is the more regrettable as it has been published by way of Turing Award Lecture.

Also:

- Algebra of programs exists, but more academic
- Later work on FP tries to develop optimizations...

----------------------------------------------------------------------------------------------------
- template: content

# Conclusions

1. Formal link to lambda calculus established firmly
2. Treating functions as first-class values
3. Purity and scoping remain disputed territory!
4. Backus has effect mainly on an intuitive level??

----------------------------------------------------------------------------------------------------
- template: content

# Functional programming

### SASL (Turner, 1978), KRC (Turner, 1982)
Lazy, purely functional

### Miranda (Turner, 1985)
Turner, Miranda: purely functional + non-strict + Hindley–Milner polymorphism in one language

### Haskell (1990)
program is a function, mostly follows Miranda, type classes as a novelty

Also:

**"Why functional programming matter" (Hughes, 1984-89)** - builds more the FP intution

****************************************************************************************************
- template: content

(side-note)

### Continuations - capturing the "program body closure" as a function

How to deal with jumps without jumps?

- van Wijngaarden's (1964): "Provide each procedure declaration with an extra formal parameter... and insert at the end of its body a goto statement leading to that formal parameter."

- Wadsworth (1970/71) "a concept for 'the meaning of the rest of the program'", and reports: "Once I'd coined the word [continuation] it all clicked and the rest followed."

****************************************************************************************************
- template: subtitle

# Functions
## Conclusions

----------------------------------------------------------------------------------------------------
- template: content

# Conclusions

1. **Machine lineage** vs. **mathematical lineage**
2. First attempt to use mathematics/LC fail (von Neuman & Goldstine; Landin & Strachey; ADES based on theory of recursive functions)
3. Post-LIPS import of lambda succeeds - why? it is actually implemented and 'works'!


----------------------------------------------------------------------------------------------------
- template: content

# Conclusions

1. Mathematical intuition and engineering implementation disconnected at first (function vs subroutine)
2. Engineering notion develops without link to theory or intuition

----------------------------------------------------------------------------------------------------
- template: content

# Imports

**Nothing is done properly though!**

- free and bound variables imported by von neumann
- everyone imports 'function' (sin, etc.)
- Church imports lambda notation
- as much from Recursive function theory as Lambda Calculuc

(Later, Scheme does it right)

----------------------------------------------------------------------------------------------------
- template: content

# What is a function?

- different operationalizations??

### Monster-baring?

- **pseudo**-functions (like print, and other effects) in [LISP 1.5](https://softwarepreservation.computerhistory.org/LISP/book/LISP%201.5%20Programmers%20Manual.pdf)

----------------------------------------------------------------------------------------------------
- template: content

# Naming

- Routines and subroutines in the early days
- Functions struggle to materialize before Bacus
- Functional programming - shift after Backus

----------------------------------------------------------------------------------------------------
- template: content

# Many ideas struggle

(Maybe before firm link across levels is established?)

- first class-nes (ALGOL, LISP)
- link to lambda calculus (ADES and LISP based on recursive theory)
- free and bound variables (von Neumann report, lambda calculus)
- others? continuations (many names and different implementations over time; subroutine itself)

----------------------------------------------------------------------------------------------------
- template: content

# Interactions

- Practice develops first from scratch (subroutines)
- Intuition is imported from commonsense mathematics (functions implemented by subroutines)
- Later intuition (lambda calculus) reveals gaps
- Theory develops later, transforming practice (Scheme)
- Purity is an attempt to make FP more "mathematical"
- Laziness is an implementation aspect not existing in mathematical functions (but existing in LC)




















----------------------------------------------------------------------------------------------------
- template: content

xx
