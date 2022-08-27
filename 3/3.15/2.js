// origin : 原点
// scale 比例
// calculateDistanceFromOrigin() 计算坐标
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x; //访问类的静态属性
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 }; //类的静态属性
    return Grid;
}());
var grid1 = new Grid(2.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
