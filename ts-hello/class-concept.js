var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('Let me draw');
    };
    return Point;
}());
var p = new Point();
p.draw();
