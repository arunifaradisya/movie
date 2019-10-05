# Filmkoo. (movie)

Filmkoo. is a simple mobile app to let users collect movies that they have watched before. It is like to-do-list but only for movies.

## Prerequisites

Before running the mobile app, make sure to have the following package installed:
- expo


### Installing Expo

```
$ npm install expo-cli --global
```
If it is not working add 'sudo' before npm

```
$ sudo npm install expo-cli --global
$ expo init my-new-project
```
Enter the first 'blank' then change the name into a project name, then

```
$ cd my-new-project 
$ expo start
```
QR code will show after.

### Commit to Git

```
$ cd desktop
```
Get a new folder, in this case my new folder is movie

```
$ expo init movie
$ git commit -A
$ git commit -m “initial commit”
```
“initial commit” is the message that shows every 	time I updated in GitHub

```
$ expo init movie
$ git commit -A
$ git commit -m “initial commit”
$ git status
$ git log
```

If you see the message, in this case “initial commit” with author and date it means you already have it.


## Finalizing

After I made the app through Visual Code, here is the steps to complete and commit it into Github

- Open GitHub.com
- Create new repository and name with with the same name as the previous folder
- Go back to the terminal

```
$ git remote add origin git@github.com:arunifaradisya/movie.git
$ git push -u origin master
```

- Enter passphrase
- The files will updated in the GitHub


## Built With

* [Visual Studo Code](https://code.visualstudio.com/)
