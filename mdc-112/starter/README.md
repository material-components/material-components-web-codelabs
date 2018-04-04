# MDC Codelab 112 - Integrating with Frameworks

This repo complements the codelab MDC 112.

## Here are some brief definitions of the several files found in the repo:

File | Description
---- | -----------
.babelrc | Babel configuration file that transpiles the JSX and ES6 code into ES5 code.
App.js | The parent component of the entire application. Think of this as the demo page controller and template.
app.scss | The styles for the application. It also imports the top-app-bar.scss file from MDC Web, as well as the typography.scss to style the text.
index.html | Like most webpages there is a main index.html page that is served per page. Since this is a single page app (SPA), this is the only page that is served during the entire lifetime of the demo page.
index.js | This is where all the application setup code and logic should live. It bootstraps the React app to the DOM and starts the demo page.
package-lock.json | A lock file for all the application’s third party dependencies.
package.json | A manifest of third party dependencies.
TopAppBar.js | The component this codelab is going to build.
webpack.config.js | The configuration file to tell webpack how to build certain files into one bundle.js and one bundle.css.
