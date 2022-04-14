![Casually CSS Banner](/casually-banner.png)
A collection of CSS artworks, casually created, and curated with care  

## Showcase
Gallery website showcase is live on [Github Pages](https://andreaabellera.github.io/Casually-CSS/). Individual Casually CSS artworks are located inside their corresponding folders

## Usage
### Install the Library
Install the Casually CSS node package into your Node.js app with `npm install casually-css`

### Import an Artwork
After installing the package, you can start importing artworks with the JS function 'create'
- In a Node.js app, add this line into your script: `const create = require('casually-css')`  
- If not using a Node.js app, include this link in your html head: `<script src="https://unpkg.com/casually-css@0.0.2/umd/bundle.js"></script>`

The 'create' functions takes two parameters: __an HTML element__ and the __artwork name__. The HTML element container will resize to match the artwork aspect ratio: `create(yourDiv, 'orange')`

> So far, only the [orange](https://andreaabellera.github.io/Casually-CSS/#orange) artwork is available under the library. Importable versions of other artworks and custom color passing are coming soon!

### Manually add an Artwork to an HTML Div 
1. Add the class "artboard" to the div that will contain the artwork
2. Open the HTML file and locate the comments that indicate the start and end of the artwork code. Copy and paste them inside your artboard div
3. Copy the CSS file into your project, redacting section above Artwork CSS. Link or import the stylesheet to the file that has your artboard

## Contribute
### Art Requests
You may request an artwork by [opening an issue](https://github.com/andreaabellera/Casually-CSS/issues/) and adding the tag 'art'. Requested artworks can be any object, animal, character, or symbol. Finished requests will also be included to the Casually CSS gallery

### Boilerplate
_blank contains a template for starting new artworks

### Adding your Artwork to Casually CSS
Contact [Andrea](https://github.com/andreaabellera) or send a pull request if you want any of your own art pieces to be featured. You will be credited in the gallery showcase. Art pieces must be created by you and must be free to distribute

## License
All Casually CSS artworks are distributed under the MIT License. Feel free to incorporate any artwork to your code