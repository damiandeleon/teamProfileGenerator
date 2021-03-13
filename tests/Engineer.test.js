const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return the GibHub username entered by the user", () => {
            const github = this.github;
            const output = this.github;

            const result = new Engineer(github).getGithub();

            expect(result).toEqual(output);
        })
    });

    describe("getRole", () => {
        it("should return the role of 'Engineer", () => {
            const output = "Engineer";

            const result = new Engineer().getRole();

            expect(result).toEqual(output);
        })
    });
});