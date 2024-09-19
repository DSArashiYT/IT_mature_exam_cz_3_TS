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

    it("task_nr2 method test", () => {
        instance.changePathInFileReader("../data/slowa_przyklad.txt")
        expect(instance.task_nr2()).toBe("2\naren")
    }) 

    it("task_nr2 method test part2", () => {
        instance.changePathInFileReader("../data/slowa.txt")
        expect(instance.task_nr2()).toBe("5\nrhszzohhubwbojohuubmmfue")
    }) 

    it("task_nr3 method test", () => {
        instance.changePathInFileReader("../data/slowa_przyklad.txt")
        expect(instance.task_nr3()).toBe('terefere\nananas\nbo\nalabama')
    })
    
    it("task_nr3 method test part 2", () => {
        instance.changePathInFileReader("../data/slowa.txt")
        expect(instance.task_nr3()).toBe(
            "vzwzwgszezvzzlzzzzzzouz\nazaaasfakaaaxbaaaaau\nppppppnoppnoclpop\nzggggggpegpnovzgg\nnyrpvqycpaylffffffffffffff\nkkkkkkkkkkwpijccdbl\ntstevttebttktnetitbttti\ngvsvjvvvvvqppvuvcvvvi"
        )
    })
})