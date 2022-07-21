<script>
  import { onMount } from "svelte";
  export let skinTint = "darkorange"
  export let skinColor = "darkorange"
  export let bodyColor = "orange"
  export let veinColor = "rgb(255, 186, 59)"
  export let leafColor = "forestgreen"
  export let leafShade = "green"
  export let leafTint = "mediumseagreen"
  export let spin = {
    iterationCount: "2",
    delay: "0s",
    duration: "1.5s"
  }
  export let jiggle = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  
  // Generate unique id for artboard
  let genId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  
  onMount(async () => {
		resize()
	});
  
  function resize(){
    let artboard = document.getElementById(genId)
    if (artboard) {
      let targetHeight = artboard.parentElement.clientHeight
      let targetWidth = artboard.parentElement.clientWidth
      let artboardHeight = artboard.clientHeight
      let artboardWidth = artboard.clientWidth
      let scale = Math.min(targetHeight/artboardHeight, targetWidth/artboardWidth)
      artboard.style.transform = "scale(" + scale + ")"
      artboard.style.transformOrigin = "0 0"
    }
  }
  
  window.onresize = function(){
    resize()
  }
</script>

<div class="artboard" id={genId}>
  <div id="orange">
    <div class="orangeLeaf" style="
      animation-iteration-count:{jiggle.iterationCount}; 
      animation-delay:{jiggle.delay};
      animation-duration:{jiggle.duration};
    ">
      <div class="orangeLeaf-1" style="background-color:{leafColor};"></div>
      <div class="orangeLeaf-2" style="background-color:{leafColor}; border-color:{leafTint};"></div>
      <div class="orangeLeaf-3" style="background-color:{leafShade};"></div>
      <div class="orangeLeaf-4" style="background-color:{leafShade}; border-color:{leafTint};">
        <span class="deco" style="border-color:{leafColor};"></span>
      </div>
    </div>
    <div class="orange" style="
      background-color:{skinColor};
      border-color:{skinTint};
      animation-iteration-count:{spin.iterationCount}; 
      animation-delay:{spin.delay};
      animation-duration:{spin.duration};
    ">
      <div class="orangeInner" style="background-color:{bodyColor}; border-color:{veinColor};">
        <div class="orangeLine" style="background-color:{veinColor};"></div>
        <div class="orangeLine fourfive" style="background-color:{veinColor};"></div>
        <div class="orangeLine ninety" style="background-color:{veinColor};"></div>
        <div class="orangeLine onethreefive" style="background-color:{veinColor};"></div>
        <div class="orangeCenter" style="background-color:{bodyColor};"></div>
      </div>
    </div>
  </div>
</div>

<style>
:root{
  --orangeSkin: darkorange; 
  --vein: rgb(255, 186, 59);
  --citrus: orange;
  --orangeLeaf: forestgreen;
  --orangeLeafShadow: green;
  --orangeLeafHighlight: mediumseagreen;
}

#orange{
  position: relative;
  height: 18em;
  width: 18em;
}

.artboard{
  height: max-content;
  width: max-content;
}

.orangeLeaf{
  position: absolute;
  right:0;
  top:0;
  height: 40%;
  width: 40%;
  display: grid;
  grid-template-rows: 30% 70%;
  grid-template-columns: 70% 30%;
  animation: jiggle 3s linear infinite;
}

/* .orangeLeaf:hover{
  cursor: pointer;
  animation: jiggle 3s linear;
  animation-iteration-count: infinite;
} */

.orangeLeaf-1{
  border-top-left-radius: 100%;
  background-color: var(--orangeLeaf);
}

.orangeLeaf-2{
  background-color: var(--orangeLeaf);
  border-color: var(--orangeLeafHighlight);
  border-style: solid;
  border-width: 50%;
  border-bottom-style: none;
  border-top-style: none;
  border-left-style: none;
}

.orangeLeaf-3{
  border-bottom-left-radius: 8em;
  background-color: var(--orangeLeafShadow);
}

.orangeLeaf-4{
  border-bottom-right-radius: 100%;
  background-color: var(--orangeLeafShadow);
  border-color: var(--orangeLeafHighlight);
  border-style: solid;
  border-width: 50%;
  border-bottom-style: none;
  border-top-style: none;
  border-left-style: none;
}

.deco{
  height: 100%;
  width: 100%;
  border-color: var(--orangeLeaf);
  border-style: solid;
  border-width: thick;
  border-bottom-right-radius: 100%;
}

.orange{
  position: absolute;
  z-index: 1;
  background-color: var(--orangeSkin);
  height: 90%;
  width: 90%;
  border-radius: 16em;
  border-color: var(--orangeSkin);
  border-width: thick;
  border-style: solid;
  display: grid;
  justify-items: center;
  align-items: center;
  animation: spin 1.5s ease-in-out;
  animation-iteration-count: 2;
}

/* .orange:hover{
  cursor: pointer;
  animation: spin 1.5s ease-in-out;
} */

.orangeInner{
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

.orangeLine{
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

.orangeCenter{
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