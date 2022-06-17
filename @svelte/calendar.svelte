<script>
  export let month = "February"
  export let year = "2017"
  export let dayStart = 3
  export let days = 28
  export let bodyColor = "lightblue"
  export let dividerColor = "lightskyblue"
  export let celColor = "rgb(231, 240, 243)"
  export let monthColor = "whitesmoke"
  export let weekColor = "#3e3e8e"
  export let dayColor = "lightskyblue"
  export let backColor = "#3e3e8e"
  export let flap = {
    iterationCount: "infinite",
    delay: "0s",
    duration: "3s"
  }

  let daysArray = Array(35)

  let currDayStart = dayStart
  let currDays = days
  $: if (currDayStart != dayStart || currDays != days) {
    newDays()
	}

  newDays()
  function newDays() {
    dayStart = Math.max(dayStart, 0)
    dayStart = Math.min(dayStart, 4)
    days = Math.max(days, 28)
    days = Math.min(days, 31)
    let numDays = days + dayStart
    daysArray = Array(35)
    for (let i = 0; i < dayStart; i++)
      daysArray[i] = `<div class="calSq" style="background-color:${celColor}; border-radius: 0.5ex; border-top-right-radius: 40%; border-bottom-left-radius: 40%;"></div>`
    for (let i = dayStart; i < numDays; i++)
      daysArray[i] = `<div class="calSq" style="background-color:${celColor}; color:${dayColor}; border-radius: 0.5ex; border-top-right-radius: 40%; border-bottom-left-radius: 40%;"><p style="margin-left:0.4em;">${i-dayStart+1}</p></div>`
    for (let i = numDays; i < daysArray.length; i++)
      daysArray[i] = `<div class="calSq" style="background-color:${celColor}; border-radius: 0.5ex; border-top-right-radius: 40%; border-bottom-left-radius: 40%;"></div>`
  }

  window.genId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
</script>

<div class="artboard" id={window.genId}>
  <div id="calendar">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    <div class="calendar-shape" style="background-color:{backColor};">
        <div class="calendar" style="
          background-color: {bodyColor};
          animation-iteration-count:{flap.iterationCount}; 
          animation-delay:{flap.delay};
          animation-duration:{flap.duration};
        ">
          <div class="calHeader" style="color: {monthColor}">
            <p> {month} </p>
            <p id="year"> {year} </p>
          </div>
          <div class="calDivider" style="background-color:{dividerColor};"></div>
          <div class="days" style="color:{weekColor};">
            <p> Su </p>
            <p> M </p>
            <p> T </p>
            <p> W </p>
            <p> Th </p>
            <p> F </p>
            <p> Sa </p>
          </div>
          <div class="calSqs">
            {#each daysArray as day}
              {@html day}
            {/each}
          </div>
          <div class="calDivider" style="background-color:{dividerColor};"></div>
        </div>
    </div>
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
}

.artboard{
  height: max-content;
  width: max-content;
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
  animation: flap 3s linear infinite;
}

/* .calendar:hover{
  cursor: pointer;
  animation: flap 3s linear;
  animation-iteration-count: infinite;
} */

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