<script>
  import { onMount } from "svelte";
  export let bodyColor = "whitesmoke"
  export let midColor = "whitesmoke"
  export let spin = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "1.2s"
  }
  
  // Generate unique id for artboard
  let genId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  
  onMount(async () => {
		resize()
	});
  
  function resize(){
    let artboard = document.getElementById(genId)
    if(artboard){
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
  <div id="blossom" style="
    animation-iteration-count:{spin.iterationCount}; 
    animation-delay:{spin.delay};
    animation-duration:{spin.duration};
  ">
    <div class="blossomMid" style="background-color:{midColor};"></div>
    <div class="half-grid"><div class="blossomPetal" style="background-color:{bodyColor};"></div></div>
    <div class="half-grid"><div class="blossomPetal" style="background-color:{bodyColor};"></div></div>
    <div class="half-grid"><div class="blossomPetal" style="background-color:{bodyColor};"></div></div>
    <div class="half-grid"><div class="blossomPetal" style="background-color:{bodyColor};"></div></div>
    <div class="half-grid"><div class="blossomPetal" style="background-color:{bodyColor};"></div></div>
  </div>
</div>

<style>
:root{ 
  --blossomPetal: lightblue;
  --blossomMid: lightsteelblue;
}

.artboard{
  height: max-content;
  width: max-content;
}

#blossom{
  height: 20ex;
  width: 20ex;
  position: relative;
  animation: blossomSpin 1.2s ease-in-out infinite;
}

/* #blossom:hover{
  animation: blossomSpin 1.2s ease-in-out;
  cursor: pointer;
} */

.blossomMid{
  background-color: var(--blossomMid);
  height: 30%;
  width: 30%;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.blossomPetal{
  background-color: var(--blossomPetal);
  height: 100%;
  width: 45%;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  box-shadow: 0.05em 0.1em 0.3em rgba(0,0,0,0.3);
}

.half-grid{
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 3;
  display: grid;
  grid-template-rows: 50% 50%;
}

/* First blossomPetal is 0deg by default */

.half-grid:nth-of-type(2){
  transform: rotate(72deg);
}

.half-grid:nth-of-type(3){
  transform: rotate(144deg);
}

.half-grid:nth-of-type(4){
  transform: rotate(216deg);
}

.half-grid:nth-of-type(5){
  transform: rotate(288deg);
}

@keyframes blossomSpin {
  0% {
      transform: rotate(0deg);
  }
  50% {
      transform: rotate(144deg);
  }
  100% {
      transform: rotate(0deg);
  }
}
</style>