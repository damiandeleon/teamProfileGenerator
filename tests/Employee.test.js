const { hasUncaughtExceptionCaptureCallback } = require("process");
const { isMainThread } = require("worker_threads");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the input assigned to this.name", () => {
            const name = "Damian";
            const output = "Damian"

            const result = new Employee().getName(name);

            expect(result).toEqual(output);
        })
    });

})