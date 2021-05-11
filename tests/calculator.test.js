const calculator = require("../code/calculator");

test("CALCULATOR TEST 1", () =>{
    expect(calculator.add(2,5)).toBe(7);
});

test("CALCULATOR TEST 2",() =>{
    expect(calculator.sub(15,4)).toBe(11);
});

test("CALCULATOR TEST 3",() => {
    expect(calculator.mul(12,12)).toBe(144);
});

test("CALCULATOR TEST 4",() => {
    expect(calculator.div(2,4)).toBe(0.5);
});