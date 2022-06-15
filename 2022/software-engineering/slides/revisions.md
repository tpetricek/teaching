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

# Module structure (1/4)

**Principles**  ([history](history.html), [open-source](oss.html), [principles](principles.html), [environment](sdi.html))

_These lectures cover theoretical material (with the exception of "contributing to open-source"
section). You should understand the key principles from the lectures._

_These lectures do not follow a textbook, so your best resources are the lectures. Those are based on various books
and papers, but often pick only a couple of ideas from a long book._

----------------------------------------------------------------------------------------------------

# Module structure (2/4)

**Engineering** ([quality](quality.html),[structure](structure.html),[errors](errors.html),[architecture](architectures.html))

_These lectures cover important practical engineering practices.
This includes code quality (indentation, naming,
error handling) and architectural patterns. You should be able to write code that follows
such patterns or find issues in code that does not follow them._

_There are good online resources for some of the topics, but the lectures do not directly follow
one resource, so it's best to follow lectures and occasionally look elsewhere._

----------------------------------------------------------------------------------------------------

# Module structure (3/4)

**Collaboration** ([git](versioning.html), [github](collaborative.html), [ci](continuous.html))

_These lectures cover tools for collaboration and tools for making sure that software can
correctly be built at any time on a blank machine. You should be familiar
with the basics (Git commands) and you should be able to understand other concepts
(like package management)._

_Git and GitHub were covered in classes, so your best resource are these. For the other topics,
you can find good information online, so you can follow lectures and find additional information
as needed._

----------------------------------------------------------------------------------------------------

# Module structure (4/4)

**Processes** ([agile](agile.html), [testing](testing.html), [theory](theory.html))

_These lectures are about managerial aspects of software engineering. This includes
eXtreme programming and Scrum that you should be familiar with as well as testing
(and the related Test Driven Development method). For testing, we also covered theory on how
to design tests well, which you should also be familiar with._

_You can find many more information about all those topics online and elsewhere, but you are
not required to know more than what was presented in the lectures._

****************************************************************************************************
- class: part

# **Engineering**

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

_We talked about approaches to errors differ for different application domains
(business computing, telecommunications, computer art)._

**Good practices**

_We looked at specific practices. Why exceptions are better than returning error codes?
What are the three ways of handling bad inputs (ignore, recover, fail immediately)
and which might be better when?_

----------------------------------------------------------------------------------------------------

# **Key things** - Large software architectures

**Architectural design patterns**

_We talked about several architectural patterns: Layered architecture
(and three-tier), service-oriented (and microservices), pipeline, blackboard, event-sourcing_

_You should know when they may be appropriate, what are the benefits they promise
and what are possible drawbacks of choosing them._

----------------------------------------------------------------------------------------------------
- class: part

# **Example problems**

----------------------------------------------------------------------------------------------------

# **Code quality** - Ticket machine software

The following snippet changes date and time of a ticket. If the ticket has a railcard,
it checks whether the railcard can be used on the new date and, if no, removes it.

```csharp
public void setTicketDateTime(DateTime d)
{
  // If railcard is null, do more checks
  if (this.railcard != null) {
    RailcardService s = getRailcardService();
    // If railcard is not valid on date time, set it to null
    if (!s.isValidOnDateTime(this.railcard, d))
    this.railcard = null; }
    this.dateTime = d;
}
```

----------------------------------------------------------------------------------------------------

# **Code quality** - Ticket machine software

Answer the following questions regarding the code snippet on the previous slide:

1. _Identify one naming issue in the code snippet and one other code quality issue in the code_
2. _Describe one refactoring that can be used to fix one of the code issues in the code snippet_
3. _Propose one way of improving the code using_ defensive programming _techniques to handle invalid inputs_

****************************************************************************************************
- class: part

# **Collaboration**

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


****************************************************************************************************
- class: part

# **Processes and testing**

----------------------------------------------------------------------------------------------------

# **Key things** - Agile development

**Methodologies**
_We talked about ideas behind development methodologies and their different kinds
(managerial vs. engineering, process vs. product-oriented)._

**Requirements and user stories**
_We covered how to capture requirements using user stories._

