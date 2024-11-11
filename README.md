Los patrones de diseño son soluciones probadas a problemas comunes en el desarrollo de software. Se clasifican en tres categorías principales: creacionales, estructurales y de comportamiento. A continuación, se detallan cada uno de los patrones mencionados en el catálogo de Refactoring.Guru, incluyendo su definición, funcionamiento, beneficios, ventajas, desventajas, cuándo utilizarlos y ejemplos en Java, JavaScript y TypeScript.

## Patrones Creacionales

Los patrones creacionales se centran en la forma de crear objetos, proporcionando mecanismos que aumentan la flexibilidad y reutilización del código existente.

### 1. Factory Method

**Definición:** Proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

**Funcionamiento:** Define un método en la clase base que devuelve un objeto de una clase específica. Las subclases sobrescriben este método para cambiar el tipo de objeto que se crea.

**Beneficios:**
- Promueve la reutilización de código.
- Facilita la extensión del código sin modificar las clases existentes.

**Ventajas:**
- Desacopla la creación de objetos de su implementación.
- Permite añadir nuevas clases de productos sin cambiar el código existente.

**Desventajas:**
- Puede aumentar la complejidad del código debido a la introducción de múltiples subclases.

**Cuándo utilizarlo:**
- Cuando una clase no puede anticipar el tipo de objetos que debe crear.
- Para delegar la responsabilidad de creación a subclases.

**Ejemplo:**

*Escenario:* Sistema de gestión de diálogos que puede crear diferentes tipos de botones según el sistema operativo.

**Java:**

```java
// Producto
interface Button {
    void render();
}

// Producto Concreto
class WindowsButton implements Button {
    public void render() {
        System.out.println("Renderizando botón de Windows.");
    }
}

// Producto Concreto
class MacOSButton implements Button {
    public void render() {
        System.out.println("Renderizando botón de MacOS.");
    }
}

// Creador
abstract class Dialog {
    public void renderWindow() {
        Button okButton = createButton();
        okButton.render();
    }
    protected abstract Button createButton();
}

// Creador Concreto
class WindowsDialog extends Dialog {
    protected Button createButton() {
        return new WindowsButton();
    }
}

// Creador Concreto
class MacOSDialog extends Dialog {
    protected Button createButton() {
        return new MacOSButton();
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Dialog dialog;
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            dialog = new WindowsDialog();
        } else {
            dialog = new MacOSDialog();
        }
        dialog.renderWindow();
    }
}
```

**JavaScript:**

```javascript
// Producto
class Button {
    render() {
        throw new Error('Método render() debe ser implementado.');
    }
}

// Producto Concreto
class WindowsButton extends Button {
    render() {
        console.log('Renderizando botón de Windows.');
    }
}

// Producto Concreto
class MacOSButton extends Button {
    render() {
        console.log('Renderizando botón de MacOS.');
    }
}

// Creador
class Dialog {
    renderWindow() {
        const okButton = this.createButton();
        okButton.render();
    }
    createButton() {
        throw new Error('Método createButton() debe ser implementado.');
    }
}

// Creador Concreto
class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}

// Creador Concreto
class MacOSDialog extends Dialog {
    createButton() {
        return new MacOSButton();
    }
}

// Uso
const os = require('os').platform();
let dialog;
if (os === 'win32') {
    dialog = new WindowsDialog();
} else {
    dialog = new MacOSDialog();
}
dialog.renderWindow();
```

**TypeScript:**

```typescript
// Producto
interface Button {
    render(): void;
}

// Producto Concreto
class WindowsButton implements Button {
    render(): void {
        console.log('Renderizando botón de Windows.');
    }
}

// Producto Concreto
class MacOSButton implements Button {
    render(): void {
        console.log('Renderizando botón de MacOS.');
    }
}

// Creador
abstract class Dialog {
    public renderWindow(): void {
        const okButton = this.createButton();
        okButton.render();
    }
    protected abstract createButton(): Button;
}

// Creador Concreto
class WindowsDialog extends Dialog {
    protected createButton(): Button {
        return new WindowsButton();
    }
}

// Creador Concreto
class MacOSDialog extends Dialog {
    protected createButton(): Button {
        return new MacOSButton();
    }
}

// Uso
const os = require('os').platform();
let dialog: Dialog;
if (os === 'win32') {
    dialog = new WindowsDialog();
} else {
    dialog = new MacOSDialog();
}
dialog.renderWindow();
```

### 2. Abstract Factory

**Definición:** Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

**Funcionamiento:** Define una interfaz para crear cada tipo de objeto en la familia. Las implementaciones concretas de la fábrica producen una familia de productos que comparten un tema común.

**Beneficios:**
- Garantiza la compatibilidad entre los productos creados.
- Facilita la sustitución de familias de productos sin cambiar el código cliente.

**Ventajas:**
- Aísla el código cliente de las clases concretas de implementación.
- Promueve la coherencia entre productos relacionados.

**Desventajas:**
- Añade complejidad debido a la introducción de múltiples interfaces y clases.

**Cuándo utilizarlo:**
- Cuando el sistema debe ser independiente de cómo se crean, componen y representan sus productos.
- Cuando se desea proporcionar una biblioteca de productos y se quiere revelar solo sus interfaces, no sus implementaciones.

**Ejemplo:**

*Escenario:* Sistema de interfaz gráfica que puede crear diferentes conjuntos de widgets (botones y checkboxes) según el sistema operativo.

**Java:**

```java
// Productos
interface Button {
    void paint();
}

interface Checkbox {
    void paint();
}

// Productos Concretos
class WindowsButton implements Button {
    public void paint() {
        System.out.println("Renderizando botón de Windows.");
    }
}

class MacOSButton implements Button {
    public void paint() {
        System.out.println("Renderizando botón de MacOS.");
    }
}

class WindowsCheckbox implements Checkbox {
    public void paint() {
        System.out.println("Renderizando checkbox de Windows.");
    }
}

class MacOSCheckbox implements Checkbox {
    public void paint() {
        System.out.println("Renderizando checkbox de MacOS.");
    }
}

// Fábrica abstracta
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

// Fábricas concretas
class WindowsFactory implements GUIFactory {
    public Button createButton() {
        return new WindowsButton();
    }
    
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacOSFactory implements GUIFactory {
    public Button createButton() {
        return new MacOSButton();
    }
    
    public Checkbox createCheckbox() {
        return new MacOSCheckbox();
    }
}

// Cliente
class Application {
    private Button button;
    private Checkbox checkbox;
    
    public Application(GUIFactory factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }
    
    public void paint() {
        button.paint();
        checkbox.paint();
    }
}

// Uso
public class Main {
    private static Application configureApplication() {
        Application app;
        GUIFactory factory;
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            factory = new WindowsFactory();
        } else {
            factory = new MacOSFactory();
        }
        app = new Application(factory);
        return app;
    }

    public static void main(String[] args) {
        Application app = configureApplication();
        app.paint();
    }
}
```

**JavaScript:**

```javascript
// Productos
class Button {
    paint() {
        throw new Error('Método paint() debe ser implementado.');
    }
}

class Checkbox {
    paint() {
        throw new Error('Método paint() debe ser implementado.');
    }
}

// Productos Concretos
class WindowsButton extends Button {
    paint() {
        console.log("Renderizando botón de Windows.");
    }
}

class MacOSButton extends Button {
    paint() {
        console.log("Renderizando botón de MacOS.");
    }
}

class WindowsCheckbox extends Checkbox {
    paint() {
        console.log("Renderizando checkbox de Windows.");
    }
}

class MacOSCheckbox extends Checkbox {
    paint() {
        console.log("Renderizando checkbox de MacOS.");
    }
}

// Fábrica abstracta
class GUIFactory {
    createButton() {
        throw new Error('Método createButton() debe ser implementado.');
    }
    createCheckbox() {
        throw new Error('Método createCheckbox() debe ser implementado.');
    }
}

// Fábricas concretas
class WindowsFactory extends GUIFactory {
    createButton() {
        return new WindowsButton();
    }
    createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacOSFactory extends GUIFactory {
    createButton() {
        return new MacOSButton();
    }
    createCheckbox() {
        return new MacOSCheckbox();
    }
}

// Cliente
class Application {
    constructor(factory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}

// Uso
let factory;
const os = require('os').platform();
if (os === 'win32') {
    factory = new WindowsFactory();
} else {
    factory = new MacOSFactory();
}
const app = new Application(factory);
app.paint();
```

