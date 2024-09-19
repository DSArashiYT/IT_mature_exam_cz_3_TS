import { StringOperation } from "@classes/stringOperation";
import { FileReader } from "@classes/fileReader";

export class Solution {
    private string: StringOperation
    private file: FileReader

    constructor(path: string) {
        this.file = new FileReader(path)
        this.string = new StringOperation()
    }

    changePathInFileReader(newPath: string) {
        this.file.pathname = newPath
    }

    task_nr1() {
        const LINES = this.file.open(line => line.trim())
        return this.string.countWordsWithContainsPattern(LINES, /k.t/)  
    }

    task_nr2() {
        const LINES = this.file.open(line => line.trim())
        const ENCRYPTED_LINES = LINES.map(line => {
            return this.string.encryptWord(line)
        })
        
        let maxSizeWord = ""
        let count = 0

        for(let i = 0; i < LINES.length; i++) {
            if(LINES[i] === this.string.reverseWord(ENCRYPTED_LINES[i])) {
                maxSizeWord = this.string.maxLengthWord(maxSizeWord, LINES[i])
                count++
            }
        }

        return `${count}\n${maxSizeWord}`
    }


    task_nr3() {
        const LINES = this.file.open(line => line.trim())
        const WORDS: string[] = []

        for(const LINE of LINES) {
            const counter = this.string.letterCounter(LINE)
            if(this.string.lettersCountIsMoreThanHalfLengthString(counter, LINE)) {
                WORDS.push(LINE)
            }
        }

        return WORDS.join("\n")
    }
    
}