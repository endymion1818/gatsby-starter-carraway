# gatsby-starter-carraway

I spend a lot of time developing websites with Gatsby. I often find myself adding these same features each time. This is my attempt at providing a starting point for a robust, accessible and well tested frontend.

*URL:* https://gatsby-starter-carraway.netlify.com  
*REPO:* https://github.com/endymion1818/gatsby-starter-carraway  
*TAGS:* TypeScript, Pagination, Search, Basic UI, Tests, Accessibility  

## Features

- Paginated post archive
- Site search with Lunr.js
- Categories and category archive pages
- Sensible (minimal) CSS defaults using styled-components
- Some fundamental Accessibility features
    - Tabbable navigation
    - "Skip to content" link

- UI Elements
    - Page wrapper & container
    - Multi-column layout using CSS Grid (with float fallback)
    - Header with logo, basic navigation & search
    - Footer with 3-column layout, logo and 2 menu areas
    - Form with default fields and error handling (uses react-form-with-constraints)
    - Table default styles

- TypeScript & Testing
    - Some sensible TypeScript defaults
    - Tests with @testing-library/react
    - Pre-commit and pre-push hooks
    - Setup for a CircleCI pipeline so you can run the above tests in branches before merging to master 
    - Features some enums for repeating values such as font & background colours

- Basic GraphQL queries assuming a Markdown data source for the above components

## Contributions welcome!
