export class StringOperation {
    countWordsWithContainsPattern(words: string[], pattern: RegExp) {
        const WORD_PATTERN = new RegExp(pattern)
        let countWords = 0

        for(const WORD of words) {
            if(WORD_PATTERN.test(WORD)) {
                countWords++ 
            }
        }

        return countWords
    }

    maxLengthWord(...words: string[]) {
        if(words.length === 0) return ""
        let maxWord = words[0]

        for(let i = 1; i < words.length; i++) {
            const currentWord = words[i]

            if(currentWord.length > maxWord.length) {
                maxWord = currentWord
                continue
            }
        }

        return maxWord
    }

    reverseWord(word: string) {
        let reverseWord = ""

        for(let i = word.length - 1; i >= 0; i--) {
            reverseWord += word.charAt(i)
        }

        return reverseWord
    }

    letterCounter(word: string) {
        const LETTERS = word.split("")
        const HASH_MAP: TCounter = {}

        let r = LETTERS.length - 1
        let l = 0
        
        while(l <= r) {
            if(l !== r) {
                HASH_MAP[LETTERS[l]] = (HASH_MAP[LETTERS[l]] ?? 0) + 1
                l++
            }

            HASH_MAP[LETTERS[r]] = (HASH_MAP[LETTERS[r]] ?? 0) + 1
            r--
        }
        

        return HASH_MAP
    }

    encryptWord(word: string) {
        if(!this.wordContainsOnlyLowercaseLetters(word)) return ""
        
        const LETTERS_WORD = word.split("")

        for(let i = 0; i < LETTERS_WORD.length; i++) {
            LETTERS_WORD[i] = this.encryptLetter(word.charCodeAt(i), 13)
        }

        return LETTERS_WORD.join("")
    }

    lettersCountIsMoreThanHalfLengthString(counterLetters: TCounter, word: string) {
        for(const letter in counterLetters) {
            const COUNT_LETTER = counterLetters[letter]

            if(this.halfLength(word) <= COUNT_LETTER) {
               return true
            }
        }

        return false
    }

    private encryptLetter(letterCode: number, jumpI: number): string {
        const LETTER_A = "a".charCodeAt(0)
        const ALFABET_LIMIT = 26
        
        let encrypted_letter_code = (letterCode - LETTER_A) + jumpI
        if(encrypted_letter_code >= ALFABET_LIMIT) {
            encrypted_letter_code -= ALFABET_LIMIT
        }

        return String.fromCharCode(encrypted_letter_code + LETTER_A)
    }

    private wordContainsOnlyLowercaseLetters(word: string) {
        return word.match(/^[a-z]{0,}$/) !== null
    }

    private halfLength(word: string) {
        return Math.ceil(word.length / 2)
    }
}

type TCounter = { [key: string]: number }