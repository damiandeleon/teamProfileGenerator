const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("should return the Office Number entered by the user", () => {
            const officeNumber = this.officeNumber;
            const output = this.officeNumber;

            const result = new Manager().getOfficeNumber(officeNumber);

            expect(result).toEqual(output);
        })
    });

    describe("getRole", () => {
        it("should return the role of 'Manager", () => {
            const output = "Manager";

            const result = new Manager().getRole();

            expect(result).toEqual(output);
        })
    });
});