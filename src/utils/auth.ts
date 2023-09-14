import { users } from "src/db";

export function isLogged(session: string | undefined): boolean {
    return !!session && JSON.parse(session).expiresIn >= new Date().getTime();
}

export function checkIfLoggedUserIsAdmin(email: string): boolean {
    return !!users.find((user) => user.email === email)?.isAdmin;
}
