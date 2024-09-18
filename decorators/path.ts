import { join } from "path"

const PATH_PATTERN = /^[\.]{1,2}((\.[a-z\d]{1,3})|(\/{1}[a-z\_\d]{1,}))+$/
const DEFAULT_PATH = "../example.txt"

export function FullPath<T extends Record<string, any>>(target: T, key: keyof T) {
    let path = convertPath(target[key] ?? DEFAULT_PATH)
    
    Object.defineProperty(target, key, {
        set: (newPath: T[keyof T]) => path = convertPath(newPath),
        get: () => path,
        
        configurable: true,
        enumerable: true,
    })
}

export class PathDecoratorError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "PathDecoratorError"
    }
}

function convertPath(path: unknown) {
    assertPathIsNotValid(path)
    return join(__dirname , path)
}

function assertPathIsNotValid(arg: unknown): asserts arg is ValidPath {
    assertPathIsNotString(arg)
    if(!havePathCorrectPattern(arg)) {
        throw new PathDecoratorError(
            `Path '${arg}' haven't correct pattern. ('./test.txt', '../dir1/test.txt', './dir1/dir2/test.txt') is correct`
        )
    }
}

function assertPathIsNotString(arg: unknown): asserts arg is string {
    if(typeof arg !== "string") {
        throw new PathDecoratorError(`Path must be a string, but it is ${typeof arg}`)
    }
}

function havePathCorrectPattern(arg: string) {
    const pathPattern = new RegExp(PATH_PATTERN)
    return pathPattern.test(arg)
}
        
        
type ValidPath = BrandType<string, "valid_path">