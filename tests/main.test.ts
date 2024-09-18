import { Solution } from "@app/main";

describe("Solution", () => {
    const instance = new Solution("../data/slowa_przyklad.txt")

    it("should create instance", () => {
        expect(instance).toBeTruthy()
    })

    it("task_nr1 method test", () => {
        expect(instance.task_nr1()).toBe(2)
    }) 

    it("task_nr1 method test part 2", () => {
        instance.changePathInFileReader("../data/slowa.txt")
        expect(instance.task_nr1()).toBe(26)
    })
})