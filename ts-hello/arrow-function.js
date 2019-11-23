var message;
var log = function (message) {
    console.log('Traditional Way : ' + message);
};
var doLog = function (message) { return console.log('Arrow Way : ' + message); };
var draw = function () { return console.log("Let me draw..."); };
draw();
