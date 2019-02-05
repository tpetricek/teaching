# Introducing source control with Git

## Creating the repository

First, download the sample application and create a Git repository for it.

1.  Download the sample application. It consists of two files - `index.html` 
    containing user interface and `bot.js` implementing simple logic for it
    in JavaScript.

2.  Place the files in a folder of your choice

3.  Open the source code in your favorite text editor (Visual Studio Code 
    or Notepad++ are good choices), open `index.html` in a web browser and
    try experimenting with it to see what the sample does!

4.  Start Git Bash console and navigate to your folder, e.g. by typing 
    `cd /c/MyStuff/class`.

5.  Create a new Git repository using the `git init` command.    

6.  Add both files to the Git repository using `git add bot.js` and 
    `git add index.html` or by using `git add .` to add everything.

7.  Check the status of your repository using `git status`.

8.  Commit your changes to your local repository using `git commit` and 
    write a descriptive commit message.

## Adding a feature in a branch 

Next, we will extend the chat bot to be able to talk about tea and biscuits.
We will do this in a branch separate from `master`.

1.  Create a new branch that is a copy of `master` using `git branch -c tea`
    (`tea` is the name of the new branch, you can pick anything you want).

2.  Switch to the new branch using `git checkout tea` and then review the 
    list of branches using `git branch -v`.

3.  Open `bot.js` and add a couple of more lines that set `answer` to some
    appropriate value when the `message` contains the word "tea" or "buscuit".
    Test your code in a browser to make sure it works!

4.  Run `git status` to see what files have been changed. Add all the changed
    files to the index using `git add <name-of-file>` where `<name-of-file>`
    is the name of the file that has been modified.

5.  Commit your changes using `git commit`. Note that you can also do this
    together with the previous step using `git commit -a` which first adds
    all modified files to the index and then runs commit.

6.  Switch back to master branch using `git checkout master` and verify that
    the bot has reverted to the original functionality, i.e. understands only
    weather and no tea or biscuits!

## Refactoring code in a branch

Now, we will make the code nicer by extracting the logic into a separate 
function, but we are going to do this in a new branch based on `master`. 
This is something that typically happens when more people work on the same project.

1.  Create a new branch using `git branch -c <branch-name>` where 
    `<branch-name>` is the name of the branch you want to create.

2.  Switch to the new branch using `git checkout <branch-name>`

3.  Open `bot.js` and add a function before `saySomething` that looks something 
    like this - modify the code from `bot.js` - the following code  is simplified
    and some of the actual code is replaced with `...`!

        function answerQuery(message) {
          if (message.indexOf("rain") != -1 || ...)
            return "I do not care too much about weather ...";
          return "Sorry Dave, I cannot do that.";
        }

    Modify the code in `saySomething` to call the `answerQuery` function: 

        var answer = answerQuery(message);

 4. Verify that the code still works and the bot can talk about weather!

 5. Add your changes to the index and commit them, either using `git commit -a`
    or by using `git add` followed by `git commit` and then switch back to 
    the master branch using `git checkout master`.

## Merging changes from two branches

Now we want to integrate all the changes that we've done separately in the two
branches into the `master` branch - we want a bot with nicely structured code 
that can also talk about tea and biscuits!

 1. Check the available branches using `git branch`. Running the command
    with `-v` parameter also shows the most recent commit message for each branch.

 2. Merge the changes from the `tea` branch into the `master` branch using
    `git merge tea` (assuming you are on the `master` branch).

 3. Run `git log` to see the most recent commits on the current branch. This
    should now include both your first commit and also the commit you did after
    implementing tea and biscuit related features.

 4. Now try merging the changes from the other branch you created, using
    `git merge <name>` where `<name>` is the name of your second branch.
    This will fail with "Merge conflict" - you will need to resolve the merge
    conflict before the merge completes.    

 5. Open `bot.js` using your favorite text editor. You will see that the parts
    of the code that have been changed in both of the separate branches are
    marked using:
    
        >>>>>
        current branch
        =====
        other branch
        <<<<<

    You need to manually edit the file to resolve the conflict. Modify the code
    so that it has all the tea and biscuit related functionality in the 
    `answerQuery` function and the function is called correctly from `saySomething`.
    Then delete all the merge-related markers.

 6. Now you need to add the modified file to the index and commit the changes 
    (in the same way as you did when doing other changes, i.e. using `git add` 
    and `git commit` or using `git commit -a`).

 7. Check the history using `git log` and verify that everything works correctly!
    Now that we have all the code in `master`, you can delete the branches where
    we implemented the two features using `git branch -d <branch-to-delete>` 
    where `<branch-to-delete>` is the name of the branch you want to delete.        
        



