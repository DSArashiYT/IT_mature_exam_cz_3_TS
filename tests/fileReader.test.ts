import { FileReader, FileReaderError } from "@classes/fileReader";
import { join } from "path";

describe("FileReader", () => {
    const instance = new FileReader("../data/slowa_przyklad.txt")

    it("should create instance", () => {
        expect(instance).toBeTruthy()
    })

    it("open method test", () => {
        expect(instance.open(i => i.trim())[0]).toBe("terefere")
        expect(Number.isNaN(instance.open(Number)[0])).toBe(true)
        expect(instance.open(Boolean)[0]).toBe(true)
    })

    it("open method with another path", () => {
        instance.pathname = "../data/slowa.txt"
        expect(instance.open(i => i.trim())[0]).toBe("oujwnltfakjikjxyxbksaa")
    })
    
    it("open method with invalid path", () => {
        const path = "../data1/slowa.txt"

        try {
            instance.pathname = path
            expect(instance.open(i => i.trim())[0]).toBe("oujwnltfakjikjxyxbksaa") // Must be error
        }

        catch(err) {
            expect(err).toBeInstanceOf(FileReaderError)
            expect((err as FileReaderError).name).toBe("FileReaderError")
            expect((err as FileReaderError).message).toBe(`File "${join(__dirname, path)}" doesn't exist`)
        }
    })
})