- title: Learning from architecture and design | Programming language design (NPRG075)

*****************************************************************************************
- template: title

# NPRG075
## Learning from architecture and design

---

**Tomáš Petříček**, 309 (3rd floor)  
_<i class="fa fa-envelope"></i>_ [petricek@d3s.mff.cuni.cz](mailto:petricek@d3s.mff.cuni.cz)  
_<i class="fa-solid fa-circle-right"></i>_ [https://tomasp.net](https://tomasp.net) | [@tomaspetricek](http://twitter.com/tomaspetricek)

**Lectures:** Monday 12:20, S7  
_<i class="fa-solid fa-circle-right"></i>_ https://d3s.mff.cuni.cz/teaching/nprg075

<img src="img/qr.png" id="qr" />

*****************************************************************************************
- template: subtitle

# Design and architecture
## Solving complex problems

-----------------------------------------------------------------------------------------
- template: image

![](img/design/london.jpg)

# Architecture and urban planning

Understanding and solving complex problems

Organizing large number of diverse entities

**Useful concepts and methodologies?**

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/design/multics.gif)

# Software architecture

**How to organize systems?**

How can we study what organization makes sense?

How languages and tools shape organization?

How systems grow as requirements change?

-----------------------------------------------------------------------------------------
- template: content
- class: two-column

# Urban planning

### *fa-tree-city* Jacobs on cities

**Problems of simplicity**  
Fully analyzable

**Unorganized complexity**    
Statistically analyzable

**Organized complexity**  
Non-reducible

---

### *fa-rocket* Parnas on software

**Analogy systems**  
Continuous models

**Repetitive digital**  
Reduce via abstraction

**Non-repetitive digital**  
Non-reducible

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Design problems

![](img/design/designerly.png)

## Design problems are ill-defined

- Full information never available
- Cannot be exhaustively analyzed
- No correct solution may exist

## Solving design problems

- Conjectured solution reframes the problem
- Designers impose "primary generator"
- Change problem-as-given in light of solution

-----------------------------------------------------------------------------------------
- template: content
- class: three-column

# Achieving fit

### Vernacular

Adaptation over generations

![](img/design/mudhut.jpg)

---

### Modernist

Problem analysis and fresh design

![](img/design/seagram.jpg)

---

### Post-modern

Prefers cleverness, humour over fit!

![](img/design/dancing.jpg)

*****************************************************************************************
- template: subtitle

# Design patterns
## Learning from architecture

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/design/gof.jpg)

# Design patterns

Based on Christopher Alexander's work on architecture

**Useful but criticized**

Missing the point of Alexander's work

Workarounds for coding  
in a poor language

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/design/paris.jpg)

# Quality without name

**A system has it when  
it is true to its inner  
forces, when it is free  
from contradictions**

Each "living" pattern resolves a system of forces. When all forces  
are resolved, the quality appears.

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Why is it hard?

![](img/design/timeless.jpg)

## Vernacular method

- Shared language lost from community
- Complexity of problems has grown
- Community cannot build a skyscraper

## Modernist method

- Cannot perfectly analyze problem
- Always misses some important detail
- Keeps reinventing imperfect forms

-----------------------------------------------------------------------------------------
- template: icons

# Quality
## How is this about programming?

- *fa-keyboard* Think about programmer thinking and coding
- *fa-computer-mouse* Programming systems, not languages
- *fa-arrows-to-circle* Need to resolve complex systems of forces
- *fa-list-check* Patterns to capture approaches that work

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Achieving fit

![](img/design/rooms.jpg)

## Design pattern

- Context, problem, forces, solution
- Resolves interconnected forces
- Works as a solution template

## Pattern language

- Ordered sequence of patterns
- Can be followed step-by-step
- Ideally shared and agreed on

-----------------------------------------------------------------------------------------
- template: image
- class: smaller

![](img/design/publicness.jpg)

# Degrees of publicness

**Context:** Where people want to live is different

