System.register("numberToFrench", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function numberToFrench(n, memo) {
        if (memo === void 0) { memo = {}; }
        if (memo[n]) {
            console.log('cached', n);
            return memo[n];
        }
        console.log('calculating', n);
        var units = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
        var tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quater-vingt-dix"];
        var largerNumbers = [
            [100, 'cent'],
            [1000, 'mille'],
            [1000000, 'million'],
            [1000000000, 'milliard']
        ];
        if (n < 20) {
            memo[n] = units[n];
            return memo[n];
        }
        else if (n < 100) {
            if (n % 10 === 0) {
                memo[n] = tens[Math.floor(n / 10)];
                return memo[n];
            }
            else if (n < 70) {
                memo[n] = tens[Math.floor(n / 10)] + '-' + units[n % 10];
                return memo[n];
            }
            else if (n < 80) {
                memo[n] = tens[6] + '-' + units[10 + n % 10];
                return memo[n];
            }
            else {
                memo[n] = tens[8] + '-' + units[n - 80];
                return memo[n];
            }
        }
        for (var i = 0; i < largerNumbers.length; i++) {
            var _a = largerNumbers[i], key = _a[0], value = _a[1];
            var isBiggestLargeNumber = i === largerNumbers.length - 1;
            var nextKey = (largerNumbers[i + 1] || [null, null])[0];
            var coef = isBiggestLargeNumber ? 1 : nextKey / key;
            if (n === key) {
                return value;
            }
            else if (n < key * 2) {
                return value + '-' + numberToFrench(n % key);
            }
            else if (isBiggestLargeNumber || n < key * coef) {
                if (n % key === 0) {
                    memo[n] = numberToFrench(Math.floor(n / key), memo) + '-' + value + 's';
                    return memo[n];
                }
                else {
                    memo[n] = numberToFrench(Math.floor(n / key), memo) + '-' + value + '-' + numberToFrench(n % key, memo);
                    return memo[n];
                }
            }
        }
        return 'error';
    }
    exports_1("default", numberToFrench);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("index", ["numberToFrench"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (numberToFrench_1_1) {
                exports_2({
                    "numberToFrench": numberToFrench_1_1["default"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map