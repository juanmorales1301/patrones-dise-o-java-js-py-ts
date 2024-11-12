class Database {
    private static Database instance;
    private Database() {
        System.out.println("Conexión establecida.");
    }
    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }
}
public class singleton {
    public static void main(String[] args) {
        Database db1 = Database.getInstance();
        Database db2 = Database.getInstance();
        System.out.println(db1 == db2); // true, misma instancia
    }
}