**Scrum**
_We briefly looked at Scrum (i) team roles, (ii) process with backlog, planning
and sprints and (iii) ceremonies, i.e., daily scrum, planning, review and
retrospective._

----------------------------------------------------------------------------------------------------

# **Key things** - Testing theory & tools

**As part of a process**
_We talked about Verification vs. Validation and roles testing
can play in development processes (V-model, TDD)_

**Mathematical theory**
_We discussed white vs. black-box testing, equivalence class
partitioning and boundary value analysis._

**Testing in Java**
_We covered basic unit tests (JUnit), testing of I/O code (mocking),
property-based testing for covering larger number of cases (jqwick)._

----------------------------------------------------------------------------------------------------
- class: part

# **Example problems**

----------------------------------------------------------------------------------------------------

# **Requirements** - Ticket machine software

The user of the machine should be able print previously purchased tickets or purchase tickets.
When purchasing tickets, they should be able to choose origin and destination, select a date and
time for travel, select a railcard and pay for the tickets, either using card or cash.

_1) Write a user story for a regular passenger_  
_2) Write a user story for a student with railcard_

----------------------------------------------------------------------------------------------------

# **Equivalence class partitioning** - Ticket prices (1/2)

Students with student card get 25% discount on any fare. Those with network
railcard get 20% discount, but only on off-peak trains (after 10am or weekends).

_1) What are the equivalence classes for `computeDiscount`?_
_2) Give best test inputs using boundary value analysis_

Code showing the implementation on the next slide.

----------------------------------------------------------------------------------------------------

# **Equivalence class partitioning** - Ticket prices (2/2)

```csharp
public float computeDiscount
    (bool isStudent, bool hasNetCard, DateTime time) {
  if (time.IsWeekend || (time.HourOfDay < 10)) {
    if (isStudent) return 0.25;
    else if (hasNetCard) return 0.20;
    else return 0.0;
  } else {
    if (isStudent) return 0.25;
    else if (hasNetCard) return 0.0;
    else return 0.0;
  }
}
```

----------------------------------------------------------------------------------------------------

# **Property-based testing** - Sensible prices (1/2)

Very Sensible Train Company (VSTC) sells tickets so that if you travel from place A to B
via C and C is on the way between A and C, then the ticket from A to B costs the same as
a pair of tickets from A to C and C to B.

_1) Use property-based testing to ensure this actually holds!_

Code showing a stub of the test is on the next slide.

----------------------------------------------------------------------------------------------------

# **Property-based testing** - Sensible prices (2/2)

```csharp
@Property
boolean canTravelVia(
  ForAll @IntRange(min=0, max=99) int start,
  ForAll @IntRange(min=0, max=99) int end,
  ForAll @IntRange(min=0, max=99) int mid
) {          
  // Assume 'stations[i]' gives a station name at index 'i'
  // Assume 'ticketPrice(start, end)' gives price
  //   of a journey from 'start' to 'end'
  // Assume 'isBetween(start, end, mid)' is true
  //   if mid is between start and end

  return // ????
}
```

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
reporting issue. You should also be able to write code in consistent coding style._

----------------------------------------------------------------------------------------------------

# **Key things** - Software engineering principles (1/3)

**Complexity of software systems**

_We looked at the key points made by Fred Brooks - you should know what the terms "accidental"
and "essential" complexity mean._

_We also looked at reasons for why building software is hard. You should recall the problem with
"non-repeated digital systems" and classification of programs (S, P, E-programs)._

----------------------------------------------------------------------------------------------------

# **Key things** - Software engineering principles (2/3)

**Environment of software systems**

_We discussed why are some systems (such as anti-ballistic-missile defence systems) hard to build
and discussed characteristics of the environment that make building software hard._

_You should remember the conditions under which a system can be "mastered"
(what kind of systems in what kinds of environments)._

----------------------------------------------------------------------------------------------------

# **Key things** - Software engineering principles (3/2)

**Three key principles of software engineering**

_You should remember the three key principles discussed in the lecture:_

_First, why is building "programming systems product" 10x harder than "program".
Second, why we cannot expect order of magnitude improvement in productivity and,
third, why adding manpower to a delayed project makes it later._
