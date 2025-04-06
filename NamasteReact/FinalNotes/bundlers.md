# Bundlers
- A bundler is a tool that bundles our app (meaning it combines all the different parts of a web application, like JavaScript, CSS, HTML, and images and processes them into a few optimized files), packages our app (it manage and optimize the application's dependencies), so that it can be shipped to production.

# Key feature of a bundler
1. Zero Config: Minimal steps needed to get started, often just installation.
2. Dev and production build
3. Compatible with older browser versions
4. Minification and Compression: Reduces the size of files by removing unnecessary characters and compressing them.
5. Tree Shaking: tree shaking is a dead code elimination technique that is applied when optimizing code.
6. Dependency Management: Resolves and includes dependencies in the final bundle.
7. Image Optimization
8. Code Splitting: Divides code into smaller chunks that can be loaded on demand.
9. Hot Module Replacement: 
   - It means that parcel will keep a track of all the files which you are updating.
   - There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.

# browserlists
Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.

In package.json file do:
"browserslist:["last two versions]

# dist folder
when we run parcel, it generates a dev/prod build of your application and puts it in dist folder.