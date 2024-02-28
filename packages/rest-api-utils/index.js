System.register("index", [], function (exports_1, context_1) {
    "use strict";
    var add;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            add = function (a, b) { return a + b; };
            exports_1("add", add);
        }
    };
});
