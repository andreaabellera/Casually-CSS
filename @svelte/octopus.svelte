<script>
  import { onMount } from "svelte";

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
  <div id="octopus">
    <div class="octopus">
        <div class="octo-head">
          <div class="octo-head-junction1">
            <div class="octo-skin octo-se-sharp">
              <div class="octo-spot octo-spot1"></div>
              <div class="octo-spot octo-spot2"></div>
            </div>
          </div>
          <div class="octo-head-junction2 octo-skin">   </div>
          <div class="octo-head-junction3">
            <div class="octo-skin octo-sw-sharp">
              <div class="octo-spot octo-spot3"></div>
            </div>
          </div>
          <div class="octo-head-junction4 octo-skin">     </div>
          <div class="octo-head-junction5">   <div class="octo-skin octo-ne-sharp"></div>   </div>
          <div></div>
          <div class="octo-skin">   <div class="emboss octo-se"></div>   </div>
          <div class="emboss octo-half-height">   <div class="octo-skin octo-ne-sharp"></div>   </div>
          <div class="emboss octo-half-height">   <div class="octo-skin octo-nw"></div>         </div>
          <div class="octo-half-width">   <div class="emboss octo-sw"></div>   </div>
          <div></div>
          <div></div>
          <div class="octo-eye octo-ne">  <div class="octo-eyeball octo-nw"></div>    </div>
          <div class="emboss octo-half-height"><div></div>   <div class="octo-skin octo-se-sharp"></div>   </div>
          <div class="emboss octo-half-height"><div></div>   <div class="octo-skin octo-sw"></div>         </div>
          <div class="octo-half-width">
            <div class="octo-eye octo-nw three-fourth-height">  
              <div class="octo-eyeball octo-nw-sharp"></div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div class="octo-head-junction4 octo-skin octo-se">   </div>
          <div class="octo-half-width">    <div class="octo-skin octo-sw"></div>   </div>
        </div>
      </div>
      
        <div class="octo-arms">
          <div class="octo-arms-junction1"></div>
          <div class="octo-arms-junction2 emboss">   <div class="octo-skin octo-cap"></div>    </div>
        </div>
        <div class="octo-arm octo-arm1">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
          <div class="octo-arm-junction3 octo-ne octo-inverted-n"></div>
          <div class="octo-arm-junction5 octo-skin octo-nw-sharp"></div>
        </div>
        <div class="octo-arm octo-arm2">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
        </div>
        <div class="octo-arm octo-arm3">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
          <div class="octo-arm-junction3 octo-ne octo-inverted-n"></div>
          <div class="octo-arm-junction5 octo-skin octo-nw-sharp"></div>
        </div>
        <div class="octo-arm octo-arm4">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
          <div class="octo-arm-junction3 octo-ne octo-inverted-n"></div>
          <div class="octo-arm-junction5 octo-skin octo-nw-sharp"></div>
        </div>
        <div class="octo-arm octo-arm5">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
        </div>
        <div class="octo-arm octo-arm6">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
          <div class="octo-arm-junction3 octo-ne octo-inverted-n"></div>
          <div class="octo-arm-junction5 octo-skin octo-nw-sharp"></div>
        </div>
        <div class="octo-arm octo-arm7">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
        </div>
        <div class="octo-arm octo-arm8">
          <div></div>
          <div class="octo-arm-junction1 octo-nw octo-inverted-n"></div>
          <div class="octo-skin"></div>
          <div></div>
          <div class="octo-skin"></div>
          <div class="octo-arm-junction2 octo-skin octo-se-sharp"></div>
          <div class="octo-skin"></div>
          <div class="octo-skin octo-nw-sharp"></div>
          <div class="octo-arm-junction3 octo-se octo-inverted"></div>
          <div class="octo-arm-junction4 octo-skin octo-ne-sharp"></div>
          <div class="octo-arm-junction3 octo-ne octo-inverted-n"></div>
          <div class="octo-arm-junction5 octo-skin octo-nw-sharp"></div>
        </div>
  </div>
</div>

<style>
:root{
  --octo-skin: lightpink;
  --emboss: linear-gradient(pink, rgb(250, 208, 216)); 
  --octo-spot: linear-gradient(whitesmoke, lightgrey);
  --octo-eye: radial-gradient(white, gainsboro);
  --octo-eyeball: radial-gradient(#5e5e5e, #1e1e1e); 
}

#octopus{
  display: grid;
  justify-items: center;
  align-items: center;
}

.artboard{
  height: max-content;
  width: max-content;
}

