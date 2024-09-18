import { FileReader } from "@classes/fileReader";

export class Solution {
    private file: FileReader

    task_nr1() {
        const LINES = this.file.open(line => line.trim())
        return LINES.filter(line => line.match(/k.t/) !== null).length
        
    }

    constructor(path: string) {
        this.file = new FileReader(path)
    }

    changePathInFileReader(newPath: string) {
        this.file.pathname = newPath
    }
}