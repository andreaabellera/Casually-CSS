![Casually CSS Banner](/@siteres/casually-banner.png)
A collection of CSS artworks, casually created, and curated with care  

## Gallery
The [online gallery](https://andreaabellera.github.io/Casually-CSS/) showcase is deployed with Github Pages. Individual Casually CSS artworks are located inside their corresponding folders

## Import an Artwork
### SvelteJS App
1. Install the Casually CSS node package into your Svelte app with  
`npm install casually-css` 
2. Inside the `<script>` tag of your Svelte file, import the Svelte component for the artwork of your choice  
`import YourComponentName from "casually-css/@svelte/{artwork}.svelte"`  
**Sample usage:**  
`import Bike from 'casually-css/@svelte/bike.svelte'`

> Props can be passed to modify an artwork's colors and animation attributes. Detailed documentation for props will be available soon! 

### Browser
1. Include this link in your HTML head  
`<script src="https://unpkg.com/casually-css@0.6.0/create.js"></script>`  
2. You can import artworks with the JS function 'create'. It takes two parameters: **an HTML element** and the **artwork name (as string)**. The artwork will resize to fit inside its HTML element container.  
`create(yourElement, 'orange')`  

### Other Node.js Apps
1. Install the Casually CSS node package into your Node.js app with  
`npm install casually-css`  
2. In your script, add either line at the top of your program  
`const create = require('casually-css')`  
`import create from 'casually-css'`  
3. You can import artworks with the JS function 'create'. It takes two parameters: **an HTML element** and the **artwork name (as string)**. The artwork will resize to fit inside its HTML element container.  
`create(yourElement, 'orange')`  

### Manually add Artwork HTML 
1. Open the [gallery](https://andreaabellera.github.io/Casually-CSS/) and search for any artwork you like
2. At the Code Box located at the top-right of the screen, you can switch between the HTML and the CSS code snippets used to produce the artworks
3. Copy the code snippets into your clipboard and paste them into your code accordingly. The HTML code can be contained inside a `<div>` or any element of your liking. The CSS code can be inside a `<style>` tag or in a `.css` stylesheet which you will link to your HTML head. Both HTML and CSS portions need to be present to successfully reproduce the artwork

> *The artwork will have a fixed height/width and will not be responsive*

## A Note on Aspect Ratios
Artworks imported by the 'create' function or as Svelte components are designed to be responsive. It will adjust itself to fit in a parent container of any height or width, but it will latch to the **left** or **top** of its container if it possesses a different aspect ratio. To set container dimensions that perfectly encase an artwork, see the [Aspect Ratio Guide](https://github.com/andreaabellera/Casually-CSS/blob/main/%40siteres/aspect-ratio-guide.md)

## Contribute
### Share the Bugs
Found a bug that breaks an artwork or library functions? [Open an issue](https://github.com/andreaabellera/Casually-CSS/issues/) and let us know! Please include your browser and browser version to make it easier to test 

### Art Requests
Anyone - visitors, friends, and fans - can request an artwork by [opening an issue](https://github.com/andreaabellera/Casually-CSS/issues/) and adding the tag 'art'. Requested artworks can be any object, animal, character, or symbol. Finished requests will be included to the Casually CSS gallery

### Add or Improve an Artwork in Casually CSS
Contact [Andrea](https://github.com/andreaabellera) or send a pull request if you want to improve an existing artwork or if you want your own novel art pieces to be featured. You will be credited in the gallery showcase. Art pieces must be created by you and okay to distribute freely

## License
All Casually CSS artworks are distributed under the MIT License