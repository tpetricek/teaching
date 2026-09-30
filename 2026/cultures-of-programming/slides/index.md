- title: Computational Substrates for Document-Oriented Programming

****************************************************************************************************
- template: title

# Cultures of Programming
## The Development of Programming<br/> Concepts and Methodologies


---

**Tomas Petricek**, Charles University, Prague  

_<i class="fa fa-envelope"></i>_ [tomas@tomasp.net](mailto:tomas@tomasp.net)  
_<i class="fa fa-globe"></i>_ [https:/<span style="margin:0px 0px 0px -12px">/</span>tomasp.net](https://tomasp.net)  
_<i class="fa-brands fa-bluesky"></i>_ [@tomasp.net](https://bsky.app/profile/tomasp.net)    

****************************************************************************************************
- template: content
- style: li { font-size:24pt; letter-spacing:-1px; }

# Cultures of programming

- [**Part 1:** History of programming and why it matters today](01-introduction.html)
- [**Part 2:** Hackers, engineers, managers, mathematicians & humanists](02-cultures.html)
- (...)

****************************************************************************************************
- template: subtitle

# Leftovers
## Leftovers

----------------------------------------------------------------------------------------------------
- template: image
- class: nologo smaller
- background-color: #153374
- style: p { color:#F1DEC2; } p strong { color:#F1DEC2; } .body1 img { border-color:#F1DEC2; }

![](img/cover.png)

**The history of programming, told through the lens of interactions between five cultures of programming.**

Cultures cooperate, exchange ideas, disagree, struggle for control.

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/knight.png)

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/knight.png)

# What went wrong?

Software update activated unused and wrong code

---

**Reflections on the issue**

- Engineering blogs
- Formal verification talks
- SEC commission analysis

----------------------------------------------------------------------------------------------------
- template: lists
- style: p { margin:5px 0px 20px 0px; }

# Reflections on the Knight glitch

![](img/ksteve.jpg)

## Mathematical culture
Software not formally verified correct!

## Engineering culture
Poor testing and engineering practice

## Managerial culture
Incorrect implementation of oversight processes

----------------------------------------------------------------------------------------------------
- template: content
- background-color: #153374
- class: nologo
- style: .cult { margin-right:30px; text-align:center; padding:0px 10px 0px 10px;display:inline-block;
    background:#2C68AC;} strong { color:#F1DEC2; font-size:20pt; }
   img { max-height:250px; border-style:none; margin-top:5px; }

<p class="cult"><strong>Managerial</strong><br><img src="img/carey.png"/></p>
<p class="cult"><strong>Hacker</strong><br><img src="img/spacewar.png"/></p>
<p class="cult"><strong>Humanistic</strong><br><img src="img/perlman.png"/></p>
<p class="cult"style="margin-right:75px"><strong>Mathematical</strong><br><img src="img/mccarthy.png"/></p>
<p class="cult"><strong>Engineering</strong><br><img src="img/ibm360.png"/></p>

****************************************************************************************************
- template: subtitle

# Clashes
## What is the problem of programming

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/eniac.jpg)

# Hacker origins

“Programming in the early 1950s was a black art,  
a private arcane matter involving only a program&shy;mer,
a problem, a computer, ... and a primitive assembly program.”

**John Backus (1976)**

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/dijkstra.jpg)

# Mathematical science

“Program testing can be used to show the presence of bugs, but never to show their absence!” Rather than verifying programs through their testing, we should prove them correct.

**Edsger Dijkstra (1969)**

----------------------------------------------------------------------------------------------------
- template: image
- style: .body1 { width:400px; } .body1 img { max-width:360px; }
- class: nologo

![](img/nato.jpg)

# Software engineering

“The phrase software engineering was deliberately chosen as provocative... We undoubtedly produce software by backward techniques.”

The black art of programming has to make way for the science of software engineering!

**NATO Conference on
Software Engineering (1968)**

----------------------------------------------------------------------------------------------------
- template: image
- style: .body1 { width:400px; } .body1 img { max-width:360px; }

![](img/bums.jpg)

# Humanistic problem

“Alan Kay is more interested in us kids. He repudiates the manipulative arrogance .. and serves the dictum of Seymour Papert, Should the computer program the kid or should the kid program the computer?”

