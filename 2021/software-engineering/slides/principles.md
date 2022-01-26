- title : Software Engineering: Software engineering principles
- description : Software Engineering: Software engineering principles
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO886: Software Engineering**<br/> Software engineering principles

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
- class: part

# **Motivation**

----------------------------------------------------------------------------------------------------

<img src="images/principles/opticks.jpg" style="max-width:400px;float:left;margin:30px 40px 100px 0px" />

**Fundamental knowledge**

_What knowledge about software will remain  
relevant in 100 years?_

----------------------------------------------------------------------------------------------------

# Fundamental software engineering knowledge

<img src="images/principles/turing.gif" style="float:right;max-width:340px;margin-top:10px;margin-left:20px" class="nb"/>

**The halting problem**

_It is impossible to give a program  
$\Theta$ that, for any other program $p$
decides whether $p$ terminates or not._

<div class="fragment" style="padding-top:10px">

**Software engineering**

 - _What is impossible to build?_
 - _Not a formal mathematical problem_
 - _Can we say anything certain at all?_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/principles/patriot.jpg" style="max-width:600px;float:left;margin:30px 40px 100px 0px" />

**Historically situated knowledge**

_Learning from  
the successes and the failures  
of the past_

----------------------------------------------------------------------------------------------------

<img src="images/principles/corbusier.jpg" style="max-width:600px;float:left;margin:30px 40px 100px 0px" />

**Learning from other disciplines**

_Is software engineering like real engineering, writing or urban planning?_

****************************************************************************************************
- class: part

# **Complexity**

----------------------------------------------------------------------------------------------------

**What is more complex software system to build?**

<table><tr>
<td>

<img src="images/principles/stockfish.png" class="nb" style="width:390px"/>

_Chess engine that can consistently win against grandmasters?_

</td><td>

<img src="images/principles/quickbooks.png" class="nb" style="width:420px"/>

_Accounting system that calculates and pay VAT in UK and France?_

</td>
</tr></table>

----------------------------------------------------------------------------------------------------

# Sources of software complexity

<img src="images/principles/brooks.jpg" style="float:right;max-width:280px;margin-top:10px;margin-left:20px" />

**No Silver Bullet (Brooks, 1986)**

_Much of the complexity [software engineer] must master is arbitrary
complexity, forced without rhyme or reason by the many human
institutions and systems to which his interfaces must confirm._

----------------------------------------------------------------------------------------------------

<img src="images/principles/system360.jpg" style="max-width:500px;float:left;margin:30px 40px 100px 0px" />

**IBM System/360**

_OS for a very wide range of IBM machines_

<div class="fragment" style="padding-top:10px">

Adding programmers _to already delayed project only makes it worse_

</div>

----------------------------------------------------------------------------------------------------

# No silver bullet (Brooks, 1986)

<img src="images/principles/nosilver.png" style="max-width:200px;float:right;margin:0px 0px 0px 20px" />

**Essential complexity**

 - _Large with no two parts alike_
 - _Complexity of logic is essential_
 - _Non-linear nature of software_

**Accidental complexity**

 - _Imperfect programming tools_
 - _Unless this is more than 9/10, order  
   of magnitude improvement is impossible_

----------------------------------------------------------------------------------------------------

# Why is software complex?

**Analog systems**  
_Small change in input causes small change in output_  
_Analog computers of 1930s, audio synthesizers_

**Digital systems with repeated components**  
_Non-linear, but we can test components in isolation_  
_CPU units and much of modern hardware_

**Digital systems without repetition**  
_Non-linear and very hard to test_  
_Any modern software system!_

----------------------------------------------------------------------------------------------------

<img src="images/principles/bullet.png" style="max-width:400px;float:left;margin:10px 40px 100px 0px" />

**Principle #1**

_There is no single development, in either technology or management technique, which by
itself promises even one  order-of-magnitude improvement within a decade in productivity,
in reliability, in simplicity._

----------------------------------------------------------------------------------------------------

# No silver bullet (Brooks, 1986)

<img src="images/principles/nosilver.png" style="max-width:200px;float:right;margin:0px 0px 0px 20px" />

**Buy versus build**

 - _The most radical solution for constructing software is not to construct it at all._
 - _Can I use off-the-shelf solution?_

<div class="fragment">

**Do we buy rather than build?**

 - _Nobody builds their own database_
 - _Many tasks done using spreadsheets_
 - _Still, no silver bullet!_

</div>

----------------------------------------------------------------------------------------------------

# Further sources of complexity

### We do not even know what software should do!

_<i class="fa fa-book"></i> Every problem is unique with little repetition_

_<i class="fa fa-book"></i> There might not be a stopping rule_

_<i class="fa fa-book"></i> Solutions are not right or wrong_

_<i class="fa fa-book"></i> Social scientists call this Wicked Problems_


****************************************************************************************************
- class: part

# **Environment**

----------------------------------------------------------------------------------------------------

# Environment expectations

