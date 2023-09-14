export const validator = {
    isString(value: unknown): value is string {
        return typeof value === "string";
    },
    isValidEmail(value: unknown): value is string {
        return (
            this.isString(value) &&
            /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        );
    },
    isValidPassword(value: unknown): value is string {
        return this.isString(value) && value.length > 4;
    },
};
