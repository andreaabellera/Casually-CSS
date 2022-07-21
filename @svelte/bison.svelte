<script>
  import { onMount } from "svelte";
  export let outlineColor = "black"
  export let hairColor = "#37291E"
  export let bodyColor = "#564C45"
  export let hornColor = "#E7E3DA"
  export let noseColor = "#3F3F3F"
  export let footworkFR = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "8s"
  }
  export let footworkFL = {
    iterationCount: "infinite",
    delay: "6s",
    duration: "8s"
  }
  export let footworkBL = {
    iterationCount: "infinite",
    delay: "2s",
    duration: "8s"
  }
  export let footworkBR = {
    iterationCount: "infinite",
    delay: "4s",
    duration: "8s"
  }
  export let dancing = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "4s"
  }
  export let swaying = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "0.8s"
  }
  export let gazing = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "10s"
  }
  export let chewing = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "8s"
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
  <div id="bison">
    <div class="bison">
        <div class="bison-upper" style="
          animation-iteration-count:{dancing.iterationCount}; 
          animation-delay:{dancing.delay};
          animation-duration:{dancing.duration};
        ">
          <div class="bison-bisHorn bisHorn-left" style="
            background-image: radial-gradient(ellipse at top right, 
            rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, 
            {outlineColor} 51%, {outlineColor} 54%, 
            {hornColor} 55%) !important;
            border-color: {outlineColor};
          "></div>
          <div class="bison-bisHorn bisHorn-right" style="
            background-image: radial-gradient(ellipse at top right, 
            rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, 
            {outlineColor} 51%, {outlineColor} 54%, 
            {hornColor} 55%) !important;
            border-color: {outlineColor};
          "></div>
          <div class="bison-mustache bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bison-bisEar bisEar-left bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bison-bisEar bisEar-right bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bison-bisHead">
            <div class="bisHead-top">
              <div class="bis-se-sharp bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
              <div class="bis-sw-sharp bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
            </div>
            <div class="bisHead-bottom" style="border-color:{outlineColor};">
              <div class="bis-ne-sharp bisFur bisStabilize" style="border-color:{outlineColor}; background-color:{bodyColor};">
                <div class="bisEye bisEye-left" style="
                  border-color:{outlineColor};
                  animation-iteration-count:{gazing.iterationCount}; 
                  animation-delay:{gazing.delay};
                  animation-duration:{gazing.duration};
                ">
                  <div class="bisEye-pupil-left" style="background-color:{outlineColor};"></div>
                </div>
              </div>
              <div class="bisFur bisStabilize" style="background-color:{bodyColor};">
                <div class="bison-bisNose">
                  <div class="bisNose-top" style="border-color:{outlineColor}; background-color:{noseColor};">
                    <div class="bisNostril-left" style="background-color:{outlineColor};"></div>
                    <div class="bisNostril-right" style="background-color:{outlineColor};"></div>
                  </div>
                  <div class="bisNose-bottom" style="
                    border-color:{outlineColor};
                    background-color:{noseColor};
                    animation-iteration-count:{chewing.iterationCount}; 
                    animation-delay:{chewing.delay};
                    animation-duration:{chewing.duration};
                  "></div>
                </div>
              </div>
              <div class="bis-nw-sharp bisFur bisStabilize" style="border-color:{outlineColor}; background-color:{bodyColor};">
                <div class="bisEye bisEye-right" style="
                  border-color:{outlineColor};
                  animation-iteration-count:{gazing.iterationCount}; 
                  animation-delay:{gazing.delay};
                  animation-duration:{gazing.duration};
                ">
                  <div class="bisEye-pupil-right" style="background-color:{outlineColor};"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="bison-bisHair">
            <div class="bis-se-sharp bisHair bis-sect1" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            <div class="bis-sw-sharp bisHair bis-sect2" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            <div class="bis-seg1">
              <div class="bis-ne-sharp bisHair" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            </div>
            <div class="bis-seg2">
              <div class="bisHair" style="background-color:{hairColor};"></div>
              <div class="bis-nw-sharp bisHair" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            </div>
            <div class="bis-seg3">
              <div class="bisHair" style="background-color:{hairColor};"></div>
              <div class="bis-ne-sharp bisHair" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            </div>
            <div class="bis-seg3">
              <div class="bisHair" style="background-color:{hairColor};"></div>
              <div class="bis-nw-sharp bisHair" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            </div>
            <div class="bis-seg4">
              <div class="bis-nw-sharp bisHair" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
            </div>
          </div>
          <div class="bison-body bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bison-tail" style="
            animation-iteration-count:{swaying.iterationCount}; 
            animation-delay:{swaying.delay};
            animation-duration:{swaying.duration};
          ">
            <div></div>
            <div class="bis-tail1 bis-se-sharp bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
            <div></div>
            <div class="bis-tail2 bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"><div class="bis-tail-line" style="background-color:{outlineColor};"></div></div>
            <div class="bis-tail3 bisHair" style="border-color:{outlineColor}; background-color:{hairColor};"></div>
          </div>
        </div>
        <div class="bison-leg bis-front-near" style="
          animation-iteration-count:{footworkFR.iterationCount}; 
          animation-delay:{footworkFR.delay};
          animation-duration:{footworkFR.duration};
        ">
          <div class="bis-leg-top bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bis-leg-bottom bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
        </div>
        <div class="bison-leg bis-front-far" style="
          animation-iteration-count:{footworkFL.iterationCount}; 
          animation-delay:{footworkFL.delay};
          animation-duration:{footworkFL.duration};
        ">
          <div class="bis-leg-top bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bis-leg-bottom bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
        </div>
        <div class="bison-leg bis-back-near" style="
          animation-iteration-count:{footworkBR.iterationCount}; 
          animation-delay:{footworkBR.delay};
          animation-duration:{footworkBR.duration};
        ">
          <div class="bis-leg-top bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bis-leg-bottom bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
        </div>
        <div class="bison-leg bis-back-far" style="
          animation-iteration-count:{footworkBL.iterationCount}; 
          animation-delay:{footworkBL.delay};
          animation-duration:{footworkBL.duration};
        ">
          <div class="bis-leg-top bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
          <div class="bis-leg-bottom bisFur" style="border-color:{outlineColor}; background-color:{bodyColor};"></div>
        </div>
    </div>
  </div>
