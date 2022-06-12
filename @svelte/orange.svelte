<div id="orange" class="artboard">
  <div class="orangeLeaf">
    <div class="orangeLeaf-1">   </div>
    <div class="orangeLeaf-2">   </div>
    <div class="orangeLeaf-3">   </div>
    <div class="orangeLeaf-4">   
      <span class="deco">  </span>
    </div>
  </div>
  <div class="orange">
    <div class="orangeInner">
      <div class="orangeLine">                  </div>
      <div class="orangeLine fourfive">         </div>
      <div class="orangeLine ninety">           </div>
      <div class="orangeLine onethreefive">     </div>
      <div class="orangeCenter">                </div>
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

.orangeLeaf{
  position: absolute;
  right:0;
  top:0;
  height: 40%;
  width: 40%;
  display: grid;
  grid-template-rows: 30% 70%;
  grid-template-columns: 70% 30%;
}

.orangeLeaf:hover{
  cursor: pointer;
  animation: jiggle 3s linear;
  animation-iteration-count: infinite;
}

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
}

.orange:hover{
  cursor: pointer;
  animation: spin 1.5s ease-in-out;
}

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