<div id="lollipop" class="artboard">
  <div class="lolli-bite">
    <div class="bite bite21"></div>
    <div class="bite bite22"></div>
    <div class="bite bite23"></div>
  </div>
  <div class="lollipop-container">
    <div class="lolli-head quadrants">
      <div class="lolli full lolli-q2">
        <span class="lolli lolli-q2 three-fourth"></span>
        <span class="lolli lolli-q2 half"></span>
        <span class="lolli lolli-q2 one-fourth"></span>
      </div>
      <div class="lolli full lolli-q1">
        <span class="lolli lolli-q1 three-fourth"></span>
        <span class="lolli lolli-q1 half"></span>
        <span class="lolli lolli-q1 one-fourth"></span>
      </div>
      <div class="lolli full lolli-q3">
        <span class="lolli lolli-q3-sharp three-fourth"></span>
        <span class="lolli lolli-q3-sharp half"></span>
        <span class="lolli end"></span>
      </div>
      <div class="lolli full lolli-q4">
        <span class="lolli lolli-q4-sharp twist1"></span>
        <span class="lolli lolli-q4-sharp twist2"></span>
        <span class="lolli lolli-q4-sharp twist3"></span>
      </div>
    </div>
    <div class="stick"></div>
  </div>
</div>

<style>
:root{
--lolli: linear-gradient(rgb(255, 182, 225) 10%, rgb(250, 208, 237) 30%, rgb(255, 192, 247), rgb(250, 208, 237), rgb(255, 182, 225) 90%); 
--lolliOutline: rgb(218, 125, 179);
--lollicol: white;
}

#lollipop{
height: 22em;
width: 10em;
position: relative;
}

::selection {
background: rgba(0,0,0,0);
}

.lolli{
background-image: var(--lolli);
}

.lollipop-container{
position: absolute;
height: 100%;
width: 100%;
display: grid;
grid-template-rows: 45% 55%;
justify-items: center;
}

.lollipop-container:hover{
cursor: pointer;
}

.lolli-head{
height: 100%;
width: 100%;
}

.stick{
background-color: whitesmoke;
height: 100%;
width: 5%;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-style: double;
border-bottom-left-radius: 3em;
border-bottom-right-radius: 3em;
}

.quadrants{
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
}

.lolli-q2{
bottom: 0;
right: 0;
border-top-left-radius: 20em;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-left-style: double;
border-top-style: double;
}

.lolli-q1{
bottom: 0;
left: 0;
border-top-right-radius: 20em;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-right-style: double;
border-top-style: double;
}

.lolli-q1:hover{
animation: eat 1s linear;
animation-iteration-count: infinite;
}

.lolli-q3{
top: 0;
right: 0;
border-bottom-left-radius: 20em;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-left-style: double;
border-bottom-style: double;
}

.lolli-q3-sharp{
top: 0;
right: 0;
border-bottom-left-radius: 80%;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-left-style: double;
border-bottom-style: double;
}

.end{
position: absolute;
z-index: 5;
top: 0;
right: 0;
height: 25%;
width: 20%;
border-bottom-left-radius: 100%;
border-bottom-right-radius: 60%;
border-top-right-radius: 75%;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-left-style: double;
border-right-style: double;
border-bottom-style: double;
}

.lolli-q4{
top: 0;
left: 0;
border-bottom-right-radius: 20em;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-right-style: double;
border-bottom-style: double;
}

.lolli-q4-sharp{
border-bottom-right-radius: 100%;
border-width: 0.2em;
border-color: var(--lolliOutline);
border-right-style: double;
border-bottom-style: double;
}

.twist1{
position: absolute;
height: 100%;
width: 75%;
}

.twist2{
position: absolute;
height: 75%;
width: 50%;
}

.twist3{
position: absolute;
height: 50%;
width: 25%;
}

.full{
position: relative;
height: 100%;
width: 100%;
}

.three-fourth{
position: absolute;
height: 75%;
width: 75%;
}

.half{
position: absolute;
height: 50%;
width: 50%;
}

.one-fourth{
position: absolute;
height: 25%;
width: 25%;
}

.lolli-bite{
position: absolute;
left: 5em;
height: 22.5%;
width: 50%;
display: grid;
grid-template-columns: 1fr 25% 30%;
align-items: flex-end;
}

.bite21{
height: 98%;
background-image: radial-gradient(circle at top right, transparent 0%, transparent 25%, var(--lollicol) 26%);
}

.bite22{
height: 60%;
background-image: radial-gradient(circle at top right, transparent 0%, transparent 55%, var(--lollicol) 56%);
}

.bite23{
height: 50%;
background-image: radial-gradient(circle at top right, transparent 0%, transparent 67%, var(--lollicol) 68%);
}

@keyframes eat{
  0%{
  opacity: 0;
  }
  100%{
  opacity: 0;
  }
}
</style>