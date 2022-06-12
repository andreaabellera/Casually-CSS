<div id="bike" class="artboard">
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
  <div class="bike">
      <span class="bikeWheel-box">
        <div class="bikeWheel">
          <span class="bikeSpoke"></span>
          <span class="bikeSpoke thirty"></span>
          <span class="bikeSpoke sixty"></span>
          <span class="bikeSpoke ninety"></span>
          <span class="bikeSpoke onetwenty"></span>
          <span class="bikeSpoke onefifty"></span>
          <span class="axle"></span>
        </div>
        <div class="bikeWheel">
          <span class="bikeSpoke"></span>
          <span class="bikeSpoke thirty"></span>
          <span class="bikeSpoke sixty"></span>
          <span class="bikeSpoke ninety"></span>
          <span class="bikeSpoke onetwenty"></span>
          <span class="bikeSpoke onefifty"></span>
          <span class="axle"></span>
        </div>
      </span>
      <span class="bikeHandle-box">
        <div class="bar"></div>
        <div class="bikeHandle"></div>
      </span>
      <span class="seat-box">
        <div class="bar"></div>
        <div class="seat"></div>
      </span>
      <span class="lower-support"> <p> CASUALLY CSS </p> </span>
      <span class="pedal-box">
        <div class="bar"></div>
        <div class="pedal-axle"></div>
        <div class="pedal"></div>
      </span>
      <span class="pedal-support">
        <div class="bar"></div>
        <div class="curve"></div>
      </span>
      <span class="upper-support"></span>
  </div>
</div>

<style>
:root{ 
  --bikePrimary: firebrick;
  --bikeSecondary: grey;
  --bikeTertiary: #2e2e2e;
  --bikeWheel: #4e4e4e;
  --bikebikeSpokes: lightgrey;
  --axle: darkgoldenrod;
  --pedal: darkgrey;
}

#bike{
  position: relative;
  height: 18em;
  width: 30em;
}

::selection{
  background-color: rgba(0,0,0,0);
}

.bike{
  height: 100%;
  width: 100%;
}

.bike:hover{
  cursor: pointer;
}

.pedal-box{
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 4.5em;
  left: 5em;
}

.pedal-box .bar{
  height: 0.8em;
  width: 7em;
  background-color: var(--bikeSecondary);
}

.pedal-axle{
  height: 2em;
  width: 2em;
  background-color: var(--bikeTertiary);
  border-radius: 2em;
  transform: scale(110%);
}

.pedal{
  height: 1em;
  width: 2em;
  background-color: var(--pedal);
  border-top-right-radius: 60%;
}

.pedal-support{
  position: absolute;
  display: flex;
  align-items: flex-end;
  bottom: 7.7em;
  left: 4.2em;
  transform: rotate(-28deg);
}

.pedal-support .bar{
  height: 0.8em;
  width: 8.5em;
  background-color: var(--bikeSecondary);
}

.pedal-support .curve{
  height: 1.5em;
  width: 2em;
  border-color: var(--bikeTertiary);
  border-bottom-right-radius: 100%;
  border-bottom-style: solid;
  border-right-style: solid;
  border-width: 0.8em;
}

.seat-box{
  position: absolute;
  display: flex;
  align-items: center;
  transform: rotate(-108deg);
  top: 4.4em;
  left: 5.2em;
}

.seat-box .bar{
  height: 0.8em;
  width: 10em;
  background-color: var(--bikePrimary);
}

.seat{
  height: 4em;
  width: 1.5em;
  background-color: var(--bikeTertiary);
  border-top-left-radius: 2em;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 35%;
  transform: scale(110%);
}

.bikeHandle-box{
  position: absolute;
  display: flex;
  align-items: flex-start;
  transform: rotate(-115deg);
  top: 5.1em;
  right: 0.8em;
}

.bikeHandle-box .bar{
  height: 0.8em;
  width: 12em;
  background-color: var(--bikePrimary);
}

.bikeHandle{
  height: 3em;
  width: 0.65em;
  background-color: var(--bikeTertiary);
  border-top-right-radius: 2em;
  transform: scale(130%);
}

.upper-support{
  position: absolute;
  height: 0.9em;
  width: 9.8em;
  top: 5em;
  left: 10.5em;
  background-color: var(--bikePrimary);
  transform: rotate(-20deg);
}

.lower-support{
  position: absolute;
  height: 0.9em;
  width: 11.1em;
  top: 8em;
  left: 11em;
  background-color: var(--bikePrimary);
  transform: rotate(-46deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lower-support p{
  color: lightcoral;
  font-family: 'Fredoka One', cursive;
  font-size: 0.4em;
}

.bikeWheel-box{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.bikeWheel{
  position: relative;
  height: 8.3em;
  width: 8.3em;
  border-color: var(--bikeWheel);
  border-radius: 16em;
  border-width: 1.4em;
  border-style: solid;
  display: grid;
  justify-items: center;
  align-items: center;
}

.bikeWheel:hover{
  animation: bikeSpin 0.5s linear;
  animation-iteration-count: infinite;
}

.axle{
  position: absolute;
  height: 25%;
  width: 25%;
  background-color: var(--axle);
  border-radius: 6em;
}

.bikeSpoke{
  position: absolute;
  background-color: var(--bikebikeSpokes);
  height: 99%;
  width: 0.2em;
}

.thirty{
  transform: rotate(30deg);
}

.sixty{
  transform: rotate(60deg);
}

.ninety{
  transform: rotate(90deg);
}

.onetwenty{
  transform: rotate(120deg);
}

.onefifty{
  transform: rotate(150deg);
}

@keyframes bikeSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>