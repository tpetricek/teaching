- title : Software Engineering: Modelling behaviour
- description : Software Engineering: Modelling behaviour
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO886: Software Engineering**<br/> Modelling behaviour

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
- class: part

# **Prehistory and behaviour modelling**

----------------------------------------------------------------------------------------------------

<img src="images/behaviour/hartree.png" style="max-width:500px;float:left;margin:30px 40px 100px 0px" />

**Hartree Differential Analyzer**, circa 1935

<div class="fragment">

_Analog computer solving differential equations_

_Information flow between components_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/behaviour/vonneumann.png" style="max-width:420px;float:left;margin:0px 60px 0px 20px" />

**Herman Goldstine & John von Neumann**, circa 1947

<div class="fragment">

_Program described as a flow diagrams_

_Sequence of individual steps with loops and branching_

</div>

----------------------------------------------------------------------------------------------------

# Two aspects of behaviour

<img src="images/behaviour/telegraph.jpg" style="float:right;max-width:320px;margin-left:20px" />
<div class="fragment">

**Communication patterns**

 - _Interactions of services_
 - _Sending messages over network_
 - _Communication in teams_

</div><div class="fragment">

**State change patterns**

 - _Changing state of an object_
 - _Workflow or a process to follow_

</div>

----------------------------------------------------------------------------------------------------

# Modelling behaviour

### Tools and practices for state and communication

_<i class="fa fa-chalkboard-teacher"></i> Lightweight use in whiteboard discussions_

_<i class="fa fa-cogs"></i> Heavyweight software tools with code generation_

_<i class="fa fa-layer-group"></i> Range from function logic to business processes_

_<i class="fa fa-code"></i> Various directions of programming language support_

****************************************************************************************************
- class: part

# **Capturing communication using sequence diagrams**

----------------------------------------------------------------------------------------------------

# UML sequence diagrams

<img src="images/behaviour/uml.png" class="nb" style="float:right;max-width:300px" />

**Interactions between objects**

 - _Actions in sequential order_
 - _What is passed between what parts_
 - _Explain how business works_

<div class="fragment">

**Features beyond this lecture**

 - _Actors, objects, anonymous instances_
 - _Deleting and creating entities_
 - _Alternatives, parallelism, options, loops, etc._

</div>

----------------------------------------------------------------------------------------------------

# UML sequence diagrams

<img src="images/behaviour/sequence.png" class="nb" style="float:right;max-width:260px;margin:0px 30px 0px 0px" />

**Actors and objects**

 - _Stick figures or objects_
 - _Lifeline with periods of activity_
 - _Write_ sys:Sytem _for an instance_

<div class="fragment">

**Communication via messages**

 - _Sequential top-to-bottom process_
 - _Written as function calls_
 - _Different kinds of arrows_

</div>

----------------------------------------------------------------------------------------------------

# Fancy arrows

<style>.tc td p { text-align:center; margin:0px; } .tc td { padding:0px }</style>
<table style="width:100%" class="tc"><tr>
<td style="width:33%;text-align:center">

**Synchronous**  

<img src="images/behaviour/arrow1.png" style="max-height:300px" class="nb" />

_Call another component and wait until it responds_

</td>
<td style="width:33%;text-align:center" class="fragment">

**Asynchronous**  

<img src="images/behaviour/arrow2.png" style="max-height:300px" class="nb" />

_Call another component but continue running_

</td>
<td style="width:33%;text-align:center" class="fragment">

**Response**

<img src="images/behaviour/arrow3.png" style="max-height:300px" class="nb" />

_Sent at the end of sync or async call_

</td>
</tr></table>

----------------------------------------------------------------------------------------------------

<img src="images/behaviour/web-qqq.png" style="max-width:560px;float:left;margin:60px 20px 60px 0px" class="nb" />

**Guess the components!**

----------------------------------------------------------------------------------------------------

<img src="images/behaviour/web.png" style="max-width:560px;float:left;margin:60px 20px 100px 0px" class="nb" />

**Guess the components!**

Checking your Gmail

_Web server fetches data from database_

_Logger records  
all events asynchronously_

----------------------------------------------------------------------------------------------------

- class: part

# **Demo:** Modelling PhD application process

----------------------------------------------------------------------------------------------------

# Implementing sequence diagrams

<img src="images/behaviour/kay.jpg" style="float:right;max-width:320px;margin-left:20px" />

**Object-oriented programming**

_I thought of objects being like biological cells
and/or individual computers on a network, only able to communicate with messages._

<div class="fragment" style="padding-top:10px">

**Network and workflows**

 - _HTTP calls between services_
 - _Erlang language and Akka library for Java_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/behaviour/csp.png" style="max-height:400px;float:left;margin:40px 20px 60px 0px" />
<img src="images/behaviour/session.png" style="max-height:400px;float:left;margin:40px 40px 60px 0px" />

**Programming Language Support**

<div class="fragment" style="padding-top:10px">

Formal language  
_model circa 1978_

Session types  
_to check the communication protocol today_

</div>

****************************************************************************************************
- class: part

# **Capturing workflows using state diagrams**

----------------------------------------------------------------------------------------------------

# UML state machines

<img src="images/behaviour/uml.png" class="nb" style="float:right;max-width:300px" />

**State change over time**

 - _State of objects or systems_
 - _Standard computer science idea_
 - _Not as easy to see in code_

