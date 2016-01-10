var graph2d;
(function (graph2d) {
    var vector = (function () {
        function vector(x, y) {
            this.x = x;
            this.y = y;
        }
        vector.prototype.point = function () {
            return { x: this.x, y: this.y };
        };
        vector.prototype.clone = function () {
            return new vector(this.x, this.y);
        };
        vector.prototype.len_sq = function () {
            return this.x * this.x + this.y * this.y;
        };
        vector.prototype.len = function () {
            return Math.sqrt(this.len_sq());
        };
        vector.prototype.normalize = function () {
            var l = this.len();
            return new vector(this.x / l, this.y / l);
        };
        vector.prototype.add = function (v) {
            return new vector(this.x + v.x, this.y + v.y);
        };
        vector.prototype.neg = function () {
            return new vector(-this.x, -this.y);
        };
        vector.prototype.sub = function (v) {
            return new vector(this.x - v.x, this.y - v.y);
        };
        vector.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y;
        };
        vector.prototype.cross = function (v) {
            return this.x * v.y - this.y * v.x;
        };
        vector.prototype.scale = function (v) {
            return new vector(v * this.x, v * this.y);
        };
        vector.prototype.rotate = function (angle) {
            var c = Math.cos(angle);
            var s = Math.sin(angle);
            return new vector(c * this.x - s * this.y, s * this.x + c * this.y);
        };
        vector.prototype.angle = function (v) {
            return Math.acos(this.normalize().dot(v.normalize()));
        };
        return vector;
    })();
    graph2d.vector = vector;
})(graph2d || (graph2d = {}));
//# sourceMappingURL=vector.js.map