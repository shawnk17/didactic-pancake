"use strict";

(function(){
    var output = document.getElementById("output"),
        tagButton = document.getElementById("insert-button-tag"),
        elementButton = document.getElementById("insert-button-element"),
        bgButton = document.getElementById("changeBg"),
        inputText = document.getElementById("insert-text"),
        divTemplate = '<div class="highlight">{{text}}: inserted by TAG</div>',
        curBg = 0;

    tagButton.addEventListener("click", function(){
        var newDiv = divTemplate.replace("{{text}}", inputText.value); 

        output.innerHTML += newDiv;
    });

    elementButton.addEventListener("click", function(){
        var newDiv = document.createElement("div");

        newDiv.innerText = inputText.value + ": inserted by ELEMENT";
        newDiv.classList.add("highlight");

        output.appendChild(newDiv);
    });

    bgButton.addEventListener("click", function(){
        if(curBg == 0){
            document.body.classList.remove("bg1");
            document.body.classList.add("bg2");
            curBg = 1;
        }else {
            document.body.classList.remove("bg2");
            document.body.classList.add("bg1");
            curBg = 0;
        }
    });

    
})();