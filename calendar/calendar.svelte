<div id="calendar" class="artboard">
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
  <div class="calendar-shape">
      <div class="calendar">
        <div class="calHeader">
          <p> February </p>
          <p id="year"> 2017 </p>
        </div>
        <div class="calDivider"></div>
        <div class="days">
          <p> Su </p>
          <p> M </p>
          <p> T </p>
          <p> W </p>
          <p> Th </p>
          <p> F </p>
          <p> Sa </p>
        </div>
        <div class="calSqs">
          <div class="calSq"> </div>
          <div class="calSq"> </div>
          <div class="calSq"> </div>
          <div class="calSq"> <p> 1 </p> </div>
          <div class="calSq"> <p> 2 </p> </div>
          <div class="calSq"> <p> 3 </p> </div>
          <div class="calSq"> <p> 4 </p> </div>
          <div class="calSq"> <p> 5 </p> </div>
          <div class="calSq"> <p> 6 </p> </div>
          <div class="calSq"> <p> 7 </p> </div>
          <div class="calSq"> <p> 8 </p> </div>
          <div class="calSq"> <p> 9 </p> </div>
          <div class="calSq"> <p> 10 </p> </div>
          <div class="calSq"> <p> 11 </p> </div>
          <div class="calSq"> <p> 12 </p> </div>
          <div class="calSq"> <p> 13 </p> </div>
          <div class="calSq"> <p> 14 </p> </div>
          <div class="calSq"> <p> 15 </p> </div>
          <div class="calSq"> <p> 16 </p> </div>
          <div class="calSq"> <p> 17 </p> </div>
          <div class="calSq"> <p> 18 </p> </div>
          <div class="calSq"> <p> 19 </p> </div>
          <div class="calSq"> <p> 20 </p> </div>
          <div class="calSq"> <p> 21 </p> </div>
          <div class="calSq"> <p> 22 </p> </div>
          <div class="calSq"> <p> 23 </p> </div>
          <div class="calSq"> <p> 24 </p> </div>
          <div class="calSq"> <p> 25 </p> </div>
          <div class="calSq"> <p> 26 </p> </div>
          <div class="calSq"> <p> 27 </p> </div>
          <div class="calSq"> <p> 28 </p> </div>
          <div class="calSq"> </div>
          <div class="calSq"> </div>
          <div class="calSq"> </div>
          <div class="calSq"> </div>
        </div>
        <div class="calDivider"></div>
      </div>
  </div>
</div>

<style>
:root{
  --calendarPage: lightblue; 
  --calDivider: lightskyblue;
  --calSq: rgb(231, 240, 243);
  --headColor: whitesmoke;
  --dayColor: #3e3e8e;
  --numberColor: lightskyblue;
  --shadowColor: #3e3e8e;
}

#calendar{
  height: 28em;
  width: 36em;
  transform: scale(50%);
}

::selection{
  background-color: rgba(0,0,0,0);
}

.calendar-shape{
  background-color: var(--shadowColor);
  height: inherit;
  width: inherit;
  border-radius: 2.5em;
}

.calendar{
  background-color: var(--calendarPage);
  height: inherit;
  width: inherit;
  border-radius: 2.5em;
  display: grid;
  grid-template-rows: auto 0.4ex auto auto 0.4ex 1fr;
  font-family: 'Fredoka One', cursive;
}

.calendar:hover{
  cursor: pointer;
  animation: flap 3s linear;
  animation-iteration-count: infinite;
}

.calHeader{
  align-self: flex-start;
  margin: -0.5em 1em -0.5em 1em;
  color: var(--headColor);
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 2.5em;
}

#year{
  justify-self: flex-end;
}

.calDivider{
  background-color: var(--calDivider);
}

.days{
  color: var(--dayColor);
  display: grid;
  justify-self: center;
  grid-template-columns: 5em 5em 5em 5em 5em 5em 5em;
  align-items: center;
  justify-items: center;
  margin-bottom: -0.5em;
}

.calSqs{
  width: 100%;
  display: grid;
  margin: 0.5ex 4% 2.5ex 7%;
  grid-template-columns: 11% 11% 11% 11% 11% 11% 11%;
  grid-template-rows: 5ex 5ex 5ex 5ex 5ex;
  grid-gap: 1ex;
}

.calSq{
  background-color: var(--calSq);
  height: 100%;
  width: 100%;
  border-radius: 0.5ex;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 40%;
}

.calSq p{
  color: var(--numberColor);
  margin: 0.4em;
}

@keyframes flap{
  0%{
    transform: translateX(0em) skew(0deg,0turn);
  }
  20%{
    transform: translateX(0em) skew(0deg,0turn);
  }
  25%{
    transform: translateX(3em) skew(5deg,-0.01turn);
  }
  30%{
    transform: translateX(2em) skew(2.5deg,-0.005turn);
  }
  35%{
    transform: translateX(3em) skew(5deg,-0.01turn);
  }
  90%{
    transform: translateX(3em) skew(5deg,-0.01turn);
  }
  100%{
    transform: translateX(0em) skew(0deg,0turn);
  }
}
</style>