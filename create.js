/* create
  
  This function will take two parameters:
  1. container: The HTML element that will house the artwork
  2. name: The name of the artwork as a string (e.g. "orange")

  Sample Usage:

  // Inside your javascript file or tag
  create(document.getElementById("myDiv"), "orange")
   
*/

let repertoire = []

function create(container,name,refresh=false){
  ;(async () => {
    let html = await load(name + "/" + name + ".txt", container)
    let css = await load(name + "/" + name + ".css", container, true)

    if(html && css){
      let targetHeight = container.clientHeight
      let targetWidth = container.clientWidth
      let artboard = container.getElementsByClassName("artboard")[0]
      let artboardHeight = artboard.clientHeight
      let artboardWidth = artboard.clientWidth

      // Resize artboard to fit container
      let scale = Math.min(targetHeight/artboardHeight, targetWidth/artboardWidth)
      artboard.style.transform = "scale(" + scale + ")"
      artboard.style.transformOrigin = "0 0"

      // Add to repertoire
      if(!refresh)
        repertoire.push({ container: container, content: container.innerHTML, name: name })
    }
    else
      console.error(`Casually CSS: Artwork load failed. Please check that your '${name}' parameter is of string type and exists in Casually CSS. If it exists, folder for '${name}' may be missing. Please redownload the '${name}' folder from 'https://github.com/andreaabellera/Casually-CSS' or reinstall the package.`)
  })();
}

async function load(url, container, css=false){
  const response = await fetch(url);
  const text = await response.text();
  
  if (css)
    container.innerHTML += `<style> ${text} </style>`
  else
    container.innerHTML += text

  return response.ok;
}

window.onresize = function(){
  repertoire.forEach(art => { 
    art.container.innerHTML = ""
    replaster(art.container, art.content)
  })
}

function replaster(container, content){
  let targetHeight = container.clientHeight
  let targetWidth = container.clientWidth
  container.innerHTML = content
  let artboard = container.getElementsByClassName("artboard")[0]
  let artboardHeight = artboard.clientHeight
  let artboardWidth = artboard.clientWidth

  // Resize artboard to fit container
  let scale = Math.min(targetHeight/artboardHeight, targetWidth/artboardWidth)
  artboard.style.transform = "scale(" + scale + ")"
  artboard.style.transformOrigin = "0 0"
}

module.exports = create