</div>

<style>
:root{
  --bisOutline: black;
  --bisHair: #37291E;
  --bisFur: #564C45;
  --bisHorn: #E7E3DA;
  --bisNose: #3F3F3F;
}

#bison{
  position: relative;
  height: 26em;
  width: 35em;
}

.artboard{
  height: max-content;
  width: max-content;
}

.bison, .bison-upper{
  position: relative;
  z-index: 3;
  height: inherit;
  width: inherit;
}

.bison:hover{
  cursor: pointer;
}

.bison-upper{
  animation: bisDancing 4s ease-in-out infinite;
}

/* .bison-upper:hover{
  animation: bisDancing 4s ease-in-out infinite;
} */

.bisHair{
  background-color: var(--bisHair);
}

.bisFur{
  background-color: var(--bisFur);
}

.bison-body{
  position: absolute;
  z-index: 2;
  left: 2em;
  top: 2em;
  height: 18em;
  width: 26em;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-style: solid;
  border-top-left-radius: 100%;
  border-top-right-radius: 60%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 90%;
}

.bison-bisHead{
  position: absolute;
  z-index: 4;
  right: 3.5em;
  top: 2em;
  height: 15em;
  width: 12em;
  display: grid;
  grid-template-rows: 35% 65%;
}

.bison-bisNose{
  position: absolute;
  z-index: 6;
  height: 3em;
  width: 4em;
  left: 1.2em;
  top: 60%;
  display: grid;
  grid-template-rows: 65% 35%;
  justify-items: center;
}

.bisNose-top{
  position: relative;
  width: 100%;
  background-color: var(--bisNose);
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-style: solid;
  border-top-left-radius: 90%;
  border-top-right-radius: 90%;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
  overflow: hidden;
}

.bisNostril-left{
  position: absolute;
  z-index: 8;
  top: 0.5em;
  height: 0.75em;
  width: 1em;
  background-color: var(--bisOutline);
  border-radius: 100%;
  transform: rotate(45deg);
}

