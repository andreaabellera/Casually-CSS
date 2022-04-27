// Takes an artwork name and the div container to place it in
function create(container,name){
  const req1 = new XMLHttpRequest();
  req1.onreadystatechange=function(){
    if (req1.readyState==4 && req1.status==200){
      html = this.responseText
      container.innerHTML = html;
    }
  }
  req1.open("GET", name + "/" + name + ".txt", true);
  req1.send();

  const req2 = new XMLHttpRequest();
  req2.onreadystatechange=function(){
  if (req2.readyState==4 && req2.status==200){
      css = this.responseText
      let container = document.getElementById("meta-container")
      let dimensions = [container.clientHeight,container.clientWidth]
      if(dimensions[0] < dimensions[1]){ // landscape
          container.style.height = dimensions[0] + "px"
          container.style.width = dimensions[0] + "px"
      }
      else if(dimensions[0] > dimensions[1]){ // portrait
          container.style.height = dimensions[1] + "px"
          container.style.width = dimensions[1] + "px"
      }
      container.innerHTML += `<style> ${css} </style>`
    }
  }
  req2.open("GET", name + "/" + name + ".css",true)
  req2.send()
}

module.exports = create
