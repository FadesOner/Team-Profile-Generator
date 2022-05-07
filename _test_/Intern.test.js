const Intern = require("../lib/Intern");

// tests to check the intern class

describe("Intern", () => {
    it("should return the Intern Role as Intern", () => {
        const returnValue = "Intern";
        const intern = new Intern("Luis", "2", "luis@mail.com", "school");
        expect(intern.getRole()).toBe(returnValue);
    });

    it("has getSchool() as entered school name", () => {
        const returnValue = "school";
        const intern = new Intern("Luis", "2", "luis@mail.com", returnValue);
        expect(intern.getSchool()).toBe(returnValue);
    })
})