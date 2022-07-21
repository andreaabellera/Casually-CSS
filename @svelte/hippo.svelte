<script>
  import { onMount } from "svelte";
  export let bodyColor = "darkgrey"
  export let outlineColor = "#3e3e3e"
  export let eyeColor = "#3e3e3e"
  export let earColor = "#F0B3BF"
  export let nailColor = "gainsboro"
  export let bouncing = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "1s"
  }
  export let snap = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "1s"
  }
  export let wiggle = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "5s"
  }
  export let whip = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "10s"
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
  <div id="hippo">
    <div class="hippo">
        <span class="hippo-bod" style="
          border-color: {outlineColor};
          background-color: {bodyColor};
          animation-iteration-count:{bouncing.iterationCount}; 
          animation-delay:{bouncing.delay};
          animation-duration:{bouncing.duration};
        ">
          <span class="hippo-tail" style="
            animation-iteration-count:{whip.iterationCount}; 
            animation-delay:{whip.delay};
            animation-duration:{whip.duration};
          ">
            <div></div>
            <div class="hippo-tail1 hippo-se-sharp" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
            <div></div>
            <div class="hippo-tail2" style="border-color:{outlineColor}; background-color:{bodyColor};"><div class="hippo-tail-line" style="background-color:{outlineColor};"></div></div>
            <div class="hippo-tail3" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          </span>
        </span>
        <span class="hippo-leg hippo-front-near" style="border-color:{outlineColor}; background-color:{bodyColor};">
          <div class="hippoNails"><div class="hippoNail hippo-se" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-sw" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-se" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-sw" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-se" style="background-color:{nailColor};"></div></div>
        </span>
        <span class="hippo-leg hippo-front-far" style="border-color:{outlineColor}; background-color:{bodyColor};"></span>
        <span class="hippo-leg hippo-back-near" style="border-color:{outlineColor}; background-color:{bodyColor};">
          <div class="hippoNails"><div class="hippoNail hippo-se" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-sw" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-se" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-sw" style="background-color:{nailColor};"></div></div>
          <div class="hippoNails"><div class="hippoNail hippo-se" style="background-color:{nailColor};"></div></div>
        </span>
        <span class="hippo-leg hippo-back-far" style="border-color:{outlineColor}; background-color:{bodyColor};"></span>
        <span class="hippo-head" style="
          animation-iteration-count:{snap.iterationCount}; 
          animation-delay:{snap.delay};
          animation-duration:{snap.duration};
        ">
          <div class="hippo-head-junction1 hippo-se-sharp hippoSkin" style="border-color:{outlineColor}; background-color:{bodyColor};">
            <span class="hippoEar" style="
              background-color:{bodyColor};
              border-color:{outlineColor};
              animation-iteration-count:{wiggle.iterationCount}; 
              animation-delay:{wiggle.delay};
              animation-duration:{wiggle.duration};
            ">
              <div class="hippoEar-in" style="background-color:{earColor};"></div>
            </span>
          </div>
          <div class="hippoSkin hippo-sw-sharp" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="hippo-head-junction2 hippoSkin" style="background-color:{bodyColor};"></div>
          <div class="hippoSkin" style="background-color:{bodyColor};"></div>
          <div class="hippo-head-junction3 hippoSkin" style="background-color:{bodyColor};">
            <span class="hippoEye1" style="background-color:{eyeColor};"></span>
            <span class="hippoEye2" style="background-color:{eyeColor};"></span>
          </div>
          <div class="hippoSkin hippo-sw-sharp" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div></div>
          <div class="hippo-head-junction4 hippo-ne hippoSkin" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="hippoSkin hippo-nw-sharp" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="hippo-south-cap">
            <div class="hippoSkin hippo-ne-sharp" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
            <div class="hippoSkin hippo-nw-sharp" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          </div>
        </span>
        <span class="hippo-jaw">
          <div class="hippo-ne hippoSkin hippoMouth-area" style="border-color:{outlineColor}; background-color:{bodyColor};">
            <div class="hippo-ne hippoMouth" style="border-color:{outlineColor};"></div>
          </div>
          <div class="hippo-nw hippoSkin hippoEnd hippoMouth-area" style="border-color:{outlineColor}; background-color:{bodyColor};">
            <div class="hippo-nw hippoMouth" style="border-color:{outlineColor};">
              <span class="hippoTooth"></span>
              <span class="hippoTooth"></span>
            </div>
          </div>
        </span>
    </div>
  </div>
