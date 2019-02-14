# Continuous integration and testing

This exercise assumes that you have a GitHub account and that you configured your local git and
your GitHub profile so that the two can work together. You will need to be able to create a new
GitHub projects, clone the GitHub repository and push changes.

## Setting up Travis and GitHub

1.  Download the [sample repository (ZIP)][zip] and extract the files into a new folder
    somewhere on your machine. The sample contains `index.html` and `bot.js` just like in
    the previous classes, but it also includes tests (in `test` folder), build scripts and
    files related to package management (`package.json` and `webpack.config.js`, `yarn.lock`)
    and configuration for Travis continuous integration on GitHub (`.travis.yml`).

2.  Go to your GitHub profile and create a new project. You can do that by [following
    this link](https://github.com/new). Call the project whatever you want, but we'll be using
    the name `silly-bot` in the instructions. Use default GitHub settings (do _not_ click on
    the checkbox that says "initialize the repository").

3.  Add the files you downloaded earlier to the newly created repository by following the
    instructions for the "push an existing repository from the command line" option. It looks
    something like this (replace `<your-account>` with your GitHub account!)

        git remote add origin https://github.com/<your-account>/silly-bot.git
        git push -u origin master

4.  Next, we want to configure continuous integration on GitHub, to see if the project works!
    For this, you need to go to https://travis-ci.com. Once you're there, click on the
    "Sign in with GitHub" and then (when asked) click "Authorize". This gives Travis access
    to your GitHub repositories.

5.  Now, click on the profile picture icon in the right top corner (there is a randomly
    generated profile picture there), and go to "Settings". Under "GitHub Apps Integration",
    click on the "Activate" button. Use the default "All repositories" option and then
    click "Approve & Install". If you're asked to sign in with GitHub again, accept that by
    clicking "Sign In with GitHub".

6.  Now you should see the "silly-bot" repository in your list of repositories that Travis
    is monitoring! Travis will run build automatically when something changes, but you
    can trigger the first build manually by going to the repository details and choosing
    "Trigger build" from "More options" on the right (below the profile icon).

7.  You should see that the build fails, because there are tests for some functionality that
    is not yet implemented!

## Running and fixing Silly Bot tests

1.  First, let's actually run and test our bot locally. If you just open `index.html`, it
    will not work! We are using Webpack, which is a tool that produces "compiled" version
    of JavaScript files from our "source" files. Webpack also runs a local server that we
    can use to host our application when we are building it. To do this, run `yarn` (to
    download all the required packages) and then `yarn start` to start the project. This
    should open a browser with a bot that can chat about weather.

2.  Webpack keeps running in the background and recompiling your file if you change it.
    Stop the process using <kbd>Ctrl</kbd>+<kbd>C</kbd>. This sometimes gets stuck - if that
    happens, close the terminal and open a new one.

3.  The application runs, but our bot cannot yet talk about tea! We have a test that
    specifies how this should work and the test is failing. Run `yarn test` to run the tests -
    you should see one test succeeding (weather related) and one failing (tea related).

4.  Have a look at the failing test in `test/communication.js`. Then open `bot.js` in the
    root folder and correct the implementation of `answerQuery` so that it also responds
    correctly to messages about tea.

5.  Run `yarn test`. If tests are still failing, keep editing `bot.js` until everything works.
    Once you're done, commit your changes and push them to GitHub (using `git add`, `git commit`
    and `git push`). Travis should run the build and it should now succeed!

## Breaking the build by removing dependencies

1.  Among other things, continuous integration ensures that if you try to run the project on
    a new machine, it will work. One important aspect is that the project correctly specifies
    all dependencies. Our example uses a library called "voca" for string processing. Let's
    see what happens if we remove the dependency from our configuration file.

2.  Open `package.json` file and remove the line `"voca": "^1.4.0"` from the `"dependencies"`  
    section. This removes the dependency from the configuration file, but does not actually
    delete the files from your machine.

3.  Run `yarn test`. You should see that everything still works on your machine!

4.  Commit your change and push the change to GitHub (using `git add`, `git commit` and
    `git push`). Check your Travis build - it should fail!

5.  Undo your local change and then commit and push your changes. The build should succeed
    again. If you feel adventurous, you can also use Git to _revert_ the last commit you
    made. This means going one step back through the history. The third command
    (`git push origin master`) will fail - you will need to add the `-f` parameter:

        git reset HEAD~1
        git checkout package.json
        git push origin master
        git push -f origin master

    The `-f` parameter tells Git that it should forcefully overwrite the state of the
    repository. Git does not automatically do this, because the repository on GitHub
    contains one additional commit that we are completely removing from the history
    (`-f` is dangerous!)

## Adding a feature with tests using a pull request

1.  Now we want to add a new feature to our bot. We will do this in a separate branch
    and we will send a pull request from this branch to `master`. This way, Travis will
    run all the tests for us while we are developing the feature. We'll start with a
    failing implementation and then correct it.

2.  Download the [filtering.js][filteringjs] file. You can copy the contents or download
    [this archive (ZIP)][filtering] and extract the file into the `test` folder.

3.  This adds tests for the `isPermitted` function in `bot.js`. Run `yarn test` to see
    that the tests now fail.

4.  Create a new branch and switch to it. The best option is to use `git checkout -b filtering`
    (previously, we used `git branch filtering` and `git checkout filtering` but it is
    too easy to forget the second part, so now we'll do it using just one command).

5.  Add the new file using `git add test/filtering.js` and commit your changes.

6.  Push the `filtering` branch to your GitHub repository. Note that by default `git push`
    pushes the `master` branch so now you need to specify the branch name explicitly and
    use `git push origin filtering`.

7.  Go to the GitHub page for the project and switch to `filtering` branch. To do this,
    choose `filtering` from a dropdown that's just above the list of files on the left.    
    Next, click "New pull request" button to create a pull request (from the new branch
    to `master`). Add a comment and create the PR!

8.  This will automatically run your tests and you should eventually see the result.
    We have not implemented the `isPermitted` function and so tests should fail.

9.  Go back to your code and add an implementation of `isPermitted` that makes the tests
    pass. You can check your tests using `yarn test` (in your terminal) at any point.
    You can use one of the following two ways to test if a `query` contains a given word.
    First, use `includes`:

        var lower = v.lowerCase(query);
        if (v.includes(lower, "nastyword")) return false;

    Alternatively, split the `query` into words and check if the array contains a given
    word using `indexOf`:

        var words = v.words(v.lowerCase(query));
        if (words.indexOf("nastyword") != -1) return false;

10. Once your tests succeed locally, commit and push your changes to GitHub. You will
    again need to push the changes in the `filtering` branch using
    `git push origin filtering`.

11. After the tests complete on Travis, you should see that the tests succeeded and the
    pull request is now green and ready to be merged. Merge the pull request! This adds
    your changes to `master`.

12. As a last step, you can switch back to the `master` branch using `git checkout master`
    and run `git pull origin master` to fetch the changes that you merged into `master`
    using the GitHub pull request. Your changes are now in `master` too!

[zip]:  https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/continuous-integration/silly-bot.zip?raw=true
[filtering]:  https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/continuous-integration/filtering.zip?raw=true
[filteringjs]: https://github.com/tpetricek/Teaching/blob/master/software-engineering-classes/continuous-integration/filtering.js
