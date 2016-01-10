var graph2d;if(function(t){var n=function(){function t(t,n){this.x=t,this.y=n}return t.prototype.point=function(){return{x:this.x,y:this.y}},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.len_sq=function(){return this.x*this.x+this.y*this.y},t.prototype.len=function(){return Math.sqrt(this.len_sq())},t.prototype.normalize=function(){var n=this.len();return new t(this.x/n,this.y/n)},t.prototype.add=function(n){return new t(this.x+n.x,this.y+n.y)},t.prototype.neg=function(){return new t(-this.x,-this.y)},t.prototype.sub=function(n){return new t(this.x-n.x,this.y-n.y)},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.cross=function(t){return this.x*t.y-this.y*t.x},t.prototype.scale=function(n){return new t(n*this.x,n*this.y)},t.prototype.rotate=function(n){var r=Math.cos(n),o=Math.sin(n);return new t(r*this.x-o*this.y,o*this.x+r*this.y)},t.prototype.angle=function(t){return Math.acos(this.normalize().dot(t.normalize()))},t}();t.vector=n}(graph2d||(graph2d={})),"undefined"!=typeof exports)for(var k in graph2d)exports[k]=graph2d[k];else"undefined"!=typeof window;