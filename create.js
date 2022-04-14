// Takes an artwork name and the div container to place it in
function create(container,name){
    let artLoc = artLib[name]

    const req = new XMLHttpRequest();
    req.onreadystatechange=function(){
      if (req.readyState==4 && req.status==200){
        // Constrain div to square (for now)
        let dimensions = [container.clientHeight,container.clientWidth]
        if(dimensions[0] < dimensions[1]){ // landscape
            container.style.height = dimensions[0] + "px"
            container.style.width = dimensions[0] + "px"
        }
        else if(dimensions[0] > dimensions[1]){ // portrait
            container.style.height = dimensions[1] + "px"
            container.style.width = dimensions[1] + "px"
        }
        console.log(container.clientHeight)
        container.innerHTML = req.responseText
        return req.responseText
      }
    }
    req.open("GET", artLoc, true)
    req.send();
}

const artLib = {
    "orange": "orange/orange.txt"
}

module.exports = create
