/**
 * Created by netsanet on 10/12/2016.
 */
"use strict";
var myFun = (function() { //a module for everything
    var speed = 250;
    var interval = null;
    var count = 0;
    var content = "";

    return {
        chooseAnime: function () {
            var anime = document.querySelector("#AnimTypes");
            document.getElementById("viewer").value = ANIMATIONS[anime.value];
        },


    chooseFont: function() {
        var myfont = document.querySelector("#Size");
        document.getElementById("viewer").style.fontSize = myfont.value;

    },

    startAnime: function () {
        document.getElementById("endAnim").disabled = false;
        document.getElementById("startAnim").disabled = true;
        document.getElementById("AnimTypes").disabled = true;
        content = document.getElementById("viewer").value;
        myFun.buildintv();
        interval = setInterval(myFun.buildintv, speed);
    },

    endAnime : function () { //ends the animation
        clearInterval(interval);
        count = 0;
        document.getElementById("startAnim").disabled = false;
        document.getElementById("endAnim").disabled = true;
        document.getElementById("AnimTypes").disabled = false;
        document.getElementById("viewer").value = content;
    },

    chooseSpeed: function () {
        if (document.getElementById("Speed").checked) {
            speed = 50;
        } else {
            speed = 250;
        }
        clearInterval(interval);
        if (document.getElementById("startAnim").disabled) {
            interval = setInterval(myFun.buildintv, speed);
        }
    },

    buildintv: function () { //displays each frame
        var frames = content.split("=====\n"); //separate frames
        document.getElementById("viewer").value = frames[count];
        count++;
        if (count == frames.length) { //replays when reaches the last frame
            count = 0;
        }
    }
}

})();
window.onload = function(){ //handling events when the page is loaded
    document.getElementById("AnimTypes").onchange = myFun.chooseAnime;
    document.getElementById("Size").onchange = myFun.chooseFont;
    document.getElementById("startAnim").onclick = myFun.startAnime;
    document.getElementById("endAnim").onclick = myFun.endAnime;
    var velocity = document.querySelectorAll("fieldset input");
    for (var i = 0; i < velocity.length; i++) {
        velocity[i].onclick = myFun.chooseSpeed;
    }
};