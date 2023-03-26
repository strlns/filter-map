export function filterMap<T, U>(array: T[], mapper: (value: T) => U, predicate?: (value: T, mapperResult?: U) => boolean): U[];
export function filterMap<T, U>(array: T[], mapper: undefined, predicate: (value: T, mapperResult?: U|T) => boolean): T[];
export function filterMap<T, U>(array: T[], mapper?: (value: T) => U, predicate?: (value: T, mapperResult?: U|T) => boolean) {
    const result = [];
    const [hasPredicate, hasMapper] = [Boolean(predicate), Boolean(mapper)];
    for (const value of array) {
        const mapperResult = hasMapper ? mapper!(value) : value;
        if (!hasPredicate || predicate!(value, mapperResult)) {
            result.push(mapperResult);
        }
    }
    return result;
}
