- title : Software Engineering: Revising & learning guide
- description : Software Engineering: Revising & learning guide
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO886: Software Engineering**<br/> Revising & learning guide

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
- class: part

# **Module structure**

----------------------------------------------------------------------------------------------------

# Disclaimer

This slide deck tries to give a brief summary of the most important topics covered in my part
of the course. However, keep in mind that it's not possible to condense all lecture material
into one slide deck, so some things may be missing!

There are more theoretical and more practical lectures. For the theoretical ones, you should have
understanding of the key concepts, but you don't need huge amount of detail. For practical ones,
you should be able to apply them to sample problem or code.

----------------------------------------------------------------------------------------------------

# Module structure (1/3)

**History and principles** ([history](history.html), [open-source](oss.html), [principles](principles.html))

_These lectures cover theoretical material (with the exception of "contributing to open-source"
section). You should understand the key principles from the lectures._

_These lectures do not follow a textbook, so your best resources are the lectures. Those are based on various books
and papers, but often pick only a couple of ideas from a long book._

----------------------------------------------------------------------------------------------------

# Module structure (2/3)

**Modelling** ([requirements](requirements.html), [structure](structure.html), [behaviour](behaviour.html))

_These lectures cover basics of UML and related methods. You should be able to use those methods
on small practical examples such as those discussed in lectures and classes._

_There is a variety of other good resources on UML online. We only covered a small subset
of UML in the lectures, so online materials may cover more than you need._

----------------------------------------------------------------------------------------------------

# Module structure (3/3)

**Modern practices** ([git](collaborative.html), [continuous](continuous.html), [quality](code.html), [errors](errors.html))

_These lectures cover a range of practical tools (like git and GitHub) and coding practices
(indentation, naming, error handling) that you should be familiar with. You should be able
to write code that follows those practices or find issues in code that does not follow them._

_There are good online resources for some of the topics, but the lectures do not directly follow
one resource, so it's best to follow lectures and occasionally look elsewhere._

****************************************************************************************************
- class: part

# **History and principles**

----------------------------------------------------------------------------------------------------

# **Key things** - Origins and history (1/2)

**Why is building software hard?**

_In what ways are "software systems" different than "algorithms"
and why is this making them hard to build?_

_You can have a quick look at the [No Silver Bullet](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)
essay, which was mentioned in the lecture, but the summary in the lecture is sufficient._

----------------------------------------------------------------------------------------------------

# **Key things** - Origins and history (2/2)

**Software industry crises**

_The lecture discussed three "crises" that were caused by some developments in the industry
(typically societal changes leading to the need to build different kinds of system). Those are
1950s Labour crisis, 1970s Software engineering response and 1990s Application crisis._

_You should know what caused these crises and what tools or methods were response to those._

----------------------------------------------------------------------------------------------------

# **Key things** - Open source software (1/3)

**History and issues**

_The lecture compared the culture of "commercial software" and "free software" and discussed
some of the issues in open-source community such as sustainability and code of conducts._

_You should know that these issues exist and give one or two ways in which the principles behind
commercial and free software differ._

----------------------------------------------------------------------------------------------------

# **Key things** - Open source software (2/3)

**Different licensing models**

_We compared a number of licensing models, namely the free software model (free as in freedom),
dual licensing model (pay with either money or code), consulting and corporate models (free as
in free beer)._

_You do not need to know any license details, but you should be able to say the differences
between GPL and MIT/BSD/Apache. You should also know how different models are typically funded._

----------------------------------------------------------------------------------------------------

# **Key things** - Open source software (3/3)

**Contributing to open source**

_This is a more practical part of the lecture. We talked about how to contribute to open-source
software, looking at consistent coding style and minimal, complete, verifiable examples for
reporting issue._

_You should be able to write code in consistent coding style and give minimal, complete, verifiable
examples for a sample code issue._

----------------------------------------------------------------------------------------------------

# **Key things** - Software engineering principles (1/2)

**Complexity of software systems**

_We looked at the key points made by Fred Brooks - you should know what the terms "accidental"
and "essential" complexity mean._

**Environment of software systems**

_We discussed why are some systems (such as anti-ballistic-missile defence systems) hard to build
and discussed characteristics of the environment that make building software hard._

----------------------------------------------------------------------------------------------------

# **Key things** - Software engineering principles (2/2)

**Two key principles of software engineering**

_You should remember the two key principles discussed in the lecture: First, why we cannot
expect order of magnitude improvement in productivity and, second, what kind of systems (in
what kinds of environments) can be "mastered"._

****************************************************************************************************
- class: part

# **Modelling**

----------------------------------------------------------------------------------------------------

# **Key things** - Modelling (1/2)

**Up-front specification vs. communication**

_Modelling (all kinds that we discussed) can be used in two ways - as a tool for writing full
up-front specification and as a tool for communication with customer. You should recognize the
differences between these two uses and say how one might use a particular tool (UML or user stories)
for one or the other method._

----------------------------------------------------------------------------------------------------

# **Key things** - Modelling (2/2)

**User stories and UML diagrams**

