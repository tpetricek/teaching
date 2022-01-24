# Improving code quality

In this session, your task is to improve code quality of a simple JavaScript chatbot.
You will need to download a simple JavaScript projects and make two kinds of improvements.
First, you should fix simple whitespace and indentation issues. Second, you should
use two refactorigns to imporve code readability.

## Forking the sample repositoy

 1. The sample project can be [downloaded as a ZIP file](https://github.com/tpetricek/eliza-code-quality/archive/refs/heads/master.zip).
    Do that and extract the files to a local folder anywhere on your computer.

 3. Open `index.html` in your web browser and `bot.js` in a text editor and explore how
    the chatbot works. You can, for example, try typing the following messages:
      - I am very unhappy
      - My mother loves apples
      - I do not get on well with my father

## Improving whitespace and indentation

 1. The `bot.js` file contains two functions - `saySomething` is called when the user clicks
    on the "Say something" button and `matchPattern` implements logic for matching lists of
    words against patterns defined in the `rules` specification.

 2. Both `saySomething` and `matchPattern` contain a number of code quality issues related to
    whitespace (especially how are `{` and `}` written) and indentation (lacking indentation
    of the body of loops and conditionals and extra indentation).

 3. Fix the indentation issues!

## Improving quality using refactoring

Refactoring is a transformation of code that improves code quality and does not change what
the code does. (Fixing whitespace is not usually called refeactoring, because we are not
changing anything that compilers or interpreters running the code see - they just ignore
all whitespace.) Two example refactorings are:

 - _Rename refactoring_ - change the name of a variable or a function in the place
   where it is declared and all locations where it is used to a more descriptive name

 - _Extract function refactoring_ - take some code from a very long function, put it
   into a new function and call this new function from the original place to make the
   original very long function shorter and easier to read. In the process, you need to
   make sure the new function takes all inputs that it needs as parameters.

Your next task is to add three commits using the two refactorings.

 1. Use the _extract function refactoring_ to extract the logic that constructs the
    reply from the `saySomething` function. You should create a new function that
    takes `message` and returns the answer i.e. add `function reply(message)`.

 3. Use _rename refactoring_ to imporve the names of parameters of the `matchPattern`
    function: `p`, `w`, `pi`, `wi` are not very good names! Rename the first two to
    `pattern`, `words`. You can also rename `pi` and `wi` to `patternIndex` and
    `wordIndex` - these are not too bad, but longer name might be more readable.

 5. If you have more time, continue with the next tasks, but if no, skip the rest
    of this section and create a pull request with your changes!

 6. Use _extract function refactoring_ to reduce the nesing level of the `matchPattern`
    function. It has `if` inside `for` inside another `for` inside yet another `if`,
    `for` and `if`, which is a bad practice! Move the nested loop that iterates over
    `replacements` (and replaces words like `"my"` with `"your"`) into a separate function
    called `applyReplacements`. The function should take a word and return either a
    new word to be used as a replacement, or the original word. You can then call this
    from `matchPattern` using `sub[i] = applyReplacements(sub[i])`.
