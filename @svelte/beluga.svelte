<script>
  import { onMount } from "svelte";
  export let eyeColor = "#4E5E4E"
  export let bodyColor = "whitesmoke"
  export let bodyShade = "#D4D0E6"
  export let flipFin = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  export let swim = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  export let flipTail = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  export let hStretch = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  export let hStretch2 = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  export let vStretch = {
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
  <div id="beluga">
    <div class="belcontain" style="
      animation-iteration-count:{swim.iterationCount}; 
      animation-delay:{swim.delay};
      animation-duration:{swim.duration};
    ">
    <div class="beluga">
        <div class="bel1">
            <div class="belSkin bel11" style="background-color:{bodyColor}; border-color: {bodyShade};">
              <span class="belEyeball" style="background-color:{eyeColor}; border-color:{bodyShade};"></span>
              <span class="belEyedot"></span>
            </div>
            <div class="belSkin bel-se-sharp bel12" style="background-color:{bodyColor}; border-color: {bodyShade};"></div>
            <div class="belSkin bel-ne-sharp bel13" style="background-color:{bodyColor}; border-color: {bodyShade};"></div>
        </div>
        <div class="bel2" style="
          animation-iteration-count:{hStretch2.iterationCount}; 
          animation-delay:{hStretch2.delay};
          animation-duration:{hStretch2.duration};
        ">
            <div class="belSkin bel21" style="background-color:{bodyColor}; border-color: {bodyShade};"></div>
            <div class="belSkin-junction1 belSkin bel-se-sharp bel-inverted" style="box-shadow: 0em -1.5em 0em 0em {bodyColor};"></div>
        </div>
        <div class="bel3">
            <div class="belSkin bel-sw-sharp" style="background-color:{bodyColor};"></div>
            <div class="belSkin" style="background-color:{bodyColor};"></div>
            <div class="bel-half-width">
              <div class="belSkin bel-ne-sharp bel33" style="background-color:{bodyColor};"></div>
              <div class="belSkin bel-nw-sharp" style="background-color:{bodyColor};"></div>
            </div>
        </div>
        <div class="bel4 belEye" style="
          animation-iteration-count:{hStretch.iterationCount}; 
          animation-delay:{hStretch.delay};
          animation-duration:{hStretch.duration};
        ">
            <div class="belTail" style="
              animation-iteration-count:{flipTail.iterationCount}; 
              animation-delay:{flipTail.delay};
              animation-duration:{flipTail.duration};
            ">
              <div class="belTail-top belSkin" style="background-color:{bodyColor};"></div>
              <div class="belTail-bot belSkin" style="background-color:{bodyColor}; border-color: {bodyShade};"></div>
            </div>
          </div>
        </div>
        <div class="belbottom belEye" style="
          animation-iteration-count:{vStretch.iterationCount}; 
          animation-delay:{vStretch.delay};
          animation-duration:{vStretch.duration};
        "></div>
        <div class="belFin1 belSkin" style="
          background-color: {bodyColor};
          border-color: {bodyShade};
          animation-iteration-count:{flipFin.iterationCount}; 
          animation-delay:{flipFin.delay};
          animation-duration:{flipFin.duration};
        "></div>
    </div>
  </div>
</div>

<style>
:root{
  --belSkin: whitesmoke; 
  --belShade: #D4D0E6; 
  --belTongue: pink;
  --belEye: #4E5E4E; 
}

.artboard{
  height: max-content;
  width: max-content;
}

#beluga{
  position: relative;
  height: 20em;
  width: 24em;
}

.belSkin{
  background-color: var(--belSkin);
}

.belcontain{
  position: relative;
  height: 60%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  animation: swim 3s ease-in-out;
  animation-iteration-count: infinite;
  transform: rotate(0deg) translateY(5em);
}

.belFin1{
  position: absolute;
  bottom: 1.5em;
  left: 2.5em;
  z-index: 0;
  height: 4em;
  width: 8em;
  border-top-left-radius: 100%;
  border-bottom-right-radius: 40%;
  border-color: var(--belShade);
  border-left-style: solid;
  border-bottom-style: solid;
  border-width: 0.3em;
  transform: rotateY(50deg) rotateZ(0deg);
  animation: flipFin 3s ease-in-out;
  animation-iteration-count: infinite;
}

.beluga{
  display: grid;
  grid-template-columns: 20% auto 1fr auto;
}

.beluga:hover{
  cursor: pointer;
}

.bel1{
  display: grid;
  grid-template-rows: 4em 2em 2em 1fr;
}

