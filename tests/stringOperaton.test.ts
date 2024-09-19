import { StringOperation } from "@classes/stringOperation";

describe("String Operator class", () => {
    const instance = new StringOperation()
    
    it("shoud create instance", () => {
        expect(instance).toBeTruthy()
    })

    it("maxLengthWord method test", () => {
        expect(instance.maxLengthWord("", "www", "e", "wewe")).toBe("wewe")
        expect(instance.maxLengthWord("", "", "", "")).toBe("")
        expect(instance.maxLengthWord()).toBe("")
    })

    it("reverseWord method test", () => {
        expect(instance.reverseWord("aba")).toBe("aba")
        expect(instance.reverseWord("")).toBe("")
        expect(instance.reverseWord("Hello world")).toBe("dlrow olleH")
    })

    it("countWordsWithContainsPattern method test", () => {
        expect(instance.countWordsWithContainsPattern(["test", "abala", "abaaba"], /^aba/)).toBe(2)
        expect(instance.countWordsWithContainsPattern([], /[\d]/)).toBe(0)
        expect(instance.countWordsWithContainsPattern(["www", "test", "hello World"], /^[^\s]{1,}$/)).toBe(2)
    })

    it("encryptWord method test", () => {
        expect(instance.encryptWord("aren")).toBe("nera")
        expect(instance.encryptWord("ab_")).toBe("")
        expect(instance.encryptWord("rhszzohhubwbojohuubmmfue")).toBe(instance.reverseWord("rhszzohhubwbojohuubmmfue"))
    })

    it("letterCounter method test", () => {
        expect(instance.letterCounter("aabb")).toStrictEqual({ "a": 2, "b": 2 })
        expect(instance.letterCounter("abceeca")).toStrictEqual({ "a": 2, "b": 1, "c": 2, "e": 2 })
        expect(instance.letterCounter("")).toStrictEqual({})
    })

    it("lettersCountIsMoreThanHalfLengthString method test", () => {
        expect(instance.lettersCountIsMoreThanHalfLengthString({ "a": 2, "b": 1 }, "aba")).toBe(true)
        expect(instance.lettersCountIsMoreThanHalfLengthString({}, "")).toBe(false)
        expect(instance.lettersCountIsMoreThanHalfLengthString({ "a": 1, "b": 1, "d": 3, "f": 4 }, "ffdabdcff")).toBe(false)

    })
})