**TypeScript:**

```typescript
// Productos
interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}

// Productos Concretos
class WindowsButton implements Button {
    paint(): void {
        console.log("Renderizando botón de Windows.");
    }
}

class MacOSButton implements Button {
    paint(): void {
        console.log("Renderizando botón de MacOS.");
    }
}

class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log("Renderizando checkbox de Windows.");
    }
}

class MacOSCheckbox implements Checkbox {
    paint(): void {
        console.log("Renderizando checkbox de MacOS.");
    }
}

// Fábrica abstracta
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Fábricas concretas
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }
    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

// Cliente
class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    public paint(): void {
        this.button.paint();
        this.checkbox.paint();
    }
}

// Uso
const os = require('os').platform();
let factory: GUIFactory;
if (os === 'win32') {
    factory = new WindowsFactory();
} else {
    factory = new MacOSFactory();
}
const app = new Application(factory);
app.paint();
```

Este es un ejemplo de cómo el patrón Abstract Factory puede gestionar la creación de interfaces de usuario específicas para cada sistema operativo, asegurando compatibilidad y consistencia en el diseño de sus elementos.



### 3. Singleton

**Definición:** El patrón Singleton asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esta instancia.

**Funcionamiento:** Define una clase con un método que crea una nueva instancia del objeto si no existe; si ya existe, retorna la misma instancia.

**Beneficios:**
- Controla el acceso a la única instancia y garantiza la existencia de una única instancia en todo el ciclo de vida de la aplicación.

**Ventajas:**
- Asegura el uso de una sola instancia de la clase, permitiendo el control de recursos compartidos.

**Desventajas:**
- Puede dificultar el testing de la aplicación ya que impide la sustitución de instancias.

**Cuándo utilizarlo:**
- Cuando se necesita exactamente una instancia de una clase para coordinar acciones en todo el sistema (como un objeto de configuración o un registro de conexiones a bases de datos).

**Ejemplo:**

*Escenario:* Administrador de conexión a una base de datos, asegurando que solo exista una conexión activa a la vez.

**Java:**

```java
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
public class Main {
    public static void main(String[] args) {
        Database db1 = Database.getInstance();
        Database db2 = Database.getInstance();
        System.out.println(db1 == db2); // true, misma instancia
    }
}
```

**JavaScript:**

```javascript
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
```

**TypeScript:**

```typescript
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
```

### 4. Builder

**Definición:** El patrón Builder permite construir objetos complejos paso a paso, separando el proceso de construcción de la representación final.

**Funcionamiento:** Define una clase constructora que puede crear y ensamblar partes de un objeto en distintos métodos, permitiendo variaciones en el objeto final.

**Beneficios:**
- Fomenta la creación de objetos complejos sin depender de un constructor largo y sobrecargado.

**Ventajas:**
- Es útil para objetos con muchas configuraciones y opciones.

**Desventajas:**
- Aumenta la complejidad al añadir múltiples clases adicionales para la construcción.

**Cuándo utilizarlo:**
- Cuando se necesita construir objetos con múltiples configuraciones o un conjunto de parámetros opcionales.

**Ejemplo:**

*Escenario:* Generador de órdenes de compra que permite especificar detalles opcionales como dirección, fecha de entrega y productos.

**Java:**

```java
class Order {
    private String product;
    private String address;
    private String deliveryDate;
    
    private Order(Builder builder) {
        this.product = builder.product;
        this.address = builder.address;
        this.deliveryDate = builder.deliveryDate;
    }

    public static class Builder {
        private String product;
        private String address;
        private String deliveryDate;

        public Builder(String product) {
            this.product = product;
        }
        public Builder setAddress(String address) {
            this.address = address;
            return this;
        }
        public Builder setDeliveryDate(String deliveryDate) {
            this.deliveryDate = deliveryDate;
            return this;
        }
        public Order build() {
            return new Order(this);
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Order order = new Order.Builder("Laptop")
                            .setAddress("123 Main St")
                            .setDeliveryDate("10/10/2023")
                            .build();
    }
}
```

**JavaScript:**

```javascript
class Order {
    constructor(product) {
        this.product = product;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    setDeliveryDate(deliveryDate) {
        this.deliveryDate = deliveryDate;
        return this;
    }
}

const order = new Order("Laptop")
                .setAddress("123 Main St")
                .setDeliveryDate("10/10/2023");
```

**TypeScript:**

```typescript
class Order {
    private product: string;
    private address?: string;
    private deliveryDate?: string;

    constructor(product: string) {
        this.product = product;
    }

    public setAddress(address: string): this {
        this.address = address;
        return this;
    }

    public setDeliveryDate(deliveryDate: string): this {
        this.deliveryDate = deliveryDate;
        return this;
    }
}

const order = new Order("Laptop")
                .setAddress("123 Main St")
                .setDeliveryDate("10/10/2023");
```


### Patrones Estructurales

**Definición:** Los patrones estructurales se enfocan en la composición de clases y objetos para formar estructuras más grandes mientras mantienen la flexibilidad y eficiencia.

### 5. Adapter

**Definición:** El patrón Adapter convierte la interfaz de una clase en otra que el cliente espera, permitiendo que clases con interfaces incompatibles trabajen juntas.

**Funcionamiento:** Crea una clase envoltorio (adapter) que traduce la interfaz de una clase existente a otra interfaz requerida por el cliente.

**Beneficios:**
- Permite la interoperabilidad entre clases que no fueron diseñadas para trabajar juntas.

**Ventajas:**
- Reutilización de clases existentes sin modificarlas.

**Desventajas:**
- Añade complejidad al sistema al introducir nuevas clases.

**Cuándo utilizarlo:**
- Cuando se necesita utilizar una clase existente pero su interfaz no es compatible con los requerimientos del cliente.

**Ejemplo:**

*Escenario:* Integrar un sistema de pagos existente con una nueva API que usa un formato diferente para procesar pagos.

**Java:**

```java
// Interfaz objetivo
interface PaymentProcessor {
    void processPayment(String details);
}

// Clase existente incompatible
class LegacyPaymentSystem {
    void makePayment(String data) {
        System.out.println("Pago procesado: " + data);
    }
}

// Adaptador
class PaymentAdapter implements PaymentProcessor {
    private LegacyPaymentSystem legacyPaymentSystem;

    public PaymentAdapter(LegacyPaymentSystem legacyPaymentSystem) {
        this.legacyPaymentSystem = legacyPaymentSystem;
    }

    @Override
    public void processPayment(String details) {
        legacyPaymentSystem.makePayment(details);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        LegacyPaymentSystem legacySystem = new LegacyPaymentSystem();
        PaymentProcessor adapter = new PaymentAdapter(legacySystem);
        adapter.processPayment("Detalles del pago");
    }
}
```

**JavaScript:**

```javascript
// Interfaz objetivo
class PaymentProcessor {
    processPayment(details) {
        throw new Error("Método no implementado");
    }
}

// Clase existente incompatible
class LegacyPaymentSystem {
    makePayment(data) {
        console.log(`Pago procesado: ${data}`);
    }
}

// Adaptador
class PaymentAdapter extends PaymentProcessor {
    constructor(legacySystem) {
        super();
        this.legacySystem = legacySystem;
    }

    processPayment(details) {
        this.legacySystem.makePayment(details);
    }
}

// Uso
const legacySystem = new LegacyPaymentSystem();
const adapter = new PaymentAdapter(legacySystem);
adapter.processPayment("Detalles del pago");
```

**TypeScript:**

```typescript
// Interfaz objetivo
interface PaymentProcessor {
    processPayment(details: string): void;
}

// Clase existente incompatible
class LegacyPaymentSystem {
    public makePayment(data: string): void {
        console.log(`Pago procesado: ${data}`);
    }
}

// Adaptador
class PaymentAdapter implements PaymentProcessor {
    private legacySystem: LegacyPaymentSystem;

    constructor(legacySystem: LegacyPaymentSystem) {
        this.legacySystem = legacySystem;
    }

    public processPayment(details: string): void {
        this.legacySystem.makePayment(details);
    }
}

// Uso
const legacySystem = new LegacyPaymentSystem();
const adapter: PaymentProcessor = new PaymentAdapter(legacySystem);
adapter.processPayment("Detalles del pago");
```

