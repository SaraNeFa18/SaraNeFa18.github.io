// Script.js
// Correct Pin Value
let correctPin = "1234";

let mappa = new Map();

function riempiMappa(){
    mappa.set("1234","miao miao")
    mappa.set("0000","bau bau")
    mappa.set("9999",'<iframe width="560" height="315" src="https://www.youtube.com/embed/B5CZw7Z13y4?si=m1s9wzUff6dRIkMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    
}

riempiMappa()

let btns =
    document.getElementsByClassName(
        "pinpad-btn"
    );
let pinInput = document.getElementById(
    "pinpad-input"
);

for (let i = 0; i < btns.length; i++) {
    let btn = btns.item(i);
    if (
        btn.id &&
        (btn.id === "submit-btn" ||
            btn.id === "delete-btn")
    )
        continue;

    // Add onclick event listener to 
    // Every button from 0 - 9
    btn.addEventListener(
        "click",
        (e) => {
            pinInput.value +=
                e.target.value;
        }
    );
}

let submitBtn = document.getElementById(
    "submit-btn"
);
let delBtn = document.getElementById(
    "delete-btn"
);
let modal =
    document.getElementById("modal");
let result =
    document.getElementById("result");
let closeBtn =
    document.getElementById("close");

submitBtn.addEventListener(
    "click",
    () => {
        if (
            !pinInput ||
            !pinInput.value ||
            pinInput.value === ""
        ) {
            alert(
                "È come fecondare un ovulo senza spermatozoi. Devi mettere un pin, pirla!"
            );
        } else if (
            mappa.has(pinInput.value)
        ) {
            console.log("MIAAAAAAO")
            // qua se è corretto
            document.getElementById("contenuto").innerHTML = mappa.get(pinInput.value);
        } else {
            alert("Eheheh suca, hai sbagliato! 😝");
        }
        // Reset the input
        pinInput.value = "";
    }
);

delBtn.addEventListener("click", () => {
    if (pinInput.value)
        pinInput.value =
            pinInput.value.substr(
                0,
                pinInput.value.length -
                    1
            );
});

closeBtn.addEventListener(
    "click",
    () => {
        modal.style.display = "none";
    }
);