### Typical software development approaches

_<i class="fa fa-bicycle"></i> Start with imperfect and make it gradually better_

_<i class="fa fa-flask"></i> Employ careful controlled user testing_

_<i class="fa fa-phone"></i> Check with customer to see if we're getting close_

_<i class="fa fa-bug"></i> Have "on call" duty to resolve any bugs_

----------------------------------------------------------------------------------------------------

<img src="images/principles/starwars.jpg" style="max-width:540px;float:left;margin:30px 30px 100px 0px" />

**Star Wars (1980s)**

_Fully automatic software system to track and shoot down Soviet nuclear missiles_

What development methods will fail?

----------------------------------------------------------------------------------------------------

# Arguments that count (Slayton, 2013)

<img src="images/principles/arguments.png" style="max-width:260px;float:right;margin:20px 0px 0px 20px" />

**System would be unreliable**

_Since we have no spare planets on which to fight trial nuclear wars, testing of a global ABM system is impossible._

<div class="fragment">

**Enemy has it easier**

_Very expensive defenses could give the Soviet Union an incentive to invest in relatively
cheap offensive countermeasures, creating arms race instabilities._

</div>

----------------------------------------------------------------------------------------------------

<img src="images/principles/parnas.png" style="max-width:400px;float:left;margin:10px 40px 100px 0px" />

**Principle #2**

_Complex software can only be mastered if it is developed progressively, with the aid of
extensive testing, and then operated more or less continually in a somewhat lenient and forgiving environment._

----------------------------------------------------------------------------------------------------

<img src="images/principles/evoting.jpg" style="max-width:540px;float:left;margin:30px 30px 100px 0px" />

**Electronic Voting Systems**

_What properties of the environment make those hard to build?_

----------------------------------------------------------------------------------------------------

# Environment expectations

### When can complex software be mastered

_<i class="fa fa-signal"></i> It is developed progressively_

_<i class="fa fa-plug"></i> Using extensive testing_

_<i class="fa fa-stopwatch"></i> Operated more or less continually_

_<i class="fa fa-globe"></i> In a somewhat forgiving environment_

****************************************************************************************************
- class: part

# **Metaphors**

----------------------------------------------------------------------------------------------------

<img src="images/principles/nato.jpg" style="max-width:460px;float:left;margin:60px 30px 100px 0px" />

**1968 NATO Conference**

_Programming started to make the transition from being a craft for a long-haired
programming priest-hood to becoming a real engineering discipline._

Why software **engineering**?

----------------------------------------------------------------------------------------------------

# Cultures of programming

**<i class="fa fa-user-secret"></i> Individualistic hacker culture**  
_Programming as elusive black magic_

**<i class="fa fa-user-tie"></i> Business and military engineering culture**  
_Programmers are replaceable and can be trained_

**<i class="fa fa-tree"></i> Organic and human-centric cultures**  
_Programming as a craft to be done well_

----------------------------------------------------------------------------------------------------

# Why metaphors for programming matter?

<img src="images/principles/garden.jpg" style="max-width:320px;float:right;margin:20px 0px 0px 20px" />

Metaphor _may offer a different way of thinking about problems and shift emphasis to different aspects_

<div class="fragment">

**Example software metaphors**

 - Building software systems  
   _Focus on careful planning_
 - Programming is writing code  
   _Focus on communication, expression_
 - Programming is growing system  
   _Focus on long-term maintainability_

</div>

****************************************************************************************************
- class: part

# **Summary**

----------------------------------------------------------------------------------------------------

# Software Engineering principles

**What makes software systems complex**  
_Essential and accidental complexity_  
_Digital system without repeated components_

**Importance of system environment**  
_Developed progressively using extensive testing_  
_Operated continuously, in forgiving environment_  

**Metaphors for programming**  
_Software engineering and NATO conference_  
_Programming as writing, growing, building_

----------------------------------------------------------------------------------------------------

# CO886: Software Engineering principles

**What you should remember from this lecture**

 - Two fundamental principles of software engineering
 - Essential and accidental complexity
 - Hacker, business and human-centric cultures

<br />
<br />

Tomas Petricek<br />
_[t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk) | [@tomaspetricek](http://twitter.com/tomaspetricek)_

****************************************************************************************************
 - class: part

# **References**

----------------------------------------------------------------------------------------------------


**Books and papers**

 - Rebecca Slayton (2013). [Arguments that count](https://mitpress.mit.edu/books/arguments-count)
 - Nathan Ensmenger (2010). [Computer boys take over](https://mitpress.mit.edu/books/computer-boys-take-over)
 - Fred Brooks (1975). [The mythical man-month](https://www.amazon.co.uk/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959)
 - Steve McConnell (1993). [Code Complete: A Practical Handbook of Software Construction](https://amzn.to/2BMkEgJ)
 - David Parnas (1985). [Software aspects of strategic defence systems](https://web.stanford.edu/class/cs99r/readings/parnas1.pdf)
