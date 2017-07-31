This project features a carousel image slider with only HTML/CSS/JavaScript.  Please
refer to this github repository: https://github.com/shorebird2016/react-carousel

Demo: https://carousel-react.herokuapp.com/

### Main Features

- A re-useable React component
- Simple programming interface
- User supplied array of images without requiring images with same size
- Adjustable delay between slides

### Sample Screen Shots


### Folder Structure

The source tree looks like this:

```
carousel/
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
    asset/
        slider1.png
        slider2.png
        slider3.png
        slider4.png
    carousel/
        carousel.js
        main.sass
```
This app was built from creat-react-app so only folders asset and carousel are
application specific.  The re-useable code resides under carousel/ folder.

### Customiation

To add more images
1. place more images under asset folder
2. update slideImages array in carousel.js to add more images

To change delay - change value for switchInterval prop in ms (default 5000)