_We covered user stories and a range of UML diagrams. You should be able to use those
in practice and draw small diagrams or write brief user story. Our focus was more on
"communication" than on full formal specification, but you should use correct format
(of user stories) or arrow types (in UML)._

----------------------------------------------------------------------------------------------------

# **Key things** - Modelling requirements

**Use case diagrams**

_Those visually represent what a system should do. You should be
able to use inheritance (one use case or actor is a more specialized version of
another) and dependency (one use case requires another in order to work)._

**User stories**

_User stories are textual and less formal ways of specifying requirements. You should be able
to correctly use the "As a user I want something so that benefit" format._

----------------------------------------------------------------------------------------------------

# **Key things** - Modelling structure

**Class diagrams**

_Class diagrams can model code structure (as implemented in Java) or a more general concepts
that are mapped to more code. You should be able to draw classes with attributes and methods
and also their relationships._

_For relationships, you should know (and be able to correctly draw arrows for)_
Has-A _(one class contains one or more other classes, including multiplicity)_
Is-A _(a class inherits from another) and_
Depends-on _(a class  
requires another one in implementation)_

----------------------------------------------------------------------------------------------------

# **Key things** - Modelling interaction

**UML Sequence diagrams**
_Sequence diagrams let you model communications (say, how mobile app communicates with server).
You should understand different kinds of messages (synchronous, asynchronous and responses)._

**UML State machines**
_State machines represent how an entity transitions between states (say, steps in PhD application,
steps in traffic lights, registration process for a web site). You should be able to correctly
draw states and transitions with initial and terminal state._

----------------------------------------------------------------------------------------------------

# **Resources** - Modelling

The following articles are good extra materials to read for the modelling lectures.
They have roughly the same level of detail as the lectures:

 * [User Stories: An Agile Introduction](http://www.agilemodeling.com/artifacts/userStory.htm)
 * [UML 2 Use Case Diagrams: An Agile Introduction](http://agilemodeling.com/artifacts/useCaseDiagram.htm)
 * [UML 2 Class Diagrams: An Agile Introduction](http://agilemodeling.com/artifacts/classDiagram.htm)
 * [UML 2 State Machine Diagrams: An Agile Introduction](http://agilemodeling.com/artifacts/stateMachineDiagram.htm)
 * [UML 2 Sequence Diagrams: An Agile Introduction](http://www.agilemodeling.com/artifacts/sequenceDiagram.htm)

****************************************************************************************************
- class: part

# **Modern practices**

----------------------------------------------------------------------------------------------------

# **Key things** - Git and GitHub (1/2)

**Key git concepts**

_You should know how git works - how it uses the key areas, namely the current folder,
"staging area", "local repository" and "remote repository"._

_The key commands that you should be aware of, which were discussed in lectures and
classes are `init`, `add`, `commit`, `status`, `log`, `branch` and `checkout`._

----------------------------------------------------------------------------------------------------

# **Key things** - Git and GitHub (1/2)

**Key GitHub concepts**

_What does GitHub add on top of what git provides? You should know how pull requests work
and be aware of other GitHub features like issue tracking and wiki._

**Contributing workflow**

_You should know what's the typical workflow for contributing to an open-source project
that you don't own on GitHub (i.e. what you need to send a pull request)._

----------------------------------------------------------------------------------------------------

# **Key things** - Continuous development

**Background**
_What motivated the idea of continuous development? How does development of modern web apps differ from
applications sold in a "box"?_

**Dealing with complexity**
_A lot of work in continuous development goes into reproducibility. You should know what
dependency management, build configuration and continuous integration configuration mean._

_For dependency management, you should also  
know what a "lock file" does._

----------------------------------------------------------------------------------------------------

# **Key things** - Code quality (1/2)

**What is good quality code**
_We talked about naming, comments, whitespace and code structure (the idea of keeping
the "happy path" simple). You should be able to point out quality issues in a code snippet._


**Keeping good quality**
_How to keep good quality? There are social methods (pair programming, code reviews) and
tools (linters)._

----------------------------------------------------------------------------------------------------

# **Key things** - Code quality (1/2)

**Refactoring for quality**

_An important concept is refactoring - code modification that improves quality without changing
what code does. You should know where refactoring fits in test-driven development._

_We talked about two concrete examples in lectures and classes and you should know about these:
"rename" (changing the name of a variable or a function) and "extract function" (move code
into a new function)._

----------------------------------------------------------------------------------------------------

# **Key things** - Living with errors

**Different application domains**
_We talked about different application domains (business computing, telecommunications, computer art)
and how their approaches to errors differ._

**Food practices**
_We looked at two specific practices. First, you should know why exceptions are better than returning error codes.
Second, you should know about three ways of handling bad inputs (ignore, recover, fail immediately)
and which might be better when._

----------------------------------------------------------------------------------------------------

# **Resources** - Modern practices

For theoretical aspects, the lectures cover all you need to know. For practical aspects, the best
way to learn those is to complete the tasks covered in classes, namely:

 - [Introducing source control with Git](https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/git-introduction/instructions.md)
 - [Collaborative development using GitHub](https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/github-introduction/instructions.md)
 - [Improving code quality](https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/code-quality/instructions.md)
 - [Continuous integration and testing](https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/continuous-integration/instructions.md)