### 6. Bridge

**Definición:** El patrón Bridge divide una gran clase o un conjunto de clases estrechamente relacionadas en dos jerarquías separadas: una para la abstracción y otra para la implementación, permitiendo que ambas evolucionen independientemente.

**Funcionamiento:** Define una interfaz para la abstracción y una implementación separada, conectándolas a través de una referencia. La abstracción delega las llamadas a la implementación.

**Beneficios:**
- Promueve la separación de preocupaciones.
- Reduce la duplicación de código al permitir reutilizar implementaciones.

**Ventajas:**
- Fácil mantenimiento y escalabilidad.

**Desventajas:**
- Incrementa la complejidad del diseño debido a la necesidad de coordinar dos jerarquías.

**Cuándo utilizarlo:**
- Cuando es necesario dividir una clase grande en dos jerarquías separadas que pueden desarrollarse independientemente.

**Ejemplo:**

*Escenario:* Sistema de dispositivos inteligentes con diferentes plataformas (Windows y Linux) que deben soportar varias funcionalidades (control remoto y estadísticas).

**Java:**

```java
// Implementación
interface Platform {
    void execute(String command);
}

// Implementaciones concretas
class WindowsPlatform implements Platform {
    public void execute(String command) {
        System.out.println("Ejecutando en Windows: " + command);
    }
}

class LinuxPlatform implements Platform {
    public void execute(String command) {
        System.out.println("Ejecutando en Linux: " + command);
    }
}

// Abstracción
abstract class SmartDevice {
    protected Platform platform;

    public SmartDevice(Platform platform) {
        this.platform = platform;
    }

    public abstract void performTask(String task);
}

// Abstracciones concretas
class RemoteControl extends SmartDevice {
    public RemoteControl(Platform platform) {
        super(platform);
    }

    public void performTask(String task) {
        platform.execute("Control remoto: " + task);
    }
}

class Statistics extends SmartDevice {
    public Statistics(Platform platform) {
        super(platform);
    }

    public void performTask(String task) {
        platform.execute("Estadísticas: " + task);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        SmartDevice remote = new RemoteControl(new WindowsPlatform());
        remote.performTask("Encender TV");

        SmartDevice stats = new Statistics(new LinuxPlatform());
        stats.performTask("Recopilar datos");
    }
}
```

**JavaScript:**

```javascript
// Implementación
class Platform {
    execute(command) {
        throw new Error("Método no implementado");
    }
}

// Implementaciones concretas
class WindowsPlatform extends Platform {
    execute(command) {
        console.log(`Ejecutando en Windows: ${command}`);
    }
}

class LinuxPlatform extends Platform {
    execute(command) {
        console.log(`Ejecutando en Linux: ${command}`);
    }
}

// Abstracción
class SmartDevice {
    constructor(platform) {
        this.platform = platform;
    }

    performTask(task) {
        throw new Error("Método no implementado");
    }
}

// Abstracciones concretas
class RemoteControl extends SmartDevice {
    performTask(task) {
        this.platform.execute(`Control remoto: ${task}`);
    }
}

class Statistics extends SmartDevice {
    performTask(task) {
        this.platform.execute(`Estadísticas: ${task}`);
    }
}

// Uso
const remote = new RemoteControl(new WindowsPlatform());
remote.performTask("Encender TV");

const stats = new Statistics(new LinuxPlatform());
stats.performTask("Recopilar datos");
```

**TypeScript:**

```typescript
// Implementación
interface Platform {
    execute(command: string): void;
}

// Implementaciones concretas
class WindowsPlatform implements Platform {
    public execute(command: string): void {
        console.log(`Ejecutando en Windows: ${command}`);
    }
}

class LinuxPlatform implements Platform {
    public execute(command: string): void {
        console.log(`Ejecutando en Linux: ${command}`);
    }
}

// Abstracción
abstract class SmartDevice {
    protected platform: Platform;

    constructor(platform: Platform) {
        this.platform = platform;
    }

    public abstract performTask(task: string): void;
}

// Abstracciones concretas
class RemoteControl extends SmartDevice {
    public performTask(task: string): void {
        this.platform.execute(`Control remoto: ${task}`);
    }
}

class Statistics extends SmartDevice {
    public performTask(task: string): void {
        this.platform.execute(`Estadísticas: ${task}`);
    }
}

// Uso
const remote: SmartDevice = new RemoteControl(new WindowsPlatform());
remote.performTask("Encender TV");

const stats: SmartDevice = new Statistics(new LinuxPlatform());
stats.performTask("Recopilar datos");
```


### 7. Composite

**Definición:** El patrón Composite permite tratar objetos individuales y compuestos de manera uniforme mediante una jerarquía de árboles.

**Funcionamiento:** Define clases base para objetos simples y compuestos, permitiendo a los clientes interactuar con ambos tipos a través de una interfaz común.

**Beneficios:**
- Facilita la manipulación de estructuras jerárquicas complejas.

**Ventajas:**
- Proporciona una manera uniforme de interactuar con todos los objetos de una estructura.

**Desventajas:**
- Puede ser complejo de implementar para estructuras jerárquicas profundas.

**Cuándo utilizarlo:**
- Cuando es necesario trabajar con estructuras de datos jerárquicas como árboles.

**Ejemplo:**

*Escenario:* Sistema de representación de directorios y archivos donde ambos pueden ser tratados uniformemente.

**Java:**

```java
import java.util.ArrayList;
import java.util.List;

// Componente base
interface FileSystem {
    void showDetails();
}

// Hoja
class File implements FileSystem {
    private String name;

    public File(String name) {
        this.name = name;
    }

    @Override
    public void showDetails() {
        System.out.println("Archivo: " + name);
    }
}

// Compuesto
class Directory implements FileSystem {
    private String name;
    private List<FileSystem> children = new ArrayList<>();

    public Directory(String name) {
        this.name = name;
    }

    public void add(FileSystem component) {
        children.add(component);
    }

    @Override
    public void showDetails() {
        System.out.println("Directorio: " + name);
        for (FileSystem child : children) {
            child.showDetails();
        }
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        File file1 = new File("archivo1.txt");
        File file2 = new File("archivo2.txt");

        Directory directory = new Directory("Documentos");
        directory.add(file1);
        directory.add(file2);

        directory.showDetails();
    }
}
```

**JavaScript:**

```javascript
// Componente base
class FileSystem {
    showDetails() {
        throw new Error("Método no implementado");
    }
}

// Hoja
class File extends FileSystem {
    constructor(name) {
        super();
        this.name = name;
    }

    showDetails() {
        console.log(`Archivo: ${this.name}`);
    }
}

// Compuesto
class Directory extends FileSystem {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    showDetails() {
        console.log(`Directorio: ${this.name}`);
        this.children.forEach(child => child.showDetails());
    }
}

// Uso
const file1 = new File("archivo1.txt");
const file2 = new File("archivo2.txt");

const directory = new Directory("Documentos");
directory.add(file1);
directory.add(file2);

directory.showDetails();
```

**TypeScript:**

```typescript
// Componente base
interface FileSystem {
    showDetails(): void;
}

// Hoja
class File implements FileSystem {
    constructor(private name: string) {}

    public showDetails(): void {
        console.log(`Archivo: ${this.name}`);
    }
}

// Compuesto
class Directory implements FileSystem {
    private children: FileSystem[] = [];

    constructor(private name: string) {}

    public add(component: FileSystem): void {
        this.children.push(component);
    }

    public showDetails(): void {
        console.log(`Directorio: ${this.name}`);
        this.children.forEach(child => child.showDetails());
    }
}

// Uso
const file1 = new File("archivo1.txt");
const file2 = new File("archivo2.txt");

const directory = new Directory("Documentos");
directory.add(file1);
directory.add(file2);

directory.showDetails();
```

### 8. Decorator

