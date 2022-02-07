- title : Software Engineering: Code quality
- description : Software Engineering: Code quality
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO559: Software Engineering**<br/> Code quality

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
- class: part

# **Code quality**

----------------------------------------------------------------------------------------------------

<img src="images/quality/maintenance.jpg" style="max-width:500px;float:left;margin:30px 40px 100px 0px" />

**Software Maintenance**

_You spend more time reading and modifying code than writing it._

Investing into readability when writing pays off

----------------------------------------------------------------------------------------------------

# eXtreme Programming (2000s)

<img src="images/quality/xp.jpg" style="float:right;max-width:360px;margin-top:-10px;margin-left:20px" />

**Keeping code simple**

- _Write self-documenting code_
- _Reduce need for comments_
- _You Ain't Gonna Need It (YAGNI)_

<div class="fragment">

**Shared understanding in a team**

- _Common coding standards_
- _Pair programming_
- _Use of code reviews_

</div>


----------------------------------------------------------------------------------------------------

<img src="images/quality/psycho.jpg" style="max-width:490px;float:left;margin:30px 30px 100px 0px" />

**Code for readability**

_Always code as if the person maintaining
your code will be a violent psychopath who knows where you live._

<div class="fragment">

The person maintaining it will likely be future you.

</div>

----------------------------------------------------------------------------------------------------

# What is good quality code?

<img src="images/quality/neuromancer.jpg" style="float:right;max-width:240px;margin-top:-10px;margin-left:20px" />

**Hacker culture**

- _Quality is learned by experience_
- _Apprenticeships if coding was craft_
- _Good examples, but no written rules_

<div class="fragment">

**Coding standards**

- _Explicit rules that one can follow_
- _There are often exceptions_
- _Good starting point, but not ultimate answer_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/quality/study.png" style="max-width:460px;float:left;margin:0px 40px 100px 40px" />

**Do programming languages matter?**

<div class="fragment">

_[It] appear[s] that strong typing is modestly better
than weak typing, and among functional languages, static typing is also somewhat better than dynamic typing._

</div>

----------------------------------------------------------------------------------------------------

<img src="images/quality/boffins.png" style="max-width:460px;float:left;margin:0px 40px 100px 40px" />

**Do programming languages matter?**

Attempt to reproduce the study mostly failed

_"I believe they do in my heart of hearts, but it's kind of an impossible experiment to run."_

----------------------------------------------------------------------------------------------------

# Code quality

<img src="images/quality/code.png" style="float:right;max-width:300px;margin-top:-10px;margin-left:20px" />

**Aspects of code quality**

 - _Variable and function names_
 - _Structure of code logic_
 - _Organization of functionality_

**Processes for keeping quality**

 - _Improving quality through refactoring_
 - _Ensuring code quality using tools_
 - _Ensuring code quality using social processes_


****************************************************************************************************
- class: part

# **Naming**

----------------------------------------------------------------------------------------------------

<img src="images/quality/fortran.png" style="max-width:440px;float:left;margin:20px 40px 100px 0px" />

**Good naming is easy today!**

_Computers supports  
lower case letters!_

_Long names fit in  
computer memory_

_Auto-complete helps  
you avoid typos_

----------------------------------------------------------------------------------------------------

# Naming of variables (1/3)

What is the following function doing?

    [lang=javascript]
    function conv(x) {
      return x * 9 / 5 + 32;
    }

<div class="fragment" style="padding-top:10px">

Converting temperature from Celsius to Fahrenheit!

    [lang=javascript]
    function celsiusToFahrenheit(temperature) {
      return temperature * 9 / 5 + 32;
    }

</div>

----------------------------------------------------------------------------------------------------

# Naming of variables (2/3)

Was that descriptive enough?

    [lang=javascript]
    function convertTemperatureFromCelsiusToFahrenheit
        (temperatureInCelsius) {
      return temperatureInCelsius * 9 / 5 + 32;
    }

<div class="fragment" style="padding-top:10px">

Can we improve this by using abbreviations?

    [lang=javascript]
    function convTempFromCelsToFahr(tempInCels) {
      return tempInCels * 9 / 5 + 32;
    }

