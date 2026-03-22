
# How large React applications are architected
- Large applications built with React are usually organized using two main architectural approaches:
1. Layered Architecture
2. Feature-Based Architecture

# Layered Architecture
- In layered architecture, code is organized by technical responsibility.
src
 ├ components
 ├ pages
 ├ services
 ├ hooks
 ├ store
 ├ utils
 └ types

 - Problems in large apps:

 When the project grows, features get spread across many folders. 
 Developers must jump across many folders.
 This becomes hard to maintain in large teams.

# Feature based folder structure
- In feature-based architecture, code is grouped by business feature instead of technical layer.

src
 ├ features
 │   ├ auth
 │   ├ dashboard
 │   └ users
 │
 ├ shared
 │   ├ components
 │   ├ hooks
 │   └ utils

 # Hybrid Architecture (Most Common in Industry)
- Most companies combine feature-based + layered structure.

src
 ├ app
 │   ├ App.tsx
 │   └ routes.tsx
 │
 ├ features
 │   ├ auth
 │   ├ dashboard
 │   └ users
 │
 ├ shared
 │   ├ components
 │   ├ hooks
 │   └ utils
 │
 ├ services
 └ config

 # Final Folder Structure (Professional Level)

 src
│
├── app                     # App-level setup (global)
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── layouts
│       └── MainLayout.tsx
│
├── features                # Feature-based architecture
│
│   ├── hero
│   │   ├── components
│   │   │   └── HeroSection.tsx
│   │   ├── hooks
│   │   ├── types
│   │   └── index.ts
│
│   ├── about
│   │   ├── components
│   │   │   └── AboutSection.tsx
│   │   └── index.ts
│
│   ├── skills
│   │   ├── components
│   │   │   └── SkillsSection.tsx
│   │   └── data
│   │       └── skills.ts
│
│   ├── projects
│   │   ├── components
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectList.tsx
│   │   ├── pages
│   │   │   └── ProjectDetailsPage.tsx
│   │   ├── data
│   │   │   └── projects.ts
│   │   ├── types
│   │   │   └── project.types.ts
│   │   ├── routes.ts
│   │   └── index.ts
│
│   ├── contact
│   │   ├── components
│   │   │   └── ContactForm.tsx
│   │   ├── hooks
│   │   │   └── useContactForm.ts
│   │   └── index.ts
│
│   └── navigation
│       ├── components
│       │   └── Navbar.tsx
│       └── index.ts
│
├── shared                 # Reusable across features
│   ├── components
│   │   ├── Button
│   │   ├── Card
│   │   └── Container
│   │
│   ├── hooks
│   │   └── useScroll.ts
│   │
│   ├── utils
│   │   └── cn.ts
│   │
│   └── constants
│       └── routes.ts
│
├── assets
│   ├── images
│   └── icons
│
├── styles
│   ├── global.css
│   └── variables.css
│
├── config
│   └── env.ts
│
├── types
│   └── global.d.ts
│
└── main.tsx