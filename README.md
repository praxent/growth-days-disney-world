World Information
=================

World Number:

Park:

Assignee:

Build & Run
===========

`npm install`

`npm run start`

Branch Hierarchy
================

```
main
|
|--- world1
|    |
|    |--- world1-animal-kingdom
|    |--- world1-blizzard-beach
|    |--- world1-epcot
|    |--- world1-magic-kingdom
|
|--- world2
|    |
|    |--- world2-animal-kingdom
|    |--- world2-blizzard-beach
|    |--- world2-epcot
|    |--- world2-magic-kingdom
|
|--- world3
|    |
|    |--- world3-animal-kingdom
|    |--- world3-blizzard-beach
|    |--- world3-epcot
|    |--- world3-magic-kingdom
|
|--- world4
     |
     |--- world4-animal-kingdom
     |--- world4-blizzard-beach
     |--- world4-epcot
     |--- world4-magic-kingdom
```

Signup Procedure
================
Each person is assigned to a world and a park in the repo. Please go to your respective branch and update the README.md with your name:

Example
-------
Bob is World 1 Animal Kingdom, so he would

`git clone <repo_url>`

`git checkout world1-animal-kingdom`

change the README to
```
World Information
=================

World Number: 1

Park: Magic Kingdom

Assignee: Bob
```

Then,

`git add .`

`git commit -m "Added Bob"`

`git push origin HEAD`