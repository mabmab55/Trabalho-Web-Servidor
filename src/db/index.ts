import mysql, { Pool } from "mysql2/promise";
import { populateQueries, setupQueries } from "./queries";

export class Database {
    private static instance: Database;
    private pool: Pool;

    private constructor() {
        this.pool = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "db",
            port: 3306,
            password: "password",
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });

        this.init();
    }

    private async init() {
        const existingTables = await this.query<string>("SHOW TABLES;");

        if (existingTables.length > 0) {
            return;
        }

        const setupPromises = setupQueries.map(async (query) =>
            this.pool.execute(query),
        );
        await Promise.all(setupPromises);

        const populatePromises = populateQueries.map(async (query) =>
            this.pool.execute(query),
        );
        await Promise.all(populatePromises);
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public async query<T>(sql: string, values?: unknown) {
        const [rows] = await this.pool.execute(sql, values);

        return rows as T[];
    }

    public async getConnection(): Promise<Database> {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}
