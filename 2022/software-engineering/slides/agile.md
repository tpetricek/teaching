- title : Software Engineering: Agile Development
- description : Software Engineering: Agile Development
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO886: Software Engineering**<br/> Agile Development

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
- class: part

# **Development methodologies**

----------------------------------------------------------------------------------------------------

# How to build software well?

<img src="images/agile/certified.png" class="nb" style="float:right;max-width:250px;margin-left:20px" />

**Development methodologies**

 - _Is there a "scientific method" for SW?_
 - _Follow some kind of structured process_
 - _Starts with reasonable principles..._
 - _May end with mindless rule following!_

<div class="fragment">

**Methodologies have context**

 - _Culture it originates from - engineer vs. manager?_
 - _Product vs. process oriented_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/agile/grid.png" style="max-width:500px;float:left;margin-right:50px;margin-top:70px" class="nb"/>

**Process vs. product**

_Do we have a specification or adapt continually?_

**Manager vs engineer**

_Focus on process and team structure or tools and code?_

----------------------------------------------------------------------------------------------------

<img src="images/agile/sage.jpg" style="max-width:500px;float:left;margin-right:30px;margin-top:20px" />

**Semi-Automatic Ground Environment (SAGE)**

_First attempt at a methodology_

_Focused on product  
and management_

Multi-stage process

----------------------------------------------------------------------------------------------------

# Waterfall methodology

<img src="images/agile/waterfall.png" class="nb" style="float:right;max-width:600px;margin-left:20px" />

Multi-stage process  
_Royce (1987)_

1. _Gather requirements_
2. _Analyse and design_
3. _Programming_
4. _Testing_
5. _Deployment_

----------------------------------------------------------------------------------------------------

<img src="images/agile/c3.png" style="max-width:450px;float:left;margin-right:30px;margin-top:20px" />

**Chrysler Comprehensive Compensation System (C3)**

_Rapid software system development (in Smalltalk)_

_Focused on process  
and engineering_

First project using  
Extreme Programming (XP)

----------------------------------------------------------------------------------------------------

# Extreme Programming

### Engineering practices drive the process

_<i class="fa fa-book"></i>_ User stories _to capture requirements_

_<i class="fa fa-dice"></i>_ Planning game _to plan the next iteration_

_<i class="fa fa-user-friends"></i>_ Pair programming _to build shared understanding_

_<i class="fa fa-keyboard"></i>_ Continuous integration _to always have running system_

_<i class="fa fa-traffic-light"></i>_ Test-driven development _process_

----------------------------------------------------------------------------------------------------

# **The New New Product Development Game**

_In today's fast-paced, fiercely competitive
world (...) [c]ompanies are increasingly
realizing that the old, sequential approach to developing
new products simply won't get the job done._

_Instead, companies in Japan and the United States are using a holistic
method - as in rugby, the ball gets passed within the team as it moves as a unit up the field._

<p style="text-align:right">Takeuchi, Nonaka (1986)</p>

----------------------------------------------------------------------------------------------------

<img src="images/agile/fuji.png" style="max-width:650px;float:left;margin-right:50px" class="nb" />

**SCRUM methodology**

_Following the Rugby terminology_

Managerial, but process oriented

----------------------------------------------------------------------------------------------------

# Manifesto for Agile Software Development (2001)

Popularized _process-oriented_ or _agile_ methodologies.

<div class="fragment" style="padding-top:20px">

**We have come to value:**

- _Individuals and interactions over processes and tools_
- _Working software over comprehensive documentation_
- _Customer collaboration over contract negotiation_
- _Responding to change over following a plan_

</div>

****************************************************************************************************
- class: part

# **Requirements and user stories**

----------------------------------------------------------------------------------------------------

<img src="images/agile/projects.jpg" style="max-width:790px;float:left" />

----------------------------------------------------------------------------------------------------

# Specifying and learning

<img src="images/agile/grid.jpg" style="float:right;max-width:380px;margin-left:20px" />

**Typical clients**

 - _Experts in their domain_
 - _Do not speak computer-speak_
 - _Not sure what is possible_

<div class="fragment">

**Typical software provider**

 - _Hopefully knows how to build software systems_
 - _No idea about trading of energy derivatives and commodity price risk management_
 - _Rare exceptions sometimes happen!_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/agile/derivatives.jpg" style="max-width:650px;float:left;margin-right:50px" />

**Learning unfamiliar domain**

<div class="fragment" style="padding-top:10px">

Put knowledge on paper  
_Specification that programmers can understand and follow_

</div><div class="fragment" style="padding-top:10px">

Keep knowledge in brains  
_Not scalable, but developers can use intuition and contribute ideas_

</div>

----------------------------------------------------------------------------------------------------

# Lightweight requirement capture

<img src="images/agile/agile.png" style="float:right;max-width:200px;margin-left:40px;margin-bottom:40px" class="nb" />

**Agile methodologies**

 - _Formal specifications are too hard_
 - _How do we get customers involved?_
 - _What is a good way of talking to them?_

<div class="fragment">

