"use strict";

(function () {
    var myVar1 = 123;
    var myVar3;

    var logValue = function (myVar) {
        if (myVar) {
            console.log(myVar);
        } else {
            console.log("myVar hasn't been defined yet.");
        }
    };

    logValue(myVar1);
    logValue(myVar2);
    logValue(myVar3);

    var myVar2 = 456;
    myVar3 = 789;

    logValue(myVar1);
    logValue(myVar2);
    logValue(myVar3);

})();