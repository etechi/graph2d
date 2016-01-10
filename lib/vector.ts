module graph2d {
    export interface point {
        x: number;
        y: number;
    }
    export class vector implements point
    { 
        x: number;
        y: number; 
        constructor(x: number, y: number) {
            this.x = x; 
            this.y = y;
        }
        point(): point {
            return { x: this.x, y: this.y };
        }
        clone(): vector {
            return new vector(this.x, this.y);
        }
        len_sq(): number {
            return this.x * this.x + this.y * this.y;
        }
        len(): number {
            return Math.sqrt(this.len_sq());
        }
        normalize(): vector {
            var l = this.len();
            return new vector(this.x / l, this.y / l);
        }
        add(v: vector): vector {
            return new vector(this.x + v.x, this.y + v.y);
        }
        neg(): vector {
            return new vector(-this.x, -this.y);
        }
        sub(v: vector): vector {
            return new vector(this.x - v.x, this.y - v.y);
        }
        dot(v: vector): number {
            return this.x * v.x + this.y * v.y;
        }
        cross(v: vector): number {
            return this.x * v.y - this.y * v.x;
        }
        scale(v: number): vector {
            return new vector(v * this.x, v * this.y);
        }
        rotate(angle: number): vector {
            var c = Math.cos(angle);
            var s = Math.sin(angle);
            return new vector(c * this.x - s * this.y, s * this.x + c * this.y);
        }
        angle(v: vector): number {
            return Math.acos(this.normalize().dot(v.normalize()));
        }
    }

}