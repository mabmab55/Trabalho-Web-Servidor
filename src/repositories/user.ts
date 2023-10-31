import { Database } from "src/db";
import { User, UserProps } from "src/models/User";

export class UserRepository {
    constructor(private readonly db: Database) {}

    async findByEmail(email: string): Promise<User | undefined> {
        const [user] = await this.db.query<UserProps>(
            "SELECT * FROM user WHERE email = ?",
            [email],
        );

        return user ? new User(user) : undefined;
    }

    async save(props: UserProps): Promise<void> {
        await this.db.query<UserProps>(
            "INSERT INTO user(email, name, password, isAdmin) VALUES(?, ?, ?, ?)",
            [props.email, props.name, props.password, props.isAdmin],
        );
    }
}