<div class="fragment">

**Features beyond this lecture**

 - _Hierarchical state machines_
 - _Conditions and actions just briefly_
 - _Orthogonal regions, parallel regions_

</div>

----------------------------------------------------------------------------------------------------

# UML state machines

<img src="images/behaviour/traffic.png" class="nb" style="float:right;max-width:240px;margin:-20px 10px 0px 30px" />

**States**

 - _Initial, regular and final states_
 - _Some systems run infinitely_
 - _Can have entry/exit actions_

<div class="fragment">

**Transitions**

 - _Labels explain what caused them_
 - _Typically correspond to some events_
 - _Conditions can specify when enabled_

</div>


----------------------------------------------------------------------------------------------------

<img src="images/behaviour/order.png" style="max-width:560px;float:left;margin:100px 50px 100px 0px" class="nb" />

**Guess the system!**

<div class="fragment">

Sainsbury's order processing

_When can user  
cancel an order?_

_What can happen  
after shipping?_

</div>

----------------------------------------------------------------------------------------------------

- class: part

# **Demo:** States of a PhD application

----------------------------------------------------------------------------------------------------

# Actions and conditions

<img src="images/behaviour/fancy.png" style="max-width:420px;float:left;margin:50px 50px 100px 10px" class="nb" />

**Actions**

_What happens when system enters or exits a state_

**Conditions**

_When is the transition allowed to happen_

----------------------------------------------------------------------------------------------------

# State diagrams and programming

### Communication device or a programming tool

_<i class="fa fa-sync-alt"></i> Understand state of objects in OO model_

_<i class="fa fa-mouse-pointer"></i> Model states of a user interface_

_<i class="fa fa-code"></i> Imperative and functional patterns at small scale_

_<i class="fa fa-industry"></i> Complex systems for large scale workflows_

----------------------------------------------------------------------------------------------------

<img src="images/behaviour/biztalk.gif" class="nb" style="max-width:480px;float:left;margin:100px 30px 100px 0px" />

**Enterprise application integration**

_Microsoft BizTalk Server is an Inter-Organizational Middleware System
that enables companies to automate business processes [and connect]
different software systems used in an enterprise._

----------------------------------------------------------------------------------------------------

# Implementing state machines

<img src="images/behaviour/drawing.gif" class="nb" style="float:right;max-width:240px;margin:-20px 10px 0px 30px" />

**State machines and programming**

 - _State of objects or user interfaces _
 - _Java has "classes" but no "states"!_
 - _How can we best encode the idea?_

**Functional and imperative patterns**

 - _Variable to represent current state_
 - _Function to represent current state_

----------------------------------------------------------------------------------------------------

<div style="float:left;width:500px">

    [lang=csharp]
    enum Light {
      Red, Orange, Green
    };
    class TrafficLight {
      Light state;
      void updateState() {
        switch(state) {
          case Red:
            state = Green;
            break;
          case Orange:
            state = Red;
            break;
          case Green:
            state = Orange;
            break;
        }
      }
    }

</div>

**Object with states**

_State stored in a field_

_Update checks state  
and modifies it_

All logic in one method

Transitions are hidden  
in a big _switch_ block

----------------------------------------------------------------------------------------------------

<div style="float:left;width:500px">

    [lang=csharp]
    void red() {
      // (do some work)
      green();
    }

    void orange() {
      // (do some work)
      red();
    }

    void green() {
      // (do some work)
      orange();
    }


</div>

**Functions as states**

Process going through  
multiple states

_State are functions_

_Transitions encoded as
calls to other functions_

Requires good handling  
of recursion and waiting

----------------------------------------------------------------------------------------------------

- class: part

# **Demo:** User interface for drawing squares

****************************************************************************************************
- class: part

# **Summary**

----------------------------------------------------------------------------------------------------

# Modelling behaviour

**Two aspects of behaviour**  
_Communication patterns and state change patterns_  
_Also in analog computers (1930s) and EDSAC (1947)_

**Capturing communication patterns**  
_Basics of UML sequence diagrams_  
_Synchronous, asynchronous and responses_

**Capturing workflows with state diagrams**  
_Basics of UML state machine diagrams_  
_Implementing state machines at small and large scale_

----------------------------------------------------------------------------------------------------

# CO886: Modelling behaviour

**What you should remember from this lecture**

 - Sequence diagrams with sync, async and responses
 - State machines with states and transitions
 - Understand examples and when to use them

<br />
<br />

Tomas Petricek<br />
_[t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk) | [@tomaspetricek](http://twitter.com/tomaspetricek)_

****************************************************************************************************
 - class: part

# **References**

----------------------------------------------------------------------------------------------------

**Academic references**

 - Mark Priestley (2018). [Routines of Substitution - John von Neumann’s Work on Software
    Development, 1945–1948](https://www.springer.com/us/book/9783319916705)

 - Marie-José Durand-Richard (2018). [Towards programming before flowcharts: Diagrams from Babbage to Wilkes](https://programme.hypotheses.org/794)

**Tools, books and articles**

 - [UML 2 State Machine Diagrams: An Agile Introduction](http://agilemodeling.com/artifacts/stateMachineDiagram.htm)
 - [UML 2 Sequence Diagrams: An Agile Introduction](http://www.agilemodeling.com/artifacts/sequenceDiagram.htm)