.octopus{
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.octopus:hover{
  cursor: pointer;
}

.octo-head{
  position: relative;
  height: auto;
  width: auto;
  display: grid;
  grid-template-columns: 3em 3em 3em 3em 3em 3em;
  grid-template-rows: 3em 3em 3em 3em 3em 3em 2em;
}

.octo-skin{
  background-color: var(--octo-skin);
}

.emboss{
  background: var(--emboss);
}

.octo-spot{
  background: var(--octo-spot);
  position: absolute;
}

.octo-spot1{
  height: 2em;
  width: 1em;
  bottom: 2em;
  right: 4em;
  border-radius: 80%;
  transform: rotateY(-40deg) rotateZ(20deg);
}

.octo-spot2{
  height: 2em;
  width: 1.6em;
  bottom: 0em;
  right: 0em;
  border-top-right-radius: 100%;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 100%;
}

.octo-spot3{
  height: 4em;
  width: 3em;
  top: 2em;
  left: 0em;
  border-radius: 3em;
  transform: rotateY(20deg) rotateX(30deg);
}


.octo-eye{
  background: var(--octo-eye);
  overflow: hidden;
}

.octo-eyeball{
  background: var(--octo-eyeball);
}

.octo-head-junction1{
  position: relative;
  grid-row: 1/4;
  grid-column: 1/3;
}

.octo-head-junction2{
  grid-row: 1/4;
}

.octo-head-junction3{
  position: relative;
  grid-column: 4/6;
  grid-row: 1/4;
}

.octo-head-junction4{
  grid-column: 3/6;
}

.octo-head-junction5{
  grid-column: 1/3;
  grid-row: 4/6;
}

.octo-arms{
  position: relative;
  z-index: 2;
  height: 6em;
  width: auto;
  display: grid;
  grid-template-columns: 3em 3em 3em 3em 3em 1.5em 1.5em;
}

.octo-arms-junction1{
  grid-column: 1/3;
}

.octo-arms-junction2{
  grid-column: 3/7;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 8em;
}

.octo-arm{
  position: absolute;
  display: grid;
  grid-template-columns: 3em 3em 3em;
  grid-template-rows: 16% 16% 16% 16% 16% 16%;
}

.octo-arm-junction1{
  grid-row: 1/3;
  grid-column: 2/3; 
}

.octo-arm-junction2{
  grid-row: 3/5;
  grid-column: 1/2; 
}

.octo-arm-junction3{
  grid-row: 4/6;
  grid-column: 2/3; 
}

.octo-arm-junction4{
  grid-row: 5/7;
  grid-column: 1/2;
}

.octo-arm-junction5{
  grid-row: 6/7;
  grid-column: 2/4; 
}

.octo-arm1{
  transform: translate(-9.5em, 8em) rotateZ(90deg);
  height: 16em;
}

.octo-arm2{
  transform: translate(-9em, 14em) rotateZ(60deg);
  height: 18em;
}

.octo-arm3{
  transform: translate(-6em, 17em) rotateZ(35deg);
  height: 17em;
}

.octo-arm4{
  transform: translate(1em, 18em) rotateZ(35deg) rotateY(180deg);
  height: 16em;
}

.octo-arm5{
  transform: translate(4.5em, 19em) rotateZ(20deg) rotateY(180deg);
  height: 18em;
}

.octo-arm6{
  transform: translate(8em, 18em) rotateZ(-40deg);
  height: 16em;
}

.octo-arm7{
  transform: translate(12em, 13em) rotateZ(-70deg);
  height: 16em;
  z-index: 0;
}

.octo-arm8{
  transform: translate(13em, 11em) rotateZ(-95deg);
  height: 16em;
  z-index: 0;
}

.octo-arm:hover{
  cursor: pointer;
  animation: octo-stretch 1s ease-in;
}

/*===================
// CURVE SHAPES 
===================*/

.octo-inverted{
  background-color: rgba(0,0,0,0);
  box-shadow: 0em -2.3em 0em 0em var(--octo-skin);
}

.octo-inverted-n{
  background-color: rgba(0,0,0,0);
  box-shadow: 0em 2.3em 0em 0em var(--octo-skin);
}

.octo-half-height{
  display: grid;
  grid-template-rows: 50% 50%;
}

.octo-half-width{
  display: grid;
  grid-template-columns: 50% 50%;
}

.three-fourth-height{
  display: grid;
  grid-template-rows: 75% 25%;
}

.octo-se{
  border-top-left-radius: 20em;
  height: 100%;
  width: 100%;
}

.octo-se-sharp{
  border-top-left-radius: 100%;
  height: 100%;
  width: 100%;
}

.octo-ne{
  border-bottom-left-radius: 20em;
  height: 100%;
  width: 100%;
}

.octo-ne-sharp{
  border-bottom-left-radius: 100%;
  height: 100%;
  width: 100%;
}

.octo-nw{
  border-bottom-right-radius: 20em;
  height: 100%;
  width: 100%;
}

.octo-nw-sharp{
  border-bottom-right-radius: 100%;
  height: 100%;
  width: 100%;
}

.octo-sw{
  border-top-right-radius: 20em;
  height: 100%;
  width: 100%;
}

.octo-sw-sharp{
  border-top-right-radius: 100%;
  height: 100%;
  width: 100%;
}

.octo-cap{
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  height: 70%;
  width: 100%;
}

@keyframes octo-stretch{
  0%{
    height: 16em;
  }
  50%{
    height: 20em;
  }
  100%{
    height: 16em;
  }
}
</style>