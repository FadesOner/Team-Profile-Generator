const Manager = require("../lib/Manager");

// tests to check the manager class

describe("Manager", () => {
    it("should return the Manager Role as Manager", () => {
        const returnValue = "Manager";
        const manager = new Manager ("Luis", "2", "luis@mail.com", "123");
        expect(manager.getRole()).toBe(returnValue);
    });

    it("it should return a manager number", () => {
        const returnValue = 123;
        const manager = new Manager ("Luis", "2", "luis@mail.com", returnValue);
        expect(manager.getOfficeNumber()).toBe(returnValue);
    })

});