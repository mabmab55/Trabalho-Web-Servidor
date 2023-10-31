export interface AppErrorProperties {
    message: string;
    statusCode: number;
}

export class AppError extends Error {
    message: string;
    statusCode: number;

    constructor({ message, statusCode }: AppErrorProperties) {
        super(message);

        this.message = message;
        this.statusCode = statusCode;
    }
}