**Brand, Rolling Stone (1972)**

----------------------------------------------------------------------------------------------------
- template: image
- style: .body1 { width:400px; } .body1 img { max-width:360px; }

![](img/sage.jpg)

# Managerial problem

“With SAGE, we were faced with programs too large for one person to grasp entirely and also with the need to hire and train large numbers of people to become programmers... We were faced with organizing and managing a whole new art.”

**Herbert Benington (1956)**

----------------------------------------------------------------------------------------------------
- template: icons

# History
## Cultures of programming view

- *fa-landmark-dome* Cultures emerge early in the history
- *fa-image* Unique values, views, methods, aesthetics
- *fa-chess-rook* Stable over history of programming
- *fa-comments* Not always shared communities
- *fa-people-line* Inherently pluralistic discipline?

****************************************************************************************************
- template: subtitle

# Collaborations
## The birth of programming languages

----------------------------------------------------------------------------------------------------
- template: lists
- class: nologo
- style: img { max-width:400px !important; max-height:400px !important; margin-top:-0px !important; }

# Programming language

![](img/eniac.jpg)


## Programming before

- Direct machine control
- Plugging cables in ENIAC
- Idiosyncratic machine codes

## Remarkable idea!

- New framing metaphor
- New formal models
- Implementation techniques

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/translation.png)

# Mathematical culture

**Translation metaphor for programming (1950s)**

From human language to formal logic and linguistics

Formal grammars for language description

----------------------------------------------------------------------------------------------------
- template: image

![](img/subroutines.png)

# Hacker culture

**Clever tricks (1950s)**

External form allows subroutine libraries

Interpretive routines for extra EDSAC codes

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/univac.png)

# Managerial need

**User groups and computer installation managers**

Common universal notations  

Cross-machine compatibility  
Allow program exchange  
Teaching at universities

----------------------------------------------------------------------------------------------------
- template: content

![](img/flowmatic.png)

----------------------------------------------------------------------------------------------------
- template: lists
- class: noborder nologo
- style: .body img { margin:-50px -50px 0px 0px !important; max-width:1000px !important; max-height:500px !important; }

# Limits of collaboration

![](img/babel.png)

## Meeting of cultures but...

- **COBOL** for managerial business use
- **Algol** for mathematical theory
- **LISP** for AI hackers

## Boundary object

- Shared understanding, but not focus
- Exchange of ideas between cultures
- Failure of universal languages

****************************************************************************************************
- template: subtitle

# Aesthetics
## Disagreements on values

----------------------------------------------------------------------------------------------------
- template: codeanim
- class: code
- style: h1 { font-family:Felipa; } pre { margin-right:20px; } pre code { font-size:12pt; }

```text
float Q_rsqrt( float number )
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;

  // evil floating point bit level hacking
  i  = * ( long * ) &y;             
  // what the fuck?
  i  = 0x5f3759df - ( i >> 1 );
  y  = * ( float * ) &i;

  // 1st iteration
  y  = y * ( threehalfs - ( x2 * y * y ) );
  // 2nd iteration, this can be removed
  // y  = y * ( threehalfs - ( x2 * y * y ) );
  return y;
}
```

# What code is beautiful?

---

<br>

**Hacker culture**

Values clever code that shows understanding of the machine operation

----------------------------------------------------------------------------------------------------
- template: code
- class: code larger
- style: h1 { font-family:Felipa; } pre { margin-right:20px; } pre code { font-size:10pt; }

