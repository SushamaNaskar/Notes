{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2023",
    "useDefineForClassFields": true,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
     "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}

#  "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
- TypeScript stores cache here

# "target": "ES2023"
- Output modern JavaScript
- Modern JavaScript = newer features added to the language over time
- It tells TypeScript: “Generate JavaScript using features available up to ES2023”
- These are what "ES2023" allows you to use:

ES6 (very important)
let, const
Arrow functions () => {}
Template strings `Hello ${name}`
Modules (import/export)

ES7–ES2020
async/await
Optional chaining: user?.name
Nullish coalescing: value ?? "default"
Logical assignment:a ||= b
Array.prototype.at():arr.at(-1)

# "useDefineForClassFields": true
- Use the official modern JavaScript behavior for class properties”
- "useDefineForClassFields": true ensures that class fields follow the official JavaScript specification using Object.defineProperty instead of simple assignment, making behavior consistent with modern JavaScript.

# "lib": ["ES2023", "DOM", "DOM.Iterable"]
👉 Gives you types for:
ES2023 features
Browser APIs (window, document)
Iterables (like for...of on DOM)

✅ One Simple Example (all 3 together)

```
const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.textContent = "Click me";
}

const last = [1, 2, 3].at(-1);
```

🔹 "DOM"
document.querySelectorAll("button")
👉Works because document comes from DOM types

🔹 "DOM.Iterable"
for (const btn of buttons)
👉 Allows for...of on NodeList (buttons)

🔹 "ES2023"
[1, 2, 3].at(-1)
👉 .at() is a modern JS feature

# "module": "ESNext"
- Use modern ES modules (import/export)

# "types": ["vite/client"]
-  Adds types for Vite
- So things like import.meta.env work

# "skipLibCheck": true,
- Ignores errors inside node_modules

# "moduleResolution": "bundler"
- “How should I find and resolve imported files?”

⚙️ "moduleResolution": "node"
- Follows Node.js resolution rules
- Looks for:
node_modules
package.json → main / types
file extensions like .js, .ts, .json

✅ Behavior:

```
import x from "lodash";
```

➡️ TypeScript searches: node_modules/lodash/package.json

⚡ "moduleResolution": "bundler"
🧠 How it works:
Mimics how bundlers resolve modules
Trusts the bundler to handle complex resolution

✅ Behavior:
```
import Button from "@/components/Button";
```
➡️ Works (even if TS doesn't fully understand path physically)

🔥 Key Features:
Supports:
Path aliases (@/components)
Extension-less imports
Modern ESM packages
Doesn’t complain about things bundlers can resolve

# "allowImportingTsExtensions": true
- Allows: 
import x from "./file.ts"  
.ts is allowed

# "verbatimModuleSyntax": true
👉 Keeps your imports exactly as written
👉 Doesn’t auto-modify them

# "moduleDetection": "force"
👉 Treat every file as a module
👉 Avoids weird global script behavior

# "noEmit": true
👉 TypeScript will NOT generate JS
👉 Because Vite handles build

# "jsx": "react-jsx"
👉 Enables modern React JSX transform
👉 No need to import React manually

 ```
  import React from "react"
  ```
  is not needed

# "strict": true
👉 Enables all strict checks
👉 Prevents bugs

# "noUnusedLocals": true
- 👉 Warn if variable not used

# "noUnusedParameters": true
👉 Warn if function param not used


# "erasableSyntaxOnly": true,
- “Only allow TypeScript features that can be completely removed without changing how the code runs.”
- “Don’t write TypeScript that changes runtime behavior — let bundler handle everything”

🔑 Core Idea

TypeScript has 2 kinds of things:

✅ 1. Erasable (safe)
Types
Interfaces
Type annotations

👉 These are removed when code runs

# "noFallthroughCasesInSwitch": true
- 👉 Prevents missing break in switch

# "noUncheckedSideEffectImports": true
- 👉 Warns about imports that might cause side effects

# "baseUrl": "." + "paths": { "@/*": ["src/*"]}
- Now you can do:

```
import x from "@/features/home/routes"
```

instead of 
```
import x from "../../features/home/routes"
```

# "include": ["src"]
- TypeScript only checks files inside src

