// white keys
function aSound() {
    new Audio("audio/white/A.mp3").play();
}
function dSound() {
    new Audio("audio/white/D.mp3").play();
}
function fSound() {
    new Audio("audio/white/F.mp3").play();
}
function gSound() {
    new Audio("audio/white/G.mp3").play();
}
function hSound() {
    new Audio("audio/white/H.mp3").play();
}
function jSound() {
    new Audio("audio/white/J.mp3").play();
}
function sSound() {
    new Audio("audio/white/S.mp3").play();
}

// black keys
function eSound() {
    new Audio("audio/black/E.mp3").play();
}
function tSound() {
    new Audio("audio/black/T.mp3").play();
}
function uSound() {
    new Audio("audio/black/U.mp3").play();
}
function wSound() {
    new Audio("audio/black/W.mp3").play();
}
function ySound() {
    new Audio("audio/black/Y.mp3").play();
}

document.addEventListener("keydown", function (e) {
    if (e.code == "KeyA") {
        aSound();
        console.log("The 'A' key is pressed.")
    }
    else if (e.code == "KeyS") {
        sSound();
        console.log("The 'S' key is pressed.")
    }
    else if (e.code == "KeyD") {
        dSound();
        console.log("The 'D' key is pressed.")
    }
    else if (e.code == "KeyF") {
        fSound();
        console.log("The 'F' key is pressed.")
    }
    else if (e.code == "KeyG") {
        gSound();
        console.log("The 'G' key is pressed.")
    }
    else if (e.code == "KeyH") {
        hSound();
        console.log("The 'H' key is pressed.")
    }
    else if (e.code == "KeyJ") {
        jSound();
        console.log("The 'J' key is pressed.")
    }
    else if (e.code == "KeyE") {
        eSound();
    }
    else if (e.code == "KeyT") {
        tSound();
    }
    else if (e.code == "KeyU") {
        uSound();
    }
    else if (e.code == "KeyW") {
        wSound();
    }
    else if (e.code == "KeyY") {
        ySound();
    }
    else {
        console.log("Key not supported")
    }
});