**Definición:** El patrón Decorator permite añadir dinámicamente funcionalidades a un objeto sin modificar su estructura.

**Funcionamiento:** Envuelve un objeto original con una clase que implementa la misma interfaz y extiende su funcionalidad.

**Beneficios:**
- Proporciona una alternativa flexible a la herencia para extender la funcionalidad.

**Ventajas:**
- Permite combinar decoradores de forma dinámica para obtener comportamientos complejos.

**Desventajas:**
- Puede hacer el diseño más complejo debido a la cantidad de decoradores.

**Cuándo utilizarlo:**
- Cuando se necesita extender la funcionalidad de un objeto sin modificar su clase.

**Ejemplo:**

*Escenario:* Sistema de notificaciones donde se pueden agregar canales adicionales como correo electrónico y SMS.

**Java:**

```java
// Componente base
interface Notification {
    void send(String message);
}

// Componente concreto
class BasicNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Notificación enviada: " + message);
    }
}

// Decorador base
abstract class NotificationDecorator implements Notification {
    protected Notification wrappee;

    public NotificationDecorator(Notification wrappee) {
        this.wrappee = wrappee;
    }

    @Override
    public void send(String message) {
        wrappee.send(message);
    }
}

// Decoradores concretos
class EmailNotification extends NotificationDecorator {
    public EmailNotification(Notification wrappee) {
        super(wrappee);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("Correo enviado: " + message);
    }
}

class SMSNotification extends NotificationDecorator {
    public SMSNotification(Notification wrappee) {
        super(wrappee);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("SMS enviado: " + message);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Notification notification = new BasicNotification();
        notification = new EmailNotification(notification);
        notification = new SMSNotification(notification);

        notification.send("Hola, este es un mensaje.");
    }
}
```

**JavaScript:**

```javascript
// Componente base
class Notification {
    send(message) {
        throw new Error("Método no implementado");
    }
}

// Componente concreto
class BasicNotification extends Notification {
    send(message) {
        console.log(`Notificación enviada: ${message}`);
    }
}

// Decorador base
class NotificationDecorator extends Notification {
    constructor(wrappee) {
        super();
        this.wrappee = wrappee;
    }

    send(message) {
        this.wrappee.send(message);
    }
}

// Decoradores concretos
class EmailNotification extends NotificationDecorator {
    send(message) {
        super.send(message);
        console.log(`Correo enviado: ${message}`);
    }
}

class SMSNotification extends NotificationDecorator {
    send(message) {
        super.send(message);
        console.log(`SMS enviado: ${message}`);
    }
}

// Uso
let notification = new BasicNotification();
notification = new EmailNotification(notification);
notification = new SMSNotification(notification);

notification.send("Hola, este es un mensaje.");
```

**TypeScript:**

```typescript
// Componente base
interface Notification {
    send(message: string): void;
}

// Componente concreto
class BasicNotification implements Notification {
    public send(message: string): void {
        console.log(`Notificación enviada: ${message}`);
    }
}

// Decorador base
class NotificationDecorator implements Notification {
    constructor(protected wrappee: Notification) {}

    public send(message: string): void {
        this.wrappee.send(message);
    }
}

// Decoradores concretos
class EmailNotification extends NotificationDecorator {
    public send(message: string): void {
        super.send(message);
        console.log(`Correo enviado: ${message}`);
    }
}

class SMSNotification extends NotificationDecorator {
    public send(message: string): void {
        super.send(message);
        console.log(`SMS enviado: ${message}`);
    }
}

// Uso
let notification: Notification = new BasicNotification();
notification = new EmailNotification(notification);
notification = new SMSNotification(notification);

notification.send("Hola, este es un mensaje.");
```

### Patrones de Comportamiento

**Definición:** Los patrones de comportamiento se centran en la comunicación y la asignación de responsabilidades entre objetos. Facilitan la interacción, coordinación y control del flujo en sistemas complejos.

---

### 9. Strategy

**Definición:** El patrón Strategy define una familia de algoritmos, los encapsula y hace que sean intercambiables durante la ejecución.

**Funcionamiento:** Proporciona una interfaz común para los algoritmos. El contexto utiliza un objeto de estrategia para delegar el comportamiento en lugar de implementarlo directamente.

**Beneficios:**
- Elimina la necesidad de usar condicionales complejos para seleccionar comportamientos.

**Ventajas:**
- Fácil de extender y mantener al añadir nuevas estrategias.

**Desventajas:**
- El cliente debe estar al tanto de las diferentes estrategias disponibles.

**Cuándo utilizarlo:**
- Cuando un sistema tiene múltiples variantes de un comportamiento específico y es necesario cambiar entre ellas de forma dinámica.

**Ejemplo:**

*Escenario:* Sistema de cálculo de precios con estrategias de descuento basadas en el cliente (estudiantes, empleados, clientes frecuentes).

**Java:**

```java
// Estrategia
interface DiscountStrategy {
    double applyDiscount(double price);
}

// Estrategias concretas
class StudentDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.8; // 20% de descuento
    }
}

class EmployeeDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.7; // 30% de descuento
    }
}

class RegularCustomerDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.9; // 10% de descuento
    }
}

// Contexto
class PriceCalculator {
    private DiscountStrategy strategy;

    public void setStrategy(DiscountStrategy strategy) {
        this.strategy = strategy;
    }

    public double calculatePrice(double price) {
        return strategy.applyDiscount(price);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        PriceCalculator calculator = new PriceCalculator();

        calculator.setStrategy(new StudentDiscount());
        System.out.println("Precio con descuento estudiante: " + calculator.calculatePrice(100));

        calculator.setStrategy(new EmployeeDiscount());
        System.out.println("Precio con descuento empleado: " + calculator.calculatePrice(100));

        calculator.setStrategy(new RegularCustomerDiscount());
        System.out.println("Precio con descuento cliente regular: " + calculator.calculatePrice(100));
    }
}
```

**JavaScript:**

```javascript
// Estrategia
class DiscountStrategy {
    applyDiscount(price) {
        throw new Error("Método no implementado");
    }
}

// Estrategias concretas
class StudentDiscount extends DiscountStrategy {
    applyDiscount(price) {
        return price * 0.8; // 20% de descuento
    }
}

class EmployeeDiscount extends DiscountStrategy {
    applyDiscount(price) {
        return price * 0.7; // 30% de descuento
    }
}

class RegularCustomerDiscount extends DiscountStrategy {
    applyDiscount(price) {
        return price * 0.9; // 10% de descuento
    }
}

// Contexto
class PriceCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculatePrice(price) {
        return this.strategy.applyDiscount(price);
    }
}

// Uso
const calculator = new PriceCalculator();

calculator.setStrategy(new StudentDiscount());
console.log("Precio con descuento estudiante: " + calculator.calculatePrice(100));

calculator.setStrategy(new EmployeeDiscount());
console.log("Precio con descuento empleado: " + calculator.calculatePrice(100));

calculator.setStrategy(new RegularCustomerDiscount());
console.log("Precio con descuento cliente regular: " + calculator.calculatePrice(100));
```

**TypeScript:**

```typescript
// Estrategia
interface DiscountStrategy {
    applyDiscount(price: number): number;
}

// Estrategias concretas
class StudentDiscount implements DiscountStrategy {
    public applyDiscount(price: number): number {
        return price * 0.8; // 20% de descuento
    }
}

class EmployeeDiscount implements DiscountStrategy {
    public applyDiscount(price: number): number {
        return price * 0.7; // 30% de descuento
    }
}

class RegularCustomerDiscount implements DiscountStrategy {
    public applyDiscount(price: number): number {
        return price * 0.9; // 10% de descuento
    }
}

// Contexto
class PriceCalculator {
    private strategy: DiscountStrategy;

    public setStrategy(strategy: DiscountStrategy): void {
        this.strategy = strategy;
    }

    public calculatePrice(price: number): number {
        return this.strategy.applyDiscount(price);
    }
}

// Uso
const calculator = new PriceCalculator();

calculator.setStrategy(new StudentDiscount());
console.log("Precio con descuento estudiante: " + calculator.calculatePrice(100));

calculator.setStrategy(new EmployeeDiscount());
console.log("Precio con descuento empleado: " + calculator.calculatePrice(100));

calculator.setStrategy(new RegularCustomerDiscount());
console.log("Precio con descuento cliente regular: " + calculator.calculatePrice(100));
```

