This project features a carousel image slider with only HTML/CSS/JavaScript.  Please
refer to this github repository: 

## Main Features

- [A re-useable React component](#updating-to-new-releases)
- [Simple programming interface](#sending-feedback)
- [User supplied array of images without requiring images with same size](#folder-structure)
- [Adjustable delay between slides](#supported-language-features-and-polyfills)

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)

## Sample Screen Shots


## Updating to New Releases

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
The above form is looking for a variable called `REACT_APP_SECRET_CODE` from the environment. In order to consume this
