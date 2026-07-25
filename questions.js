const quizData=[
//git Basic
{
id:1,
category:"Git Basics",
difficulty:"Beginner",
question:"What is Git?",
options:["A programming language","A version control system","A database","An IDE"],
answer:1,
explanation:"Git is a distributed version control system."
},
{
id:2,
category:"Git Basics",
difficulty:"Beginner",
question:"Who created Git?",
options:["Linus Torvalds","Guido van Rossum","James Gosling","Dennis Ritchie"],
answer:0,
explanation:"Git was created by Linus Torvalds in 2005."
},
{
id:3,
category:"Git Basics",
difficulty:"Beginner",
question:"Which company hosts GitHub?",
options:["Microsoft","Google","Apple","Amazon"],
answer:0,
explanation:"GitHub is owned by Microsoft."
},
{
id:4,
category:"Git Basics",
difficulty:"Beginner",
question:"Git mainly helps developers to?",
options:["Write code","Track code changes","Compile programs","Run applications"],
answer:1,
explanation:"Git tracks changes in files over time."
},
{
id:5,
category:"Git Basics",
difficulty:"Beginner",
question:"Git stores projects inside a?",
options:["Repository","Folder","Database","Server"],
answer:0,
explanation:"Projects are stored inside repositories."
},
{
id:6,
category:"Git Basics",
difficulty:"Beginner",
question:"Git is primarily used for?",
options:["Photo editing","Version control","Game development","Video editing"],
answer:1,
explanation:"Git manages versions of files."
},
{
id:7,
category:"Git Basics",
difficulty:"Beginner",
question:"Git can work?",
options:["Only online","Only offline","Both online and offline","Only on Linux"],
answer:2,
explanation:"Git works locally and with remote repositories."
},
{
id:8,
category:"Git Basics",
difficulty:"Beginner",
question:"A Git repository contains?",
options:["Only source code","Project history","Only images","Only commits"],
answer:1,
explanation:"A repository stores files and their complete history."
},
{
id:9,
category:"Git Basics",
difficulty:"Beginner",
question:"Git is an example of?",
options:["Operating System","Version Control System","Compiler","Framework"],
answer:1,
explanation:"Git is a distributed version control system."
},
{
id:10,
category:"Git Basics",
difficulty:"Beginner",
question:"Git is mostly used by?",
options:["Doctors","Developers","Teachers","Designers only"],
answer:1,
explanation:"Developers use Git for version control."
},
{
id:11,
category:"Git Basics",
difficulty:"Intermediate",
question:"Git keeps track of?",
options:["File versions","Internet history","Passwords","Emails"],
answer:0,
explanation:"Git records every version of tracked files."
},
{
id:12,
category:"Git Basics",
difficulty:"Intermediate",
question:"Which file stores Git history?",
options:["README.md",".git folder","LICENSE","index.html"],
answer:1,
explanation:"The .git directory stores repository metadata."
},
{
id:13,
category:"Git Basics",
difficulty:"Intermediate",
question:"Git is best described as?",
options:["Centralized VCS","Distributed VCS","Cloud Storage","Text Editor"],
answer:1,
explanation:"Git is a distributed version control system."
},
{
id:14,
category:"Git Basics",
difficulty:"Intermediate",
question:"Which folder identifies a Git repository?",
options:["src",".git","bin","assets"],
answer:1,
explanation:"The hidden .git folder identifies a Git repository."
},
{
id:15,
category:"Git Basics",
difficulty:"Intermediate",
question:"Git repositories can be?",
options:["Only local","Only remote","Both local and remote","Neither"],
answer:2,
explanation:"Repositories can exist locally and remotely."
},
{
id:16,
category:"Git Basics",
difficulty:"Intermediate",
question:"GitHub is?",
options:["A text editor","A Git hosting platform","A compiler","A browser"],
answer:1,
explanation:"GitHub hosts Git repositories online."
},
{
id:17,
category:"Git Basics",
difficulty:"Intermediate",
question:"Which command checks the Git version?",
options:["git status","git version","git --version","git info"],
answer:2,
explanation:"git --version displays the installed Git version."
},
{
id:18,
category:"Git Basics",
difficulty:"Advanced",
question:"Git stores commits as?",
options:["Snapshots","Images","Databases","Archives"],
answer:0,
explanation:"Each commit is stored as a snapshot of the project."
},
{
id:19,
category:"Git Basics",
difficulty:"Advanced",
question:"Git uses which hashing algorithm for object IDs (traditionally)?",
options:["SHA-1","MD5","SHA-256","AES"],
answer:0,
explanation:"Git traditionally uses SHA-1 hashes for object IDs."
},
{
id:20,
category:"Git Basics",
difficulty:"Advanced",
question:"Git is optimized for?",
options:["Large binary files","Tracking text changes","Streaming videos","Database storage"],
answer:1,
explanation:"Git is especially efficient at tracking changes in text files."
},


// Git Commands
{
id:21,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command initializes a new Git repository?",
options:["git start","git init","git create","git new"],
answer:1,
explanation:"git init creates a new Git repository."
},
{
id:22,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command shows the current repository status?",
options:["git info","git status","git show","git check"],
answer:1,
explanation:"git status displays the state of your working directory."
},
{
id:23,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command stages all changes?",
options:["git commit","git add .","git stage","git push"],
answer:1,
explanation:"git add . stages all files in the current directory."
},
{
id:24,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command creates a commit?",
options:["git save","git commit","git push","git record"],
answer:1,
explanation:"git commit saves staged changes."
},
{
id:25,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command uploads commits to GitHub?",
options:["git upload","git push","git publish","git send"],
answer:1,
explanation:"git push sends commits to a remote repository."
},
{
id:26,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command downloads a repository?",
options:["git fetch","git clone","git copy","git install"],
answer:1,
explanation:"git clone copies a remote repository."
},
{
id:27,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command downloads new changes without merging?",
options:["git pull","git fetch","git merge","git sync"],
answer:1,
explanation:"git fetch downloads changes only."
},
{
id:28,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command downloads and merges changes?",
options:["git clone","git pull","git merge","git checkout"],
answer:1,
explanation:"git pull performs fetch and merge."
},
{
id:29,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command shows commit history?",
options:["git history","git commits","git log","git showlog"],
answer:2,
explanation:"git log displays commit history."
},
{
id:30,
category:"Git Commands",
difficulty:"Beginner",
question:"Which command removes a tracked file?",
options:["git delete","git remove","git rm","git clean"],
answer:2,
explanation:"git rm removes a tracked file."
},
{
id:31,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command renames the current branch?",
options:["git rename","git branch -m","git mv branch","git checkout -m"],
answer:1,
explanation:"git branch -m renames a branch."
},
{
id:32,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command restores a modified file?",
options:["git restore","git reset","git clean","git update"],
answer:0,
explanation:"git restore restores file contents."
},
{
id:33,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command creates a new branch?",
options:["git branch","git new","git checkout","git fork"],
answer:0,
explanation:"git branch creates a new branch."
},
{
id:34,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command switches branches?",
options:["git switch","git jump","git branch","git move"],
answer:0,
explanation:"git switch changes branches."
},
{
id:35,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command merges another branch?",
options:["git join","git combine","git merge","git attach"],
answer:2,
explanation:"git merge combines branch histories."
},
{
id:36,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command displays configured remotes?",
options:["git remote -v","git show","git config","git remotes"],
answer:0,
explanation:"git remote -v lists remote repositories."
},
{
id:37,
category:"Git Commands",
difficulty:"Intermediate",
question:"Which command temporarily saves uncommitted changes?",
options:["git temp","git save","git stash","git hold"],
answer:2,
explanation:"git stash stores uncommitted changes temporarily."
},
{
id:38,
category:"Git Commands",
difficulty:"Advanced",
question:"Which command reapplies stashed changes?",
options:["git stash apply","git restore","git pull","git merge"],
answer:0,
explanation:"git stash apply restores stashed changes."
},
{
id:39,
category:"Git Commands",
difficulty:"Advanced",
question:"Which command shows differences between files?",
options:["git diff","git compare","git changes","git inspect"],
answer:0,
explanation:"git diff displays file differences."
},
{
id:40,
category:"Git Commands",
difficulty:"Advanced",
question:"Which command displays Git configuration?",
options:["git config","git settings","git info","git options"],
answer:0,
explanation:"git config manages Git configuration."
},


//Branching
{
id:41,
category:"Branching",
difficulty:"Beginner",
question:"Which command creates a new branch?",
options:["git branch","git checkout","git merge","git clone"],
answer:0,
explanation:"git branch creates a new branch."
},
{
id:42,
category:"Branching",
difficulty:"Beginner",
question:"Which command switches to another branch?",
options:["git move","git switch","git push","git fetch"],
answer:1,
explanation:"git switch changes the current branch."
},
{
id:43,
category:"Branching",
difficulty:"Beginner",
question:"Which branch is commonly the default branch?",
options:["master","main","develop","origin"],
answer:1,
explanation:"Most new repositories use 'main' as the default branch."
},
{
id:44,
category:"Branching",
difficulty:"Beginner",
question:"Why are branches useful?",
options:["To delete files","To work independently","To upload code","To rename repositories"],
answer:1,
explanation:"Branches let developers work on features without affecting the main branch."
},
{
id:45,
category:"Branching",
difficulty:"Beginner",
question:"Which command lists all local branches?",
options:["git branch","git list","git branches","git status"],
answer:0,
explanation:"git branch lists local branches."
},
{
id:46,
category:"Branching",
difficulty:"Beginner",
question:"Which symbol marks the current branch in 'git branch' output?",
options:["#","*","@","+"],
answer:1,
explanation:"The current branch is indicated with an asterisk (*)."
},
{
id:47,
category:"Branching",
difficulty:"Beginner",
question:"A branch is mainly used to?",
options:["Store images","Develop features","Delete history","Compress files"],
answer:1,
explanation:"Branches allow feature development in isolation."
},
{
id:48,
category:"Branching",
difficulty:"Beginner",
question:"Can multiple branches exist in one repository?",
options:["Yes","No","Only two","Only one"],
answer:0,
explanation:"A Git repository can contain many branches."
},
{
id:49,
category:"Branching",
difficulty:"Beginner",
question:"Which command creates and switches to a new branch?",
options:["git checkout -b","git switch","git merge","git fetch"],
answer:0,
explanation:"git checkout -b creates and switches to a new branch."
},
{
id:50,
category:"Branching",
difficulty:"Beginner",
question:"Which command switches using the newer syntax?",
options:["git switch","git branch","git merge","git add"],
answer:0,
explanation:"git switch is the recommended modern command."
},
{
id:51,
category:"Branching",
difficulty:"Intermediate",
question:"Which command merges a feature branch into the current branch?",
options:["git merge","git join","git connect","git push"],
answer:0,
explanation:"git merge combines another branch into the current branch."
},
{
id:52,
category:"Branching",
difficulty:"Intermediate",
question:"A merge conflict occurs when?",
options:["Files are deleted","Git cannot automatically combine changes","Internet disconnects","A branch is renamed"],
answer:1,
explanation:"Merge conflicts happen when Git can't automatically reconcile changes."
},
{
id:53,
category:"Branching",
difficulty:"Intermediate",
question:"Which command deletes a local branch?",
options:["git delete","git branch -d","git rm","git clean"],
answer:1,
explanation:"git branch -d deletes a local branch."
},
{
id:54,
category:"Branching",
difficulty:"Intermediate",
question:"Which command force deletes a branch?",
options:["git branch -D","git branch -d","git remove","git delete"],
answer:0,
explanation:"git branch -D force deletes a branch."
},
{
id:55,
category:"Branching",
difficulty:"Intermediate",
question:"Which command shows all branches including remote ones?",
options:["git branch -a","git remote","git show","git status"],
answer:0,
explanation:"git branch -a lists local and remote branches."
},
{
id:56,
category:"Branching",
difficulty:"Intermediate",
question:"What should you do before merging a branch?",
options:["Delete it","Commit your work","Format your PC","Remove Git"],
answer:1,
explanation:"Commit or stash your changes before merging."
},
{
id:57,
category:"Branching",
difficulty:"Advanced",
question:"Which strategy rewrites commit history?",
options:["Merge","Rebase","Clone","Fetch"],
answer:1,
explanation:"git rebase rewrites commit history."
},
{
id:58,
category:"Branching",
difficulty:"Advanced",
question:"Which command rebases the current branch onto main?",
options:["git rebase main","git merge main","git push main","git branch main"],
answer:0,
explanation:"git rebase main reapplies commits on top of main."
},
{
id:59,
category:"Branching",
difficulty:"Advanced",
question:"Which command aborts an ongoing merge?",
options:["git merge --abort","git stop","git cancel","git reset merge"],
answer:0,
explanation:"git merge --abort cancels an unfinished merge."
},
{
id:60,
category:"Branching",
difficulty:"Advanced",
question:"Rebasing creates?",
options:["A new repository","A linear commit history","A backup","A remote branch"],
answer:1,
explanation:"Rebasing creates a cleaner, linear project history."
},


//github
{
id:61,
category:"GitHub",
difficulty:"Beginner",
question:"What is GitHub?",
options:["A programming language","A Git hosting platform","A database","A text editor"],
answer:1,
explanation:"GitHub is a cloud platform for hosting Git repositories."
},
{
id:62,
category:"GitHub",
difficulty:"Beginner",
question:"Which button creates a copy of someone else's repository in your account?",
options:["Clone","Fork","Merge","Pull"],
answer:1,
explanation:"Fork creates your own copy of another repository."
},
{
id:63,
category:"GitHub",
difficulty:"Beginner",
question:"What is a repository on GitHub?",
options:["A folder for photos","A project storage location","A programming language","A compiler"],
answer:1,
explanation:"A repository stores your project files and Git history."
},
{
id:64,
category:"GitHub",
difficulty:"Beginner",
question:"Which file usually describes a project?",
options:["README.md","LICENSE","package.json","index.html"],
answer:0,
explanation:"README.md explains the project and how to use it."
},
{
id:65,
category:"GitHub",
difficulty:"Beginner",
question:"Which tab shows all project files?",
options:["Issues","Code","Actions","Projects"],
answer:1,
explanation:"The Code tab displays the repository contents."
},
{
id:66,
category:"GitHub",
difficulty:"Beginner",
question:"Which feature is used to report bugs?",
options:["Actions","Issues","Wiki","Fork"],
answer:1,
explanation:"Issues are used to report bugs and request features."
},
{
id:67,
category:"GitHub",
difficulty:"Beginner",
question:"Which feature lets others contribute changes?",
options:["Clone","Pull Request","Release","Package"],
answer:1,
explanation:"A Pull Request proposes changes for review."
},
{
id:68,
category:"GitHub",
difficulty:"Beginner",
question:"GitHub repositories can be?",
options:["Only public","Only private","Both public and private","Neither"],
answer:2,
explanation:"GitHub supports both public and private repositories."
},
{
id:69,
category:"GitHub",
difficulty:"Beginner",
question:"Which button downloads a repository to your computer?",
options:["Fork","Clone","Issue","Star"],
answer:1,
explanation:"Clone downloads a repository locally."
},
{
id:70,
category:"GitHub",
difficulty:"Beginner",
question:"What does the Star button do?",
options:["Deletes repository","Bookmarks a repository","Forks a repository","Creates an issue"],
answer:1,
explanation:"Starring helps you bookmark repositories you like."
},
{
id:71,
category:"GitHub",
difficulty:"Intermediate",
question:"A Pull Request is used to?",
options:["Delete branches","Propose changes for review","Create repositories","Rename commits"],
answer:1,
explanation:"Pull Requests allow code review before merging."
},
{
id:72,
category:"GitHub",
difficulty:"Intermediate",
question:"Who can review a Pull Request?",
options:["Only the owner","Collaborators","Anyone without access","Only GitHub staff"],
answer:1,
explanation:"Collaborators or reviewers can review Pull Requests."
},
{
id:73,
category:"GitHub",
difficulty:"Intermediate",
question:"Which feature automates workflows on GitHub?",
options:["GitHub Pages","GitHub Actions","Projects","Codespaces"],
answer:1,
explanation:"GitHub Actions automates testing, deployment, and more."
},
{
id:74,
category:"GitHub",
difficulty:"Intermediate",
question:"GitHub Pages is mainly used to?",
options:["Host websites","Store videos","Compile code","Manage databases"],
answer:0,
explanation:"GitHub Pages hosts static websites directly from repositories."
},
{
id:75,
category:"GitHub",
difficulty:"Intermediate",
question:"What is a collaborator?",
options:["A branch","A person with repository access","A commit","A tag"],
answer:1,
explanation:"Collaborators are users granted access to a repository."
},
{
id:76,
category:"GitHub",
difficulty:"Intermediate",
question:"Which feature organizes tasks using boards?",
options:["Projects","Packages","Actions","Security"],
answer:0,
explanation:"GitHub Projects helps organize and track work."
},
{
id:77,
category:"GitHub",
difficulty:"Advanced",
question:"Which file commonly defines GitHub Actions workflows?",
options:["workflow.yml",".github/workflows/*.yml","action.json","config.yml"],
answer:1,
explanation:"Workflow files are stored inside the .github/workflows directory."
},
{
id:78,
category:"GitHub",
difficulty:"Advanced",
question:"What is the default branch commonly called today?",
options:["master","main","origin","default"],
answer:1,
explanation:"Most repositories now use 'main' as the default branch."
},
{
id:79,
category:"GitHub",
difficulty:"Advanced",
question:"Which GitHub feature publishes packaged software?",
options:["Packages","Issues","Projects","Wiki"],
answer:0,
explanation:"GitHub Packages hosts and distributes software packages."
},
{
id:80,
category:"GitHub",
difficulty:"Advanced",
question:"Which GitHub feature hosts project documentation?",
options:["Wiki","Actions","Insights","Security"],
answer:0,
explanation:"The Wiki feature is designed for project documentation."
}
];