### 10. Observer

**Definición:** El patrón Observer establece una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, notifica automáticamente a todos sus dependientes.

**Funcionamiento:** Define un sujeto que mantiene una lista de observadores. Cada vez que cambia el estado del sujeto, notifica a todos los observadores registrados.

**Beneficios:**
- Fomenta el desacoplamiento entre el sujeto y los observadores.

**Ventajas:**
- Facilita la incorporación de nuevos observadores sin modificar el sujeto.

**Desventajas:**
- Puede tener un impacto en el rendimiento si hay muchos observadores.

**Cuándo utilizarlo:**
- Cuando un cambio en un objeto requiere notificar a otros sin acoplarse directamente a ellos.

**Ejemplo:**

*Escenario:* Sistema de notificaciones para suscriptores cuando se publica una nueva oferta en un sitio web.


### Observer

**Definición:** El patrón Observer establece una dependencia uno a muchos entre objetos, de manera que cuando un objeto (sujeto) cambia su estado, notifica automáticamente a todos los objetos dependientes (observadores).

**Funcionamiento:** El sujeto mantiene una lista de observadores y proporciona métodos para añadir, eliminar y notificar a los observadores. Los observadores implementan una interfaz común para ser notificados de los cambios del sujeto.

**Beneficios:**
- Desacopla el sujeto y los observadores, permitiendo modificaciones independientes.

**Ventajas:**
- Facilita la extensión del sistema al añadir nuevos observadores sin modificar el código del sujeto.

**Desventajas:**
- Puede afectar el rendimiento si hay muchos observadores o notificaciones frecuentes.

**Cuándo utilizarlo:**
- Cuando es necesario que múltiples objetos reaccionen a cambios en el estado de otro objeto sin acoplarse directamente a él.

**Ejemplo:**

*Escenario:* Sistema de notificaciones de ofertas en una tienda online. Los usuarios pueden suscribirse para recibir notificaciones cuando se publique una nueva oferta.

**Java:**

```java
// Observador
interface Observer {
    void update(String offer);
}

// Sujeto
class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void subscribe(Observer observer) {
        observers.add(observer);
    }

    public void unsubscribe(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers(String offer) {
        for (Observer observer : observers) {
            observer.update(offer);
        }
    }
}

// Observador concreto
class User implements Observer {
    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void update(String offer) {
        System.out.println(name + " recibió la notificación: Nueva oferta - " + offer);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Subject store = new Subject();

        Observer user1 = new User("Alice");
        Observer user2 = new User("Bob");

        store.subscribe(user1);
        store.subscribe(user2);

        store.notifyObservers("50% de descuento en laptops");
    }
}
```

**JavaScript:**

```javascript
// Sujeto
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(offer) {
        this.observers.forEach(observer => observer.update(offer));
    }
}

// Observador
class User {
    constructor(name) {
        this.name = name;
    }

    update(offer) {
        console.log(`${this.name} recibió la notificación: Nueva oferta - ${offer}`);
    }
}

// Uso
const store = new Subject();

const user1 = new User("Alice");
const user2 = new User("Bob");

store.subscribe(user1);
store.subscribe(user2);

store.notifyObservers("50% de descuento en laptops");
```

**TypeScript:**

```typescript
// Observador
interface Observer {
    update(offer: string): void;
}

// Sujeto
class Subject {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notifyObservers(offer: string): void {
        this.observers.forEach(observer => observer.update(offer));
    }
}

// Observador concreto
class User implements Observer {
    constructor(private name: string) {}

    public update(offer: string): void {
        console.log(`${this.name} recibió la notificación: Nueva oferta - ${offer}`);
    }
}

// Uso
const store = new Subject();

const user1 = new User("Alice");
const user2 = new User("Bob");

store.subscribe(user1);
store.subscribe(user2);

store.notifyObservers("50% de descuento en laptops");
```

---

### 11. Command

**Definición:** El patrón Command encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolar solicitudes o registrar el historial de operaciones.

**Funcionamiento:** Define una interfaz común para los comandos. Cada comando implementa esta interfaz y ejecuta una acción específica en un receptor. Un invocador es responsable de ejecutar los comandos.

**Beneficios:**
- Permite registrar, deshacer y rehacer operaciones.

**Ventajas:**
- Facilita la creación de macros o combinaciones de comandos.

**Desventajas:**
- Aumenta el número de clases en el sistema.

**Cuándo utilizarlo:**
- Cuando es necesario parametrizar objetos con acciones.
- Para soportar operaciones de deshacer/rehacer.

**Ejemplo:**

*Escenario:* Control remoto que ejecuta comandos para dispositivos electrónicos (TV, luces).

**Java:**

```java
// Comando
interface Command {
    void execute();
}

// Receptor
class Light {
    public void turnOn() {
        System.out.println("Luz encendida");
    }

    public void turnOff() {
        System.out.println("Luz apagada");
    }
}

// Comandos concretos
class TurnOnLightCommand implements Command {
    private Light light;

    public TurnOnLightCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOn();
    }
}

class TurnOffLightCommand implements Command {
    private Light light;

    public TurnOffLightCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();
    }
}

// Invocador
class RemoteControl {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Light livingRoomLight = new Light();

        Command turnOn = new TurnOnLightCommand(livingRoomLight);
        Command turnOff = new TurnOffLightCommand(livingRoomLight);

        RemoteControl remote = new RemoteControl();

        remote.setCommand(turnOn);
        remote.pressButton();

        remote.setCommand(turnOff);
        remote.pressButton();
    }
}
```

**JavaScript:**

```javascript
// Receptor
class Light {
    turnOn() {
        console.log("Luz encendida");
    }

    turnOff() {
        console.log("Luz apagada");
    }
}

// Comandos
class TurnOnLightCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class TurnOffLightCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

// Invocador
class RemoteControl {
    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

// Uso
const livingRoomLight = new Light();

const turnOn = new TurnOnLightCommand(livingRoomLight);
const turnOff = new TurnOffLightCommand(livingRoomLight);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton();

remote.setCommand(turnOff);
remote.pressButton();
```

**TypeScript:**

```typescript
// Comando
interface Command {
    execute(): void;
}

// Receptor
class Light {
    public turnOn(): void {
        console.log("Luz encendida");
    }

    public turnOff(): void {
        console.log("Luz apagada");
    }
}

// Comandos concretos
class TurnOnLightCommand implements Command {
    constructor(private light: Light) {}

    public execute(): void {
        this.light.turnOn();
    }
}

class TurnOffLightCommand implements Command {
    constructor(private light: Light) {}

    public execute(): void {
        this.light.turnOff();
    }
}

// Invocador
class RemoteControl {
    private command: Command;

    public setCommand(command: Command): void {
        this.command = command;
    }

    public pressButton(): void {
        this.command.execute();
    }
}

// Uso
const livingRoomLight = new Light();

const turnOn = new TurnOnLightCommand(livingRoomLight);
const turnOff = new TurnOffLightCommand(livingRoomLight);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton();

remote.setCommand(turnOff);
remote.pressButton();
```

### 12. Chain of Responsibility

**Definición:** El patrón Chain of Responsibility pasa una solicitud a lo largo de una cadena de manejadores. Cada manejador decide procesar la solicitud o pasarla al siguiente manejador en la cadena.

**Funcionamiento:** Cada manejador tiene una referencia al siguiente manejador en la cadena. Si el manejador actual no puede procesar la solicitud, delega la tarea al siguiente.

**Beneficios:**
- Permite separar los emisores de solicitudes de sus receptores.

**Ventajas:**
- Fácil de añadir o modificar manejadores sin alterar la estructura existente.

**Desventajas:**
- La solicitud puede pasar por muchos manejadores antes de ser procesada, afectando el rendimiento.

**Cuándo utilizarlo:**
- Cuando se desea que varias clases tengan la oportunidad de manejar una solicitud sin acoplar al emisor con los receptores.

**Ejemplo:**

*Escenario:* Sistema de procesamiento de solicitudes de soporte técnico con diferentes niveles de atención: soporte básico, técnico y especializado.

