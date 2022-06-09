/*
 * Casually CSS Showcase Gallery
 * 
 * 
 * INDEX LIST
 * 
 * If using a code editor, search up these I-codes (e.g. I2) to be directed to your desired action 
 * [I1] Insert new artwork
 * [I2] Change sequence of artworks that appear in frames
 * [I3] Manage handlers and functional code
 */

//----------------------------------------------------------------------------------------
// Artworks

const hippo = {
    id: "hippo",
    comment: "Happy hippo wants to play",
    name: "Hichi the Hippo"
};

const sweets = {
    id: "sweets",
    comment: "For Emily and Ann who are my very sweet friends",
    name: "Emily & Ann"
};

const bison = {
    id: "bison",
    comment: "From the plains of Manitoba",
    name: "Le Bison"
};

const orange = {
    id: "orange",
    comment: "Would you want half a citrus slice?",
    name: "Odo the Orange"
};

const calendar = {
    id: "calendar",
    comment: "I wonder what happens if I touch the page.. oh",
    name: "Cai"
};

const dugong = {
    id: "dugong",
    comment: "Mooo, I am a seacow. Not a manatee",
    name: "Sasha"
};

const boba = {
    id: "boba",
    comment: "Yummy, delicious boba! Hover over to drink",
    name: "(/◕ヮ◕)/"
};

const octopus = {
    id: "octopus",
    comment: "What is pink and with stretchy arms? An octopus!",
    name: "Octo Ouuu"
};

const bike = {
    id: "bike",
    comment: "The wheels of the bike go round and round",
    name: "Vic the vroom vroom"
};

const beluga = {
    id: "beluga",
    comment: "A Marshmallow beluga is only one of its kind",
    name: "Beaan"
};

const swiss = {
    id: "swiss",
    comment: "Hiyaaah!",
    name: "Swiss Army Knife"
};

const matcha = {
    id: "matcha",
    comment: "Help yourself with some matcha on a rainy day",
    name: "Matcha Latte"
};

const button = {
    id: "button",
    comment: "This button is made for Scientific purposes",
    name: "Button"
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
    bison,
    swiss, 
    orange, 
    calendar,
    dugong, 
    boba, 
    octopus,
    matcha, 
    bike,
    beluga,
    button
];



//----------------------------------------------------------------------------------------
// [I3] Functional UI code
//

document.addEventListener("DOMContentLoaded", () => {
    setupHandlers();
    loadArtwork();
    detectMobile();
});

function loadArtwork(){
    let current = window.location.href.split('#');
    // Scroll to linked artwork
    if(current.length > 1){
        let art = document.getElementById(current[1])
        if(art)
            art.click();
        else // Invalid link, default to first artwork
            document.getElementById(artworks[0].id).click(); 
    }
    else // No link provided, default to first artwork
        document.getElementById(artworks[0].id).click();

    document.getElementById("html-btn").click(); 
}

function setupHandlers(){
    var sidebar = document.getElementById("sidebar");
    var sidebarContent = document.getElementById("sidebar-content");
    var toggler = document.getElementById("toggler");
    var htmlBtn = document.getElementById("html-btn");
    var cssBtn = document.getElementById("css-btn");
    var codespace = document.getElementById("codespace");
    var copyBtn = document.getElementById("copy-btn");

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
        frame.onclick = function () {
            document.getElementById("html-btn").click(); 
        }
        sidebarContent.appendChild(frame);
    }

    for (art of artworks)
        addFrameListener(art);
    
    // Setup code box
    htmlBtn.addEventListener("click", function () {
        htmlBtn.classList.add("active");
        cssBtn.classList.remove("active");
        codespace.innerText = html;
    });

    cssBtn.addEventListener("click", function () {
        htmlBtn.classList.remove("active");
        cssBtn.classList.add("active");
        codespace.innerText = css;
    });

    copyBtn.addEventListener("click", function () {
        let copyText = codespace;
        copyText.select();
        document.execCommand("copy");
    });
}

function addFrameListener(art) {
    let frame = document.getElementById(art.id);
    frame.addEventListener("click", function () { 
        loadArtboard(art); 
        clearSelected();
        frame.classList.add("selected");
    });
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

let html = "Failed to load HTML";
let css = "Failed to load CSS";

function loadArtboard(art) {
    document.getElementById("container").innerHTML = "<iframe src =" + art.id + "/" + art.id + ".html" + "></iframe>";

    ;(async () => {
        html = await getHTML(art);
        css = await getCSS(art);

        html = clean(html);
        css = clean(css);
        document.getElementById("codespace").innerText = html;
    })();

    document.getElementById("codespace").innerText = html;
    document.getElementById("comment").innerText = art.comment;
    document.getElementById("nom").innerText = art.name;
}

async function getHTML(art){
    let response = await fetch(art.id + "/" + art.id + ".txt");
    let html = await response.text();
    return html;
}

async function getCSS(art){
    let response = await fetch(art.id + "/" + art.id + ".css");
    let css = await response.text();
    return css;
}

function clean(text){
    let toks = text.split("\r\n");
    let textFormatted = "";
    for (let tok of toks)
        textFormatted += tok.trim() + "\r\n";
    return textFormatted;
}

function detectMobile(){
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))){
        let sbar = document.getElementById("sidebar")
        document.getElementById("codebox").style.display = "none";
        document.body.style.gridTemplateColumns = "1fr";
        document.body.style.gridColumn = "1 / 3";
        document.body.style.gridTemplateRows = "1fr auto";
        sbar.style.width = "100%";
        sbar.style.height = "18vh";
        sbar.style.overflowX = "scroll";
        sbar.style.overflowY = "hidden";
        document.getElementById("sidebar-content").style.flexDirection = "row";
        document.getElementById("toggler").style.display = "none";
        document.getElementById("casually-css").style.fontSize = "5em";
        document.getElementById("comment").style.fontSize = "2.8em";
        document.getElementById("container").style.marginTop = "15vh";
        let frames = document.getElementsByClassName("frame");
        for(let frame of frames){
            frame.style.paddingLeft = "5em";
            frame.style.paddingRight = "5em";
            frame.style.height = "18vh";
            frame.style.borderTopStyle = "groove";
            frame.style.fontSize = "4ex";
        }
        document.getElementsByClassName("main-area")[0].after(sbar);
    }
}