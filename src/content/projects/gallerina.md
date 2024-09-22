---
title: "Gallerina - a gallery app"
description: "A simple gallery app built with Nextjs, NextUI and Supabase."
heroImage: /blog-placeholder-1.jpg
githubRepoLink: https://github.com/Abdelghafour122/gallery-app
link: https://gallery-app-nine-rouge.vercel.app
---

I chose building this to learn more about Nextjs, I was bored of making CSA with React and consuming APIs, so I decided to make a simple gallery app with Next and a BaaS (Supabase) to explore more web dev concepts and get into fullstack development.

## Features: (some already built, some planned)

- Authenication with email and password, Google OAuth
- Editing profile information
- Creating, editing and deleting posts, with one or multiple images and a description
- Saving, liking and reposting posts
- Writing comments on posts, reacting to comments, and writing replies to comments
- Searching for users by name

## Usage:

1. Clone the repo
2. Install dependencies, run `npm install` if you're using npm
3. Initialize a supabase project
4. Make an `.env.local` file in the root directory of your project and paste this, with your own values:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

5.  Run `npm run dev` to start the dev server

## What I learned building this project:

- Nextjs app router and it's features (dynamic routes, parallel routes, catch all segments, etc.)
- How Nextjs caching works
- Route handlers, server actions and react server components
- What middleware is and how to use it
- The differences between CSR and SSR and when to use each
- React Query, Zod and React Hook Form tools
- How to implement infinite queries with react query
- How to implement authentication, and managing data with Supabase
