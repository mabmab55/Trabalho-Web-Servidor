export const validator = {
    isString: (value: unknown): boolean => typeof value === "string",
    isValidEmail: (value: string): boolean =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
};
