<script>
  export let bodyColor = "#3e4044"
  export let cupInnerColor = "#aa3333"
  export let drinkColor = "linear-gradient(120deg, #608850 0%, #78AE60, #88BB80 80%, #67A070 90%, #656840 100%)"
  export let blossomColor = "#ffc0cb"
  export let woodColor = "#565144"
  export let woodTopColor = "linear-gradient(to top, tan, rgb(170, 146, 113))"
  export let paperColor = "#dd9922"
  export let ripple = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }
  window.genId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
</script>

<div class="artboard" id={window.genId}>
  <div id="matcha">
    <div class="matcha-blossom">
      <div class="stabilize">
        <div class="matcha-half-height"><div class="matcha-petal" style="background-color:{blossomColor};"></div></div>
        <div class="matcha-half-height"><div class="matcha-petal" style="background-color:{blossomColor};"></div></div>
        <div class="matcha-half-height"><div class="matcha-petal" style="background-color:{blossomColor};"></div></div>
        <div class="matcha-half-height"><div class="matcha-petal" style="background-color:{blossomColor};"></div></div>
        <div class="matcha-half-height"><div class="matcha-petal" style="background-color:{blossomColor};"></div></div>
      </div>
    </div>
    <div class="teamatcha-string">
      <div class="matcha-string"></div>
      <div class="tea-paper">
        <div class="tea-paper-top" style="background-image: radial-gradient(circle, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 20%, {paperColor} 20%, {paperColor} 100%);"></div>
        <div class="tea-paper-bottom" style="background-color:{paperColor};"></div>
      </div>
    </div>
    <div class="matcha-set">
      <div class="matcha-cup">
        <div class="matcha-cup-front">
          <div class="matcha-cup-front-top" style="background-image:radial-gradient(ellipse at top, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 71%, {bodyColor} 71.5%);"></div>
          <div class="matcha-cup-front-bottom" style="background-image:linear-gradient(to top, #1e1e1e 0%, {bodyColor} 100%);"></div>
        </div>
        <div class="matcha-drink">
          <div class="stabilize">
            <div class="surface" style="
              background: {drinkColor};
              animation-iteration-count:{ripple.iterationCount}; 
              animation-delay:{ripple.delay};
              animation-duration:{ripple.duration};
            "></div>
          </div>
        </div>
        <div class="matcha-cup-back" style="background-image: radial-gradient(ellipse at bottom, #2e2e2e 0%, {cupInnerColor} 70%);"></div>
      </div>
      <div class="matcha-wood" style="background-color:{woodColor};">
        <div class="matcha-wood-inner" style="background:{woodTopColor};"></div>
      </div>
    </div>
    <div class="matcha-handle" style="border-color:{bodyColor};"></div>
  </div>
</div>

<span>
  <script>
    // Resize artboard to fit container
    resize()
    function resize(){
      let artboard = document.getElementById(window.genId)
      let targetHeight = artboard.parentElement.clientHeight
      let targetWidth = artboard.parentElement.clientWidth
      let artboardHeight = artboard.clientHeight
      let artboardWidth = artboard.clientWidth
      let scale = Math.min(targetHeight/artboardHeight, targetWidth/artboardWidth)
      artboard.style.transform = "scale(" + scale + ")"
      artboard.style.transformOrigin = "0 0"
    }
    window.onresize = function(){
      resize()
    }
  </script>
</span>

<style>
:root{
  --matcha-cup: #3e4044;
  --matcha-cupInner: #aa3333;
  --matcha-drink: linear-gradient(120deg, #608850 0%, #78AE60, #88BB80 80%, #67A070 90%, #656840 100%);
  --matcha-wood: #565144;
  --tea-paper: #dd9922;
  --matcha-woodTop: linear-gradient(to top, tan, rgb(170, 146, 113));
  --matcha-blossom: #ffc0cb;
}

#matcha{
  position: relative;
  height: 17em;
  width: 20em;
}

.artboard{
  height: max-content;
  width: max-content;
}

.matcha-cup{
  height: max-content;
  margin-left: 1.85em;
}

.matcha-set:hover, .teamatcha-string:hover, .matcha-blossom:hover{
  cursor: pointer;
}

.matcha-set{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto; 
}

.matcha-cup-front{
  position: absolute;
  z-index: 5;
  top: 4em;
  height: 10em;
  width: 15em;
  display: grid;
  grid-template-rows: 30% 1fr;
}