</div>

----------------------------------------------------------------------------------------------------

# Naming of variables (3/3)

Are all variable names in this example descriptive?

    [lang=javascript]
    var result = 0;
    for(var i = 0; i < data.length; i++) result += data[i];
    return result;

<div class="fragment" style="padding-top:10px">

This is too much. Sensible exceptions allowed!

    [lang=javascript]
    var resultNumber = 0;
    for(var dataIndex = 0; dataIndex < data.length; dataIndex++)
      resultNumber += data[dataIndex];
    return resultNumber;

</div>

----------------------------------------------------------------------------------------------------

# Naming of variables

### Descriptive names of reasonable length

_<i class="fa fa-book"></i> Name should add semantic information_

_<i class="fa fa-font"></i> No need to say it's number, string, etc._

_<i class="fa fa-ruler-horizontal"></i> Longer names are good, but don't overdo it!_

_<i class="fa fa-users"></i> Follow common conventions where applicable_

_<i class="fa fa-bars"></i> The more local, the less it matters_

----------------------------------------------------------------------------------------------------

# Naming of variables, functions and classes

<img src="images/quality/camel.jpg" style="float:right;max-width:360px;margin:10px 0px 0px 20px 0px;margin-right:40px" />

**Combining words in names**

- `PascalCase`
- `camelCase`
- `snake_case`

**Using spaces in a name**

 - _Would makes code nightmare to parse_
 - _Some language allow escaping e.g._ \`\`funny name!\`\`

----------------------------------------------------------------------------------------------------

# Naming of classes and methods in Java

Is the following naming consistent or not?

    [lang=csharp]
    public class Program {
       public Program(Boolean adminMode) {
         // Some actual logic here
       }
       public static void main(String []args) {
          Program prog = new Program(false);
       }
    }

Pascal case `Program`, camelCase `adminMode`, `main`    

----------------------------------------------------------------------------------------------------

# Naming classes and other issues

### Coding standards and exceptions

_<i class="fa fa-check-square"></i> Java standards use `PascalCase` for class names_

_<i class="fa fa-check-square"></i> `camelCase` is used for variables and method names_

_<i class="fa fa-thumbs-up"></i> You should generally follow coding standards_

_<i class="fa fa-pencil-alt"></i> Exceptions such as numerical code: `P` or `alpha`_

****************************************************************************************************
- class: part

# **Structure and whitespace**

----------------------------------------------------------------------------------------------------

<img src="images/quality/goto.png" style="max-width:450px;float:left;margin:30px 40px 100px 0px" />

**GOTO considered harmful**

<div class="fragment" style="padding:0px 0px 0px 480px">

_Can you tell what this does?_

    [lang=vb]
    10: I = 1
    20: PRINT "HI"
    30: I = I + 1
    40: IF I <= 10 THEN GOTO 20

</div>
<div class="fragment" style="padding:20px 0px 0px 480px">

_And what about this?_

    [lang=vb]
    FOR I = 1 TO 10 DO
      PRINT "HI"
    NEXT

</div>

----------------------------------------------------------------------------------------------------

# Keeping program logic simple

Is there an easier way to write this?

    [lang=javascript]
    if (isAdministrator(user) || isOwner(user)) return true;
    else return false;

<div class="fragment" style="padding-top:10px">

You do not need conditional statement at all!

    [lang=javascript]
    return isAdministrator(user) || isOwner(user);

</div>

----------------------------------------------------------------------------------------------------

# Keeping program logic ... logical (1/2)

When does the following return a product page?

    [lang=javascript]
    if (isAvailable(product)) {
      if (isHidden(product))
        return null;
      return getProductPage(product);
    } else {
      return null;
    }

<div class="fragment" style="padding-top:10px">

_When product is available and not hidden!_

_Which branch is the "happy path" branch?_

</div>

----------------------------------------------------------------------------------------------------

# Keeping program logic ... logical (2/2)

Keep the happy path branches consistent!

    [lang=javascript]
    if (isAvailable(product)) {
      if (!isHidden(product)) {
        return getProductPage(product);
      } else return null;
    } else return null;

<div class="fragment" style="padding-top:10px">

Reduce unnecessary nesting

    [lang=javascript]
    if (!isAvailable(product)) return null;
    if (isHidden(product)) return null;
    return getProductPage(product);

</div>

----------------------------------------------------------------------------------------------------

# Program logic

### Encoding logic in a readable way

_<i class="fa fa-brush"></i> Use appropriate language constructs_

_<i class="fa fa-directions"></i> Make sure you're not complicating things_

_<i class="fa fa-long-arrow-alt-right "></i> Keep "happy path" through code clear_

_<i class="fa fa-boxes"></i> Do not use unnecessary nesting of logic_

----------------------------------------------------------------------------------------------------

# Consistent code indentation (1/2)

What is the right spacing and line breaks?

    [lang=javascript]
    if (isAvailable( product ))
      {
        if (!isHidden(product)) {
        return getProductPage(product);
        } else
            return null;
    } else
    return null;

<div class="fragment" style="padding-top:10px">

Compiler ignores whitespace, but humans do not!

</div>

----------------------------------------------------------------------------------------------------

# Consistent code indentation (2/2)

_Follow style of a project or a language;_ be consistent!

_Indent nested code by the same number of spaces or tabs_

<div style="padding-top:10px">

    [lang=javascript]
    if (isAvailable(product)) {
        if (!isHidden(product)) {
            return getProductPage(product);
        } else {
            return null;
        }
    } else {
        return null;
    }

</div>

----------------------------------------------------------------------------------------------------

# Writing useful comments

<div class="fragments">

Are you explaining something you cannot see from code?

```javascript
// Return product page if product is available
if (isAvailable(product))
  return getProductPage(product);
