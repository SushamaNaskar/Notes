# Node.js
- is an open source and cross-platform javascript runtime enviorment. 
- Node.js runs the v8 Javascript engine, the core of google chrome, outside the browser. 

when we install Node.js
- we have access to the node executable program in the command line. (node file.js will execute the js file)
- npm (package manager) to install, update and delete packages.
- npx (package runner tool) to run/execute packages.

# node
Node refers to the Node.js runtime enviorment that executes jsvasctipt code on the server-side. 

# npm
- npm is the default package manager for Node.js.
- npm manages the libraries and tools that Node.js application depends on.
- Together, Node.js and npm provide a powerful environment for developing and managing server-side applications with JavaScript.

# Package Manager:
- Package managers helps to manage ( This includes installing, updating, and removing packages) and share reusable code packages.

# packages
Packages are collections of code and resources bundled together to perform specific tasks or add functionality to an application. They are designed to be reusable, shareable, and easily integrated into other projects.

# How to config npm into our project?
- run npm init: it create a package.json file

# package.json:
- Package.json file is a configuration for NPM. 
- When we run npm init, it creates a package.json file.
- When we install a package using npm install <packageName> Once package installation is completed, their versions and configuration related information is stored as dependencies inside package.json file. 

# package-lock.json:
-  When we install a package using npm install for the first time, it create a package-lock.josn file.
- It records the exact version of each dependency installed in node_modules at the time of installation.

# Why should I not modify `package-lock.json`?
That’s being handled automatically by NPM. It reflects changes made to package.json to package-lock.json and keeps it up to date.

However, this only happens if you use NPMs’ CLI to make changes. If you manually change package.json, don’t expect package-lock.json to update.


# Dependencies
 dev dependencies - required for development only
 normal dependencies - required for both development and prod

 ex: We add react as dependency, since it's need both for development and prod. But we need parcel for development only, we can do production build and push the application to prod.

# Transitive Dependencies :
Transitive dependencies refer to the indirect dependencies that a project requires through its direct dependencies. In other words, if your project depends on Library A, and Library A depends on Library B, then Library B is a transitive dependency.

 - We have our package manager which takes care of our transitive dependencies of our code.


# node_modules
- The node_modules directory is where all the installed dependencies (modules) for a Node.js project are stored.
- It is created when we run npm install to add a new dependency for the first time.

# version (~ - tilda and ^ - caret)
Tilde (~)
Only allows patch updates.
Useful for getting the latest bug fixes and security patches while maintaining stability.
ex: ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

Caret (^)
Allow both minor and patch updates.
Useful for staying up-to-date with new features and improvements, however, we have a risk of potentially breaking changes.
ex: ^1.2.3 will use releases from 1.2.3 to < 2.0.0

# npx
- npx is a package runner tool that comes with npm