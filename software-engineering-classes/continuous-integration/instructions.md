# Continuous integration and testing

TODO: How does github login work

## Setting up Travis and GitHub

1.  Download the sample from ... (this already contains git repo)
    (TP: need to 'git remote rm origin')
2.  Go to github and start new project: https://github.com/new  call it silly-bot;
    use default settings (do not click the checkbox to initialize repository)
3.  Follow the instructions for "push an existing repository from the command line"

        git remote add origin https://github.com/tpetricek-test/silly-bot.git
        git push -u origin master

4.  Go to https://travis-ci.com/, click "Sign in with GitHub" and click "Authorize"
5.  Click on the profile picture icon on the right top, and go to "Settings"; under
    "GitHub Apps Integration" click "Activate". Use the default "All repositories" option
    and click "Approve & Install"; click "Sign In with GitHub" (again) when asked
6.  Now you will see "silly-bot" repository in your list of repositories! You can trigger build
    by hand by going to the repository details and choosing "Trigger build" from "More options"
    on the right!
7.  The build should fail, because there are some broken tests.    

## Fixing and running tests

1.  Let's run our bot first. Run `yarn` and `yarn start`. Should be working fine and respond
    to weather.
2.  Kill with Ctrl+C. This sometimes gets stuck - you can close and reopen the terminal window.    
3.  But our failing test is tea related. Run `yarn test`. You should see one test
    succeeding and one test failing because our bot only handles weather, but not tea.
4.  Have a look at the failing test in `test/communication.js`, then open `bot.js` and fix
    the implementation of `answerQuery` so that the test passes.
5.  Run `yarn test`.
6.  When you're happy with the results, commit and push your changes and check in Travis that
    everything worked!

## Breaking the build

1.  Open `package.json` file and remove `"voca": "^1.4.0"` from the `"dependencies"` section.
2.  Run `yarn test` - everything still works, right?
3.  `git commit -am "Removing voca"` and watch your build fail!
4.  Fix everything again. Just add it back and commit & push or, if you feel brave:

        git reset HEAD~1
        git checkout package.json
        git push origin master
        git push -f origin master

## Adding a feature via PR

1.  Go to (someplace) and copy the file ... into `test`
2.  Create a new branch and switch to it using `git checkout -b filtering`
    (previously, we did this using `git branch filtering` and `git checkout filtering` but
    you can do it in one step)
3.  Add the new file using `git add test/filtering.js`, commit your changes
4.  `git push origin filtering`
5.  Go to your GitHub, switch to `filtering` branch (dropdown on the left, above the file listing)
    and click "New pull request" button. Write a comment and create a PR!
6.  This will run tests automatically. Wait until they fail.
7.  Go back to your code and add implementation of `isPermitted` that makes things work.
    You can check your tests using `yarn test` at any point.
8.  Commit and push your changes (using `git push origin filtering`) and see that the PR turns green!
9.  Merge the PR on GitHub
10. Run `git checkout master` and `git pull origin master`. Your changes are now here too!