```

</div>
<div class="fragment" style="padding-top:10px">

Also applies to Java inline documentation for methods

```javascript
/**
 * Returns the product price
 */
float getProductPrice(Product product)  { /* ... */ }
```

</div>

----------------------------------------------------------------------------------------------------

# Comments and whitespace

### Making code easy to read and understand

_<i class="fa fa-ban"></i> Don't use comments if you have nothing to add_

_<i class="fa fa-landmark"></i> Comments should add history, motivation, context_

_<i class="fa fa-code"></i> Use consistent spacing and indentation_

_<i class="fa fa-align-center"></i> Keep nesting and length of functions sensible_

----------------------------------------------------------------------------------------------------
- class: part

# **Demo**: Improving quality of a poor code snippet

----------------------------------------------------------------------------------------------------

<div class="smallercode">

    [lang=javascript]
    // Answers a given query
    function answerQuery(query) {
      var query_lower = v.lowerCase(query);
      if (v.includes(query_lower, "rain") || v.includes(query_lower, "sun"))
        { return "I do not care too much about weather"; }
      if (!v.includes(query_lower, "football"))
          { return "Sorry Dave, I cannot do that." }
      return "Football is the ballet of the masses."
    }

    // Handles a say click
    function HandleSayClick()
    {
      var el = document.getElementById('message');
      var ml = el.value.toLowerCase();
      var cv = document.getElementById('conversation');
      var an = answerQuery(ml)
               conversation.innerHTML += "<p>" + ml + "</p>";
               conversation.innerHTML += "<p>" + an + "</p>";
    }

</div>

----------------------------------------------------------------------------------------------------

<div class="smallercode">

    [lang=javascript]
    // Searches the query for known keywords (rain, sun
    // and football) and returns bot's response
    function answerQuery(query) {
      var queryLower = v.lowerCase(query);
      if (v.includes(queryLower, "rain") || v.includes(queryLower, "sun"))
        return "I do not care too much about weather";
      if (v.includes(queryLower, "football"))
        return "Football is the ballet of the masses.";
      return "Sorry Dave, I cannot do that.";
    }

    // Gets message from the user and appends
    // it together with an answer to the conversation
    function HandleSayClick() {
      var messageEl = document.getElementById('message');
      var messageLower = messageElement.value.toLowerCase();
      var conversationEl = document.getElementById('conversation');
      var answer = answerQuery(messageLower)
      conversation.innerHTML += "<p>" + messageLower + "</p>";
      conversation.innerHTML += "<p>" + answer + "</p>";
    }

</div>

****************************************************************************************************
- class: part

# **Maintaining and improving quality**

----------------------------------------------------------------------------------------------------

# Maintaining code quality

<img src="images/quality/linter.png" style="float:right;max-width:400px;margin:60px 0px 0px 20px" />
<div style="margin-top:-10px">

**Social approaches**

 - Pair programming _- all code writing is done in pairs_
 - Code reviews _- colleague reads code before merging_

**Technological solutions**

 - Compiler _- only checks if computer can understand_
 - Style checkers _or_ linters _- check stylistic errors and suspicious constructs_

</div>

----------------------------------------------------------------------------------------------------

# Improving code quality

<img src="images/quality/rgr.png" style="float:right;max-width:300px;margin:10px 0px 0px 20px" />

**Refactoring**

_Is a code transformation that_

<div style="margin:-15px 0px 20px 30px">

_(i) Does not change meaning_  
_(ii) Improves quality of code_

</div>
<div class="fragment" style="padding-top:10px">

**Test-driven development**

- Red _- Add failing test for new unimplemented feature_
- Green _- Make it pass using whatever hacks you need_
- Refactor _- Improve quality without breaking it_

</div>

----------------------------------------------------------------------------------------------------

# Example of refactoring (1/2)

The name of the function and input argument are poor

```javascript
function conv(x) {
  return x * 9 / 5 + 32;
}
```

<div class="fragment">

_Improve quality using_ **rename refactoring**

```javascript
function celsiusToFahrenheit(temperature) {
  return temperature * 9 / 5 + 32;
}
```

_Note that we use new name in all calls to `conv`_  

</div>

----------------------------------------------------------------------------------------------------

# Example of refactoring (2/2)

What is wrong with this function?

_Comment indicates it does two separate things_  
_In reality it would be very long_  

```javascript
function printOwing(invoice) {
  printBanner();
  var outstanding = calculateOutstanding();

  // Print details
  print("name: $" + invoice.customer);
  print("amount: $" + outstanding);
}
```


----------------------------------------------------------------------------------------------------

# Example of refactoring (2/2)

_Improve quality using_ **extract function** _refactoring_

```javascript
function printDetails(invoice, outstanding) {
  print("name: $" + invoice.customer);
  print("amount: $" + outstanding);
}

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(invoice, outstanding);
}
```

_Note that comment becomes a function name!_

****************************************************************************************************
- class: part

# **Summary**

----------------------------------------------------------------------------------------------------

# Code quality

**What is code quality and why it matters**  
_More time is spent reading code than writing it_  
_Extreme programming - simplicity & shared understanding_

**Specific rules for keeping high code quality**  
_Naming variables, upper/lower case, indentation_  
_Keeping logic simple and comments meaningful_  

**Maintaining and improving code quality**  
_Social and technological approaches to quality_  
_Refactoring and red-green-refactor methodology_

----------------------------------------------------------------------------------------------------

# CO559: Code quality

**What you should remember from this lecture**

 - Rules for good naming and lower/upper case
 - Keeping logic simple, comments and indentation
 - Refactoring and red-green-refactor

<br />
<br />

Tomas Petricek<br />
_[t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk) | [@tomaspetricek](http://twitter.com/tomaspetricek)_

****************************************************************************************************
 - class: part

# **References**

----------------------------------------------------------------------------------------------------

**Selected chapters from books**

 - [Code Complete: A Practical Handbook of Software Construction](https://amzn.to/2BMkEgJ)
 - [Clean Code: A Handbook of Agile Software Craftsmanship](https://amzn.to/2SUm7we)

**Papers and articles**

 - [A Large Scale Study of Programming Languagesand Code Quality in Github](http://web.cs.ucdavis.edu/~filkov/papers/lang_github.pdf)
 - [Boffins debunk study claiming certain languages lead to more buggy code than others](https://www.theregister.co.uk/2019/01/30/programming_bugs/)
