const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getSchool", () => {
        it("should return the school entered by the user", () => {
            const school = this.school;
            const output = this.school;

            const result = new Intern(school).getSchool();

            expect(result).toEqual(output);
        })
    });

    describe("getRole", () => {
        it("should return the role of 'Intern", () => {
            const output = "Intern";

            const result = new Intern().getRole();

            expect(result).toEqual(output);
        })
    });
});