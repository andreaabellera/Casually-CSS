<div id="dugong" class="artboard">
  <div class="dugong">
      <div class="dugong-dugSnout">
        <div class="dugong-half-width dugSnout-top">
          <span class="dugongSkinLight dugong-se dugSnout-part">
            <span class="dugPt dugNose1"></span>
          </span>
          <span class="dugongSkinLight dugong-sw dugSnout-part">
            <span class="dugPt dugNose2"></span>
          </span>
        </div>
        <div class="dugSnout-grid">
          <span class="dugongSkinLight dugong-ne"></span>
          <span class="dugongSkinLight dugong-nw-sharp"></span>
          <span class="dugongSkinLight dugong-ne-sharp"></span>
          <span class="dugongSkinLight dugong-nw"></span>
        </div>
      </div> 
      <div class="dugong-head">
        <span class="dug-head-junction1">
          <span class="dugongSkin dugong-se-sharp dug-head-part0"><span class="dugPt dugEye1"></span></span>
          <span class="dugongSkin stroke-left"></span>
          <span class="dugongSkin stroke-left"><div class="dugong-ne"></div></span>
        </span>
        <span class="dug-head-part1">
          <span class="dugongSkin stroke-top"></span>
          <span class="dugongSkin dug-head-part3"></span>
        </span>
        <span class="dugongSkin dug-head-part2 stroke-right"><span class="dugPt dugEye2"></span></span>
        <span></span>
        <span class="dugong-half-width">
          <span class="dugongSkin dugong-ne-sharp dugong-half-height">
            <span class="dugongMouth dugongMouth1"></span>
          </span>
          <span class="dugongSkin dugong-nw-sharp dugong-half-height">
            <span class="dugongMouth dugongMouth2"></span>
          </span>
        </span>
      </div>
      <div class="dugong-body">
        <span class="dugongSkin stroke-left"></span>
        <span class="dugongSkin dugong-sw"></span>
        <span></span>
        <span class="dugongSkin stroke-left"></span>
        <span class="dugongSkin dugongTummy-top">
          <div class="dugongSkinDark dugArc">
            <div class="dugongSkin dugArc"></div>
          </div>
        </span>
        <span class="dugongSkin dugong-sw-sharp"></span>
        <span class="dugongSkinDark body-junction1">    <div class="dugongTummy"></div>   </span>
      </div>
      <div class="dugong-tail">
        <span class="dugong-tail-left"></span>
        <span class="dugong-tail-right"></span>
      </div>
      <div class="dugong-fin1"></div>
      <div class="dugong-fin2"></div>
  </div>
</div>

<style>
:root{
  --dugongSkin: #84A7C0;
  --dugongSkinLight: #94B7D0;
  --dugongSkinDark: #546790;
  --dugongMouth: lightpink;
  --dugongOutline: #2E2E2E;
}

#dugong{
  height: 26em;
  width: 16em;
}

.dugong{
  position: relative;
  animation: dugong-swim 4s ease-in-out;
  animation-iteration-count: infinite;
}

.dugong:hover{
  cursor: pointer;
}

.dugongSkin{
  background-color: var(--dugongSkin);
}

.dugongSkinLight{
  background-color: var(--dugongSkinLight);
}

.dugongSkinDark{
  background-color: var(--dugongSkinDark);
}

.dugongMouth{
  background-color: var(--dugongMouth);
}

.dugongMouth1{
  justify-self: flex-end;
  border-bottom-left-radius: 100%;
  width: 50%;
}

.dugongMouth2{
  border-bottom-right-radius: 100%;
  width: 50%;
}

.dugPt{
  position: absolute;
  z-index: 6;
  height: 1em;
  width: 0.7em;
  border-radius: 2em;
  background-color: var(--dugongOutline);
}

.dugEye1{
  bottom: -0.5em;
  right: 0;
}

.dugEye2{
  top: 0.3em;
  right: 0.2em;
}

.dugNose1{
  right: 0.5em;
  top: 1em;
  transform: scale(50%) rotate(30deg);
}

.dugNose2{
  left: 0.5em;
  top: 1em;
  transform: scale(50%) rotate(-30deg);
}

.dugong-head{
  position: absolute;
  z-index: 3;
  left: 1.5em;
  display: grid;
  height: 10em;
  width: 9em;
  grid-template-rows: 35% 50% 15%;
  grid-template-columns: 35% 65%;
}

.dugong-head .dugong-ne{
  border-left-width: 0em;
}

.dug-head-junction1{
  grid-column: 1/2;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 50% 20% 30%;
}

.stroke-top{
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-top-style: solid;
}

.stroke-right{
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-right-style: solid;
}

.stroke-left{
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-left-style: solid;
}

.dug-head-part0{
  position: relative;
}

.dug-head-part1{
  display: grid;
  grid-template-columns: 10% 90%;
}

.dug-head-part2{
  position: relative;
  border-top-right-radius: 10%;
}

.dug-head-part3{
  height: 100%;
  width: 95%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-top-style: solid;
  border-right-style: solid;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 1em;
}

.dugong-dugSnout{
  position: absolute;
  z-index: 5;
  top: 5em;
  right: 4.4em;
  height: 5em;
  width: 8em;
  display: grid;
  grid-template-rows: 70% 30%;
}

.dugong-dugSnout:hover{
  animation: dugongTalk 0.7s ease-in;
  animation-iteration-count: infinite;
}

.dugSnout-grid{
  display: grid;
  grid-template-columns: 1fr 15% 15% 1fr;
}

