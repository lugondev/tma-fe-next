This file is written with the help Markdown [Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## Pre-requisites
1. [Json Server](https://www.npmjs.com/package/json-server)

> // Installation <br>
>  npm install -g json-server
>
> // Create Data File <br>
> // Create db.json file under json-server folder 
>
> // Run Server <br>
>  json-server --watch db.json --port 3004


## Project Setup
This is a [Next.js](https://nextjs.org/) TypeScript project bootstrapped with [`npx create-next-app --typescript`](https://nextjs.org/docs/getting-started).

## Configuring Redux using Redux Toolkit

1. Installation of Redux Toolkit ([Reference#1](https://redux-toolkit.js.org/tutorials/quick-start#install-redux-toolkit-and-react-redux), [Reference#2](https://react-redux.js.org/introduction/getting-started))
   
    `npm install --save react-redux @reduxjs/toolkit @types/react-redux`

2. Configure Store ([Reference#1](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store), )
3. Provide the Redux Store to React ([Reference#1](https://redux-toolkit.js.org/tutorials/quick-start#provide-the-redux-store-to-react))
4. Define Typed Hooks ([Reference#1](https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks))
5. Creating Slices
   
   Slices create Action Creators and Reducers from same file. Learn about Slices from [here](https://redux-toolkit.js.org/usage/usage-guide#creating-slices-of-state)

6. Use Typed Hooks in Components ([Reference](https://redux-toolkit.js.org/tutorials/typescript#use-typed-hooks-in-components))
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Create React App](https://create-react-app.dev/) - Set up a modern web app by running one command.
- [React Resources](https://reactresources.com/) - Found Different Resources under one place
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