</div>

<style>
:root{
  --hippoOutline: #3e3e3e;
  --hippoBody: darkgrey;
  --hippoEye: #3e3e3e;
  --hippoEar: #F0B3BF;
  --hippoTeeth: whitesmoke;
  --hippoMouth: #E0A3AF; 
  --hippoNail: gainsboro;
}

#hippo{
  height: 18em;
  width: 30em;
}

.artboard{
  height: max-content;
  width: max-content;
}

.hippo{
  position: relative;
}

.hippo:hover{
  cursor: pointer;
}

.hippo-bod{
  position: absolute;
  z-index: 2;
  background-color: var(--hippoBody);
  height: 14.5em;
  width: 22em;
  border-top-left-radius: 15em;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 80%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-style: solid;
  left: 1em;
  animation: hippoBouncing 1s ease-out infinite;
}

/* .hippo-bod:hover{
  animation: hippoBouncing 1s ease-out;
  animation-iteration-count: infinite;
} */

.hippo-tail{
  position: relative;
  z-index: 3;
  height: auto;
  width: 3em;
  display: grid;
  grid-template-rows: 3.5em 3.5em 2em;
  grid-template-columns: 50% 50%;
  left: -1.5em;
  top: 3.8em;
  animation: hippoWhip 10s ease-out;
  animation-iteration-count: infinite;
}

.hippo-tail .hippo-se-sharp{
  border-top-width: 0em;
}

.hippo-tail1{
  background-color: var(--hippoBody);
  border-color: var(--hippoOutline);
  border-left-style: solid;
}

.hippo-tail2{
  background-color: var(--hippoBody);
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-left-style: solid;
  clip-path: polygon(0% 0%, 69% 0%, 29% 100%, 0% 100%);
}