.dugSnout-part{
  position: relative;
}

.dugSnout-top .dugong-sw, .dugSnout-top .dugong-se{
  border-top-width: 0em;
}

.dugSnout-grid .dugong-ne-sharp{
  border-left-width: 0em;
}

.dugSnout-grid .dugong-nw-sharp{
  border-right-width: 0em;
}

.dugong-body{
  position: absolute;
  z-index: 2;
  display: grid;
  height: 15em;
  width: 12em;
  top: 8em;
  left: 1.5em;
  grid-template-rows: 30% 30% 40%;
  grid-template-columns: 20% 1fr 15%;
}

.dugong-body .dugong-sw-sharp{
  border-right-width: 0em;
}

.body-junction1{
  grid-column: 1/4;
  grid-row: 3/4;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-bottom-left-radius: 16em;
  border-bottom-right-radius: 16em;
}

.dugongTummy-top{
  display: grid;
  justify-items: center;
}

.dugArc{
  height: 90%;
  width: 100%;
  border-top-left-radius: 20em;
  display: grid;
  align-items: flex-end;
  justify-items: center;
}

.dugongTummy{
  height: 80%;
  width: 100%;
  border-bottom-left-radius: 20em;
  border-bottom-right-radius: 20em;
  background-color: var(--dugongSkin);
}

.dugong-tail{
  position: absolute;
  z-index: 3;
  top: 19.5em;
  left: 5.5em;
  display: grid;
  grid-template-columns: 55% 45%;
  height: 6em;
  width: 8em;
  transform: rotateX(-60deg) rotateZ(-15deg);
  animation: dugongTailFlip 4s ease-in-out;
  animation-iteration-count: infinite;
}

.dugong-tail-left{
  background-color: var(--dugongSkin);
  border-width: 0.4em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-left-radius: 90%;
  border-bottom-right-radius: 50%;
}

.dugong-tail-right{
  background-color: var(--dugongSkin);
  border-width: 0.4em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-right-radius: 90%;
  border-bottom-left-radius: 50%;
}

.dugong-fin1{
  position: absolute;
  z-index: 4;
  top: 9em;
  left: -1.5em;
  height: 9em;
  width: 4em;
  background-color: var(--dugongSkin);
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-left-radius: 30%;
  border-top-right-radius: 20%;
  border-bottom-left-radius: 90%;
  border-bottom-right-radius: 20%;
  transform: rotate(30deg) rotateY(30deg);
  animation: dugongFlip1 4s ease-in-out;
  animation-iteration-count: infinite;
}

.dugong-fin2{
  position: absolute;
  z-index: 1;
  top: 9em;
  right: 1.5em;
  height: 9em;
  width: 4em;
  background-color: var(--dugongSkinDark);
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-left-radius: 30%;
  border-top-right-radius: 20%;
  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 30%;
  transform: rotate(-40deg) rotateY(-30deg);
  animation: dugongFlip2 4s ease-in-out;
  animation-iteration-count: infinite;
}

/*===================
// CURVE SHAPES 
===================*/

.dugong-half-height{
  display: grid;
  grid-template-rows: 50% 50%;
}

.dugong-half-width{
  display: grid;
  grid-template-columns: 50% 50%;
}

.dugong-se{
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-top-style: solid;
  border-left-style: solid;
  border-top-left-radius: 16em;
}

.dugong-se-sharp{
  border-top-left-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-top-style: solid;
  border-left-style: solid;
}

.dugong-ne{
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-left-style: solid;
  border-bottom-left-radius: 16em;
}

.dugong-ne-sharp{
  border-bottom-left-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-left-style: solid;
}

.dugong-nw{
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-right-style: solid;
  border-bottom-right-radius: 16em;
}

.dugong-nw-sharp{
  border-bottom-right-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-bottom-style: solid;
  border-right-style: solid;
}

.dugong-sw{
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-top-style: solid;
  border-right-style: solid;
  border-top-right-radius: 16em;
}

.dugong-sw-sharp{
  border-top-right-radius: 100%;
  height: 100%;
  width: 100%;
  border-width: 0.3em;
  border-color: var(--dugongOutline);
  border-top-style: solid;
  border-right-style: solid;
}

@keyframes dugongTalk{
  15%{
    transform: translateY(-0.25em) rotate(10deg);
  }
  30%{
    transform: translateY(-0.5em) rotate(-10deg);
  }
  45%{
    transform: translateY(-0.25em) rotate(5deg);
  }
  60%{
    transform: translateY(0em) rotate(0deg);
  }
}

@keyframes dugongTailFlip{
  45%{
    top: 21em;
    transform: rotateX(-30deg) rotateZ(-15deg);
  }
  100%{
    top: 19.5em;
    transform: rotateX(-60deg) rotateZ(-15deg);
  }
}

@keyframes dugong-swim{
  45%{
    transform: translateY(-1em);
  }
  100%{
    transform: translateY(0em);
  }
}

@keyframes dugongFlip1{
  45%{
    top: 9.5em;
    left: -0.5em;
    transform: rotate(15deg) rotateY(0deg);
  }
  100%{
    top: 9em;
    left: -1.5em;
    transform: rotate(30deg) rotateY(30deg);
  }
}

@keyframes dugongFlip2{
  45%{
    right: 3em;
    transform: rotate(-20deg) rotateY(-30deg);
  }
  100%{
    right: 1.5em;
    transform: rotate(-40deg) rotateY(-30deg);
  }
}
</style>