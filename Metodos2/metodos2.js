function greet(name, gret) {
    if (gret) {
        return "".concat(gret, ", ").concat(name);
    }
    else {
        return "hola, ".concat(name);
    }
}
console.log(greet("carlitos"));
console.log(greet("pedrito", "greet days"));
//parametros multiples
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acum, actual) { return acum + actual; }, 0);
}
console.log("result of numbers sum : ", sumAll(2, 3, 56, 7, 8));
//valores por defecto
function bye(name, byes) {
    if (byes === void 0) { byes = "adios"; }
    return "".concat(byes, ", ").concat(name);
}
console.log(bye("carlitos"));
console.log(bye("pedrito", "see you"));
