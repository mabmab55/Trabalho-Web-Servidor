import { User } from "src/models/User";

export function isLogged(session: string | undefined): boolean {
    return !!session && JSON.parse(session).expiresIn >= new Date().getTime();
}

export function checkIfLoggedUserIsAdmin(user: User): boolean {
    return !!user.isAdmin;
}
