- title: Close look at past and today's programs | Programming language design (NPRG075)

*****************************************************************************************
- template: title

# NPRG075
## Close look at past and today's programs

---

**Tomáš Petříček**, 204 (2nd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)

**Lectures:** Tuesday 12:20, S6  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg075

<img src="img/qr.png" id="qr" />

*****************************************************************************************
- template: subtitle

# Close reading
## Two perspectives

-----------------------------------------------------------------------------------------
- template: content
- class: two-column

# Two perspectives on programs

### Critical code studies

Interpreting the meaning of code, software or systems  
in socio-historical context

*fa-search* **Attention to detail**  
*fa-xx* Variable names

*fa-dragon* **Making broad points**  
*fa-xx* Labyrinths in culture

---

### Complementary science

Use history & philosophy to answer questions science itself neglects

*fa-scale-balanced* **Attention to detail**  
*fa-xx* How exactly did it work

*fa-atom* **Making those relevant**  
*fa-xx* New mode of interaction

-----------------------------------------------------------------------------------------
- template: code

```

// Your first C++ program
#include <iostream>

int main()
{
  std::cout << "Hello World!\n";
  return 0;
}
```

# Close reading

"Close reading is the careful, sustained interpretation of a brief passage of a text"

**What can we learn?**

-----

Not always educational start (Java, Haskell)

Reference to a long-term hacker culture

-----------------------------------------------------------------------------------------
- template: icons

# Close reading
## Programming language design

- *fa-shield-halved* Understand socio-historical context
- *fa-hand-sparkles* Design for better social & cultural use?
- *fa-mercury* Understand lost ideas from the past
- *fa-vial-circle-check* Recover and adapt what may be useful!

*****************************************************************************************
- template: subtitle

# Critical code studies
## Closer look at code

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/close/piet.gif)

# Hello World in Piet

**Why look at esoteric languages?**

----

We must not just observe nature in the raw,
but also "twist the lion's tail" to get at
hidden insights

**May reveal facts about normal languages too!**

-----------------------------------------------------------------------------------------
- template: lists

# The meaning of programs

```text
>++++++++[<+++++++++>-]<
.>++++[<+++++++>-]<+.+++
++++..+++.>>++++++[<++++
+++>-]<++.------------.>
++++++[<+++++++++>-]<+.<
.+++.------.--------.>>>
++++[<++++++++>-]<+.
```

## Speaking code
"Like all codes, [source code] is only interpretable within the context of the overall network of relations that make its operations unstable."

## Meaning of code

- **Meaning for the machine**  
  Relies on technological context - compilers, specification
- **Meaning for a human reader**   
  Relies on socio-cultural context

-----------------------------------------------------------------------------------------
- template: content

# Multiple levels of meaning

![](img/close/poetry.png)

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/close/escher.jpg)

# Mutual influences

**Social shapes technical**

Programming reflects our thinking about the world  
e.g. division of labour

**Technical shapes social**

Abstractions define how we think about software  
e.g. information hiding

-----------------------------------------------------------------------------------------
- template: image

![](img/close/foobar.png)

# Foo, bar, baz, ...
(Lennon, 2018)

-----

**Cultural pointer**

Akin to programming language pointers

Marks work as belonging to a particular culture

-----------------------------------------------------------------------------------------
- template: icons

# Foo, bar, baz...
## As cultural pointers

- *fa-location-pin* Metasyntactic variable / meaning placeholder
- *fa-brain* Variable names and comments are for humans
- *fa-user-tie* Neither $x$ nor `AbstractSingletonProxyFactoryBean`
- *fa-network-wired* ARPANET and Request For Comments (RFCs)

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Close look at UNIX 6

![](img/close/qr-unix.png)

## Process switching function

