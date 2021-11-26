## Quick Overview

The project displays a list of products fetched from a CSV file. The products are displayed in a *Grid* format with 100 products (at max) per page.
The products can be filtered using the *Search* form.

## Documentation

The project is documented using [react styleguidist](https://react-styleguidist.js.org/).

The documentation can be viewed by at path 

### `[project-root]/styleguidist/index.html`

Alternatively, the following command can be run which will run a *dev server*, displaying the documentation at [http://localhost:6060/](http://localhost:6060/)

### `yarn doc`

## Folder Structure

```
+--src
  |--assets
  |  |---styles
  |--components
  |--models
  |--pages (components which render multiple child components and act as a page)
  |--redux
  |  |--app 
  |  |--slices  
  |--services
  |--styleguide
  |--tests
  |  |--components
  |  |--slices
  |--utilities
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.