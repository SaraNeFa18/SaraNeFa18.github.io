// Script.js
// Correct Pin Value
var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}



let mappa = new Map();

function riempiMappa(){
    mappa.set("81dc9bdb52d04dc20036dbd8313ed055","Ciao sono Filippo auguri SAra!!!")
    mappa.set("4a7d1ed414474e4033ac29ccb8653d9b","Evviva il re che ha vinto la battaglia")
    mappa.set("fa246d0262c3925617b0c72bb20eeb1d",'<iframe width="560" height="315" src="https://www.youtube.com/embed/B5CZw7Z13y4?si=m1s9wzUff6dRIkMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    
    //video
    mappa.set("962e56a8a0b0420d87272a682bfd1e53",'<div class="container"><div class="links-container"><a class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" href="https://www.youtube.com/watch?v=tTNNud1FOAI">Vai a YouTube</a></div></div>')
    mappa.set("af5afd7f7c807171981d443ad4f4f648",'<div class="container"><div class="links-container"><a class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" href="https://www.youtube.com/watch?v=fNYFtj5FC1M">Vai a YouTube</a></div></div>')
    mappa.set("3891b14b5d8cce2fdd8dcdb4ded28f6d",'<div class="container"><div class="links-container"><a class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" href="https://www.youtube.com/shorts/K__6EA1ZcvQ">Vai a YouTube</a></div></div>')
    mappa.set("dbc4d84bfcfe2284ba11beffb853a8c4",'<div class="container"><div class="links-container"><a class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" href="https://www.youtube.com/shorts/afcc3O4u9WU">Vai a YouTube</a></div></div>')
    mappa.set("01b36d0eae3771391455661b45834805",'<div class="container"><div class="links-container"><a class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" href="https://youtube.com/shorts/Gjq0lypGlkE?si=PGhXWFJskK4DUCAL">Vai a YouTube</a></div></div>')
    mappa.set("f80bf05527157a8c2a7bb63b22f49aaa",'<div class="container"><div class="links-container"><a class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" href="https://www.youtube.com/shorts/GJ4cR1QgtiM">Vai a YouTube</a></div></div>')

    //audio
    mappa.set("eb62f6b9306db575c2d596b1279627a4",'<audio controls> <source src="audio1.mp3" type="audio/mpeg"> Problemino (provate a cambiare browser o contattatemi)</audio>')
    mappa.set("2be9bd7a3434f7038ca27d1918de58bd",'<audio controls> <source src="audio2.mp3" type="audio/mpeg"> Problemino (provate a cambiare browser o contattatemi)</audio>')
    mappa.set("ee715daa76f1b51d80343f45547be570",'<audio controls> <source src="audio3.mp3" type="audio/mpeg"> Problemino (provate a cambiare browser o contattatemi)</audio>')
    mappa.set("1e48c4420b7073bc11916c6c1de226bb",'<audio controls> <source src="audio4.mp3" type="audio/mpeg"> Problemino (provate a cambiare browser o contattatemi)</audio>')
    mappa.set("5cce25ff8c3ce169488fe6c6f1ad3c97",'<audio controls> <source src="audio5.mp3" type="audio/mpeg"> Problemino (provate a cambiare browser o contattatemi)</audio>')
    
    //foto
    mappa.set("dc960c46c38bd16e953d97cdeefdbc68",'<img src="foto2.jpg">')
    mappa.set("bb03e43ffe34eeb242a2ee4a4f125e56",'<img src="foto3.jpg">')
    mappa.set("058d6f2fbe951a5a56d96b1f1a6bca1c",'<img src="foto4.jpg">')
    mappa.set("99ef04eb612baf0e86671a5109e22154",'<img src="foto5.jpg">')
    mappa.set("a6ea8471c120fe8cc35a2954c9b9c595",'<img src="foto6.jpg">')

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
        var val=MD5(pinInput.value)
        console.log(val)
        if (
            !pinInput ||
            !pinInput.value ||
            pinInput.value === ""
        ) {
            alert(
                "È come fecondare un ovulo senza spermatozoi. Devi mettere un pin, pirla!"
            );
        } else if (
            mappa.has(val)
        ) {
            console.log("MIAAAAAAO")
            // qua se è corretto
            document.getElementById("contenuto").innerHTML = "<p>PIN corretto!!</p><br>"
            document.getElementById("contenuto").innerHTML += mappa.get(val);
        } else {
            alert("Eheheh suca, hai sbagliato! 😝");
        }
        // Reset the input
        pinInput.value = "";
        val="";
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
