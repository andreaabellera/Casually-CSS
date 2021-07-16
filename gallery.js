/*
 * Casually CSS Showcase Gallery
 * 
 * Contributors:
 * Andrea Abellera
 * 
 * INDEX LIST
 * 
 * If using a code editor, search up these I-codes (e.g. I2) to be directed to your desired action 
 * [I1] Insert new artwork
 * [I2] Change sequence of artworks that appear in frames
 * [I3] Manage handlers and functional UI code
 */

//----------------------------------------------------------------------------------------
// Artworks

const hippo = {
    id: "hippo",
    link: "hippo/hippo.html",
    comment: "Happy hippo wants to play"
};

const sweets = {
    id: "sweets",
    link: "sweets/sweets.html",
    comment: "For Emily and Ann who are my very sweet friends"
};

const orange = {
    id: "orange",
    link: "orange/orange.html",
    comment: "Would you want half a citrus slice?"
};

const calendar = {
    id: "calendar",
    link: "calendar/calendar.html",
    comment: "I wonder what happens if I touch the page.. oh"
};

const dugong = {
    id: "dugong",
    link: "dugong/dugong.html",
    comment: "Mooo, I am a seacow. Not a manatee"
};

const boba = {
    id: "boba",
    link: "boba/boba.html",
    comment: "Yummy, delicious boba! Hover over to drink"
};

const octopus = {
    id: "octopus",
    link: "octopus/octopus.html",
    comment: "What is pink and with stretchy arms? An octopus!"
};

const bike = {
    id: "bike",
    link: "bike/bike.html",
    comment: "The wheels of the bike go round and round"
};

const beluga = {
    id: "beluga",
    link: "beluga/beluga.html",
    comment: "A Marshmallow beluga is only one of its kind"
};

// [I1] Insert your new artwork above by creating a Javascript object for it
//      Copy format of other artwork objects for reference
//      When finished, head to [I2] to add your artwork to the gallery list



//----------------------------------------------------------------------------------------
// [I2] Gallery List
//      Modify the order of the list below to change the sequence of artworks that appear in frames

const artworks = [
    hippo,
    sweets, 
    orange, 
    calendar,
    dugong, 
    boba, 
    octopus, 
    bike,
    beluga
];



//----------------------------------------------------------------------------------------
// [I3] Functional UI code
//

document.addEventListener("DOMContentLoaded", () => {
    setupSidebar();
    document.getElementById(artworks[0].id).click();
});

function setupSidebar(){
    var sidebar = document.getElementById("sidebar");
    var sidebarContent = document.getElementById("sidebar-content");
    var toggler = document.getElementById("toggler");

    // Toggle and collapse functionality
    toggler.addEventListener("click", function () {
        if (sidebar.style.width == "13vw" || sidebar.style.width == ""){
            toggler.classList.replace("open", "close");
            closeSidebar(sidebar);
        }
        else{ 
            toggler.classList.replace("close", "open");
            openSidebar(sidebar);
        }
    });

    // Add frames
    for (art of artworks){
        let frame = document.createElement("a");
        frame.id = art.id;
        frame.href = "#" + art.id;
        frame.classList.add("frame");
        frame.innerText = art.id;
        sidebarContent.appendChild(frame);
    }

    for (art of artworks)
        addFrameListener(art);
}

function addFrameListener(art) {
    let frame = document.getElementById(art.id);
    frame.addEventListener("click", function () { 
        loadArtboard(art); 
        clearSelected();
        frame.classList.add("selected");
    });
}

function loadArtboard(art) {
    document.getElementById("artboard").innerHTML = "<iframe src =" + art.link + "></iframe>";
    document.getElementById("comment").innerText = art.comment;
}

function clearSelected(){
    frames = document.getElementsByClassName("frame");
    for (fr of frames){
        fr.classList.remove("selected");
    }
}

function openSidebar(sidebar) {
    var id = setInterval(frame, 8);
    var pos = 0;
    function frame() {
      if (pos == 13)
        clearInterval(id);
      else {
        pos++;
        sidebar.style.width = pos + "vw";
      }
    }
}
  
function closeSidebar(sidebar) {
    var id = setInterval(frame, 8);
    var pos = 13;
    function frame() {
      if (pos == 0)
        clearInterval(id); 
      else {
        pos--;
        sidebar.style.width = pos + "vw";
      }
    }
}
  