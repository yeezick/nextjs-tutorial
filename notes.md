## Creating a next js-app
run "npx create-next-app" 
Next.JS development server has fast refresh enabled, meaning when you make changes and save them, next js will rerender your app for you, eliminating the need for a refresh. 


## Navigating between pages
Pages are associated with a route based on their file name. 
`pages/index.js` can be accesed at "/"
`pages/posts/first_post` can be accessed at "/posts/first_post"
Next.JS associates the URL paths and it's file paths automatically. 

### <Link> vs. <a>
When linking between pages on different sites, you utilize the 'a' tag. In Next.js, you relocate the "href" and assign it to the Link component (imported from "next/link"). 
This way, you can easily route the client to different parts of your Next.js app without forcing the browser to trigger a refresh (unlike the 'a' tag which would force the refresh). This is called "client-side navigation."

* If you need to add attributes, like className, they should be added to the "a" tag itself ad not the "Link"
### Code splitting and prefetching
Next.js code splits automatically; only what's necessary will load for each specific page. This helps to reduce load time while also isolating that page's function, meaning that if a page throws an error, the rest of the applicaiton will be unaffected

When Next.js identifies a "Link" component, it will start prefetching the code for the linked page in the background. By the time you click the link, the destination is already loadd and the transition will be almost instant!

## Assets, metadata, and CSS
### Images
Next.js has built-in support for CSS and Sass.
From the Next.js tutorial site itself, "Next.js can serve static assets, like images, under the top-level public directory. Files inside public can be referenced from the root of the application similar to pages.

The public directory is also useful for robots.txt, Google Site Verification, and any other static assets."

Next.js optimizes images for you using it's built-in "Image" component. images are optimized on-demand, as users request them, instead of at build time. 

Images are lazy loaded by default meaning your browser's speed won't be punished for images not in view. 

"Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking." (Next.js)

Image tags take the height and width as props. 

### Metadata
Next.js allows you to customize the meta data of any page in your app. By importing, "Head," from "next/head", you can add the Head component to any page you've created and customize the metadata for that specific page. 

### CSS
#### Component Styling
Next.js supports CSS, styled-jsx, styled-components, etc. 
The preferred method for styling your CSS is using CSS Modules. This is because css modules are individualized by default, meaning that your stylesheet will only style the page it was imported into and no other in any part of your app. 
You can utilize CSS modules by naming your stylesheets with this convention, `component.module.css` and then import it to your component with an assigned variable, like so: 
`import styles from './component.module.css`
and then refer to your class you want by accessing the styles object: `styles.container`

CSS modules automatically generates unique class names so another class in another module with the same name won't clash or conflict. Next.js also code splits the CSS files so that only what's necessary will load. 

#### Global Styling 
To load gloabl CSS files, the `pages` directory should have a filed named, `_app.js`, with the following, 
`export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}`
This component is the top-level component common on all pages. You can use this component to keep state when navigating between pages for example. however, when you add this file, you should also restart your server. 
The following is from the Next.js tutorial: 
"In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

You can place the global CSS file anywhere and use any name."

So once you've created a styles directory, just import it into the App component. The imported styles are not individualized to components and will apply to all elements across any component. 

The tutorial offers some styling tips here:
https://nextjs.org/learn/basics/assets-metadata-css/styling-tips

### Pre-rendering and data-fetching 
By default, Next.js pre-renders every page, meaning the HTML will be generated in advance. This is a crucial concept of Next.js because it improves performance as well as SEO. 

You can test this by disabling JS in your browser. If you try to load a plain React site, the site won't load and the browser will alert you that you should enable JS to render the site. 
In comparison, Next.js will pre-render all HTML with the minimal amount of JS necessary for that page. Once the browser fully lods the page, the JS will run and makethe page fully interactive; this is called hydration. 

Next.js pre-renders in 2 ways: Static Generation & Server-side rendering, the difference being When it generates the HTML.
Static Generation: the HTML is generated at build-time and re-used for each request. 
Server-Side rendering: the HTML is generated on each request. 
* In dev mode, `npm run dev` pre-renders every page on each request even on pages that use static-generation. 
* Next.js actually allows you to choose which pre-rendering method to use depending on each page. it's not difficult to use both even. 
* Next.js devs recommend using Static Generation because your page can be built once and served by a cdn, improving load time. 
Ask yourself, "Can I pre-render this page Ahead of the user's request?" if yes, you should use static generation. If your page shows frequently updated data that constantly needs to be up-to-date, then you should choose server-side rendering even though your app may run slower. In some cases, you can even substitute server-side rendering with client-side javascript. 

#### Static Generation
A site that can be pre-rendered without external data is automatically statically-generated. 

When the app requires external data to render a page, you can use an async function built-into Next.js called, `getStaticProps`.

`getStaticProps` runs at build time in production and inside the function, you can fetch the external data and hand it off to the page as a prop. 

* in dev mode, `getStaticProps` runs on each request.