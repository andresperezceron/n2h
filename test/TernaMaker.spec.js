var TernaMaker = require("../src/TernaMaker.js");

describe("hola caracola", function () {
    test("si expect: 5 = 5", function () {
        expect(TernaMaker("5"))
            .toEqual(["005"]);
    });

    test("si expect: 5 = 5", function () {
        expect(TernaMaker("1000"))
            .toEqual(["001", "000"]);
    });
});