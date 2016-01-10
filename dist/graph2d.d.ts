declare module graph2d {
    interface point {
        x: number;
        y: number;
    }
    class vector implements point {
        x: number;
        y: number;
        constructor(x: number, y: number);
        point(): point;
        clone(): vector;
        len_sq(): number;
        len(): number;
        normalize(): vector;
        add(v: vector): vector;
        neg(): vector;
        sub(v: vector): vector;
        dot(v: vector): number;
        cross(v: vector): number;
        scale(v: number): vector;
        rotate(angle: number): vector;
        angle(v: vector): number;
    }
}
declare var exports: any;
