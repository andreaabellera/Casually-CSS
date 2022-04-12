// Packaging artworks for communal use <3 Trial attempt at an npm library

// Takes an artwork name and the div container to place it in
function create(container,name){
    let art = artLib[name]

    // Constrain div to square (for now)
    let dimensions = [container.clientHeight,container.clientWidth]
    if(dimensions[0] < dimensions[1]){ // landscape
        container.style.height = dimensions[0] + "px"
        container.style.width = dimensions[0] + "px"
    }
    else if(dimensions[0] > dimensions[1]){ // portrait
        container.style.height = dimensions[1] + "px"
        container.style.width = dimensions[1] + "px"
    }
    container.innerHTML = art
    return art
}

const orange = `
<div class="artboard">
    <div class="leaf">
        <div class="leaf-1">   </div>
        <div class="leaf-2">   </div>
        <div class="leaf-3">   </div>
        <div class="leaf-4">   
          <span class="deco">  </span>
          <span class="bord">  </span>
        </div>
      </div>
      <div class="orange">
        <div class="inner">
          <div class="line">                  </div>
          <div class="line fourfive">         </div>
          <div class="line ninety">           </div>
          <div class="line onethreefive">     </div>
          <div class="center">                </div>
        </div>
    </div>
</div>

<style>
:root{
  --skin: darkorange; 
  --vein: rgb(255, 186, 59);
  --citrus: orange;
  --leaf: forestgreen;
  --leafShadow: green;
  --leafHighlight: mediumseagreen;
}

.artboard{
  position: relative;
  height: inherit;
  height: inherit;
}

.leaf{
  position: absolute;
  right:0;
  height: 40%;
  width: 40%;
  display: grid;
  grid-template-rows: 30% 70%;
  grid-template-columns: 70% 30%;
}

.leaf:hover{
  cursor: pointer;
  animation: jiggle 3s linear;
  animation-iteration-count: infinite;
}

.leaf-1{
  border-top-left-radius: 100%;
  background-color: var(--leaf);
}

.leaf-2{
  background-color: var(--leaf);
  border-color: var(--leafHighlight);
  border-style: solid;
  border-width: 50%;
  border-bottom-style: none;
  border-top-style: none;
  border-left-style: none;
}

.leaf-3{
  border-bottom-left-radius: 8em;
  background-color: var(--leafShadow);
}

.leaf-4{
  border-bottom-right-radius: 100%;
  background-color: var(--leafShadow);
  border-color: var(--leafHighlight);
  border-style: solid;
  border-width: 50%;
  border-bottom-style: none;
  border-top-style: none;
  border-left-style: none;
}

.deco{
  height: 100%;
  width: 100%;
  border-color: var(--leaf);
  border-style: solid;
  border-width: thick;
  border-bottom-right-radius: 100%;
}

.lower-leaf{
  border-bottom-right-radius: 120%;
  border-bottom-left-radius: 0;
  background-color: var(--leaf);
}

.orange{
  position: absolute;
  z-index: 1;
  background-color: var(--skin);
  height: 90%;
  width: 90%;
  border-radius: 16em;
  border-color: var(--skin);
  border-width: thick;
  border-style: solid;
  display: grid;
  justify-items: center;
  align-items: center;
}

.orange:hover{
  cursor: pointer;
  animation: spin 1.5s ease-in-out;
}

.inner{
  position: relative;
  height: 80%;
  width: 80%;
  background-color: var(--citrus);
  border-color: var(--vein);
  border-radius: 16em;
  border-width: 1.2ex;
  border-style: solid;
  display: grid;
  justify-items: center;
  align-items: center;
}

.line{
  position: absolute;
  height: 5%;
  width: 105%;
  background-color: var(--vein);
}

.fourfive{
  transform: rotate(45deg);
}

.ninety{
  transform: rotate(90deg);
}

.onethreefive{
  transform: rotate(135deg);
}

.center{
  position: absolute;
  height: 6%;
  width: 6%;
  background-color: var(--citrus);
  border-color: blanchedalmond;
  border-style: solid;
  border-width: 0.7ex;
  border-radius: 2em;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes jiggle {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  20% {
    transform: rotateX(20deg) rotateY(20deg);
  }
  40% {
    transform: rotateX(10deg) rotateY(10deg);
  }
  55% {
    transform: rotateX(20deg) rotateY(30deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg);
  }
}
</style>
`

const artLib = {
    "orange": orange
};

//module.exports = create
