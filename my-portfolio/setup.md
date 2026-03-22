# vite 
- npm create vite@latest my-portfolio
- option will be shown select a framework, choose react
- select a variant, choose typescript
- select start with npm
- cd my-portfolio
- npm install react-router-dom
- connect to github
- git init
-  git branch -M master
- git remote add origin git@github.com:SushamaNaskar/my-portfolio.git
- git push -u origin master
- update vite.config.ts if needed: add server port

export default defineConfig({
    plugins: [react()],
    server:{
        port:3000
    }
})

- update tsconfig.json if needed
