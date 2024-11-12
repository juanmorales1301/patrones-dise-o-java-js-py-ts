class Database {
    constructor() {
        if (Database.instance) return Database.instance;
        this.connection = "Conexión establecida";
        Database.instance = this;
    }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true, misma instancia