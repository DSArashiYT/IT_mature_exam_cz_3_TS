import { FullPath } from "@decorators/path"
import { existsSync, readFileSync } from "fs"

export class FileReader {
    @FullPath
    pathname: string

    constructor(path: string) {
        this.pathname = path
    }

    open<T>(linesEffect: (arg: string) => T): T[] {
        this.assertFileIsExist()

        const content = readFileSync(this.pathname, "utf-8")
        const linesContent = content.split("\n")

        return this.operateInLines(linesContent, linesEffect)
    }

    private operateInLines<T>(data: string[], afterEffect: (arg: string) => T) {
        return data.map(afterEffect)
    }

    private assertFileIsExist() {
        if(!existsSync(this.pathname)) throw new FileReaderError(`File "${this.pathname}" doesn't exist`)
    }
}


export class FileReaderError extends Error {
    constructor(message: string) {
        super(message)

        this.name = "FileReaderError"
    }
}