**User stories**

 - _Not requirements, but_ stories
 - _Use paper or Word or whatever works_
 - As a _user_ I want _something_ so that _benefit_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/agile/story.jpg" style="width:540px;float:left;margin:30px 50px 20px 0px" />

**Fixed story format**

User _so that we know who needs this_

Benefit _so that  
there is a reason_

----------------------------------------------------------------------------------------------------

# User stories

### Three critical aspects

_❶_ Card _- artefact representing requirement_

_❷_ Conversation _- exchange of ideas with customer_

_❸_ Confirmation _- customer-defined acceptance test_

----------------------------------------------------------------------------------------------------

# **As an** online customer, **I want to** save my cart,<br /> **so that** I can complete the purchase later


<div class="fragment">

_Q: For how long should the cart be saved?_  
**A: For 3 days from the last access.**

</div>
<div class="fragment">

_Q: What is an item in the cart becomes unavailable?_  
**A: When item becomes unavailable,  
remove it and warn the user.**

</div>
<div class="fragment">

_Q: Can the user modify the cart after saving?_  
**A: Yes, the user can modify the cart after saving.**

</div>

----------------------------------------------------------------------------------------------------

# Where do requirements come from?

<img src="images/agile/certified.png" class="nb" style="float:right;max-width:250px;margin-left:20px" />

**Who is the customer**

- Product Owner _in SCRUM_
- _Actual system customer in XP_

<div class="fragment">

**Being a customer is hard!**

- _Will Extreme Programming  
  kill your customer? (2001)_
- Marie DeArment _in the Chrysler project_

<div>

****************************************************************************************************
- class: part

# **SCRUM development process**

----------------------------------------------------------------------------------------------------

<img src="images/agile/board.jpg" style="max-width:600px;float:left;margin-right:50px;margin-top:50px" class="nb"/>

**Management of:**

Team structure  
_Who does what_

Project planning  
_How to progress_

Interactions  
_What to do when_

----------------------------------------------------------------------------------------------------

# Scrum roles

### Who does what in the team?

_<i class="fa fa-cog"></i>_ Product owner - _customer representative_  
_<i class="fa fa-empty"></i> Defines stories, prioritizes tasks, business-focus_

_<i class="fa fa-cog"></i>_ Scrum master - _process facilitator_  
_<i class="fa fa-empty"></i> Mentors team, removes obstacles, controls process_

_<i class="fa fa-cog"></i>_ Development team - _cross-functional team_  
_<i class="fa fa-empty"></i> Contribute to coding, testing, debugging, planning_

----------------------------------------------------------------------------------------------------

<img src="images/agile/scrum.png" style="max-width:580px;float:left;margin-right:20px;margin-bottom:100px;margin-top:50px" class="nb"/>

**SCRUM process**

<div class="fragment" style="padding-top:20px">

**Backlog** of user stories to implement

**Planning** based  
on _value*effort_

**Sprints** add functio-  
nality in 1-2 weeks

</div>

----------------------------------------------------------------------------------------------------

# SCRUM ceremonies

<img src="images/agile/zoomcat.jpg" style="float:right;max-width:350px;margin-left:40px;margin-bottom:40px" class="nb" />

**Daily scrum 15 minute meeting**

 - _What you did yesterday_
 - _Pick the next task_
 - _What is blocking you_

<div class="fragment">

**Sprint-related meetings**

 - Planning _to choose tasks for iteration_
 - Review _to engage with stakeholders_
 - Retrospective _to continuously improve_

</div>

****************************************************************************************************
- class: part

# **Summary**

----------------------------------------------------------------------------------------------------

# Agile development

**Development methodologies**  
_Waterfall, extreme programming, SCRUM_  
_Managerial vs. engineering; process vs. product_

**Capturing requirements as stories**  
As a _CO886 lecturer_, I want _you to remember this,_  
so that _you can use user stories in your projects!_  

**SCRUM development methodology**  
_Product owner, scrum master, development team_  
_Backlog, sprint meetings, daily scrum meeting_

----------------------------------------------------------------------------------------------------

# CO886: Agile Development

**What you should remember from this lecture**

 - What context determines a methodology?
 - Write user stories & have conversations
 - Roles and ceremonies in the SCRUM process

<br />
<br />

Tomas Petricek<br />
_[t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk) | [@tomaspetricek](http://twitter.com/tomaspetricek)_

****************************************************************************************************
 - class: part

# **References**

----------------------------------------------------------------------------------------------------

**Academic papers**

- Winston Royce (1987). [Managing the Development of Large Software Systems](http://www-scf.usc.edu/~csci201/lectures/Lecture11/royce1970.pdf)
- Hirotaka Takeuchi, Ikujiro Nonaka (1986). [The New New Product Development Game](https://www.agilepractice.eu/wp-content/uploads/2016/09/Product-Development-Scrum-1986.pdf)

**Relevant books**

- Kent Back (1999). [Extreme Programming Explained](https://www.oreilly.com/library/view/extreme-programming-explained/0201616416/)

**Online material**

- Ron Jeffries (2001). [Essential XP: Card, Conversation, Confirmation](https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/)
