- title : Software Engineering: Tools for collaborative development
- description : Software Engineering: Tools for collaborative development
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO886: Software Engineering**<br/> Tools for collaborative development

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
- class: part

# **Software engineering today**

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/noproof.png" style="max-width:500px;float:left;margin:30px 40px 100px 0px" />

**Mathematician's answer to software engineering**

_Use mathematical methods to prove system correctness_

<div class="fragment">

People don't do it, yet, software mostly works.

</div>

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/uml.jpg" style="max-width:490px;float:left;margin:30px 50px 100px 0px" />

**Detailed upfront models**

<div class="fragment">

We know where  
we want to get

_Useful if predictability matters more than cost and delivery time_

</div>

----------------------------------------------------------------------------------------------------

# Software engineering today

<img src="images/collaborative/domino.jpg" style="float:right;max-width:320px;margin-left:20px" />

**In contrast to upfront model**

We know that we continue  
moving in the right direction

<div class="fragment">

**Tools and practices to ensure that**

 - _We can learn from past mistakes_
 - _We're tracking known issues_
 - _Software keeps working when we make changes_
 - _It is easy to improve and contribute_

</div>

----------------------------------------------------------------------------------------------------

# Software engineering today

### Some important aspects that we will cover

_<i class="fa fa-file"></i> Source control and collaborative development_

_<i class="fa fa-check-square"></i> Testing and build automation_

_<i class="fa fa-cog"></i> Continuous integration and reproducibility_

_<i class="fa fa-code"></i> How open-source software development works_

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/git.png" class="nb" style="max-width:480px;float:left;margin:0px 70px 0px 20px" />

**Git and source control**

Version and history tracking systems

<div class="fragment">

_Keep version history because you will need to look back_

_Develop features independently and merge changes_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/github.png" class="nb" style="max-width:490px;float:left;margin:30px 40px 100px 0px" />

**GitHub and collaboration**

Help teams plan and collaborate and organize

<div class="fragment">

_Manage issues, notes, plans, contributions_

_Also a "social network"  
for open source software_

</div>

****************************************************************************************************
- class: part

# **Git and source control**

----------------------------------------------------------------------------------------------------

# Git repository

<img src="images/collaborative/folder.png" style="float:right;max-width:250px;margin-left:20px" />

**Everything in one folder**

 - _Your regular files you can edit_
 - _`.git` folder with old versions etc._
 - _`.gitignore` and other special files_

<div class="fragment">

**Versioning and collaboration**

 - _Stage changes from files to "index"_
 - _Save or retrieve from version history_
 - _Push to/pull from remote repositories_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/areas.png" style="max-width:500px;float:left;margin:30px 40px 150px 0px" />

**Working directory**  
_Files you directly edit_

**Staging area**  
_Selection to be archived_

**Local repository**  
_History and versions_

**Remote repositories**  
_Versions on other computer(s)_

----------------------------------------------------------------------------------------------------

# Creating repository and adding files (1/2)

**Initialize empty repository in current folder**

    [lang=text]
    $ git init
    Initialized empty Git repository in C:/Temp/test/.git/

### Add new or modified file to the index

    [lang=text]
    $ git add hello.txt
    $ git status
    Changes to be committed:
            new file:   hello.txt

----------------------------------------------------------------------------------------------------

# Creating repository and adding files (2/2)

**Create new version history record (commit)**

    [lang=text]
    $ git commit
    [master (root-commit) d70e7d9] Adding hello file
     1 file changed, 1 insertion(+)
     create mode 100644 hello.txt

### List the most recent history records

    [lang=text]
    $ git log
    commit d70e7d97c8598b8c55f01da803447cf95d664504 (HEAD -> master)
    Author: Tomas Petricek <tomas@tomasp.net>
    Date:   Sat Feb 9 01:36:40 2019 +0000
        Adding hello file

----------------------------------------------------------------------------------------------------

- class: part

# **Demo:** Creating repository, adding files

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/swearing.png" class="nb fragment" style="max-width:500px;float:left;margin:0px 40px 100px 0px" />

_Warning: This slide contains profanities_