```text
#define submerge const char*_=O%239?" ":"\t;\t";O*=2654435761;int
#define _cOb8(...) int s,on,__VA_ARGS__;int main(int O, char**Q)

  _cOb8(o_,     _oO8ocQOcOb,       _ocQbo8oo,      _oO8ocOb_
    ){ ;           { ;;;              ;;}             ;{
      ;;             ;{              ; }              {;;}
     }   float   the;;  static things ;; for (;;){ us :;;
    ; ;  break; the;  ;; long grass  ;unsigned squall  ; }
   { } ; while (1){soft:;  submerge us;;    in: sleep (0) ;
    ; ;  printf    (_);   quietly :on  ;;   the; soil:; };
   {{ };           ; ; ;;             ;{ ;            }; {
  {  ;   shake: time (1) ;register   *_, the =clock(s  );
    ;} ; volatile    *_,  winds     ; ;  double wills ;{
      ;  char the    ,*   fire     ;; short companion,*_;}
    ; {  union    {}*_,  together  ;; ;   void *warms  ;}
   } ;;            ;{;              ;} ;              ;;
    ; ;  if (1) wet  :;    raise    (1);  struct{}ure  ;; ;
   ; ;   free (0);for(;;){  newborn :; ;     daughter :; ;
   ;{ ;  extern al,  **     world   ,*re;const ructed  ;};
 ;  ; ;  continue;on:;;    floods   :; ;    of: water :;};}
; ;{ ; ;          ;; {  ;          ; }  ;             }  ; ;  }
```

# Beautiful code

---

<br>

**Humanistic culture**

Use double coding to speak to the human as well as  
to the machine