.bisNostril-right{
  position: absolute;
  z-index: 8;
  right: 0;
  top: 0.5em;
  height: 0.75em;
  width: 1em;
  background-color: var(--bisOutline);
  border-radius: 100%;
  transform: rotate(-45deg);
}

.bisNose-bottom{
  background-color: var(--bisNose);
  border-width: 0.3em;
  width: 80%;
  border-color: var(--bisOutline);
  border-style: solid;
  border-top-style: none;
  border-bottom-left-radius: 3em;
  border-bottom-right-radius: 3em;
  animation: bisChewing 8s linear infinite;
}

.bison-mustache{
  position: absolute;
  z-index: 6;
  right: 6em;
  top: 17em;
  height: 1.5em;
  width: 4.8em;
  filter: brightness(80%);
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-style: solid;
  border-top-style: none;
  border-bottom-left-radius: 5em;
  border-bottom-right-radius: 5em;
}

.bisHead-top{
  display: grid;
  grid-template-columns: 60% 45%;
}

.bisHead-bottom{
  display: grid;
  grid-template-columns: 35% 40% 30%;
  border-color: var(--bisOutline);
  border-bottom-left-radius: 65%;
  border-bottom-right-radius: 50%;
}

.bison-bisHorn{
  position: absolute;
  z-index: 4;
  top: 1.5em;
  height: 4em;
  width: 4em;
  background-image: radial-gradient(ellipse at top right, 
  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, 
  var(--bisOutline) 51%, var(--bisOutline) 54%, var(--bisHorn) 55%);
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-bottom-left-radius: 80%;
  border-top-left-radius: 50%;
}

.bisHorn-left{
  left: 18em;
}

.bisHorn-right{
  left: 29em;
  transform: rotateY(180deg);
}

.bison-bisEar{
  position: absolute;
  z-index: 5;
  top: 6em;
  height: 2.5em;
  border-width: 0.3em;
  border-color: var(--bisOutline);
}

.bisEar-left{
  right: 15em;
  width: 3em;
  border-style: solid;
  border-right-style: none;
  border-bottom-left-radius: 90%;
  border-top-left-radius: 10%;
  border-top-right-radius: 40%;
}

.bisEar-right{
  right: 0;
  width: 3em;
  border-style: solid;
  border-left-style: none;
  border-bottom-right-radius: 90%;
  border-top-right-radius: 10%;
  border-top-left-radius: 40%;
}

.bisStabilize{
  position: relative;
}

.bisEye{
  position: absolute;
  top: 1em;
  z-index: 6;
  height: 2.5em;
  background-color: whitesmoke;
  border-width: 0.2em;
  border-color: var(--bisOutline);
  border-style: solid;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  animation: bisGazing 10s linear infinite;
}

.bisEye-left{
  right: 0;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 3em;
  border-bottom-right-radius: 40%;
  border-top-right-radius: 40%;
  width: 1.25em;
  justify-content: flex-end;
}

.bisEye-right{
  left: 40%;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 3em;
  border-bottom-left-radius: 40%;
  border-top-left-radius: 40%;
  width: 1em;
}

.bisEye-pupil-left{
  height: 80%;
  width: 70%;
  background-color: var(--bisOutline);
  border-top-left-radius: 3em;
  border-bottom-left-radius: 3em;
}

.bisEye-pupil-right{
  height: 80%;
  width: 70%;
  background-color: var(--bisOutline);
  border-top-right-radius: 3em;
  border-bottom-right-radius: 3em;
}

.bison-bisHair{
  position: absolute;
  z-index: 3;
  top: 0;
  right: 2.5em;
  height: 23em;
  width: 24em;
  display: grid;
  grid-template-rows: 6em 1fr;
  grid-template-columns: 35% 10% 20% 10% 25%;
}

.bison-tail{
  animation: bisSwaying 0.8s ease-in-out infinite;
}

.bis-sect1{
  grid-column: 1/4;
}

.bis-sect2{
  grid-column: 4/6;
}

.bis-seg1{
  height: 85%;
}

.bis-seg2{
  display: grid;
  grid-template-rows: 70% 15%;
}

