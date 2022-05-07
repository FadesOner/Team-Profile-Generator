const Employee = require("../lib/Employee");

// tests to check the employee class

describe("employee", () => {
    it("should return that employee name is a string", () => {
        const employee = new Employee("Luis", "2", "luis@mail.com",);
        expect(employee.getName()).toBe("Luis");
    });

    it("id should return a number", () => {
        const employee = new Employee("Luis", "2", "luis@mail.com",);
        expect(employee.getId()).toBe('2');
    });

    it("email should return a string", () => {
        const employee = new Employee("Luis", "2", "luis@mail.com",);
        expect(employee.getEmail()).toBe("luis@mail.com");
    });

    it("has getRole() as employee role", () => {
        const returnValue = "Employee";
        const employee = new Employee("Luis", "2", "luis@mail.com",);
        expect(employee.getRole()).toBe(returnValue);
    });
});