**Forces:** Some want to live where the action is, some in more isolation

**Problem:** How to organize a cluster of homes?

**Solution:** Distinguish private homes, public homes and in-between

*****************************************************************************************
- template: subtitle

# Notebook systems
## Designing a complex system

-----------------------------------------------------------------------------------------
- template: image

![](img/design/jupyter.png)

# Notebook systems

**Literate programming environment - code, outputs, comments**

Used for exploration, scientific tasks, data science, learning

**How to design exploration environment?**

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Using F# in a notebook system

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Case study: Notebooks

![](img/design/qr-ft.png)

## Notebooks for data science

- Use by FT journalists for article
- Start with "Eurostat exports data"
- [tinyurl.com/nprg075-ft](https://github.com/ft-interactive/recycling-is-broken-notebooks)

## Design questions

- What are the specific forces?  
- How are they reflected in the notebooks?
- Which are poorly resolved?

*****************************************************************************************
- template: subtitle

# Pattern languages
## Designing exploration tools

-----------------------------------------------------------------------------------------
- template: image
- class: noborder

![](img/design/exploratory.png)

# Exploratory programming workspaces

Environment that lets you figure something out interactively..

Data science, but also general programming

**Are there common patterns of working?**

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Taeumel et al. (2022)

![](img/design/patlan.png)

## A Pattern Language of an Explora-<br/>tory Programming Workspace

- Patterns in exploratory tools
- Smalltalk, notebooks, UNIX
- System design and ways of using

## Conversation in context

- Seven patterns covering three aspects
- Questions, context, responses
- Capture needs, forces, structure, trade-offs, etc.

-----------------------------------------------------------------------------------------
- template: image
- class: noborder smaller

![](img/design/env.png)

# Programmer, environment, interaction context

> "It is all about you working on a project in
> an environment while continually switching
> between different interaction contexts"

-----------------------------------------------------------------------------------------
- template: icons

# Conversation in context
## Forces resolved by the pattern

- *fa-circle-question* Want to ask question about something
- *fa-map* Finding the right place to ask
- *fa-language* Finding the right words to use
- *fa-atom* Understanding complex technical answer

-----------------------------------------------------------------------------------------
- template: image
- class: noborder

![](img/design/qa.png)

# Conversation<br />in context

**Solution structure**

Iterative question and answer interaction with persistent context

Support for revising questions asking follow-up questions

-----------------------------------------------------------------------------------------
- template: lists

# Further patterns

![](img/design/elaborate.png)

## Elaborate inquiry

- Difficult to ask complex questions
- Use stepwise composition
- Refer to previous answers

## Proxy transport

- Need to access external information
- May be big or use an odd format
- Embed into local context with lazy loading

-----------------------------------------------------------------------------------------
- template: icons

# Further patterns
## Context, forces, solution

- *fa-folder-open* **Coach your environment** by adding information
- *fa-diagram-project* **Concepts in shards** need to be linked
- *fa-bullseye* **Simple response** to be found iteratively
- *fa-search* **Pause and explore** to better understand

*****************************************************************************************
- template: subtitle

# Pattern languages
## Designing pattern languages

-----------------------------------------------------------------------------------------
- template: image
- class: noborder

![](img/design/meta.png)

# Where patterns come from?

----

**Pattern languages  
for creating  
pattern languages**

----

No single systematic method that would always work

-----------------------------------------------------------------------------------------
- template: icons

# Pattern writing
## Where patterns come from

- *fa-igloo* Shared and evolved in a community
- *fa-computer* Repeated solutions in past software systems
- *fa-user-ninja* Personal experience with a problem
- *fa-cloud* Focused group collaboration (origins of wiki!)

-----------------------------------------------------------------------------------------
- template: image
- class: noborder

![](img/design/writing.png)

# A pattern language for pattern writing

(Meszaros+Doble, '97)

**How to structure, write and present patterns & pattern languages**

-----------------------------------------------------------------------------------------
- template: image
- class: noborder

![](img/design/patterns.png)

# A pattern language for creating pattern languages

(Iba+Isaku, 2016)<br /><br />

**Hints on<br /> pattern mining**

Collect experiences
Map and find overlaps
Structure in clusters

-----------------------------------------------------------------------------------------
- template: icons

# Practical tips
## How to write a pattern language

- *fa-arrows-to-circle* Patterns are about resolving forces
- *fa-table* Patterns should have fixed format
- *fa-file* Context, forces, structure, related patterns
- *fa-user-gear* System structure or human interaction with it


*****************************************************************************************
- template: subtitle

# Concepts and methods
## Learning from architecture

-----------------------------------------------------------------------------------------
- template: image

![](img/design/northend.jpg)

# Learning from unaverage clues

(Jacobs, 1961)
<br /><br />

Cannot reduce city  
to a single statistic

**Look for informative singleton clues!**

-----------------------------------------------------------------------------------------
- template: subtitle

# Demo
## Commodore 64 BASIC

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller tenprint

# 10 PRINT CHR$(205.5+RND(1)); : GOTO 10

![](img/design/10print.jpg)

<style> .tenprint h1 { font-size:38pt; letter-spacing:-1px; } </style>

## Technical aspects

- Edit & run in one terminal
- Line numbers for navigation
- Simple with `POKE` for hackers

## Social aspects

- Path from a user to a programmer
- Commodore 64 boots into BASIC!
- Learn by copying from magazines

-----------------------------------------------------------------------------------------
- template: image

![](img/design/radieuse.jpg)

# What works despite the theory

(Jacobs, 1961)
<br /><br />

Elegant theories  
that are convincing  
but do not work

**Document what actually works<br />in practice instead!**

-----------------------------------------------------------------------------------------
- template: lists
- class: smaller

# Information hiding

![](img/design/ada.gif)

## Good software engineering

- Divide systems into modules
- Hide implementation details
- Expose only what is needed

## Why should this work?

- Basic principle of OOP!
- Can freely change internals
- Modules developed independently

-----------------------------------------------------------------------------------------
- template: lists

# Information hiding

![](img/design/ibm360.jpg)

## Brief history

- Decomposing systems (1972)
- IBM OS/360 development (1975)
- Brooks' reflections (1995)
- Cathedral and the bazaar (1999)

## Critique and alternatives

- Design is hard to anticipate
- Cumbersome & inefficient uses
- MIDI SysEx and UNIX DWARF work!

-----------------------------------------------------------------------------------------
- template: content

conceptual coherence --> worst is better
post-modernism --> Perl / Noble

*****************************************************************************************
- template: subtitle

# Concepts and methods
## Unexplored inspirations

-----------------------------------------------------------------------------------------
- template: content

a

* What is left
  - navigation?
  - materials that age well?
  - vernacular architecture?

*****************************************************************************************
- template: subtitle

# Conclusions
## Designing programming systems


-----------------------------------------------------------------------------------------
- template: content

* Conclusions
  - as idea generation
  - as evaluation - tricky
  - very conceptual  

-----------------------------------------------------------------------------------------
- template: content
- class: condensed

# References

- Parnas, D. L. (1985). Software aspects of strategic defense systems. Communications of the ACM, 28(12), 1326-1335.
- Jacobs, J. (1961). The Death and Life of Great American Cities. Random House.
- GoF
- ALexander (Notes, Timeless, Pattern)
- My blog on Alexander
- Jollity
- http://www.hpi.uni-potsdam.de/hirschfeld/publications/media/TaeumelLinckeReinHirschfeld_2022_APatternLanguageOfAnExploratoryProgrammingWorkspace_AuthorsVersion.pdf
- A Pattern Language for Pattern Writin
- A Pattern Language for Creating Pattern Languages
- Pattern Mining Patterns
- Brooks, Parnas, Cathedral & Bazaar, MIDI & gpii nexus