<div class="fragment" style="padding-top:10px">

How to write a good commit message?

_Brief summary of the change (70 characters)_

_Add more detailed comment after a newline_

</div>

----------------------------------------------------------------------------------------------------

# Git history and branches

### Using git for versioning and features

_<i class="fa fa-code-branch"></i> Use branches for different versions and features_

_<i class="fa fa-leaf"></i> Branch is named pointer to a commit_

_<i class="fa fa-chess-king"></i> Master branch is typically the "main" once_

_<i class="fa fa-industry"></i> Branch for each version running in production_

----------------------------------------------------------------------------------------------------

# Git history and branches (1/3)

<img src="images/collaborative/branching3.png" class="nb" style="float:left;max-width:280px;margin:-10px 50px 0px 0px" />
<div>

**Directed acyclic graph**  
_Commits identified by hash_  
_Arrow to a previous state_

</div>

----------------------------------------------------------------------------------------------------

# Git history and branches (2/3)

<img src="images/collaborative/branching2.png" class="nb" style="float:left;max-width:280px;margin:-10px 50px 0px 0px" />
<div>

**Directed acyclic graph**  
_Commits identified by hash_  
_Arrow to a previous state_

**Commits, branches, head**  
_Branch is a pointer to commit_  
_Current branch identified as HEAD_  

</div>

----------------------------------------------------------------------------------------------------

# Git history and branches (3/3)

<img src="images/collaborative/branching1.png" class="nb" style="float:left;max-width:280px;margin:-10px 50px 0px 0px" />
<div>

**Directed acyclic graph**  
_Commits identified by hash_  
_Arrow to a previous state_

**Commits, branches, head**  
_Branch is a pointer to commit_  
_Current branch identified as HEAD_  

**Merging changes from branches**  
_Commit with multiple parents_  
_Potential for conflicts_

</div>

----------------------------------------------------------------------------------------------------

# Working with branches (1/2)

**Create and switch head to a new branch**

    [lang=text]
    $ git branch testing
    $ git checkout testing
    Switched to branch 'testing'

### Make a change in a new branch

    [lang=text]
    $ git commit -am "Add experimental features"
    [testing 4aaea6a] Add experimental features
     1 file changed, 2 insertions(+), 1 deletion(-)

----------------------------------------------------------------------------------------------------

# Working with branches (2/2)

**List branches and switch to master**

    [lang=text]
    $ git branch -v
    * master  d70e7d9 Yadda
      testing 4aaea6a Adding testing

### Merge changes from another branch

    [lang=text]
    $ git checkout master
    $ git merge testing
    Updating d70e7d9..4aaea6a
    Fast-forward
     hello.txt | 3 ++-
     1 file changed, 2 insertions(+), 1 deletion(-)

----------------------------------------------------------------------------------------------------

- class: part

# **Demo:** Working with branches

----------------------------------------------------------------------------------------------------

# Git and its alternatives

### When is git a wrong tool and alternatives

_<i class="fa fa-wifi"></i> Uses distributed model with no central server_

_<i class="fa fa-window-restore"></i> There are user interface tools for using git_

_<i class="fa fa-magic"></i> Git is way more complex than it seems_

_<i class="fa fa-list"></i> Alternatives include Subversion, Mercurial, Perforce_

****************************************************************************************************
- class: part

# **Collaboration and GitHub**

----------------------------------------------------------------------------------------------------

# GitHub collaboration platform

<img src="images/collaborative/octojedi.png" class="nb" style="float:right;max-width:320px;margin-left:20px" />

**Other things a project needs**

 - _Tracking issues and feature requests_
 - _Hosting documentation and notes_
 - _Integration with test runners, etc._

<div class="fragment">

**Why open source uses GitHub**

 - _Convenient way of storing my projects_
 - _Active developer community_
 - _GitHub is (a bit) like your CV_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/project.png" class="nb" style="max-width:520px;float:left;margin:20px 50px 0px 0px" />

**GitHub projects**

_Git repository with history, branches etc._

_README and a few other special files_

_Additional features  
not based on Git_

----------------------------------------------------------------------------------------------------

