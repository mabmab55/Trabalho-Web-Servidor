import { typedObjectEntries } from "./TypedObjectEntries";

export interface SchemaValue {
    actions: (keyof Omit<Validator, "validate">)[];
    message: string;
}

export type Schema<T extends object> = {
    [K in keyof T]: SchemaValue;
};

export class Validator {
    constructor() {}

    public validate<Input extends object, Output>(
        obj: Input,
        schema: Schema<Input>,
    ): { data: Output; errors: Record<keyof Input, string> } {
        const schemaEntries = typedObjectEntries(schema);
        const errors: [keyof Input, string][] = [];

        for (const [key, value] of schemaEntries) {
            for (const action of value.actions) {
                if (!this[action](obj[key])) {
                    errors.push([key, value.message]);
                }
            }
        }

        return {
            data: obj as unknown as Output,
            errors: Object.fromEntries(errors) as Record<keyof Input, string>,
        };
    }

    public isString(value: unknown): value is string {
        return typeof value === "string";
    }

    public isNonEmptyString(value: unknown): value is string {
        return this.isString(value) && value !== "";
    }

    public isValidEmail(value: unknown): value is string {
        return (
            this.isString(value) &&
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
        );
    }

    public isValidPassword(value: unknown): value is string {
        return this.isString(value) && value.length > 4;
    }

    public isNumber(value: unknown): value is number {
        return typeof Number(value) === "number";
    }

    public isNumberGreaterThanZero(value: unknown): value is number {
        return this.isNumber(value) && value > 0;
    }
}