- Released in 1975 for PDP-11
- What can we learn about it?
- [tinyurl.com/nprg075-unix](https://github.com/memnoth/unix-v6/blob/master/sys/ken/slp.c#L264)

## Close reading UNIX code

- Variable names: i, n, p, rp
- "set up his segmentation registers"
- "You are not expected to understand this."

<!--
https://github.com/id-Software/wolf3d/blob/05167784ef009d0d0daefe8d012b027f39dc8541/WOLFSRC/ID_VH.C
FizzleFade
c.f. https://archive.org/details/gebbwolf3d/page/244/mode/2up
-->

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller border yno

# You are not expected to understand this

![](img/close/ritchie.jpg)

The real problem is that we didn't understand what was going on either.  
The savu/retu mechanism (...) was fundamentally broken (...).

[It] worked on the PDP-11 because its compiler always used the same context-save mechanism (...).
[Eventually we] redid the coroutine control-passing primitives altogether,
and this code section,  
and the comment, passed into history.

<style>.yno h1 { letter-spacing:-2px; font-size:42pt; }</style>

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/close/10print.jpg)

# 10 PRINT

**Cultural context of  
a BASIC one-liner**

The birth of microcomputers and tinkerer culture

Randomness and variations of the pattern

Recreating the one-liner in other systems

-----------------------------------------------------------------------------------------
- template: icons

# Critical code studies
## Ideas for programming

- *fa-building-columns* What socio-technical context design uses?
- *fa-users-viewfinder* Design for hackers or non-programmers?
- *fa-book* Analyse what exists, show what could exist
- *fa-masks-theater* "Performative science fiction" demos

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Thimbl: Performative science fiction

![](img/close/thimbl.jpg)

## Federated social network (~2011)

- Artwork, not to compete with Twitter
- Built with a different social context
- Can it work without investments?

## How is it supposed to work?

- Built with as little code as possible
- Using SSH and Finger protocol (1970s)
- Low-tech version of ActivityPub (Mastodon)

-----------------------------------------------------------------------------------------
- template: lists
- class: border

# Programming system demos

![](img/close/crosscut.jpg)

## Future programming

- Imagining alternative ways
- Often through (limited) demos
- End-user, visual, domain-specific

## Places to look at

- Bret Victor: [worrydream.com](http://worrydream.com/)
- LIVE workshop: [liveprog.org](https://liveprog.org/)
- Ink & Switch: [inkandswitch.com](https://www.inkandswitch.com)

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Crosscut: Drawing Dynamic Models

*****************************************************************************************
- template: subtitle

# Complementary science
## Learning from the past

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/close/temperature.jpg)

# Complementary science

Contribute to scientific knowledge through historical and philosophical investigations

**Effectiveness of science leads to dogmatism**

Narrow focus can result in loss of knowledges

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/close/heat.jpg)

# Heat reflection (1791)

**Heat produced by "caloric", cold maybe by another "positive" substance.**

-----

Heat is reflected by mirror!  
Cold is absence of heat?  
But also reflected!

Modern physicists never talk about reflection of cold!

-----------------------------------------------------------------------------------------
- template: content

# Complementary programming?

![](img/close/flash.jpg)

-----------------------------------------------------------------------------------------
- template: image

![](img/close/games.jpg)

# Dot-Com Design

(Ankerson, 2018)

**Amateur can easily cobble something together**

Hackability and familiarity of  
graphical editors

Gives designers  
full control

-----------------------------------------------------------------------------------------
- template: icons

# Complementary science
## Why use it for programming

- *fa-ban* Feel all programming is the same?
- *fa-leaf* Programming has brief but rich history
- *fa-money-bill* Not discarded for experimental failures
- *fa-terminal* Ideas are (relatively) easy to recreate!

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Annoying pop-ups of the 1990s

-----------------------------------------------------------------------------------------
- template: image

![](img/close/close.gif)

# Learning from<br />the 1990s web

**View-source, copy  
and edit culture**

Hosting on Geocities & creative community

Limited user protection (hacks are for fun)

-----------------------------------------------------------------------------------------
- template: content
- class: two-column

# Two eras of the web


### *fa-lock* 2010s web

**Compiled code**    
Minified with dependencies

**Custom elements**    
Pop-ups using `<div>`

**Opaque structure**  
WebAssembly & Canvas

-----

### *fa-lock-open* 1990s web

**View source**  
Readable source code

**Copy & paste**  
Self-contained scripts

**Pop-up windows**  
Unchecked window.open

-----------------------------------------------------------------------------------------
- template: lists
- class: border

# Learning from the 90s web

![](img/close/webstrates.png)

## WebStrates project

- Shareable dynamic media
- Document and code in DOM
- Synchronized across clients
- In-page editor & dev tools

## Further ideas

- How to support reuse by copying?
- Openness and addressability of DOM

-----------------------------------------------------------------------------------------
- template: content
- class: two-column sysprev

# Good old programming systems

![](img/close/boxer.png)

**Boxer's naive realism**  
You see all there is

----

![](img/close/smalltalk.jpg)

**Smalltalk's self-sustainability**  
Built in itself

<style>.sysprev img { max-width:75%; }</style>

-----------------------------------------------------------------------------------------
- template: content
- class: two-column sysprev

# Good old programming systems

![](img/close/pygmalion.jpg)

**Pygmalion's programming**  
By demonstration

-----

![](img/close/hypercard.png)

**Hypercard's usability**  
From user to programmer

*****************************************************************************************
- template: subtitle

# Conclusions
## Close look at programs

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/philosophy/interdisciplinary.png)

