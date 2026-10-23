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