.matcha-cup-front-top{
  background-image: radial-gradient(ellipse at top, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 71%, var(--matcha-cup) 71.5%);
}

.matcha-cup-front-bottom{
  background-image: linear-gradient(to top, #1e1e1e 0%, var(--matcha-cup) 100%);
  border-bottom-left-radius: 9em;
  border-bottom-right-radius: 9em;
}

.matcha-drink{
  position: absolute;
  z-index: 4;
  background-image: var(--matcha-drink);
  top: 2.5em;
  height: 7em;
  width: 15em;
  border-radius: 100%;
  overflow: hidden;
}

.stabilize{
  height: 100%;
  width: 100%;
  position: relative;
}

.surface{
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(ellipse, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 100%);
  animation: surface 3s ease-out infinite;
}

/* .surface:hover{
  animation: surface 3s ease-out infinite;
} */

.matcha-cup-back{
  position: absolute;
  z-index: 3;
  background-image: radial-gradient(ellipse at bottom, #2e2e2e 0%, var(--matcha-cupInner) 70%);
  height: 8em;
  width: 15em;
  border-radius: 100%;
}

.matcha-wood{
  position: relative;
  overflow: hidden;
  background-color: var(--matcha-wood);
  height: 6.5em;
  width: 100%;
  /*transform: translateX(-1.85em);*/
  border-radius: 40%;
}

.matcha-wood-inner{
  position: absolute;
  height: 55%;
  width: 100%;
  background-image: var(--matcha-woodTop);
  border-radius: 9em;
}

.teamatcha-string{
  position: absolute;
  z-index: 6;
  top: 37%;
  left: 20%;
  height: 40%;
  width: 2em;
  display: grid;
  grid-template-rows: 1fr 50%; 
  justify-items: center;
}

.matcha-string{
  background-color: gainsboro;
  width: 2px;
  transform: translateY(0.5em);
  z-index: 2;
}

.tea-paper{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 50%, 50%;
}

.tea-paper-top{
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  background-image: radial-gradient(circle, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 20%, var(--tea-paper) 20%, var(--tea-paper) 100%);
}

.tea-paper-bottom{
  background-color: var(--tea-paper);
}

.matcha-blossom{
  position: absolute;
  z-index: 7;
  top: 60%;
  right: 15%;
  height: 5em;
  width: 5em;
}

.matcha-petal{
  height: 100%;
  width: 2.3em;
  background-color: var(--matcha-blossom);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
}

.matcha-half-height{
  height: 100%;
  width: 100%;
  position: absolute;
  display: grid;
  grid-template-rows: 50% 50%;
}

.matcha-half-height:nth-of-type(2){
  transform: rotate(72deg);
  filter:brightness(90%);
}
.matcha-half-height:nth-of-type(3){
  transform: rotate(144deg);
  filter:brightness(83%);
}
.matcha-half-height:nth-of-type(4){
  transform: rotate(216deg);
  filter:brightness(75%);
}
.matcha-half-height:nth-of-type(5){
  transform: rotate(288deg);
  filter:brightness(83%);
}

.matcha-handle{
  position: absolute;
  z-index: 1;
  height: 4em;
  width: 3.5em;
  top: 4em;
  right: 0;
  filter: brightness(85%);
  border-style: solid;
  border-width: 1.25em;
  border-color: var(--matcha-cup);
  border-bottom-right-radius: 3em;
  border-top-right-radius: 3em;
  border-top-left-radius: 3em;
}


@keyframes surface{
  0% {
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.01) 3%, rgba(255,255,255,0.15) 5%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.01) 15%, rgba(255,255,255,0.01) 43%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.01) 85%);
  }
  20% {
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.01) 20%, rgba(255,255,255,0.01) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.01) 90%);
  }
  35% {
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 10%, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.01) 25%, rgba(255,255,255,0.01) 48%, rgba(255,255,255,0.1) 55%, rgba(255,255,255,0.01) 95%);
  }
  50%{
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 15%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.01) 30%, rgba(255,255,255,0.01) 58%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.01) 100%);
  }
  70%{
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 20%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0.01) 60%, rgba(255,255,255,0.01) 68%, rgba(255,255,255,0.1) 70%);
  }
  85%{
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.15) 5%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.01) 30%, rgba(255,255,255,0.01) 45%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.01) 80%);
  }
  100% {
    background-image: radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.01) 15%, rgba(255,255,255,0.01) 30%, rgba(255,255,255,0.1) 68%, rgba(255,255,255,0.01) 100%);
  }
}
</style>