.hippo-tail-line{
  width: 0.4em;
  height: 100%;
  background-color: var(--hippoOutline);
  transform: rotate(5deg);
  clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.hippo-tail3{
  background-color: var(--hippoBody);
  grid-column: 1/3;
  border-top-right-radius: 50%;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 50%;
  transform: rotate(90deg);
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-style: solid;
}

.hippo-leg{
  position: absolute;
  height: 3.5em;
  width: 5em;
  background-color: var(--hippoBody);
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-left-radius: 10%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.hippo-front-near{
  z-index: 3;
  top: 13em;
  left: 13em;
  overflow: hidden;
}

.hippo-front-far{
  z-index: 1;
  top: 12em;
  left: 15em;
  filter: brightness(40%);
}

.hippo-back-near{
  z-index: 3;
  top: 13em;
  left: 5em;
  overflow: hidden;
}

.hippo-back-far{
  z-index: 1;
  top: 12em;
  left: 7em;
  filter: brightness(40%);
}

.hippoNails{
  height: 0.8em;
  width: 0.4em;
}

.hippoNails .hippo-se{
  border-top-style: none;
  border-left-style: none;
}
.hippoNails .hippo-sw{
  border-top-style: none;
  border-right-style: none;
}

.hippoNail{
  background-color: var(--hippoNail);
}

.hippo-head{
  position: absolute;
  z-index: 5;
  right: 0;
  display: grid;
  height: 11em;
  width: 14em;
  grid-template-columns: 12% 8% 20% 40% 20%;
  grid-template-rows: 30% 25% 35% 10%;
  animation: hippoSnap 1s ease-in-out infinite;
}

/* .hippo-head:hover{
  animation: hippoSnap 1s ease-in-out;
  animation-iteration-count: infinite;
} */

.hippoSkin{
  background-color: var(--hippoBody);
}

.hippo-head-junction1{
  grid-column: 1/4;
  position: relative;
}

.hippo-head .hippo-se-sharp{
  border-left-width: 0em;
}

.hippo-head .hippo-ne{
  border-left-width: 0em;
  border-bottom-width: 0em;
}

.hippo-head-junction2{
  grid-column: 1/3;
}

.hippoEar{
  position: absolute;
  left: 0.4em;
  height: 1.8em;
  width: 2.2em;
  background-color: var(--hippoBody);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-left-style: solid;
  border-top-style: solid;
  display: grid;
  justify-items: flex-end;
  align-items: flex-end;
  transform: rotate(50deg);
  animation: hippoWiggle 5s ease-in;
  animation-iteration-count: infinite;
}

.hippoEar-in{
  height: 60%;
  width: 70%;
  border-radius: 100%;
  background-color: var(--hippoEar);
}

.hippo-head-junction3{
  grid-column: 4/5;
  grid-row: 2/4; 
  position: relative;
}

.hippo-head-junction4{
  grid-column: 2/4;
  grid-row: 3/4;
  /*clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 70% 90%, 50% 80%);*/
}

.hippoEye1{
  position: absolute;
  height: 1em;
  width: 0.6em;
  background-color: var(--hippoEye);
  border-radius: 50%;
  left: 1.7em;
  top: 1em;
}

.hippoEye2{
  position: absolute;
  height: 1em;
  width: 0.6em;
  background-color: var(--hippoEye);
  border-radius: 50%;
  right: 0em;
}

.hippo-jaw{
  position: absolute;
  z-index: 4;
  right: 0.8em;
  top: 6.4em;
  display: grid;
  height: 5em;
  width: 13em;
  grid-template-columns: 40% 60%;
  transform: rotate(5deg) skewY(6deg);
}

.hippo-jaw .hippo-ne{
  border-left-width: 0em;
  border-bottom-left-radius: 90%;
}

.hippoEnd{
  border-top-right-radius: 4em;
}

.hippoMouth{
  background-color: var(--hippoMouth);
  height: 50%;
  position: relative;
  overflow: hidden;
}

.hippoMouth-area{
  height: 100%;
  width: 100%;
  display: grid;
}

.hippoMouth-area .hippo-ne{
  height: 70%;
  width: 60%;
  border-width: 0em;
  justify-self: flex-end;
}

.hippoMouth-area .hippo-nw{
  height: 70%;
  width: 95%;
  border-width: 0em;
}

.hippoTooth{
  position: absolute;
  background-color: var(--hippoTeeth);
  height: 0.8em;
  width: 0.6em;
}

.hippoTooth:nth-child(1){
  bottom: 0em;
  left: 4.1em;
  transform: rotate(-5deg);
}

.hippoTooth:nth-child(2){
  bottom: 2.5em;
  left: 6.6em;
  transform: rotate(-65deg);
}

/*===================
// CURVE SHAPES 
===================*/

.hippo-se{
  border-top-left-radius: 20em;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-top-style: solid;
  border-left-style: solid;
  border-top-left-radius: 100%;
}

.hippo-se-sharp{
  border-top-left-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-top-style: solid;
  border-left-style: solid;
  border-top-left-radius: 100%;
}

.hippo-ne{
  border-bottom-left-radius: 20em;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-bottom-left-radius: 16em;
}

.hippo-ne-sharp{
  border-bottom-left-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-bottom-left-radius: 100%;
}

.hippo-nw{
  border-bottom-right-radius: 20em;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-bottom-style: solid;
  border-right-style: solid;
  border-bottom-right-radius: 16em;
}

.hippo-nw-sharp{
  border-bottom-right-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-bottom-style: solid;
  border-right-style: solid;
  border-bottom-right-radius: 100%;
}

.hippo-sw{
  border-top-right-radius: 20em;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-top-style: solid;
  border-right-style: solid;
  border-top-right-radius: 100%;
}

.hippo-sw-sharp{
  border-top-right-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.4em;
  border-color: var(--hippoOutline);
  border-top-style: solid;
  border-right-style: solid;
  border-top-right-radius: 100%;
}

.hippo-south-cap{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
}

@keyframes hippoBouncing{
  0%{
    top: 0em;
  }
  50%{
    top: 0em;
  }
  60%{
    top: 0.4em;
  }
  70%{
    top: 0em;
  }
  100%{
    top: 0em;
  }
}

@keyframes hippoSnap{
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(-30deg) translateY(-1em);
  }
  75%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

@keyframes hippoWiggle{
  78%{
    transform: rotate(50deg);
    top: 0;
  }
  80%{
    transform: rotate(0deg);
    top: 0.6em;
  }
  82%{
    transform: rotate(50deg);
    top: 0;
  }
}

@keyframes hippoWhip{
  0%{
    transform: rotate(0deg);
    top: 3.8em;
    left: -1.5em;
  }
  2%{
    transform: rotate(30deg);
    top: 1.8em;
    left: -2.5em;
  }
  10%{
    transform: rotate(0deg);
    top: 3.8em;
    left: -1.5em;
  }
}
</style>