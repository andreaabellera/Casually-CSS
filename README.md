![Casually CSS Banner](/casually-banner.png)
A collection of CSS artworks, casually created, and curated with care  

## Gallery
The [online gallery](https://andreaabellera.github.io/Casually-CSS/) showcase is deployed with Github Pages. Individual Casually CSS artworks are located inside their corresponding folders

## Usage
### Install the Library (for Node.js App)
1. Install the Casually CSS node package into your Node.js app with  
`npm install casually-css`  
2. In your script, add this line at the top of your program  
`const create = require('casually-css')`

### Link the Library (if not using Node.js)
1. Include this link in your HTML head  
`<script src="https://unpkg.com/casually-css@0.0.2/umd/bundle.js"></script>`
2. Download the folders of the artworks that you are going to use. Ensure your script is located one level above the artwork folder (not in the same folder as the artwork) 

### Import an Artwork
After installing the package, you can start importing artworks with the JS function 'create'

The 'create' functions takes two parameters: __an HTML element__ and the __artwork name__. The HTML element container will resize to match the artwork aspect ratio  
`create(yourElement, 'orange')`

> *So far, only the [orange](https://andreaabellera.github.io/Casually-CSS/#orange) artwork is available under the library. Importable versions of other artworks and custom color passing are coming soon!*

### Manually add an Artwork to an HTML Div 
1. Open the [gallery](https://andreaabellera.github.io/Casually-CSS/) and search for any artwork you like
2. At the Code Box located at the top-right of the screen, you can switch between the HTML and the CSS code snippets used to produce the artworks
3. Copy the code snippets into your clipboard and paste them into your code accordingly. The HTML code can be contained inside a `<div>` or any element of your liking. The CSS code can be inside a `<style>` tag or in a `.css` stylesheet which you will link to your HTML head. Both HTML and CSS portions need to be present to successfully reproduce the artwork

> *The artworks will have a set height and width by default*

## Contribute
### Share the Bugs
Found a bug that breaks an artwork or library functions? [Open an issue](https://github.com/andreaabellera/Casually-CSS/issues/) and let us know! Please include your browser and browser version to make it easy for us to test 

### Art Requests
Anyone - visitors, friends, and fans - can request an artwork by [opening an issue](https://github.com/andreaabellera/Casually-CSS/issues/) and adding the tag 'art'. Requested artworks can be any object, animal, character, or symbol. Finished requests will be included to the Casually CSS gallery

### Add or Improve an Artwork in Casually CSS
Contact [Andrea](https://github.com/andreaabellera) or send a pull request if you want to improve an existing artwork or if you want your own novel art pieces to be featured. You will be credited in the gallery showcase. Art pieces must be created by you and okay to distribute freely

## License
All Casually CSS artworks are distributed under the MIT License