**Java:**

```java
// Manejador
abstract class SupportHandler {
    protected SupportHandler nextHandler;

    public void setNextHandler(SupportHandler handler) {
        this.nextHandler = handler;
    }

    public abstract void handleRequest(String request);
}

// Manejadores concretos
class BasicSupport extends SupportHandler {
    @Override
    public void handleRequest(String request) {
        if (request.equals("Básico")) {
            System.out.println("Solicitud manejada por Soporte Básico.");
        } else if (nextHandler != null) {
            nextHandler.handleRequest(request);
        }
    }
}

class TechnicalSupport extends SupportHandler {
    @Override
    public void handleRequest(String request) {
        if (request.equals("Técnico")) {
            System.out.println("Solicitud manejada por Soporte Técnico.");
        } else if (nextHandler != null) {
            nextHandler.handleRequest(request);
        }
    }
}

class SpecializedSupport extends SupportHandler {
    @Override
    public void handleRequest(String request) {
        if (request.equals("Especializado")) {
            System.out.println("Solicitud manejada por Soporte Especializado.");
        } else {
            System.out.println("Solicitud no pudo ser manejada.");
        }
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        SupportHandler basic = new BasicSupport();
        SupportHandler technical = new TechnicalSupport();
        SupportHandler specialized = new SpecializedSupport();

        basic.setNextHandler(technical);
        technical.setNextHandler(specialized);

        basic.handleRequest("Técnico");
        basic.handleRequest("Especializado");
        basic.handleRequest("Avanzado");
    }
}
```

**JavaScript:**

```javascript
// Manejador
class SupportHandler {
    setNextHandler(handler) {
        this.nextHandler = handler;
    }

    handleRequest(request) {
        throw new Error("Método no implementado");
    }
}

// Manejadores concretos
class BasicSupport extends SupportHandler {
    handleRequest(request) {
        if (request === "Básico") {
            console.log("Solicitud manejada por Soporte Básico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class TechnicalSupport extends SupportHandler {
    handleRequest(request) {
        if (request === "Técnico") {
            console.log("Solicitud manejada por Soporte Técnico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class SpecializedSupport extends SupportHandler {
    handleRequest(request) {
        if (request === "Especializado") {
            console.log("Solicitud manejada por Soporte Especializado.");
        } else {
            console.log("Solicitud no pudo ser manejada.");
        }
    }
}

// Uso
const basic = new BasicSupport();
const technical = new TechnicalSupport();
const specialized = new SpecializedSupport();

basic.setNextHandler(technical);
technical.setNextHandler(specialized);

basic.handleRequest("Técnico");
basic.handleRequest("Especializado");
basic.handleRequest("Avanzado");
```

**TypeScript:**

```typescript
// Manejador
abstract class SupportHandler {
    protected nextHandler: SupportHandler | null = null;

    public setNextHandler(handler: SupportHandler): void {
        this.nextHandler = handler;
    }

    public abstract handleRequest(request: string): void;
}

// Manejadores concretos
class BasicSupport extends SupportHandler {
    public handleRequest(request: string): void {
        if (request === "Básico") {
            console.log("Solicitud manejada por Soporte Básico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class TechnicalSupport extends SupportHandler {
    public handleRequest(request: string): void {
        if (request === "Técnico") {
            console.log("Solicitud manejada por Soporte Técnico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class SpecializedSupport extends SupportHandler {
    public handleRequest(request: string): void {
        if (request === "Especializado") {
            console.log("Solicitud manejada por Soporte Especializado.");
        } else {
            console.log("Solicitud no pudo ser manejada.");
        }
    }
}

// Uso
const basic = new BasicSupport();
const technical = new TechnicalSupport();
const specialized = new SpecializedSupport();

basic.setNextHandler(technical);
technical.setNextHandler(specialized);

basic.handleRequest("Técnico");
basic.handleRequest("Especializado");
basic.handleRequest("Avanzado");
```

### 13. Mediator

**Definición:** El patrón Mediator define un objeto que encapsula la forma en que interactúan un conjunto de objetos. Este patrón promueve un bajo acoplamiento al evitar que los objetos se refieran entre sí explícitamente y permite variar sus interacciones de forma independiente.

**Funcionamiento:** El Mediador se encarga de coordinar la comunicación entre objetos participantes, actuando como un intermediario. Los objetos participantes no se comunican directamente entre sí, sino a través del mediador.

**Beneficios:**
- Reduce las dependencias directas entre objetos.

**Ventajas:**
- Simplifica la comunicación en sistemas complejos con múltiples objetos interdependientes.

**Desventajas:**
- Puede convertirse en un punto central de complejidad si no se diseña adecuadamente.

**Cuándo utilizarlo:**
- Cuando un sistema tiene múltiples componentes que interactúan entre sí de manera compleja y no quieres que estos componentes estén estrechamente acoplados.

**Ejemplo:**

*Escenario:* Un sistema de chat donde varios usuarios pueden enviar mensajes al mediador, y este se encarga de distribuirlos a los usuarios correspondientes.

---

**Java:**

```java
// Mediador
interface ChatMediator {
    void sendMessage(String message, User user);
    void addUser(User user);
}

// Mediador concreto
class ChatRoom implements ChatMediator {
    private List<User> users = new ArrayList<>();

    @Override
    public void sendMessage(String message, User user) {
        for (User u : users) {
            if (u != user) {
                u.receive(message);
            }
        }
    }

    @Override
    public void addUser(User user) {
        users.add(user);
    }
}

// Usuario
abstract class User {
    protected ChatMediator mediator;
    protected String name;

    public User(ChatMediator mediator, String name) {
        this.mediator = mediator;
        this.name = name;
    }

    public abstract void send(String message);
    public abstract void receive(String message);
}

// Usuario concreto
class ChatUser extends User {
    public ChatUser(ChatMediator mediator, String name) {
        super(mediator, name);
    }

    @Override
    public void send(String message) {
        System.out.println(this.name + ": Enviando mensaje -> " + message);
        mediator.sendMessage(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println(this.name + ": Recibiendo mensaje -> " + message);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        ChatMediator chatRoom = new ChatRoom();

        User user1 = new ChatUser(chatRoom, "Alice");
        User user2 = new ChatUser(chatRoom, "Bob");
        User user3 = new ChatUser(chatRoom, "Charlie");

        chatRoom.addUser(user1);
        chatRoom.addUser(user2);
        chatRoom.addUser(user3);

        user1.send("Hola a todos!");
    }
}
```

---

**JavaScript:**

```javascript
// Mediador
class ChatRoom {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message, sender) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }
}

// Usuario
class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    send(message) {
        console.log(`${this.name}: Enviando mensaje -> ${message}`);
        this.mediator.sendMessage(message, this);
    }

    receive(message) {
        console.log(`${this.name}: Recibiendo mensaje -> ${message}`);
    }
}

// Uso
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send("Hola a todos!");
```

---

**TypeScript:**

```typescript
// Mediador
interface ChatMediator {
    sendMessage(message: string, sender: User): void;
    addUser(user: User): void;
}

class ChatRoom implements ChatMediator {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public sendMessage(message: string, sender: User): void {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }
}

// Usuario
class User {
    constructor(private name: string, private mediator: ChatMediator) {}

    public send(message: string): void {
        console.log(`${this.name}: Enviando mensaje -> ${message}`);
        this.mediator.sendMessage(message, this);
    }

    public receive(message: string): void {
        console.log(`${this.name}: Recibiendo mensaje -> ${message}`);
    }
}

// Uso
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send("Hola a todos!");
```

---

### 14. Memento

**Definición:** El patrón Memento permite capturar y almacenar el estado interno de un objeto para que pueda restaurarse más tarde sin violar la encapsulación.

**Funcionamiento:** Se utiliza un "cuidador" para almacenar el memento de un objeto. El objeto puede devolver su estado interno al memento para luego restaurarlo.

**Beneficios:**
- Facilita la implementación de funciones de deshacer y rehacer.

**Ventajas:**
- Preserva la encapsulación del estado interno del objeto.

**Desventajas:**
- Puede consumir mucha memoria si los mementos son grandes o numerosos.

