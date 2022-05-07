const Engineer = require("../lib/Engineer");

// tests to check the engineer class

describe("Engineer", () => {
    it("should return the Intern Role as Engineer", () =>{
        const returnValue = "Engineer";
        const engineer = new Engineer("Luis", "2", "luis@mail.com", "luis123");
        expect(engineer.getRole()).toBe(returnValue);
    });

    it("should return that gitHub Username is a string", () => {
        const returnValue = "Github userName";
        const engineer = new Engineer("Luis", "2", "luis@mail.com", returnValue);
        expect(engineer.getGithub()).toBe(returnValue);
    });
});