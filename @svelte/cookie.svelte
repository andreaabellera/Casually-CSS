<script>
  import { onMount } from "svelte";
  export let bodyColor = "tan"
  export let outlineColor = "#543f37"
  export let chipColor = "#8e5e4e"
  export let eat = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "1s"
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
  <div id="cookie">
    <span class="chip" style="background-color:{chipColor};"></span>
    <span class="chip" style="background-color:{chipColor};"></span>
    <span class="chip" style="background-color:{chipColor};"></span>
    <span class="chip" style="background-color:{chipColor};"></span>
    <span class="chip" style="background-color:{chipColor};"></span>
    <span class="chip" style="background-color:{chipColor};"></span>
    <span class="chip" style="background-color:{chipColor};"></span>
    <div class="cookie-bite">
      <div class="bite bite11" style="background-image: radial-gradient(ellipse at top right, transparent 0%, transparent 30%, {bodyColor} 31%);"></div>
      <div class="bite bite12" style="background-image: radial-gradient(circle at top right, transparent 0%, transparent 21%, {bodyColor} 22%);"></div>
      <div class="cookie cookie-q1-sharp bite13" style="background-color:{bodyColor}; border-color:{outlineColor};"></div>
    </div>
    <div class="cookie-container quadrants">
      <div class="cookie full cookie-q2" style="background-color:{bodyColor}; border-color:{outlineColor};"></div>
      <div class="cookie full cookie-q1" style="
        background-color:{bodyColor}; 
        border-color:{outlineColor};
        animation-iteration-count:{eat.iterationCount}; 
        animation-delay:{eat.delay};
        animation-duration:{eat.duration};
      "></div>
      <div class="cookie full cookie-q3" style="background-color:{bodyColor}; border-color:{outlineColor};"></div>
      <div class="cookie full cookie-q4" style="background-color:{bodyColor}; border-color:{outlineColor};"></div>
    </div>
  </div>
</div>

<style>
:root{
--cookie: tan; 
--cookieOutline: #543f37;
--chip: #8e5e4e;
}

#cookie{
height: 16em;
width: 16em;
position: relative;
}

.artboard{
  height: max-content;
  width: max-content;
}

.cookie{
background-color: var(--cookie);
}

.cookie-container{
position: absolute;
height: 100%;
width: 100%;
}

.cookie-container:hover{
cursor: pointer;
}

.quadrants{
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
}

.cookie-q2{
bottom: 0;
right: 0;
border-top-left-radius: 20em;
border-width: 0.2em;
border-color: var(--cookieOutline);
border-left-style: solid;
border-top-style: solid;
}

.cookie-q1{
bottom: 0;
left: 0;
border-top-right-radius: 20em;
border-width: 0.2em;
border-color: var(--cookieOutline);
border-right-style: solid;
border-top-style: solid;
animation: eat 1s linear infinite;
}

.cookie-q1-sharp{
bottom: 0;
left: 0;
border-top-right-radius: 100%;
border-width: 0.2em;
border-color: var(--cookieOutline);
border-right-style: solid;
border-top-style: solid;
}

/* .cookie-q1:hover{
animation: eat 1s linear;
animation-iteration-count: infinite;
} */

.cookie-q3{
top: 0;
right: 0;
border-bottom-left-radius: 20em;
border-width: 0.2em;
border-color: var(--cookieOutline);
border-left-style: solid;
border-bottom-style: solid;
}

.cookie-q4{
top: 0;
left: 0;
border-bottom-right-radius: 20em;
border-width: 0.2em;
border-color: var(--cookieOutline);
border-right-style: solid;
border-bottom-style: solid;
}

.full{
position: relative;
height: 100%;
width: 100%;
}

.cookie-bite{
position: absolute;
right: -0.2em;
height: auto;
width: 50%;
height: 50%;
display: grid;
grid-template-columns: 25% 50% 1fr;
align-items: flex-end;
}

.bite11{
height: 97%;
background-image: radial-gradient(ellipse at top right, transparent 0%, transparent 30%, var(--cookie) 31%);
}

.bite12{
height: 55%;
background-image: radial-gradient(circle at top right, transparent 0%, transparent 21%, var(--cookie) 22%);
}

.bite13{
height: 40%;
background-color: var(--cookie);
}

.chip{
position: absolute;
z-index: 3;
background-color: var(--chip);
height: 1em;
width: 1em;
border-top-left-radius: 60%;
border-top-right-radius: 0.3em;
border-bottom-left-radius: 1em;
border-bottom-right-radius: 40%;
transform: rotate(-45deg);
}

.chip:nth-child(1){
bottom: 50%;
right: 5%;
}

.chip:nth-child(2){
bottom: 35%;
right: 25%;
}

.chip:nth-child(3){
bottom: 60%;
right: 30%;
}

.chip:nth-child(4){
bottom: 25%;
right: 80%;
}

.chip:nth-child(5){
bottom: 10%;
right: 45%;
}

.chip:nth-child(6){
bottom: 40%;
right: 60%;
}

.chip:nth-child(7){
bottom: 70%;
right: 70%;
}

@keyframes eat{
  0%{
  opacity: 0;
  }
  100%{
  opacity: 0;
  }
}
</style>