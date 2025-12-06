

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

////

test("One dollar should be 146.26 yen", () => {
    const { fromDollarToYen } = require("./app.js");
    let result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26); 
});

test("One yen should be 0.00556 pounds", () => {
    const { fromYenToPound } = require("./app.js");
    let result = fromYenToPound(1);
    expect(result).toBeCloseTo(0.00556);
});


