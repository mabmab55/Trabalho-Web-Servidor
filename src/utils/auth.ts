export function isLogged(session: string | undefined): boolean {
    return !!session && JSON.parse(session).expiresIn >= new Date().getTime();
}
