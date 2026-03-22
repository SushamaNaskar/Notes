# files
- In TypeScript, "files": [] disables direct file inclusion
- "files": [] means “I don’t handle files”, and "references" means “delegate work to other tsconfig files”.

# references
- "references" is used to link multiple tsconfig projects together.

"references": [
  { "path": "./tsconfig.app.json" },
  { "path": "./tsconfig.node.json" }
]

“Hey TypeScript, go use these configs instead”

# files + references
- "files": [] means “I don’t handle files”, and "references" means “delegate work to other tsconfig files”.