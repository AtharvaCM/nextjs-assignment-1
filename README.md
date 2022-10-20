# NextJS Assignment 1

## Description

Show the vehicle make and model for make using API.

### Requirements

- We should see makes dropdown populated with makes from Makes API.
- After selecting make and hitting “Fetch Models” button show list of models for selected make in cards.

### Notes

- Create custom hook to call API.
- Create lightweight functional components.
- Any library can be used for API calls e.g. fetch, Axios etc.
- Show loading indicator when API is called till models are rendered on screen.
- UI should be responsive. (Mobile, Desktop )
- Create separate repo for assignment.
- Commit each small change with proper commit message.

### APIs

- **Makes** : This will give you list of makes ( Car Manufacturers )  
Endpoint : [getAllMakes](https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json)
- **Models for Make** :  
This will give you list of models for particular make. We need to pass make name we got from makes API instead of `make-name`  
Endpoint : [getModelsForMake](https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/bmw?format=json)

> All API’s are publicly available and free. You can also refer other examples on [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/)

### Reference Material

- Hooks : [YT Video](https://www.youtube.com/watch?v=TNhaISOUy6Q)
- Git Commits : [Medium Article](https://medium.com/@nawarpianist/git-commit-best-practices-dab8d722de99)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
