# CatApp

![Image of Cat](https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip)

The project fetches data from two APIs -
1. [https://thecatapi.com/](https://thecatapi.com/) for information and random pictures
2. [https://cat-fact.herokuapp.com/](https://cat-fact.herokuapp.com/) for random cat facts

## Pages

The project contains 4 pages-
1. [http://localhost:3000/](http://localhost:3000/) - Main page
2. [http://localhost:3000/breedlist](http://localhost:3000/breedlist) - Contains list of cat breeds
3. [http://localhost:3000/info](http://localhost:3000/info) - Contains information on the cat breeds
4. [http://localhost:3000/carousel](http://localhost:3000/carousel) - Contains random pictures and facts on cats

## Folder Structure

cdsc <br>
├── node_modules <br>
├── public <br>
│ --- ├── index.html <br>
│ --- ├── logo192.png <br>
│ --- ├── logo512.png <br>
│ --- ├── manifest.json <br>
│ --- ├── robots.txt <br>
├── src <br>
│ --- ├── API<br>
│ -------- └── catbreedAPI <br>
│ ---------- └── CatbreedAPI.js<br>
│ -------- └── catFactAPI <br>
│ ---------- └── catfactAPI.js<br>
│ -------- └── catsAPI <br>
│ ---------- └── catimgAPI.js<br>
│ --- ├── Components<br>
│ -------- └── card <br>
│ ---------- └── card.js<br>
│ ---------- └── card.module.css<br>
│ -------- └── imagecarousel <br>
│ ---------- └── imagecarousel.js<br>
│ ---------- └── imagecarousel.module.css<br>
│ -------- └── navbar <br>
│ ---------- └── navbar.js<br>
│ ---------- └── navbar.js<br>
│ --- ├── Pages<br>
│ -------- └── breedlist <br>
│ ---------- └── breedlist.js <br>
│ ---------- └── breedlist.module.css <br>
│ -------- └── carousel <br>
│ ---------- └── carousel.js<br>
│ ---------- └── carousel.module.css <br>
│ -------- └── first <br>
│ ---------- └── first.js<br>
│ ---------- └── first.module.css <br>
│ -------- └── information <br>
│ ---------- └── information.js<br>
│ ---------- └── information.module.css <br>
│ -------- └── main.js <br>
│ --- ├── App.css<br>
│ --- ├── App.js<br>
│ --- ├── App.test.js<br>
│ --- ├── index.css<br>
│ --- ├── index.js<br>
│ --- ├── logo.svg<br>
│ --- ├── reportWebVitals.js<br>
│ --- ├── setupTests.js<br>
├── .eslintcache<br>
├── .gitignore<br>
├── package-lock.json<br>
├── package.json<br>
├── README.md<br>
├── yarn.lock<br>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


