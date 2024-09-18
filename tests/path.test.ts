import { FullPath, PathDecoratorError } from "@decorators/path";
import { join } from "path";

describe("FullPath Decorator", () => {
    const EXAMPLE_PATH = '../data/slowa_przyklad.txt'
    const example = { test: EXAMPLE_PATH }
    FullPath(example, "test") 
    
    it("show current path", () => {
        expect(example.test).toBe(join(__dirname, EXAMPLE_PATH))
    })
    
    it("update and show path", () => {
        example.test = "../example.txt"
        expect(example.test).toBe(join(__dirname,  "../example.txt"))
    })

    it("update path with invalid input", () => {
        try {
            example.test = "333.txt"
            expect(example.test).toBe(join(__dirname,  "333.txt")) //must be error
        }

        catch(err) {
            expect(err).toBeInstanceOf(PathDecoratorError)
            expect((err as PathDecoratorError).name).toBe("PathDecoratorError")
            expect((err as PathDecoratorError).message).toBe(
                `Path '333.txt' haven't correct pattern. ('./test.txt', '../dir1/test.txt', './dir1/dir2/test.txt') is correct`
            )
        }
    })
})