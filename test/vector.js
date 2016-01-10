///<reference path="typings/mocha/mocha.d.ts"/>
///<reference path="typings/chai/chai.d.ts"/>
///<reference path="typings/assertion-error/assertion-error.d.ts"/>
var graph2d = require('../dist/graph2d.js');
var chai = require('chai');
var expect = chai.expect;
chai.use(function (chai, utils) {
    utils.overwriteMethod(chai.Assertion.prototype, 'eq', function (_super) {
        return function (v, m) {
            var obj = utils.flag(this, 'object');
            if (typeof (obj) == 'number') {
                var err = " numberis $ { obj }, expert:$ { v }. $ { m }";
                new chai.Assertion(Math.abs(obj - v)).lt(0.0000001, err);
            }
            else if (obj instanceof graph2d.vector) {
                var err = " vectoris($ { obj.x },$ { obj.y }), expert:($ { v.x }, $ { v.y }).  $ { m }";
                new chai.Assertion(Math.abs(obj.x - v.x)).lt(1e-10, err);
                new chai.Assertion(Math.abs(obj.y - v.y)).lt(1e-10, err);
            }
            else {
                _super.apply(this, arguments);
            }
        };
    });
});
describe('graph2d', function () {
    describe('vector', function () {
        var vector = graph2d.vector;
        it('add', function () {
            var v = new vector(3, 7).add(new vector(5, -5));
            expect(v).eq(new vector(8, 2));
        });
        it('sub', function () {
            var v = new vector(3, 7).sub(new vector(5, -5));
            expect(v).eq(new vector(-2, 12));
        });
        it('scale', function () {
            var v = new vector(3, 7).scale(7);
            expect(v).eq(new vector(21, 49));
        });
        it('clone', function () {
            var v = new vector(3, 7).clone();
            expect(v).eq(new vector(3, 7));
        });
        it('len_sq', function () {
            var v = new vector(3, 7).len_sq();
            expect(v).eq(9 + 49);
        });
        it('len', function () {
            var v = new vector(3, 4).len();
            expect(v).eq(5);
        });
        it('normalize', function () {
            var v = new vector(3, 4).normalize();
            expect(v.x / v.y).eq(3 / 4);
            expect(v.len()).eq(1);
        });
        it('neg', function () {
            var v = new vector(3, 4).neg();
            expect(v).eq(new vector(-3, -4));
        });
        it('dot', function () {
            var v = new vector(3, 5).dot(new vector(7, 11));
            expect(v).eq(21 + 55);
        });
        it('cross_product', function () {
            var v = new vector(3, 5).cross(new vector(7, 11));
            expect(v).eq(33 - 35);
        });
        it('rotate', function () {
            var v = new vector(1, 0).rotate(45 * Math.PI / 180);
            expect(v).eq(new vector(Math.sqrt(2) / 2, Math.sqrt(2) / 2));
        });
        it('angle', function () {
            var v = new vector(1, 0).angle(new vector(1, Math.sqrt(3)));
            expect(v).eq(60 * Math.PI / 180);
        });
    });
    //describe('line', () => {
    //    it('normal_vector', () => {
    //        var l = new dde.line(new vector(-1, 2), new vector(2, -1));
    //        expect(l.normal_vector()).eq(new vector(3, 3));
    //    });
    //    it('direct', () => {
    //        var l = new dde.line(new vector(-1, 2), new vector(2, -1));
    //        expect(l.direct()).eq(new vector(3, -3));
    //    });
    //    it('get_vector', () => {
    //        var l = new dde.line(new vector(-1, 2), new vector(2, -1));
    //        expect(l.get_vector(0.5)).eq(new vector(0.5, 0.5));
    //    });
    //    it('cross', () => {
    //        var l1 = new dde.line(new vector(-1, 2), new vector(2, -1));
    //        var l2 = new dde.line(new vector(-1, -1), new vector(2, 2));
    //        expect(l1.cross(l2)).eq(new vector(0.5, 0.5));
    //    });
    //    it('distance', () => {
    //        var l = new dde.line(new vector(-1, 2), new vector(2, -1));
    //        expect(l.distance(new vector(-1, 1))).eq(Math.sqrt(2) / 2);
    //    });
    //    it('projective', () => {
    //        var l = new dde.line(new vector(-1, 2), new vector(2, -1));
    //        expect(l.projective(new vector(-1, 1))).eq(
    //            new vector(-0.5, 1.5)
    //        );
    //    });
    //});
    //describe('matrix', () => {
    //});
    //describe('rect', () => {
    //    it('points', () => {
    //        var r = dde.rect_points({ x: -1, y: -1, w: 10, h: 20 });
    //        var ps = [{ x: -1, y: -1 }, { x: 9, y: -1 }, { x: 9, y: 19 }, { x: -1, y: 19 }];
    //        expect(r.length).eq(4);
    //        ps.forEach((p, i) => {
    //            expect(p.x).eq(r[i].x, "point " + i);
    //            expect(p.y).eq(r[i].y, "point " + i);
    //        });
    //    });
    //    it('points_rotated', () => {
    //        var r = dde.rect_points({ x: 10, y: -1, w: 2, h: 2 }, 45);
    //        console.log(r);
    //        var u = Math.sqrt(2);
    //        var ps = [{ x: 11, y: -u }, { x: 11 + u, y: 0 }, { x: 11, y: u }, { x: 11 - u, y: 0 }];
    //        expect(r.length).eq(4);
    //        ps.forEach((p, i) => {
    //            expect(p.x).eq(r[i].x, "point " + i);
    //            expect(p.y).eq(r[i].y, "point " + i);
    //        });
    //    });
    //    it('ploy_cross', () => {
    //        var rect = {
    //            x: -236.40625,
    //            y: - 68.5,
    //            w: -6.40625 - (-236.40625),
    //            h: 251.5 - (- 68.5)
    //        };
    //        var p0 = { x: - 236.40625, y: 251.4999999999997 };
    //        var p1 = { x: - 96.629044591114, y: 57.0273663876369 };
    //        var ops = dde.rect_points(rect, 0);
    //        var poly = new dde.polygon(ops.map(function (p) { return new vector(p); }));
    //        var dir_line = new dde.line(new vector(p0), new vector(p1));
    //        var re = poly.cross(dir_line);
    //    });
    //});
});
//# sourceMappingURL=vector.js.map