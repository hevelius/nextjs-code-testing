This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Useful notes
============

Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

Next.js automatically prefetches the code for the linked page in the background.

Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes.

CSS Modules are extracted from the JavaScript bundles at build time and generate .css files that are loaded automatically by Next.js.

Next.js pre-renders every page. 

If your app is a plain React.js app (without Next.js), there’s no pre-rendering, so you won’t be able to see the app if you disable JavaScript.

Development vs. Production
* In development (npm run dev or yarn dev), getStaticProps runs on every request.
* In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths

Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.

Development v.s. Production
* In development (npm run dev or yarn dev), getStaticPaths runs on every request.
* In production, getStaticPaths runs at build time.

Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In cases like this, you can try Server-side Rendering or skip pre-rendering. Let’s talk about these strategies before we move on to the next lesson.

If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering):
* Statically generate (pre-render) parts of the page that do not require external data.
* When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.	

The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.

API Routes let you create an API endpoint inside a Next.js app. You can do so by creating a function inside the pages/api directory

They can be deployed as Serverless Functions (also known as Lambdas).

Do Not Fetch an API Route from getStaticProps or getStaticPaths
You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
Here’s why: getStaticProps and getStaticPaths runs only on the server-side. It will never be run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.