**Cuándo utilizarlo:**
- Cuando necesitas guardar y restaurar estados de objetos complejos sin exponer su implementación interna.

### Memento

**Definición:** El patrón Memento permite capturar y almacenar el estado interno de un objeto en un punto determinado, para poder restaurarlo más tarde sin violar la encapsulación del objeto.

**Funcionamiento:** El objeto principal (originador) crea un memento que captura su estado interno. Este memento es administrado por un cuidador que puede devolver el memento al originador cuando sea necesario restaurar el estado.

**Beneficios:**
- Facilita la implementación de funciones de deshacer y rehacer.

**Ventajas:**
- Preserva la encapsulación del estado interno del objeto.
- Reduce el acoplamiento entre el cuidador y el originador.

**Desventajas:**
- Puede consumir demasiada memoria si se guardan muchos mementos o si el estado del objeto es grande.

**Cuándo utilizarlo:**
- Cuando necesitas guardar y restaurar el estado de un objeto complejo en un momento específico, por ejemplo, para funciones de deshacer/rehacer.

**Ejemplo:**

*Escenario:* Un editor de texto con funcionalidad de deshacer, que permite guardar el estado actual del documento y restaurarlo si el usuario lo desea.

---

**Java:**

```java
// Memento
class TextEditorMemento {
    private final String state;

    public TextEditorMemento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}

// Originador
class TextEditor {
    private String content;

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public TextEditorMemento save() {
        return new TextEditorMemento(content);
    }

    public void restore(TextEditorMemento memento) {
        content = memento.getState();
    }
}

// Cuidador
class Caretaker {
    private final List<TextEditorMemento> mementos = new ArrayList<>();

    public void addMemento(TextEditorMemento memento) {
        mementos.add(memento);
    }

    public TextEditorMemento getMemento(int index) {
        return mementos.get(index);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        Caretaker caretaker = new Caretaker();

        editor.setContent("Estado 1");
        caretaker.addMemento(editor.save());

        editor.setContent("Estado 2");
        caretaker.addMemento(editor.save());

        editor.setContent("Estado 3");

        System.out.println("Estado actual: " + editor.getContent());
        editor.restore(caretaker.getMemento(0));
        System.out.println("Estado restaurado: " + editor.getContent());
    }
}
```

---

**JavaScript:**

```javascript
// Memento
class TextEditorMemento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

// Originador
class TextEditor {
    constructor() {
        this.content = "";
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    save() {
        return new TextEditorMemento(this.content);
    }

    restore(memento) {
        this.content = memento.getState();
    }
}

// Cuidador
class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}

// Uso
const editor = new TextEditor();
const caretaker = new Caretaker();

editor.setContent("Estado 1");
caretaker.addMemento(editor.save());

editor.setContent("Estado 2");
caretaker.addMemento(editor.save());

editor.setContent("Estado 3");

console.log("Estado actual:", editor.getContent());
editor.restore(caretaker.getMemento(0));
console.log("Estado restaurado:", editor.getContent());
```

---

**TypeScript:**

```typescript
// Memento
class TextEditorMemento {
    constructor(private state: string) {}

    public getState(): string {
        return this.state;
    }
}

// Originador
class TextEditor {
    private content: string = "";

    public setContent(content: string): void {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    public save(): TextEditorMemento {
        return new TextEditorMemento(this.content);
    }

    public restore(memento: TextEditorMemento): void {
        this.content = memento.getState();
    }
}

// Cuidador
class Caretaker {
    private mementos: TextEditorMemento[] = [];

    public addMemento(memento: TextEditorMemento): void {
        this.mementos.push(memento);
    }

    public getMemento(index: number): TextEditorMemento {
        return this.mementos[index];
    }
}

// Uso
const editor = new TextEditor();
const caretaker = new Caretaker();

editor.setContent("Estado 1");
caretaker.addMemento(editor.save());

editor.setContent("Estado 2");
caretaker.addMemento(editor.save());

editor.setContent("Estado 3");

console.log("Estado actual:", editor.getContent());
editor.restore(caretaker.getMemento(0));
console.log("Estado restaurado:", editor.getContent());
```

---

### 15. State

**Definición:** El patrón State permite que un objeto cambie su comportamiento cuando cambia su estado interno, como si cambiara de clase.

**Funcionamiento:** Define una interfaz común para los estados y cada estado concreto implementa el comportamiento específico. El contexto delega las operaciones al estado actual.

**Beneficios:**
- Elimina grandes condicionales relacionados con el estado.
- Simplifica la adición de nuevos estados.

**Ventajas:**
- Permite cambiar dinámicamente el comportamiento del objeto sin modificar su clase.

**Desventajas:**
- Puede aumentar el número de clases.

**Cuándo utilizarlo:**
- Cuando el comportamiento de un objeto depende de su estado y necesita cambiar en tiempo de ejecución.


### State

**Definición:** El patrón State permite que un objeto cambie su comportamiento dinámicamente según su estado interno, delegando este comportamiento a objetos de estado específicos.

**Funcionamiento:** Define una interfaz común para todos los estados. Cada estado concreto implementa esta interfaz y define su propio comportamiento para las operaciones. El objeto principal (contexto) delega las operaciones al estado actual.

**Beneficios:**
- Facilita el mantenimiento al eliminar condicionales grandes relacionados con los estados.

**Ventajas:**
- Permite añadir nuevos estados sin modificar el código existente del contexto.
- Promueve el uso de objetos en lugar de estructuras condicionales complejas.

**Desventajas:**
- Puede aumentar el número de clases, ya que se necesita una clase para cada estado.

**Cuándo utilizarlo:**
- Cuando el comportamiento de un objeto depende de su estado y necesita cambiar en tiempo de ejecución.

**Ejemplo:**

*Escenario:* Máquina expendedora que cambia de comportamiento dependiendo de su estado: lista, esperando dinero, y dispensando producto.

---

**Java:**

```java
// Estado
interface State {
    void insertMoney();
    void dispenseProduct();
}

// Estado concreto: Lista
class ReadyState implements State {
    private VendingMachine machine;

    public ReadyState(VendingMachine machine) {
        this.machine = machine;
    }

    @Override
    public void insertMoney() {
        System.out.println("Dinero insertado. Selecciona un producto.");
        machine.setState(machine.getWaitingState());
    }

    @Override
    public void dispenseProduct() {
        System.out.println("Inserta dinero primero.");
    }
}

// Estado concreto: Esperando dinero
class WaitingState implements State {
    private VendingMachine machine;

    public WaitingState(VendingMachine machine) {
        this.machine = machine;
    }

    @Override
    public void insertMoney() {
        System.out.println("Dinero ya insertado. Selecciona un producto.");
    }

    @Override
    public void dispenseProduct() {
        System.out.println("Producto dispensado. Gracias por tu compra.");
        machine.setState(machine.getReadyState());
    }
}

// Contexto
class VendingMachine {
    private State readyState;
    private State waitingState;
    private State currentState;

    public VendingMachine() {
        readyState = new ReadyState(this);
        waitingState = new WaitingState(this);
        currentState = readyState;
    }

    public void setState(State state) {
        currentState = state;
    }

    public State getReadyState() {
        return readyState;
    }

    public State getWaitingState() {
        return waitingState;
    }

    public void insertMoney() {
        currentState.insertMoney();
    }

    public void dispenseProduct() {
        currentState.dispenseProduct();
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        VendingMachine machine = new VendingMachine();

        machine.insertMoney();
        machine.dispenseProduct();
        machine.dispenseProduct(); // Comportamiento según el estado actual
    }
}
```

---

**JavaScript:**