# Additional GitHub features

### What exists in GitHub, but not in git

_<i class="fa fa-code-branch"></i>_ Fork _a project to create your clone in your profile_

_<i class="fa fa-forward"></i> Send_ pull requests _between multiple forks_

_<i class="fa fa-bug"></i> Track_ issues _and organise_ projects

_<i class="fa fa-font"></i> Use_ wiki _for keeping notes and documentation_

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/remote.png" style="max-width:520px;float:left;margin:30px 40px 150px 0px" />

**Working with remote repositories**  
_Same thing as your  
local repository!_

<div class="fragment" style="padding-top:10px">

Clone _to copy data_  
Pull _to fetch changes_    
Push _to update remote_

</div>

----------------------------------------------------------------------------------------------------

# Working with remote repositories (1/3)

**Clone a remote repository from GitHub**

    [lang=text]
    $ git clone https://github.com/tpetricek/test.git
    Cloning into 'test'...
    remote: Enumerating objects: 3, done.
    remote: Counting objects: 100% (3/3), done.
    remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
    Unpacking objects: 100% (3/3), done.

### Go to the new folder and edit the code

    [lang=text]
    $ cd test/

----------------------------------------------------------------------------------------------------

# Working with remote repositories (2/3)

**Modify repository locally offline**

    [lang=text]
    $ git commit -am "Modifying readme for test project"
    [master 59bb116] Modifying readme for test project
    1 file changed, 1 insertion(+), 1 deletion(-)

**Push local changes to remote repository**

    [lang=text]
    $ git push origin master
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Writing objects: 100% (3/3), 271 bytes | 271.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0)
    To https://github.com/tpetricek/test.git
       59ea774..59bb116  master -> master

----------------------------------------------------------------------------------------------------

# Working with remote repositories (3/3)

**Retrieve changes done by others**

    [lang=text]
    $ git pull origin master
    remote: Enumerating objects: 5, done.
    remote: Counting objects: 100% (5/5), done.
    remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
    Unpacking objects: 100% (3/3), done.
    From https://github.com/tpetricek/test
     * branch            master     -> FETCH_HEAD
       59bb116..1fd8ceb  master     -> origin/master
    Updating 59bb116..1fd8ceb
    Fast-forward
     README.md | 2 +-
     1 file changed, 1 insertion(+), 1 deletion(-)

----------------------------------------------------------------------------------------------------

- class: part

# **Demo:** GitHub projects, git push an pull

----------------------------------------------------------------------------------------------------

<img src="images/collaborative/pr.png" class="nb" style="max-width:500px;float:left;margin:30px 40px 100px 0px" />

**GitHub pull requests**
_Sending contributions  
back to project owner_

<div class="fragment" style="padding-top:10px">

_Owner has write rights,_  
_way to discuss changes_

_Linux uses patches and emails, not PRs!_

</div>

----------------------------------------------------------------------------------------------------

# Contributing to a project

### Typical workflow when contributing on GitHub

❶ Fork project (GitHub) _- Online copy in your profile_

❷ Clone repository (git) _- From GitHub to your computer_

❸ Commit changes (git) _- All in your local repository_

❹ Push changes (git) _- From your computer to GitHub_

❺ Send a pull request (GitHub) _- Online to the owner_

****************************************************************************************************
- class: part

# **Summary**

----------------------------------------------------------------------------------------------------

# Tools for collaborative development

**Software engineering today**  
From _"we know where we want to get"_  
To _"know we continue moving in the right direction"_

**Using git for version and history tracking**  
_Working dir, staging area, local and remote repositories_  
_Creating, commits, working with branches, merging_

**Collaborative development using GitHub**  
_Forks, pull requests, issues, etc._  
_Typical open source contribution workflow_

----------------------------------------------------------------------------------------------------

# CO886: Tools for collaborative development

**What you should remember from this lecture**

 - How git stores versions and branches
 - Git commit, branch, checkout, pull, push
 - GitHub forks, pull requests, etc.

<br />
<br />

Tomas Petricek<br />
_[t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk) | [@tomaspetricek](http://twitter.com/tomaspetricek)_
