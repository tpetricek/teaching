# Improving code quality

In this session, your task is to improve code quality of a simple JavaScript chatbot.
You will need to fork a sample repository, add four commits and send a pull request with
your cahnges. The first commit should fix simple whitespace and indentation issues. The next
three commits should use two refactorigns to imporve code readability.

## Forking the sample repositoy

 1. The initial repository is available at: https://github.com/tpetricek/eliza-code-quality. 
    Go to the GitHub page and click the "Fork" button to create a fork of the repository 
    in your own GitHub account.

 2. After GitHub forks the repository, clone it so that you can edit the files locally on 
    your machine. Click the "Clone or download" button, copy the URL for cloning your 
    repository via HTTPS and run `git clone <your-url>`

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

 3. Fix the indentation issues and commit your changes using `git add` and `git commit`.

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

 2. Commit your change with appropriate comment.

 3. Use _rename refactoring_ to imporve the names of parameters of the `matchPattern`
    function: `p`, `w`, `pi`, `wi` are not very good names! Rename the first two to
    `pattern`, `words`. You can also rename `pi` and `wi` to `patternIndex` and 
    `wordIndex` - these are not too bad, but longer name might be more readable.

 4. Commit your change with appropriate comment.

 5. If you have more time, continue with the next tasks, but if no, skip the rest
    of this section and create a pull request with your changes!

 6. Use _extract function refactoring_ to reduce the nesing level of the `matchPattern`
    function. It has `if` inside `for` inside another `for` inside yet another `if`, 
    `for` and `if`, which is a bad practice! Move the nested loop that iterates over
    `replacements` (and replaces words like `"my"` with `"your"`) into a separate function
    called `applyReplacements`. The function should take a word and return either a 
    new word to be used as a replacement, or the original word. You can then call this
    from `matchPattern` using `sub[i] = applyReplacements(sub[i])`.

 7. Commit your change with appropriate comment.

## Send a pull request

 1. Make sure you commited all your changes locally and then push your changes
    to your cloned GitHub repository using `git push`.

 2. Go to your fork of the project on GitHub in your web browser and send a 
    pull request to the main repository 
    ([tpetricek/eliza-code-quality](https://github.com/tpetricek/eliza-code-quality)).
    Make sure to provide a descriptive title and description of your pull request!

 3. Once you're done, you compare your changes with changes proposed by others
    (go to the ["Pull requests"](https://github.com/tpetricek/eliza-code-quality/pulls) tab).
    Is there something you did differently than others?
       

