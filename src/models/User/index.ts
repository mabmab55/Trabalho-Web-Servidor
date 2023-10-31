export interface UserProps {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export class User {
    private _name: string;
    private _email: string;
    private _password: string;
    private _isAdmin: boolean;

    constructor(props: UserProps) {
        this._name = props.name;
        this._email = props.email;
        this._password = props.password;
        this._isAdmin = props.isAdmin;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(isAdmin: boolean) {
        this._isAdmin = isAdmin;
    }
}
