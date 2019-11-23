function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally i : " + i);
}
doSomething();
var a;
var b;
var c;
var d = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var backGroundColor;
backGroundColor = Color.BLUE;
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
