# Store Dot Com
This project is an exercise in using Vanilla JS. 

## Objectives

- Build a UI using Web Components and VanillaJS to create resuable templates and organized code
- Create dynamic functionality without using React
- Build basic yet functional shopping cart (no purchase api)
- Create a categorized shop of products that can be filtered down or added to a cart

## Page Content

The project's routing is intended to operate similar in nature to a React project. There is one main div on the `index.html` page and all content is injected into the `<page-outlet>` element on the page. 

## Routing

The `<b-router>` element holds the `<nav>`, all page routes as `<b-route>` tags, and the `<page-outlet>` element mentioned in the previous section. When the router loads it executes a local method that crosses the path taken from `window.history` with the list of paths collected from all the `<b-route>` tags and injects the component listed in the route component into the `<page-outlet>`

## Web Components

More info soon.