----------------------------------------------------------------------------------------------------
- template: image
- class: larger
- style: h1 { font-family:Felipa; } .body1 img { margin-top:60px; border:solid 10px #2C68AC; border-radius:20px; }

![](img/mvc.png)

# What code is beautiful

---

<br>

**Engineering culture**

Simple, well-structured. Readability is valued more than cleverness.

----------------------------------------------------------------------------------------------------
- template: image
- class: larger
- style: h1 { font-family:Felipa; } .body1 img { margin-top:70px; border:solid 10px #2C68AC; border-radius:20px; background-color;red; }

![](img/micro.png)

# What code is beautiful

---

<br>

**Mathematical culture**

Code achieves great expressivity using a combination of small number of orthogonal features.

----------------------------------------------------------------------------------------------------
- template: image
- class: larger
- style: h1 { font-family:Felipa; } .body1 img { margin-top:0px; border:solid 10px #2C68AC; border-radius:20px; background-color;red; }

![](img/mills.png)

# What code is beautiful

---

<br>

**Managerial culture**

Structure of code enables appropriate organization of development teams and project management.

<!-- Chief prgrammer teamms from: https://athena.ecs.csus.edu/~buckley/CSc191/Chief_Programmer_Teams-Baker-Mills.pdf -->

----------------------------------------------------------------------------------------------------
- template: icons

# Aesthetics
## Materiality of programming

- *fa-pen-nib* Code matters for hackers and humanists
- *fa-not-equal* For mathematicians code is just maths
- *fa-cog* Engineers value code quality and structure
- *fa-user-tie* Code is secondary for managerial culture

****************************************************************************************************
- template: subtitle

# Clashes
## Struggle for control over a concept

----------------------------------------------------------------------------------------------------
- template: icons

# Object-orientation
## Struggle for control over a concept

- *fa-cart-flatbed-suitcase* **1960s** - Mathematical simulations in **Simula**
- *fa-tablet-screen-button* **1970s** - Personal dynamic media in **Smalltalk**
- *fa-computer* **1980s** - From **Smalltalk** to **C++** and **Java**
- *fa-industry* **1990s** - **UML** and new development processes

----------------------------------------------------------------------------------------------------
- template: image
- style: h2 { margin:30px 0px 0px 0px; font-size:28pt; font-weight:500; } p { margin:15px 0px 0px 0px; line-height:1.1em; }

![](img/nygaard-dahl.jpg)

## SIMULA "1"

Activity declarations  
and processes  

Remote accessing

---

## SIMULA 67

Classes and objects  

Record handling inspired by Hoare

----------------------------------------------------------------------------------------------------
- template: lists

# Three cultures of Smalltalk

![](img/byte.jpg)

## Humanistic (early 70s)
"Computer for Children of All Ages"  
Learning and educational focus

## Hacker (late 70s)
Experimentation tool at Xerox PARC

## Engineering (80s-90s)
From Tektronix to IBM Visual Age  
Test-driven development, design patterns

----------------------------------------------------------------------------------------------------
- template: content
- class: two-column nologo
- style: .body img { max-width:180px; margin-left:30px; }

# Object-oriented methodology

**How do you design   
software using objects?**

Objects as active actors   
Responsibilities of objects

![](img/doos.png)

---

**From objects to software development processes**

Objects support requirements analysis, team structuring

![](img/uml.png)

----------------------------------------------------------------------------------------------------
- template: icons

# Object-orientation
## Disagreements and struggles for control

- *fa-shapes* What is object-orientation about
- *fa-folder-open* Software malleability and openness
- *fa-brands fa-black-tie* Help programmers vs. manage programmers
- *fa-circle-question* Degree of incommensurability

****************************************************************************************************
- template: subtitle

# Conclusions
## Cultures of Programming

----------------------------------------------------------------------------------------------------
- template: title
- class: nologo
- style: .qr { position:absolute; right:0px; bottom:30px; width:220px; border:solid 6px black; } .body p { margin-bottom:40px;}

# Cultures of Programming

All models are wrong, but some are useful   
Framing history and current debates   
Programming is a pluralistic enterprise   

---

**Tomas Petricek**, Charles University, Prague  
[tomas@tomasp.net](mailto:tomas@tomasp.net)  |
[tomasp.net](https://tomasp.net)

**Open-access book and exhibition**    
Available at [tomasp.net/cultures](https://tomasp.net/cultures)


<img src="img/qr.png" class="qr" />

****************************************************************************************************
- template: subtitle

# Bonus slides

****************************************************************************************************
- template: subtitle

# Collaborations
## The history of programming with types

----------------------------------------------------------------------------------------------------
- template: largeicons

# History of types

- *fa-pen-nib* **1903** - Avoiding logical paradoxes (Russell)
- *fa-gears* **1956** - Numbers in two modes (FORTRAN)
- *fa-database* **1957** - Data description cards (FLOW-MATIC)
- *fa-clipboard* **1974** - Abstract data types (Clu)
- *fa-terminal* **1978** - Meta-language for a theorem prover (ML)
- *fa-not-equal* **1989** - Types in proof assistants (Alf and Rocq)
- *fa-hand-pointer* **2012** - Unsound type systems (TypeScript)

----------------------------------------------------------------------------------------------------
- template: content
- class: two-column nologo

# Types in programming

**FORmula TRANslator  
rather than a language**

Arguments in fixed or  
floating-point mode

![](img/fortran.jpg)

---

**Algorithmic Language**

Types (integer, real, Boolean) denote properties of values;  
Subscripts for arrays

![](img/algol.jpg)

----------------------------------------------------------------------------------------------------
- template: image

![](img/comtran.png)

# IBM COMTRAN

**Electronic versions of paper-based records**

Data records with specific string formatting

----------------------------------------------------------------------------------------------------
- template: lists

# Towards a universal language

![](img/receptacle.png)

## Mathematical models
- Data spaces (McCarthy, '59)   
- Product $A \times B$, union $A \oplus B$
- Set-theoretical types (Hoare, '72)

## Types in Algol 68

* A long and difficult struggle
* Whereas ALGOL 60 has values of [three types],  
  ALGOL 68 features an infinity of “modes”.

----------------------------------------------------------------------------------------------------
- template: lists
- style: .body img { max-width:220px !important; }

# From mathematics to engineering

![](img/liskov.jpg)

## Lambda-calculus models (Morris '69)
Models type checking via derivation rules

## Types are not sets (Morris '73)
Authentication and secrecy problems   
Now in Cedar system at Xerox PARC

## Abstract data types (Liskov '74)
Type checking done at runtime in Clu  
Cites Reynolds ("personal communication")

----------------------------------------------------------------------------------------------------
- template: image
- class: smaller
- style: .body1 img { margin-top:40px; border:solid 10px #2C68AC; border-radius:20px; }

![](img/ml.png)

# LCF/ML (1978)

**Abstract data types**  
for proof terms

**Data types**  
for convenient programming

**Type checking**  
for proof correctness

----------------------------------------------------------------------------------------------------
- template: icons

# Types
## Cultural reconciliation at last...?

- *fa-not-equal* Proof assistants and dependent types
- *fa-globe* Type providers and data as types
- *fa-right-left* Modelling types as relations
- *fa-list* Unsound type systems for the real world