.bel11{
  position: relative;
  z-index: 2;
  border-top-left-radius: 100%;
  width: 3.5em;
  justify-self: flex-end;
  border-left-style: solid;
  border-width: 0.2em;
  border-color: var(--belShade);
}

.bel12{
  position: relative;
  z-index: 2;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 50%;
  border-left-style: solid;
  border-bottom-style: solid;
  border-width: 0.2em;
  border-color: var(--belShade);
  transform: scaleY(125%);
}

.bel13{
  transform: translateX(0.6em) rotate(6deg);
  border-left-style: solid;
  border-bottom-right-radius: 30%;
  border-width: 0.2em;
  border-color: var(--belShade);
}

.bel13:hover{
  transition: 0.1s;
  transform: translateX(0.8em) scale(90%) translateY(-0.3em) rotate(-45deg);
  background-color: var(--belTongue) !important;
  border-top-left-radius: 2em;
}

.belEyeball{
  position: absolute;
  top: 3.5em;
  right: -1em;
  height: 0.8em;
  width: 0.8em;
  border-radius: 1em;
  background-color: var(--belEye);
  border-bottom-style: solid;
  border-color: var(--belShade);
  border-width: 0.2em;
}

.belEyedot{
  position: absolute;
  top: 3.6em;
  right: -0.9em;
  height: 0.2em;
  width: 0.2em;
  border-radius: 1em;
  background-color: white;
}

.bel2{
  display: grid;
  width: 4.5em;
  grid-template-rows: 8em 1em 1fr;
  animation: hStretch2 3s ease-in-out;
  animation-iteration-count: infinite;
}

.bel21{
  border-bottom-left-radius: 10%;
  border-bottom-style: solid;
  border-width: 0.2em;
  border-color: var(--belShade);
}

.belSkin-junction1{
  grid-row: 2/4;
  transform: rotate(40deg);
}

.bel3{
  display: grid;
  grid-template-rows: 7em 2em 1fr auto;
}

.bel4{
  display: grid;
  display: flex;
  align-items: flex-end;
  width: 4.5em;
  animation: hStretch 3s ease-in-out;
  animation-iteration-count: infinite;
}

.belbottom{
  height: 1em;
  animation: vStretch 3s ease-in-out;
  animation-iteration-count: infinite;
}

.belTail{
  height: 4em;
  width: 3em;
  display: grid;
  grid-template-rows: 40% 60%;
  animation: flipTail 3s ease-in-out;
  animation-iteration-count: infinite;
}

.belTail-bot{
  border-bottom-left-radius: 3em;
  border-top-right-radius: 2em;
  border-color: var(--belShade);
  border-bottom-style: solid;
  border-width: 0.3em;
}

.belTail-top{
  border-bottom-right-radius: 3em;
  border-top-left-radius: 2em;
}

/*===================
// CURVE SHAPES 
===================*/

.bel-inverted{
  background-color: rgba(0,0,0,0);
  box-shadow: 0em -1.5em 0em 0em var(--belSkin);
}

.bel-half-width{
  display: grid;
  grid-template-columns: 50% 50%;
}

.bel-se-sharp{
  border-top-left-radius: 100%;
  height: 100%;
  width: 100%;
}

.bel-ne-sharp{
  border-bottom-left-radius: 100%;
  height: 100%;
  width: 100%;
}

.bel-nw-sharp{
  border-bottom-right-radius: 100%;
  height: 100%;
  width: 100%;
}

.bel-sw-sharp{
  border-top-right-radius: 100%;
  height: 100%;
  width: 100%;
}


@keyframes swim{
  45%{
    transform: rotate(20deg) translateY(2em);
  }
  100%{
    transform: rotate(0deg) translateY(5em);
  }
}

@keyframes flipFin{
  45%{
    bottom: 0em;
    left: 5.8em;
    height: 5em;
    width: 4em;
    transform: rotateY(30deg) rotateZ(-90deg);
  }
  100%{
    bottom: 1.5em;
    left: 2.5em;
    height: 4em;
    width: 8em;
    transform: rotateY(50deg) rotateZ(0deg);
  }
}

@keyframes flipTail{
  45%{
    height: 2.5em;
  }
  100%{
    height: 4em;
  }
}

@keyframes hStretch{
  45%{
    width: 6em;
  }
  100%{
    width: 4.5em;
  }
}

@keyframes hStretch2{
  45%{
    width: 4em;
  }
  100%{
    width: 4.5em;
  }
}

@keyframes vStretch{
  45%{
    height: 2em;
  }
  100%{
    height: 1em;
  }
}
</style>