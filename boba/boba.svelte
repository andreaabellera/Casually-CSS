<div id="boba" class="artboard">
  <div class="boba">
      <div class="bobaAbove">
        <span class="bobaStraw">
          <span class="bobaStraw-body"></span>
          <span class="bobaStraw-end"></span>
        </span>
      </div>
      <div class="bobaLid"></div>
      <div class="bobaBody">
        <span class="bobaCup">
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaPearl"></span>
          <span class="bobaDrink"></span>
          <span class="bobaStraw">
            <span class="bobaStraw-body"></span>
            <span class="bobaStraw-end"></span>
          </span>
        </span>
      </div>
      <div class="bottom">
        <span class="base">
          <span class="base-bobaDrink"></span>
        </span>
      </div>
  </div>
</div>

<style>
:root{
  --bobaStraw: salmon;
  --bobaLid: mediumpurple;
  --bobaDrink: rgba(207, 123, 13, 0.4);
  --bobaCup: lightgrey;
  --bobaPearl: #5E5550;
}

#boba{
  position: relative;
  height: 20em;
  width: 8em;
}

.boba{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 0.5em 65% 1em; 
}

.boba:hover{
  cursor: pointer;
}

.bobaAbove, .bobaLid, .bobaBody, .bottom{
  position: relative;
  display: grid;
  justify-items: center;
}

.bobaStraw{
  position: absolute;
  z-index: 4;
  height: 100%;
  width: 1em;
  transform: translateY(0.5em);
  display: grid;
  grid-template-rows: 1fr 0.4em;
}

.bobaStraw-body{
  background-color: var(--bobaStraw);
}

.bobaStraw-end{
  background-color: var(--bobaStraw);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.bobaLid{
  background-color: var(--bobaLid);
  transform: translateY(0.25em);
  border-radius: 80%;
  z-index: 3;
}

.bobaCup{
  position: absolute;
  z-index: 0;
  background-color: var(--bobaCup);
  height: 100%;
  width: 85%;
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
  display: grid;
}

.bobaDrink{
  position: absolute;
  z-index: 8;
  background-color: var(--bobaDrink);
  height: 100%;
  width: 100%;
  bottom: 0;
}

.bobaDrink:hover{
  animation: slurp 3s ease-in;
  animation-iteration-count: infinite;
}

.bobaBody .bobaStraw{
  z-index: 2;
  transform: scaleY(110%);
  justify-self: center;
}

.bobaBody .bobaStraw-body, .bobaBody .bobaStraw-end{
  opacity: 0.4;
}

.bobaPearl{
  position: absolute;
  z-index: 7;
  height: 1em;
  width: 1em;
  border-radius: 3em;
  background-color: var(--bobaPearl);
}

.bobaPearl:nth-child(0){
  bottom: 0em;
  left: 4em;
}

.bobaPearl:nth-child(1){
  bottom: 2em;
  left: 3em;
}

.bobaPearl:nth-child(2){
  bottom: 0em;
  left: 3em;
}

.bobaPearl:nth-child(3){
  bottom: 0.1em;
  left: 1em;
}

.bobaPearl:nth-child(4){
  bottom: 0.3em;
  left: 3.4em;
}

.bobaPearl:nth-child(5){
  bottom: 0.5em;
  left: 2em;
}

.bobaPearl:nth-child(6){
  bottom: 1.0em;
  left: 4em;
}

.bobaPearl:nth-child(7){
  bottom: 0em;
  left: 4.4em;
}

.bobaPearl:nth-child(8){
  bottom: 0.4em;
  left: 4.8em;
}

.bobaPearl:nth-child(9){
  bottom: 1.7em;
  left: 4.3em;
}

.bobaPearl:nth-child(10){
  bottom: 1.5em;
  right: 4.3em;
}

.bobaPearl:nth-child(11){
  bottom: 1em;
  left: 2.8em;
}

.base{
  background-color: var(--bobaCup);
  height: 100%;
  width: 60%;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 80%;
}

.base-bobaDrink{
  position: absolute;
  background-color: var(--bobaDrink);
  height: 100%;
  width: 60%;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 80%;
  transform: translateY(-0.5em);
}

@keyframes slurp {
  0% {
    height: 100%;
  }
  100% {
    height: 1%;
  }
}
</style>