
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the name entered by the user", () => {
            const name = this.name;
            const output = this.name;

            const result = new Employee(name).getName();

            expect(result).toEqual(output);
        })
    });

    describe("getId", () => {
        it("should return the id entered by the user", () => {
            const id = this.id;
            const output = this.id;

            const result = new Employee(id).getId();

            expect(result).toEqual(output);
        })
    });

    describe("getEmail", () => {
        it("should return the email entered by the user", () => {
            const email = this.email;
            const output = this.email;

            const result = new Employee(email).getEmail();

            expect(result).toEqual(output);
        })
    });

    describe("getRole", () => {
        it("should return the role of 'Employee", () => {
            const output = "Employee";

            const result = new Employee().getRole();

            expect(result).toEqual(output);
        })
    });


})