# Close look

**As evaluation**  
Reveals more than one may immediately see

**As design tool**  
Think about programming from new perspectives

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Reading

![](img/close/qr-excel.png)

## Are spreadsheets programming?

- Spreadsheets are Code: An Overview of Software Engineering Approaches Applied to Spreadsheets
- [tinyurl.com/nprg075-excel](https://ieeexplore.ieee.org/abstract/document/7476773)

## Why should you read this?

- Interesting case of end-user programming
- How to use programming ideas in new domains

-----------------------------------------------------------------------------------------
- template: title

# Conclusions

**Close reading and complementary science**

- Close look at fine coding details
- Reveals broader cultural points
- Close look at past programming systems
- Reveals ideas we may have forgotten

---

**Tomáš Petříček**, 204 (2nd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg075

-----------------------------------------------------------------------------------------
- template: content
- class: condensed

# References (1/2)

**Critical code studies**

- Marino, M. C. (2020). [Critical Code Studies](https://mitpress.mit.edu/9780262043656/critical-code-studies/), MIT Press
- Cox, G. (2012). [Speaking Code](https://mitpress.mit.edu/9780262018364/speaking-code/), MIT Press
- Lennon, B. (2021). [Foo, Bar, Baz…: The Metasyntactic Variable and the Programming Language Hierarchy](https://sci-hub.se/https://link.springer.com/article/10.1007/s13347-019-00387-2), Philosophy & Technology
- Montfort, N. et al. (2013). [10 PRINT  
  CHR$(205.5+RND(1)); : GOTO 10](https://10print.org/10_PRINT_121114.pdf), MIT Press

**Interesting past systems**

- diSessa, A. A., Abelson, H. (1986). [Boxer: A Reconstructible Computational Medium.](https://web.media.mit.edu/~mres/papers/boxer.pdf), CACM
- Smith, D. C. (1975). [PYGMALION: A creative programming environment](http://worrydream.com/refs/Smith%20-%20Pygmalion.pdf), MIT PhD

-----------------------------------------------------------------------------------------
- template: content
- class: condensed

# References (2/2)

**Complementary science & programming**

- Chang, H. (2008). [Inventing temperature](https://global.oup.com/academic/product/inventing-temperature-9780195337389), Oxford
- Ankerson, M. S. (2018). [Dot-Com Design: The Rise of a Usable, Social, Commercial Web](https://nyupress.org/9781479892907/dot-com-design/), NYU
- Petricek, T. (2021). [Pop-up from Hell On the growing opacity of web programs](http://tomasp.net/blog/2021/popup-from-hell/), Online

**History of UNIX**

- Ritchie, D. (2002). [Odd Comments and Strange Doings in Unix](http://web.archive.org/web/20071011071722/http://cm.bell-labs.com/cm/cs/who/dmr/odd.html)
- Bosch, T. ed. (2022). [You Are Not Expected to Understand This: How 26 Lines of Code Changed the World](https://nyupress.org/9781479892907/dot-com-design/), Princeton

**Programming demos**

- Kaliski, S. et al. (2022). [Crosscut: Drawing  
  Dynamic Models](https://www.inkandswitch.com/crosscut/), Ink & Switch
