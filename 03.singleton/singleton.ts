class Database {
    private static instance: Database;
    private constructor() {
        console.log("Conexión establecida.");
    }
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true, misma instancia