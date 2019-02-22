# Collaborative development using GitHub

In this exercise, you will be working in groups. Form groups, ideally of 3 people.
In each group, one person will be "owner" of the project and the remaining people
will contribute fixes to the project.

## Create a GitHub account and configure access

1.  First, you will need to create a GitHub account if you don't have one already.
    To do this, go to https://www.github.com and click "Sign Up". Pick a user name,
    enter your details and click "Create an account". Choose the "Free" option and
    skip the extra questions on the next page. You will also need to verify your
    email.
    
## Create a project and push changes (owner)

The following steps should be done by the whole group together, using just the
computer and account of the "owner" that you selected earlier. The owner will have
the primary version of the project in their GitHub profile and others will later
contribute to it.

1.  Now, we'll create a new project on GitHub with some initial source code and
    we will add a couple of issues that we will then resolve. Every member of the
    team will address one issue and send a pull request with the correction.

2.  First, create a new project on GitHub. Use either "Start a project" button if
    you just created your account, or click "+" in the top right corner and select
    "New repository".

3.  Enter `useless-bot` as the repository name. Leave the repository public and
    select "Initialize this repository with a README" so that GitHub creates an empty
    repository for our new project. Click "Create repository" and you should see
    a new repository with a README.

4.  Now, we need a local copy of the project on our computer. Click the green
    "Clone or download" button and copy the URL from the textbox. Open terminal,
    go to a folder using, say, `cd /c/Temp` and run the following (using the URL
    you copied from GitHub)!

        git clone https://github.com/<your-account>/<your-repository>.git

    This will create a new folder named `<your-repository>` and copy contents of
    the repository into this folder. Go to the folder using `cd <your-repository>`.

5.  Download the sample by [following this link (ZIP)][zip] and extract the two
    files it contains (`index.html` and `bot.js`) into the folder where you have
    your new repository.

6.  Add the files to the Git "staging area" using `git add index.html` and
    `git add bot.js` (alternatively, you can also use `git add .` to add all
    files in the directory) and commit your changes using `git commit`.

7.  Your commit is stored only in your local repository on your machine. Look at
    your GitHub project and you won't see any of the new files there yet. Now
    push the changes from your local repository to your remote repository using
    `git push origin master` and see that the new files are now visible on GitHub!    

## Use GitHub issues to track work (group)

1.  Now, we'll use GitHub issues to keep track of work we want to do on the project.
    Do the following in group, but you can now use multiple computers. Anyone
    can add issues to the project - not just the owner.

2.  Go to the project page on GitHub. This URL will be something like:
    https://github.com/tp343/useless-bot where `tp343` is the owner's account
    and `useless-bot` is the repository name.

3.  Click on "Issues" to go to the issue list and add the following issues using the
    "New Issue" button. For the purpose of the exercise, you can use just titles, but
    in any real project, you'd also write a useful issue description.

    - "Bot does not talk about tea and biscuits" - we want to extend the bot so that
      it can respond to queries involving tea and biscuits
    - "Bot does not talk about football" - we want to extend the bot so that it can
      respond to queries about football
    - "Title of the web page is incorrect" - the title of the `index.html` page is
      wrong and we want to replace it with something useful

    After you create the issues, you'll see that each issue has a number (written
    as `#1`, `#2` and `#3`). Each member of the group should pick one of the issues
    and try to solve it.

## Resolve issues via pull requests (non-owner)

1.  If you are not an owner of the repository, you cannot use `git push` to add your
    changes directly. Instead, you need to use GitHub pull request from your "fork"
    of the repository.

2.  Go to the repository home page as before. The URL for this should be something like
    https://github.com/tp343/useless-bot. Click the "Fork" button in the right top corner,
    below the black bar. This creates a linked copy (fork) of the owner's repository in
    your own profile.

4.  Now, you need a local copy of the project on our computer. We did the same for
    the owner before! Click the green "Clone or download" button and copy the URL
    from the textbox. Open terminal, go to a folder using, say, `cd /c/Temp` and
    run the following (using the URL you copied from GitHub)!

        git clone https://github.com/<your-account>/<your-repository>.git

    This will create a new folder named `<your-repository>` and copy contents of
    the repository into this folder. Go to the folder using `cd <your-repository>`.

5.  Address the issue that was assigned to you. If you're doing tea or football,
    open `bot.js` in your favorite editor and modify the `answerQuery` function so
    that it covers the new topic. If you're doing title, open `index.html` and fix
    the contents of `<title>`.

6.  Create a new commit with your changes. You can use `git add index.html` or
    `git add bot.js` followed by `git commit`. Alternatively (quicker way), you can
    use `git commit -a` which will automatically add all modified files to the
    "staging area" before doing the commit. When writing the commit message, include
    `"(fix #1)"` (where `#1` is the number of the issue you are fixing)
    at the end of the commit message. GitHub will recognize this and will link your
    commit to the issue.    

7.  Your commit is stored only in your local repository on your machine. Look at
    your fork of the GitHub project and you won't see the changes there yet. Now
    push the changes from your local repository to your remote repository using
    `git push origin master` and see that the new files are now visible in your
    GitHub fork!

8.  Your changes are now on GitHub, but only in your private "fork" of the owner's
    repository. Go to your fork of the repository on GitHub and click the
    "New pull request" button (on the left, just above the file listing). This
    will show you the changes you did.

9.  Click "Create pull request" and add a title and a brief description for the
    pull request. Click "Create pull request" (again). You have now sent your
    changes to the owner, who can merge the pull request!

## Merging changes and closing issues (owner)

1.  When a contributor sends a pull request to the owner, the owner and the
    contributor can discuss the changes and, eventually, the owner can accept the
    pull request. The owner will need to complete this part.

2.  The owner should go to their version of the project. This is the one you created
    first. Click on "Pull requests" (right from "Issues"). You should see the
    new pull requests there.

3.  Go to the details of the pull request you want to merge and click the
    "Merge pull request" button.

4.  If the author of the pull request correctly included `(fix #N)` in the commit    
    message, merging the pull request should automatically close the issue. Go to
    "Issues" and see what unfixed issues remain (you can see closed issues by
    clicking on the "Closed" tab).

5.  Finally, verify that all the merged changes work. To do this, use terminal to
    go to your local copy of the repository. This does not yet include the changes
    done on GitHub. You can retrieve those using `git pull`. Do that and open
    `index.html` to test the new features!

[zip]:  https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/github-introduction/sample.zip?raw=true