```javascript
// Estado
class State {
    insertMoney() {
        throw new Error("Método no implementado");
    }
    dispenseProduct() {
        throw new Error("Método no implementado");
    }
}

// Estado concreto: Lista
class ReadyState extends State {
    constructor(machine) {
        super();
        this.machine = machine;
    }

    insertMoney() {
        console.log("Dinero insertado. Selecciona un producto.");
        this.machine.setState(this.machine.waitingState);
    }

    dispenseProduct() {
        console.log("Inserta dinero primero.");
    }
}

// Estado concreto: Esperando dinero
class WaitingState extends State {
    constructor(machine) {
        super();
        this.machine = machine;
    }

    insertMoney() {
        console.log("Dinero ya insertado. Selecciona un producto.");
    }

    dispenseProduct() {
        console.log("Producto dispensado. Gracias por tu compra.");
        this.machine.setState(this.machine.readyState);
    }
}

// Contexto
class VendingMachine {
    constructor() {
        this.readyState = new ReadyState(this);
        this.waitingState = new WaitingState(this);
        this.currentState = this.readyState;
    }

    setState(state) {
        this.currentState = state;
    }

    insertMoney() {
        this.currentState.insertMoney();
    }

    dispenseProduct() {
        this.currentState.dispenseProduct();
    }
}

// Uso
const machine = new VendingMachine();

machine.insertMoney();
machine.dispenseProduct();
machine.dispenseProduct(); // Comportamiento según el estado actual
```

---

**TypeScript:**

```typescript
// Estado
interface State {
    insertMoney(): void;
    dispenseProduct(): void;
}

// Estado concreto: Lista
class ReadyState implements State {
    constructor(private machine: VendingMachine) {}

    public insertMoney(): void {
        console.log("Dinero insertado. Selecciona un producto.");
        this.machine.setState(this.machine.getWaitingState());
    }

    public dispenseProduct(): void {
        console.log("Inserta dinero primero.");
    }
}

// Estado concreto: Esperando dinero
class WaitingState implements State {
    constructor(private machine: VendingMachine) {}

    public insertMoney(): void {
        console.log("Dinero ya insertado. Selecciona un producto.");
    }

    public dispenseProduct(): void {
        console.log("Producto dispensado. Gracias por tu compra.");
        this.machine.setState(this.machine.getReadyState());
    }
}

// Contexto
class VendingMachine {
    private readyState: State;
    private waitingState: State;
    private currentState: State;

    constructor() {
        this.readyState = new ReadyState(this);
        this.waitingState = new WaitingState(this);
        this.currentState = this.readyState;
    }

    public setState(state: State): void {
        this.currentState = state;
    }

    public getReadyState(): State {
        return this.readyState;
    }

    public getWaitingState(): State {
        return this.waitingState;
    }

    public insertMoney(): void {
        this.currentState.insertMoney();
    }

    public dispenseProduct(): void {
        this.currentState.dispenseProduct();
    }
}

// Uso
const machine = new VendingMachine();

machine.insertMoney();
machine.dispenseProduct();
machine.dispenseProduct(); // Comportamiento según el estado actual
```

---

### 16. Visitor

**Definición:** El patrón Visitor permite definir nuevas operaciones sobre un conjunto de clases sin modificar las clases existentes.

**Funcionamiento:** Define una interfaz para visitar cada clase concreta. Cada clase concreta acepta un visitante que ejecuta la operación correspondiente.

**Beneficios:**
- Fomenta la extensión de funcionalidades sin alterar la estructura de las clases existentes.

**Ventajas:**
- Separa el comportamiento de las estructuras de datos.

**Desventajas:**
- Puede complicar la adición de nuevas estructuras de datos debido a la necesidad de modificar el visitante.

### Visitor

**Definición:** El patrón Visitor permite añadir nuevas operaciones a una jerarquía de clases sin modificar las clases existentes, separando las operaciones del objeto que las realiza.

**Funcionamiento:** Define una interfaz para visitar cada clase concreta de una jerarquía. Cada clase concreta implementa un método que acepta el visitante, delegando así la operación en este.

**Beneficios:**
- Permite añadir nuevas operaciones sin alterar las clases existentes.

**Ventajas:**
- Mantiene la consistencia en la jerarquía de clases al delegar la lógica al visitante.

**Desventajas:**
- Dificulta la adición de nuevas clases en la jerarquía, ya que todos los visitantes deben actualizarse.

**Cuándo utilizarlo:**
- Cuando necesitas añadir operaciones que se aplican a una jerarquía de clases sin modificar estas clases.

**Ejemplo:**

*Escenario:* Un sistema de figuras geométricas que permite calcular el área y el perímetro utilizando visitantes separados.

---

**Java:**

```java
// Interfaz de elemento
interface Shape {
    void accept(Visitor visitor);
}

// Elementos concretos
class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

// Interfaz del visitante
interface Visitor {
    void visit(Circle circle);
    void visit(Rectangle rectangle);
}

// Visitante concreto para calcular áreas
class AreaCalculator implements Visitor {
    @Override
    public void visit(Circle circle) {
        double area = Math.PI * Math.pow(circle.getRadius(), 2);
        System.out.println("Área del círculo: " + area);
    }

    @Override
    public void visit(Rectangle rectangle) {
        double area = rectangle.getWidth() * rectangle.getHeight();
        System.out.println("Área del rectángulo: " + area);
    }
}

// Visitante concreto para calcular perímetros
class PerimeterCalculator implements Visitor {
    @Override
    public void visit(Circle circle) {
        double perimeter = 2 * Math.PI * circle.getRadius();
        System.out.println("Perímetro del círculo: " + perimeter);
    }

    @Override
    public void visit(Rectangle rectangle) {
        double perimeter = 2 * (rectangle.getWidth() + rectangle.getHeight());
        System.out.println("Perímetro del rectángulo: " + perimeter);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);

        Visitor areaCalculator = new AreaCalculator();
        Visitor perimeterCalculator = new PerimeterCalculator();

        circle.accept(areaCalculator);
        circle.accept(perimeterCalculator);

        rectangle.accept(areaCalculator);
        rectangle.accept(perimeterCalculator);
    }
}
```

---

**JavaScript:**

```javascript
// Elementos
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    accept(visitor) {
        visitor.visitCircle(this);
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    accept(visitor) {
        visitor.visitRectangle(this);
    }
}

// Visitantes
class AreaCalculator {
    visitCircle(circle) {
        const area = Math.PI * Math.pow(circle.radius, 2);
        console.log(`Área del círculo: ${area}`);
    }

    visitRectangle(rectangle) {
        const area = rectangle.width * rectangle.height;
        console.log(`Área del rectángulo: ${area}`);
    }
}

class PerimeterCalculator {
    visitCircle(circle) {
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Perímetro del círculo: ${perimeter}`);
    }

    visitRectangle(rectangle) {
        const perimeter = 2 * (rectangle.width + rectangle.height);
        console.log(`Perímetro del rectángulo: ${perimeter}`);
    }
}

// Uso
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const areaCalculator = new AreaCalculator();
const perimeterCalculator = new PerimeterCalculator();

circle.accept(areaCalculator);
circle.accept(perimeterCalculator);

rectangle.accept(areaCalculator);
rectangle.accept(perimeterCalculator);
```

---

**TypeScript:**

```typescript
// Elementos
interface Shape {
    accept(visitor: Visitor): void;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    accept(visitor: Visitor): void {
        visitor.visitCircle(this);
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    accept(visitor: Visitor): void {
        visitor.visitRectangle(this);
    }
}

// Visitantes
interface Visitor {
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
}

class AreaCalculator implements Visitor {
    public visitCircle(circle: Circle): void {
        const area = Math.PI * Math.pow(circle.radius, 2);
        console.log(`Área del círculo: ${area}`);
    }

    public visitRectangle(rectangle: Rectangle): void {
        const area = rectangle.width * rectangle.height;
        console.log(`Área del rectángulo: ${area}`);
    }
}

class PerimeterCalculator implements Visitor {
    public visitCircle(circle: Circle): void {
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Perímetro del círculo: ${perimeter}`);
    }

    public visitRectangle(rectangle: Rectangle): void {
        const perimeter = 2 * (rectangle.width + rectangle.height);
        console.log(`Perímetro del rectángulo: ${perimeter}`);
    }
}

// Uso
const circle: Shape = new Circle(5);
const rectangle: Shape = new Rectangle(4, 6);

const areaCalculator: Visitor = new AreaCalculator();
const perimeterCalculator: Visitor = new PerimeterCalculator();

circle.accept(areaCalculator);
circle.accept(perimeterCalculator);

rectangle.accept(areaCalculator);
rectangle.accept(perimeterCalculator);
```

---

Estos son los patrones principales del catálogo de **Refactoring.Guru**.