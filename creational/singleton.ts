/**
 * Singleton Pattern:
 * Ensures that only one object of a particular class is ever created.
 */
class President {
    private static instance: President;

    private constructor() { }

    public static getInstance(): President {
        if (!President.instance) {
            President.instance = new President()
        }
        return President.instance
    }
}

const president1 = President.getInstance()
const president2 = President.getInstance()

console.log(president1 === president2)