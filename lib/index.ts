///<reference path="vector.ts"/>

declare var exports: any;
if (typeof exports != 'undefined') {
    for (var k in graph2d)
        exports[k] = (<any>graph2d)[k];
}
else if (typeof window !== 'undefined') {
}