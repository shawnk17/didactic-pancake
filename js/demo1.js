"use strict";

(function(){
    var myVar1 = 123;
    var myVar3;

    var logValue = function(myVar){
        if(myVar){
            console.log(myVar);
        }else{
            console.log("myVar hasn't been defined yet.");
        }
    };

    logValue(myVar1);
    logValue(myVar2);
    logValue(myVar3);

    // if(myVar1){
    //     console.log("myVar1 = " + myVar1);
    // }

    // if(myVar2){
    //     console.log("myVar2 = " + myVar2);
    // }

    // if(myVar3){
    //     console.log("myVar3 = " + myVar3);
    // }

    var myVar2 = 456;
    myVar3 = 789;

    logValue(myVar1);
    logValue(myVar2);
    logValue(myVar3);

    // console.log("myVar1 = " + myVar1);

    // console.log("myVar2 = " + myVar2);

    // console.log("myVar3 = " + myVar3);
})();