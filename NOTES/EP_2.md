# Code  

# 1. How To Initialize NPM into Repo

```js
    npm init
```

# 2. How To Get Package.json into Repo

```js
    npm init
    "name": "parcel",
    "version": "1.0.0",
    "description": "React",
    "main": "index.js",
    "test": "jest" // Give Test Command as jest 
    "repository": "",
    "author": "Venkatesan",
    "license": "ISC",
```
```js
    Package.json // Will be created
```

```js
    Note : Package and dependencies are Same
```

# 3. What is Package.json

- It records important metadata about a project which is required before publishing to NPM
- Before Insalling your Package or Dependencies
- All Versions of your Package will be Recorded in Package.json

# 4. How to Install Any Package or Get Package-lock.json into Repo 

```js
    npm install parcel // will install parcel as Normal Dependencies
```
```js
    npm install -D parcel // will install parcel as Dev Dependencies
```

# How to Uninstall Packages?

```js
    npm uninstall package-name  // will uninstall Dependencies
```

# 5. What is Packlock.json 

- A lockfile that holds information on the dependencies or packages installed for a node. js project
- including their exact version numbers of Package

# 6. What is Different Between Dev Dependencies and Normal Dependencies

| Dev Dependenices | Normal Dependencies |
| :---------------------------------: | :-----------------------------------: |
| Development Mode | Production Mode | 
| devDependencies are modules which are only required during development | dependencies are modules which are also required at runtime [ Production ].
| | |

# 7. What is Different ^ and ~ in Version

| ^  | ~ |
| :---------------------------------: | :-----------------------------------: |
| - Tidle | - Caret  | 
| Automatically Upadate the package Version When there is Major Upadate | Automatically Upadate the package Version When there is Minior Upadate |
| | |

# 8. What is Node Module

- It's a Collection of Package or Dependency is Known as a Node Module

# 9. What is .gitignore 

- where we can Specifically tell files which we do not want to push into git hub Repository
- can be metioned in gitingore file 

```js
    /node_modules 
```

# 10. How to Execute a Package

```js
    npx Package_Name file_name
    
    npx parcel index.html
```

# 11. How inject React Using NPM 

```js  
    npx install react
    npm install react-dom 
    or // both are Same 
    npx i react
    npm i react-dom 
```
```js  
    Note CDN Link Bad Way to Inject React to App So it's Better use NPM instead of CDN Links
```

```js  
    import React from 'react;
    import ReactDOM from 'react-dom';
```
```js  
    Note : You are importing createRoot from "react-dom" which is not supported 
           You should instead import it from "react-dom/client".
```
```js  
    import React from 'react;
    import ReactDOM from 'react-dom/client';
```

# 12. What Type="Module" in Script Tag's 

- Browser: Script tag can not have Import and Export 
- Making the Script tag as a module So that we Can use Import and Export in JavaScript

# How to Do Production Build 

```js  
    npx parcel build index.html
```
```js  
   Note : We Need to Remove the main:App.js in Package.json , Entry Point of App
```

# 13. What is Parcel-Cache 

- Parcel-cache is Created and the File are FETCH from there

# 14. What is dist Folder 
  <!-- When you do Production Build -->
  dist folder is Created and the File are FETCH from there 

# 15. Advantages of Parcel 

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization


 