.bis-seg3{
  display: grid;
  grid-template-rows: 70% 30%;
}

.bis-seg4{
  display: grid;
  grid-template-rows: 80% 20%;
}

.bison-tail{
  position: relative;
  z-index: 3;
  height: auto;
  width: 3.5em;
  display: grid;
  grid-template-rows: 4.5em 4.5em 1em;
  grid-template-columns: 50% 50%;
  left: 0;
  top: 10em;
}

.bison-tail .bis-se-sharp{
  border-top-width: 0em;
}

.bis-tail1{
  border-color: var(--bisOutline);
  border-left-style: solid;
}

.bis-tail2{
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-left-style: solid;
  clip-path: polygon(0% 0%, 69% 0%, 29% 100%, 0% 100%);
}

.bis-tail-line{
  width: 0.4em;
  height: 100%;
  background-color: var(--bisOutline);
  transform: rotate(5deg);
  clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.bis-tail3{
  grid-column: 1/3;
  border-top-right-radius: 50%;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 50%;
  transform: rotate(90deg);
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-style: solid;
}


.bison-leg{
  position: absolute;
  height: 9em;
  width: 6em;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 45% 55%;
}

.bis-leg-top{
  grid-column: 1/3;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-bottom-right-radius: 80%;
  border-bottom-left-radius: 90%;
}

.bis-leg-bottom{
  grid-column: 1/2;
  grid-row: 2/3;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-left-radius: 40%;
  transform: translate(1em, -1em);
}

.bis-front-near{
  z-index: 2;
  top: 18em;
  left: 16em;
  overflow: hidden;
  animation: bisFootwork 8s ease-in-out infinite;
}

.bis-front-far{
  z-index: 1;
  top: 17em;
  left: 24em;
  filter: brightness(80%);
  animation: bisFootwork 8s ease-in-out infinite;
  animation-delay: 6s;
}

.bis-back-near{
  z-index: 5;
  top: 18em;
  left: 5em;
  overflow: hidden;
  animation: bisFootwork 8s ease-in-out infinite;
  animation-delay: 4s;
}

.bis-back-far{
  z-index: 1;
  top: 17em;
  left: 11em;
  filter: brightness(80%);
  animation: bisFootwork 8s ease-in-out infinite;
  animation-delay: 2s;
}

/*===================
// COLORS
===================*/

.bisFur{
  background-color: var(--bisFur);
}

.bisHair{
  background-color: var(--bisHair);
}

/*===================
// CURVE SHAPES 
===================*/

.bis-se-sharp{
  border-top-left-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-top-style: solid;
  border-left-style: solid;
}

.bis-ne-sharp{
  border-bottom-left-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-bottom-style: solid;
  border-left-style: solid;
}

.bis-nw-sharp{
  border-bottom-right-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-bottom-style: solid;
  border-right-style: solid;
}

.bis-sw-sharp{
  border-top-right-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--bisOutline);
  border-top-style: solid;
  border-right-style: solid;
}


@keyframes bisChewing{
  0%{
    width: 80%;
  }
  5%{
    width: 50%;
  }
  10%{
    width: 80%;
  }
  15%{
    width: 50%;
  }
  20%{
    width: 80%;
  }
  25%{
    width: 50%;
  }
  30%{
    width: 80%;
  }
}

@keyframes bisGazing{
  10%{
    align-items: center;
  }
  80%{
    align-items: flex-start;
  }
  81%{
    align-items: center;
  }
  82%{
    align-items: flex-end;
  }
}

@keyframes bisSwaying{
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(3deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

@keyframes bisDancing{
  0%{
    transform: translate(0em, 0em);
  }
  25%{
    transform: translate(0.5em, 1em) rotate(3deg);
  }
  50%{
    transform: translate(1em, 0em);
  }
  75%{
    transform: translate(0.5em, 1em);
  }
  100%{
    transform: translate(0em, 0em);
  }
}

@keyframes bisFootwork{
  0%{
    transform: translateY(0em);
  }
  3%{
    transform: translateY(-0.5em);
  }
  5%{
    transform: translateY(0em);
  }
}
</style>