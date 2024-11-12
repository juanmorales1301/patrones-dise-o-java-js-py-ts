
# **Patrones de Diseño**

Los patrones de diseño son soluciones probadas a problemas comunes en el desarrollo de software. Se clasifican en tres categorías principales: creacionales, estructurales y de comportamiento. A continuación, se detallan cada uno de los patrones mencionados en el catálogo de Refactoring.Guru, incluyendo su definición, funcionamiento, beneficios, ventajas, desventajas, cuándo utilizarlos y ejemplos en Java, JavaScript, TypeScript y Python.

---

## Creational Patterns (Patrones Creacionales)

1. **Factory Method**  
   - **¿Para qué sirve?**: Crear objetos sin especificar la clase exacta que se utilizará.  
   - **Mejor escenario**: Cuando el sistema necesita ser independiente de cómo se crean los objetos concretos.

2. **Abstract Factory**  
   - **¿Para qué sirve?**: Crear familias de objetos relacionados sin especificar sus clases concretas.  
   - **Mejor escenario**: Cuando se necesitan múltiples variantes de un conjunto de objetos.

3. **Singleton**  
   - **¿Para qué sirve?**: Garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global.  
   - **Mejor escenario**: Para objetos únicos como una conexión de base de datos o un logger.

4. **Builder**  
   - **¿Para qué sirve?**: Construir objetos complejos paso a paso.  
   - **Mejor escenario**: Cuando un objeto tiene una construcción compleja con múltiples configuraciones.

5. **Prototype**  
   - **¿Para qué sirve?**: Clonar objetos existentes en lugar de crearlos desde cero.  
   - **Mejor escenario**: Cuando se necesita duplicar objetos con configuraciones similares.

---

## Structural Patterns (Patrones Estructurales)

6. **Adapter**  
   - **¿Para qué sirve?**: Convertir la interfaz de una clase en otra que el cliente espera.  
   - **Mejor escenario**: Cuando se necesita integrar clases incompatibles en un sistema existente.

7. **Bridge**  
   - **¿Para qué sirve?**: Desacoplar una abstracción de su implementación para que puedan variar independientemente.  
   - **Mejor escenario**: Cuando hay múltiples variantes de una abstracción y su implementación.

8. **Composite**  
   - **¿Para qué sirve?**: Componer objetos en estructuras de árbol para tratarlos de manera uniforme.  
   - **Mejor escenario**: Para representar jerarquías como un sistema de archivos.

9. **Decorator**  
   - **¿Para qué sirve?**: Añadir dinámicamente comportamientos a un objeto sin alterar su estructura.  
   - **Mejor escenario**: Cuando se necesitan combinaciones flexibles de funcionalidades adicionales.

10. **Facade**  
    - **¿Para qué sirve?**: Proporcionar una interfaz simplificada a un sistema complejo.  
    - **Mejor escenario**: Para ocultar la complejidad de un sistema detrás de una única interfaz.

11. **Flyweight**  
    - **¿Para qué sirve?**: Reducir el uso de memoria compartiendo datos comunes entre objetos similares.  
    - **Mejor escenario**: Cuando se crean muchas instancias similares, como caracteres en un editor de texto.

12. **Proxy**  
    - **¿Para qué sirve?**: Proporcionar un sustituto para controlar el acceso a otro objeto.  
    - **Mejor escenario**: Para añadir seguridad, caching o control de acceso.

---

## Behavioral Patterns (Patrones de Comportamiento)

13. **Chain of Responsibility**  
    - **¿Para qué sirve?**: Pasar una solicitud a lo largo de una cadena de manejadores.  
    - **Mejor escenario**: Cuando varias clases deben tener la oportunidad de manejar una solicitud.

14. **Command**  
    - **¿Para qué sirve?**: Encapsular una solicitud como un objeto, permitiendo parametrizar acciones.  
    - **Mejor escenario**: Para sistemas con operaciones que deben ejecutarse, deshacerse o encolarse.

15. **Memento**  
    - **¿Para qué sirve?**: Guardar y restaurar el estado de un objeto sin violar su encapsulación.  
    - **Mejor escenario**: Para implementar funciones de deshacer/rehacer.

16. **Observer**  
    - **¿Para qué sirve?**: Notificar automáticamente a múltiples objetos dependientes cuando el estado de un objeto cambia.  
    - **Mejor escenario**: Para sistemas con múltiples componentes dependientes, como una interfaz de usuario.

17. **Strategy**  
    - **¿Para qué sirve?**: Definir una familia de algoritmos y hacerlos intercambiables.  
    - **Mejor escenario**: Para sistemas donde el comportamiento puede cambiar dinámicamente.

18. **Mediator**  
    - **¿Para qué sirve?**: Coordinar la comunicación entre objetos sin que se refieran entre sí directamente.  
    - **Mejor escenario**: Para sistemas con múltiples componentes interdependientes.

19. **State**  
    - **¿Para qué sirve?**: Permitir que un objeto cambie su comportamiento cuando cambia su estado interno.  
    - **Mejor escenario**: Para máquinas de estados como un cajero automático o una máquina expendedora.

20. **Visitor**  
    - **¿Para qué sirve?**: Añadir nuevas operaciones a una jerarquía de clases sin modificar las clases existentes.  
    - **Mejor escenario**: Para aplicar operaciones comunes a estructuras de datos complejas.

21. **Template Method**  
    - **¿Para qué sirve?**: Definir el esqueleto de un algoritmo en una clase base y permitir que las subclases redefinan ciertos pasos.  
    - **Mejor escenario**: Cuando múltiples algoritmos comparten una estructura común.

22. **Iterator**  
    - **¿Para qué sirve?**: Proporcionar una forma de acceder secuencialmente a los elementos de una colección sin exponer su estructura interna.  
    - **Mejor escenario**: Para recorrer colecciones complejas de manera uniforme.


---

## Patrones Creacionales

Los patrones creacionales se centran en la forma de crear objetos, proporcionando mecanismos que aumentan la flexibilidad y reutilización del código existente.

---

### **1. Factory Method**

#### **Definición:** 
Proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

#### **Funcionamiento:** 
Define un método en la clase base que devuelve un objeto de una clase específica. Las subclases sobrescriben este método para cambiar el tipo de objeto que se crea.

#### **Beneficios:**
- Promueve la reutilización de código.
- Facilita la extensión del código sin modificar las clases existentes.

#### **Ventajas:**
- Desacopla la creación de objetos de su implementación.
- Permite añadir nuevas clases de productos sin cambiar el código existente.

#### **Desventajas:**
- Puede aumentar la complejidad del código debido a la introducción de múltiples subclases.

#### **Cuándo utilizarlo:**
- Cuando una clase no puede anticipar el tipo de objetos que debe crear.
- Para delegar la responsabilidad de creación a subclases.

#### **Ejemplo:**

*Escenario:* Sistema de gestión de diálogos que puede crear diferentes tipos de botones según el sistema operativo.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**
```python
from abc import ABC, abstractmethod

# Producto
class Button(ABC):
    @abstractmethod
    def render(self):
        pass

# Producto concreto
class WindowsButton(Button):
    def render(self):
        print("Renderizando botón de Windows.")

class MacOSButton(Button):
    def render(self):
        print("Renderizando botón de MacOS.")

# Creador
class Dialog(ABC):
    def render_window(self):
        ok_button = self.create_button()
        ok_button.render()

    @abstractmethod
    def create_button(self):
        pass

# Creador concreto
class WindowsDialog(Dialog):
    def create_button(self):
        return WindowsButton()

class MacOSDialog(Dialog):
    def create_button(self):
        return MacOSButton()

# Uso
def main():
    import platform
    os_name = platform.system().lower()
    
    if "windows" in os_name:
        dialog = WindowsDialog()
    else:
        dialog = MacOSDialog()
    
    dialog.render_window()

main()
```

---

### **2. Abstract Factory**

#### **Definición:** 
Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

#### **Funcionamiento:** 
Define una interfaz para crear cada tipo de objeto en la familia. Las implementaciones concretas de la fábrica producen una familia de productos que comparten un tema común.

#### **Beneficios:**
- Garantiza la compatibilidad entre los productos creados.
- Facilita la sustitución de familias de productos sin cambiar el código cliente.

#### **Ventajas:**
- Aísla el código cliente de las clases concretas de implementación.
- Promueve la coherencia entre productos relacionados.

#### **Desventajas:**
- Añade complejidad debido a la introducción de múltiples interfaces y clases.

#### **Cuándo utilizarlo:**
- Cuando el sistema debe ser independiente de cómo se crean, componen y representan sus productos.
- Cuando se desea proporcionar una biblioteca de productos y se quiere revelar solo sus interfaces, no sus implementaciones.

#### **Ejemplo:**

*Escenario:* Sistema de interfaz gráfica que puede crear diferentes conjuntos de widgets (botones y checkboxes) según el sistema operativo.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Productos
class Button(ABC):
    @abstractmethod
    def paint(self):
        pass

class Checkbox(ABC):
    @abstractmethod
    def paint(self):
        pass

# Productos concretos
class WindowsButton(Button):
    def paint(self):
        print("Renderizando botón de Windows.")

class MacOSButton(Button):
    def paint(self):
        print("Renderizando botón de MacOS.")

class WindowsCheckbox(Checkbox):
    def paint(self):
        print("Renderizando checkbox de Windows.")

class MacOSCheckbox(Checkbox):
    def paint(self):
        print("Renderizando checkbox de MacOS.")

# Fábrica abstracta
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self):
        pass

    @abstractmethod
    def create_checkbox(self):
        pass

# Fábricas concretas
class WindowsFactory(GUIFactory):
    def create_button(self):
        return WindowsButton()

    def create_checkbox(self):
        return WindowsCheckbox()

class MacOSFactory(GUIFactory):
    def create_button(self):
        return MacOSButton()

    def create_checkbox(self):
        return MacOSCheckbox()

# Cliente
class Application:
    def __init__(self, factory: GUIFactory):
        self.button = factory.create_button()
        self.checkbox = factory.create_checkbox()

    def paint(self):
        self.button.paint()
        self.checkbox.paint()

# Uso
def main():
    import platform
    os_name = platform.system().lower()

    if "windows" in os_name:
        factory = WindowsFactory()
    else:
        factory = MacOSFactory()

    app = Application(factory)
    app.paint()

main()
```

Este es un ejemplo de cómo el patrón Abstract Factory puede gestionar la creación de interfaces de usuario específicas para cada sistema operativo, asegurando compatibilidad y consistencia en el diseño de sus elementos.

---

### **3. Singleton**

#### **Definición:** 
El patrón Singleton asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esta instancia.

#### **Funcionamiento:** 
Define una clase con un método que crea una nueva instancia del objeto si no existe; si ya existe, retorna la misma instancia.

#### **Beneficios:**
- Controla el acceso a la única instancia y garantiza la existencia de una única instancia en todo el ciclo de vida de la aplicación.

#### **Ventajas:**
- Asegura el uso de una sola instancia de la clase, permitiendo el control de recursos compartidos.

#### **Desventajas:**
- Puede dificultar el testing de la aplicación ya que impide la sustitución de instancias.

#### **Cuándo utilizarlo:**
- Cuando se necesita exactamente una instancia de una clase para coordinar acciones en todo el sistema (como un objeto de configuración o un registro de conexiones a bases de datos).

#### **Ejemplo:**

*Escenario:* Administrador de conexión a una base de datos, asegurando que solo exista una conexión activa a la vez.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
class Database:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls)
        return cls._instance

    def connect(self):
        print("Conexión establecida.")

# Uso
db1 = Database()
db2 = Database()

print(db1 == db2)  # True
db1.connect()
```

---

### **4. Builder**

#### **Definición:** 
El patrón Builder permite construir objetos complejos paso a paso, separando el proceso de construcción de la representación final.

#### **Funcionamiento:** 
Define una clase constructora que puede crear y ensamblar partes de un objeto en distintos métodos, permitiendo variaciones en el objeto final.

#### **Beneficios:**
- Fomenta la creación de objetos complejos sin depender de un constructor largo y sobrecargado.

#### **Ventajas:**
- Es útil para objetos con muchas configuraciones y opciones.

#### **Desventajas:**
- Aumenta la complejidad al añadir múltiples clases adicionales para la construcción.

#### **Cuándo utilizarlo:**
- Cuando se necesita construir objetos con múltiples configuraciones o un conjunto de parámetros opcionales.

#### **Ejemplo:**

*Escenario:* Generador de órdenes de compra que permite especificar detalles opcionales como dirección, fecha de entrega y productos.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
class Order:
    def __init__(self, product):
        self.product = product
        self.address = None
        self.delivery_date = None

    def __str__(self):
        return f"Producto: {self.product}, Dirección: {self.address}, Fecha: {self.delivery_date}"

class OrderBuilder:
    def __init__(self, product):
        self.order = Order(product)

    def set_address(self, address):
        self.order.address = address
        return self

    def set_delivery_date(self, delivery_date):
        self.order.delivery_date = delivery_date
        return self

    def build(self):
        return self.order

# Uso
order = (OrderBuilder("Laptop")
         .set_address("123 Main St")
         .set_delivery_date("2023-10-10")
         .build())

print(order)
```

---

### **5. Prototype**

#### Definición:
El patrón Prototype permite crear nuevos objetos copiando un objeto existente, conocido como prototipo, en lugar de crearlos desde cero.

#### Funcionamiento:
Define una interfaz común que obliga a los objetos a implementar un método para clonarse. Este método devuelve una copia del objeto original.

#### Beneficios:
- Reduce la complejidad de crear objetos complejos desde cero.
- Es útil cuando la inicialización de un objeto es costosa o implica configuraciones complicadas.

#### Ventajas:
- Permite duplicar objetos dinámicamente en tiempo de ejecución.
- Reduce el acoplamiento entre la creación de objetos y su inicialización.

#### Desventajas:
- Requiere implementar el método de clonación en cada clase, lo que puede ser complejo para objetos con referencias circulares o estructuras complejas.

#### Cuándo utilizarlo:
- Cuando se necesita crear copias de objetos complejos o costosos de inicializar.
- Cuando las configuraciones de los objetos varían levemente.

#### Ejemplo:

*Escenario:* Un editor gráfico que necesita duplicar figuras geométricas con configuraciones personalizadas.

##### **Java**:
```java
// Interfaz del prototipo
interface Shape extends Cloneable {
    Shape clone();
}

// Clase concreta
class Circle implements Shape {
    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    @Override
    public Shape clone() {
        return new Circle(this.radius);
    }

    @Override
    public String toString() {
        return "Circle with radius: " + radius;
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Circle original = new Circle(5);
        Circle clone = (Circle) original.clone();
        clone.setRadius(10);

        System.out.println("Original: " + original);
        System.out.println("Clon: " + clone);
    }
}
```

##### **JavaScript**:
```javascript
// Prototipo
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    clone() {
        return new Circle(this.radius);
    }
}

// Uso
const original = new Circle(5);
const clone = original.clone();
clone.radius = 10;

console.log("Original:", original);
console.log("Clon:", clone);
```

##### **TypeScript**:
```typescript
// Prototipo
class Circle {
    constructor(public radius: number) {}

    public clone(): Circle {
        return new Circle(this.radius);
    }
}

// Uso
const original = new Circle(5);
const clone = original.clone();
clone.radius = 10;

console.log("Original:", original);
console.log("Clon:", clone);
```

##### **Python**:
```python
import copy

# Prototipo
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def clone(self):
        return copy.deepcopy(self)

# Uso
original = Circle(5)
clone = original.clone()
clone.radius = 10

print("Original:", vars(original))
print("Clon:", vars(clone))
```


---

## Patrones Estructurales

### **Definición:** 
Los patrones estructurales se enfocan en la composición de clases y objetos para formar estructuras más grandes mientras mantienen la flexibilidad y eficiencia.

---

### **6. Adapter**

#### **Definición:** 
El patrón Adapter convierte la interfaz de una clase en otra que el cliente espera, permitiendo que clases con interfaces incompatibles trabajen juntas.

#### **Funcionamiento:** 
Crea una clase envoltorio (adapter) que traduce la interfaz de una clase existente a otra interfaz requerida por el cliente.

#### **Beneficios:**
- Permite la interoperabilidad entre clases que no fueron diseñadas para trabajar juntas.

#### **Ventajas:**
- Reutilización de clases existentes sin modificarlas.

#### **Desventajas:**
- Añade complejidad al sistema al introducir nuevas clases.

#### **Cuándo utilizarlo:**
- Cuando se necesita utilizar una clase existente pero su interfaz no es compatible con los requerimientos del cliente.

#### **Ejemplo:**

*Escenario:* Integrar un sistema de pagos existente con una nueva API que usa un formato diferente para procesar pagos.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
# Clase existente incompatible
class LegacyPaymentSystem:
    def make_payment(self, data):
        print(f"Pago procesado: {data}")

# Interfaz objetivo
class PaymentProcessor:
    def process_payment(self, details):
        pass

# Adaptador
class PaymentAdapter(PaymentProcessor):
    def __init__(self, legacy_system):
        self.legacy_system = legacy_system

    def process_payment(self, details):
        self.legacy_system.make_payment(details)

# Uso
legacy_system = LegacyPaymentSystem()
adapter = PaymentAdapter(legacy_system)

adapter.process_payment("Detalles del pago")
```

---

### **7. Bridge**

#### **Definición:** 
El patrón Bridge divide una gran clase o un conjunto de clases estrechamente relacionadas en dos jerarquías separadas: una para la abstracción y otra para la implementación, permitiendo que ambas evolucionen independientemente.

#### **Funcionamiento:** 
Define una interfaz para la abstracción y una implementación separada, conectándolas a través de una referencia. La abstracción delega las llamadas a la implementación.

#### **Beneficios:**
- Promueve la separación de preocupaciones.
- Reduce la duplicación de código al permitir reutilizar implementaciones.

#### **Ventajas:**
- Fácil mantenimiento y escalabilidad.

#### **Desventajas:**
- Incrementa la complejidad del diseño debido a la necesidad de coordinar dos jerarquías.

#### **Cuándo utilizarlo:**
- Cuando es necesario dividir una clase grande en dos jerarquías separadas que pueden desarrollarse independientemente.

#### **Ejemplo:**

*Escenario:* Sistema de dispositivos inteligentes con diferentes plataformas (Windows y Linux) que deben soportar varias funcionalidades (control remoto y estadísticas).

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Implementación
class Platform(ABC):
    @abstractmethod
    def execute(self, command):
        pass

# Implementaciones concretas
class WindowsPlatform(Platform):
    def execute(self, command):
        print(f"Ejecutando en Windows: {command}")

class LinuxPlatform(Platform):
    def execute(self, command):
        print(f"Ejecutando en Linux: {command}")

# Abstracción
class SmartDevice(ABC):
    def __init__(self, platform: Platform):
        self.platform = platform

    @abstractmethod
    def perform_task(self, task):
        pass

# Abstracciones concretas
class RemoteControl(SmartDevice):
    def perform_task(self, task):
        self.platform.execute(f"Control remoto: {task}")

class Statistics(SmartDevice):
    def perform_task(self, task):
        self.platform.execute(f"Estadísticas: {task}")

# Uso
remote = RemoteControl(WindowsPlatform())
remote.perform_task("Encender TV")

stats = Statistics(LinuxPlatform())
stats.perform_task("Recopilar datos")
```

---

### **8. Composite**

#### **Definición:** 
El patrón Composite permite tratar objetos individuales y compuestos de manera uniforme mediante una jerarquía de árboles.

#### **Funcionamiento:** 
Define clases base para objetos simples y compuestos, permitiendo a los clientes interactuar con ambos tipos a través de una interfaz común.

#### **Beneficios:**
- Facilita la manipulación de estructuras jerárquicas complejas.

#### **Ventajas:**
- Proporciona una manera uniforme de interactuar con todos los objetos de una estructura.

#### **Desventajas:**
- Puede ser complejo de implementar para estructuras jerárquicas profundas.

#### **Cuándo utilizarlo:**
- Cuando es necesario trabajar con estructuras de datos jerárquicas como árboles.

#### **Ejemplo:**

*Escenario:* Sistema de representación de directorios y archivos donde ambos pueden ser tratados uniformemente.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Componente base
class FileSystem(ABC):
    @abstractmethod
    def show_details(self):
        pass

# Hoja
class File(FileSystem):
    def __init__(self, name):
        self.name = name

    def show_details(self):
        print(f"Archivo: {self.name}")

# Compuesto
class Directory(FileSystem):
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, component: FileSystem):
        self.children.append(component)

    def show_details(self):
        print(f"Directorio: {self.name}")
        for child in self.children:
            child.show_details()

# Uso
file1 = File("archivo1.txt")
file2 = File("archivo2.txt")

directory = Directory("Documentos")
directory.add(file1)
directory.add(file2)

directory.show_details()
```

---

### **9. Decorator**

#### **Definición:** 
El patrón Decorator permite añadir dinámicamente funcionalidades a un objeto sin modificar su estructura.

#### **Funcionamiento:** 
Envuelve un objeto original con una clase que implementa la misma interfaz y extiende su funcionalidad.

#### **Beneficios:**
- Proporciona una alternativa flexible a la herencia para extender la funcionalidad.

#### **Ventajas:**
- Permite combinar decoradores de forma dinámica para obtener comportamientos complejos.

#### **Desventajas:**
- Puede hacer el diseño más complejo debido a la cantidad de decoradores.

#### **Cuándo utilizarlo:**
- Cuando se necesita extender la funcionalidad de un objeto sin modificar su clase.

#### **Ejemplo:**

*Escenario:* Sistema de notificaciones donde se pueden agregar canales adicionales como correo electrónico y SMS.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Componente base
class Notification(ABC):
    @abstractmethod
    def send(self, message):
        pass

# Componente concreto
class BasicNotification(Notification):
    def send(self, message):
        print(f"Notificación enviada: {message}")

# Decorador base
class NotificationDecorator(Notification):
    def __init__(self, wrappee: Notification):
        self.wrappee = wrappee

    def send(self, message):
        self.wrappee.send(message)

# Decoradores concretos
class EmailNotification(NotificationDecorator):
    def send(self, message):
        super().send(message)
        print(f"Correo enviado: {message}")

class SMSNotification(NotificationDecorator):
    def send(self, message):
        super().send(message)
        print(f"SMS enviado: {message}")

# Uso
notification = BasicNotification()
notification = EmailNotification(notification)
notification = SMSNotification(notification)

notification.send("Hola, este es un mensaje.")
```

---

### **10. Facade**

#### Definición:
El patrón Facade proporciona una interfaz simplificada para un sistema complejo de clases, bibliotecas o APIs.

#### Funcionamiento:
Define una clase que actúa como punto de entrada único para realizar operaciones en un sistema complejo, ocultando sus detalles internos.

#### Beneficios:
- Reduce la complejidad del cliente al interactuar con un sistema.
- Proporciona un punto de acceso uniforme.

#### Ventajas:
- Simplifica la interacción con sistemas complejos.
- Mejora la mantenibilidad al centralizar la interacción.

#### Desventajas:
- Puede convertirse en un punto único de fallo si no se diseña correctamente.
- No resuelve problemas internos del sistema; solo los oculta.

#### Cuándo utilizarlo:
- Cuando necesitas proporcionar una interfaz sencilla a un sistema complejo.
- Para desacoplar clientes de subsistemas.

#### Ejemplo:

*Escenario:* Un sistema multimedia que simplifica la interacción con múltiples servicios de reproducción.

##### **Java**:
```java
// Subsistemas
class AudioSystem {
    public void playAudio() {
        System.out.println("Reproduciendo audio...");
    }
}

class VideoSystem {
    public void playVideo() {
        System.out.println("Reproduciendo video...");
    }
}

// Facade
class MediaFacade {
    private AudioSystem audioSystem;
    private VideoSystem videoSystem;

    public MediaFacade() {
        audioSystem = new AudioSystem();
        videoSystem = new VideoSystem();
    }

    public void playMedia() {
        audioSystem.playAudio();
        videoSystem.playVideo();
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        MediaFacade mediaFacade = new MediaFacade();
        mediaFacade.playMedia();
    }
}
```

##### **JavaScript**:
```javascript
// Subsistemas
class AudioSystem {
    playAudio() {
        console.log("Reproduciendo audio...");
    }
}

class VideoSystem {
    playVideo() {
        console.log("Reproduciendo video...");
    }
}

// Facade
class MediaFacade {
    constructor() {
        this.audioSystem = new AudioSystem();
        this.videoSystem = new VideoSystem();
    }

    playMedia() {
        this.audioSystem.playAudio();
        this.videoSystem.playVideo();
    }
}

// Uso
const mediaFacade = new MediaFacade();
mediaFacade.playMedia();
```

##### **TypeScript**:
```typescript
// Subsistemas
class AudioSystem {
    public playAudio(): void {
        console.log("Reproduciendo audio...");
    }
}

class VideoSystem {
    public playVideo(): void {
        console.log("Reproduciendo video...");
    }
}

// Facade
class MediaFacade {
    private audioSystem: AudioSystem;
    private videoSystem: VideoSystem;

    constructor() {
        this.audioSystem = new AudioSystem();
        this.videoSystem = new VideoSystem();
    }

    public playMedia(): void {
        this.audioSystem.playAudio();
        this.videoSystem.playVideo();
    }
}

// Uso
const mediaFacade = new MediaFacade();
mediaFacade.playMedia();
```

##### **Python**:
```python
# Subsistemas
class AudioSystem:
    def play_audio(self):
        print("Reproduciendo audio...")

class VideoSystem:
    def play_video(self):
        print("Reproduciendo video...")

# Facade
class MediaFacade:
    def __init__(self):
        self.audio_system = AudioSystem()
        self.video_system = VideoSystem()

    def play_media(self):
        self.audio_system.play_audio()
        self.video_system.play_video()

# Uso
media_facade = MediaFacade()
media_facade.play_media()
```

---

### **11. Flyweight**

#### Definición:
El patrón Flyweight minimiza el uso de memoria compartiendo la mayor cantidad de datos posible con objetos similares, especialmente cuando se crean grandes cantidades de objetos similares.

#### Funcionamiento:
Divide el estado del objeto en dos partes:
1. **Estado intrínseco**: Parte compartida entre todos los objetos (almacenada en el flyweight).
2. **Estado extrínseco**: Parte específica del objeto que se proporciona en tiempo de ejecución.

#### Beneficios:
- Reduce significativamente el uso de memoria al reutilizar objetos.

#### Ventajas:
- Mejora el rendimiento en sistemas que manejan grandes volúmenes de datos similares.

#### Desventajas:
- Incrementa la complejidad del sistema al gestionar el estado compartido y el específico.

#### Cuándo utilizarlo:
- Cuando tienes una gran cantidad de objetos que comparten características similares.
- Cuando los objetos son costosos de crear y mantener.

#### Ejemplo:

*Escenario:* Un sistema de renderizado de texto que reutiliza fuentes en lugar de crear una nueva instancia para cada letra.

##### **Java**:
```java
import java.util.HashMap;
import java.util.Map;

// Flyweight
class Font {
    private final String typeface;

    public Font(String typeface) {
        this.typeface = typeface;
    }

    public String getTypeface() {
        return typeface;
    }
}

// Flyweight Factory
class FontFactory {
    private Map<String, Font> fonts = new HashMap<>();

    public Font getFont(String typeface) {
        if (!fonts.containsKey(typeface)) {
            fonts.put(typeface, new Font(typeface));
        }
        return fonts.get(typeface);
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        FontFactory factory = new FontFactory();

        Font font1 = factory.getFont("Arial");
        Font font2 = factory.getFont("Arial");
        Font font3 = factory.getFont("Times New Roman");

        System.out.println(font1 == font2); // true
        System.out.println(font1 == font3); // false
    }
}
```

##### **JavaScript**:
```javascript
// Flyweight
class Font {
    constructor(typeface) {
        this.typeface = typeface;
    }
}

// Flyweight Factory
class FontFactory {
    constructor() {
        this.fonts = new Map();
    }

    getFont(typeface) {
        if (!this.fonts.has(typeface)) {
            this.fonts.set(typeface, new Font(typeface));
        }
        return this.fonts.get(typeface);
    }
}

// Uso
const factory = new FontFactory();

const font1 = factory.getFont("Arial");
const font2 = factory.getFont("Arial");
const font3 = factory.getFont("Times New Roman");

console.log(font1 === font2); // true
console.log(font1 === font3); // false
```

##### **TypeScript**:
```typescript
// Flyweight
class Font {
    constructor(public typeface: string) {}
}

// Flyweight Factory
class FontFactory {
    private fonts: Map<string, Font> = new Map();

    public getFont(typeface: string): Font {
        if (!this.fonts.has(typeface)) {
            this.fonts.set(typeface, new Font(typeface));
        }
        return this.fonts.get(typeface)!;
    }
}

// Uso
const factory = new FontFactory();

const font1 = factory.getFont("Arial");
const font2 = factory.getFont("Arial");
const font3 = factory.getFont("Times New Roman");

console.log(font1 === font2); // true
console.log(font1 === font3); // false
```

##### **Python**:
```python
# Flyweight
class Font:
    def __init__(self, typeface):
        self.typeface = typeface

# Flyweight Factory
class FontFactory:
    def __init__(self):
        self.fonts = {}

    def get_font(self, typeface):
        if typeface not in self.fonts:
            self.fonts[typeface] = Font(typeface)
        return self.fonts[typeface]

# Uso
factory = FontFactory()

font1 = factory.get_font("Arial")
font2 = factory.get_font("Arial")
font3 = factory.get_font("Times New Roman")

print(font1 is font2)  # True
print(font1 is font3)  # False
```

---

### **12. Proxy**

#### Definición:
El patrón Proxy proporciona un sustituto o placeholder para controlar el acceso a otro objeto, permitiendo agregar funcionalidad adicional sin cambiar el objeto original.

#### Funcionamiento:
Crea una clase proxy que implementa la misma interfaz que el objeto real. El proxy actúa como intermediario, controlando el acceso al objeto real.

#### Beneficios:
- Controla el acceso a los objetos.
- Mejora el rendimiento mediante la creación diferida (lazy initialization).

#### Ventajas:
- Proporciona un control adicional, como seguridad o caching.
- Facilita el acceso remoto a los objetos.

#### Desventajas:
- Puede aumentar la complejidad del sistema.

#### Cuándo utilizarlo:
- Cuando necesitas controlar el acceso a un objeto (por ejemplo, autenticación, logging, o caché).
- Para retrasar la inicialización de un objeto costoso.

#### Ejemplo:

*Escenario:* Un sistema que carga imágenes grandes solo cuando es necesario.

##### **Java**:
```java
// Interfaz
interface Image {
    void display();
}

// Objeto real
class RealImage implements Image {
    private String fileName;

    public RealImage(String fileName) {
        this.fileName = fileName;
        loadFromDisk();
    }

    private void loadFromDisk() {
        System.out.println("Cargando " + fileName);
    }

    @Override
    public void display() {
        System.out.println("Mostrando " + fileName);
    }
}

// Proxy
class ProxyImage implements Image {
    private String fileName;
    private RealImage realImage;

    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void display() {
        if (realImage == null) {
            realImage = new RealImage(fileName);
        }
        realImage.display();
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Image image = new ProxyImage("photo.jpg");
        image.display(); // Carga y muestra la imagen
        image.display(); // Solo muestra la imagen
    }
}
```

##### **JavaScript**:
```javascript
// Objeto real
class RealImage {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    loadFromDisk() {
        console.log(`Cargando ${this.fileName}`);
    }

    display() {
        console.log(`Mostrando ${this.fileName}`);
    }
}

// Proxy
class ProxyImage {
    constructor(fileName) {
        this.fileName = fileName;
        this.realImage = null;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

// Uso
const image = new ProxyImage("photo.jpg");
image.display(); // Carga y muestra la imagen
image.display(); // Solo muestra la imagen
```

##### **TypeScript**:
```typescript
// Interfaz
interface Image {
    display(): void;
}

// Objeto real
class RealImage implements Image {
    constructor(private fileName: string) {
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Cargando ${this.fileName}`);
    }

    public display(): void {
        console.log(`Mostrando ${this.fileName}`);
    }
}

// Proxy
class ProxyImage implements Image {
    private realImage: RealImage | null = null;

    constructor(private fileName: string) {}

    public display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

// Uso
const image: Image = new ProxyImage("photo.jpg");
image.display(); // Carga y muestra la imagen
image.display(); // Solo muestra la imagen
```

##### **Python**:
```python
# Objeto real
class RealImage:
    def __init__(self, file_name):
        self.file_name = file_name
        self.load_from_disk()

    def load_from_disk(self):
        print(f"Cargando {self.file_name}")

    def display(self):
        print(f"Mostrando {self.file_name}")

# Proxy
class ProxyImage:
    def __init__(self, file_name):
        self.file_name = file_name
        self.real_image = None

    def display(self):
        if self.real_image is None:
            self.real_image = RealImage(self.file_name)
        self.real_image.display()

# Uso
image = ProxyImage("photo.jpg")
image.display()  # Carga y muestra la imagen
image.display()  # Solo muestra la imagen
```


---

## Patrones de Comportamiento

#### **Definición:** 
Los patrones de comportamiento se centran en la comunicación y la asignación de responsabilidades entre objetos. Facilitan la interacción, coordinación y control del flujo en sistemas complejos.

---

### 13. Chain of Responsibility

#### **Definición:** 
El patrón Chain of Responsibility pasa una solicitud a lo largo de una cadena de manejadores. Cada manejador decide procesar la solicitud o pasarla al siguiente manejador en la cadena.

#### **Funcionamiento:** 
Cada manejador tiene una referencia al siguiente manejador en la cadena. Si el manejador actual no puede procesar la solicitud, delega la tarea al siguiente.

#### **Beneficios:**
- Permite separar los emisores de solicitudes de sus receptores.

#### **Ventajas:**
- Fácil de añadir o modificar manejadores sin alterar la estructura existente.

#### **Desventajas:**
- La solicitud puede pasar por muchos manejadores antes de ser procesada, afectando el rendimiento.

#### **Cuándo utilizarlo:**
- Cuando se desea que varias clases tengan la oportunidad de manejar una solicitud sin acoplar al emisor con los receptores.

#### **Ejemplo:**

*Escenario:* Sistema de procesamiento de solicitudes de soporte técnico con diferentes niveles de atención: soporte básico, técnico y especializado.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Pyhton:**

```python
from abc import ABC, abstractmethod

# Manejador
class SupportHandler(ABC):
    def __init__(self):
        self.next_handler = None

    def set_next_handler(self, handler):
        self.next_handler = handler

    @abstractmethod
    def handle_request(self, request):
        pass

# Manejadores concretos
class BasicSupport(SupportHandler):
    def handle_request(self, request):
        if request == "Básico":
            print("Solicitud manejada por Soporte Básico.")
        elif self.next_handler:
            self.next_handler.handle_request(request)

class TechnicalSupport(SupportHandler):
    def handle_request(self, request):
        if request == "Técnico":
            print("Solicitud manejada por Soporte Técnico.")
        elif self.next_handler:
            self.next_handler.handle_request(request)

class SpecializedSupport(SupportHandler):
    def handle_request(self, request):
        if request == "Especializado":
            print("Solicitud manejada por Soporte Especializado.")
        else:
            print("Solicitud no pudo ser manejada.")

# Uso
basic = BasicSupport()
technical = TechnicalSupport()
specialized = SpecializedSupport()

basic.set_next_handler(technical)
technical.set_next_handler(specialized)

basic.handle_request("Técnico")
basic.handle_request("Especializado")
basic.handle_request("Avanzado")
```

---

### **14. Command**

#### **Definición:** 
El patrón Command encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolar solicitudes o registrar el historial de operaciones.

#### **Funcionamiento:** 
Define una interfaz común para los comandos. Cada comando implementa esta interfaz y ejecuta una acción específica en un receptor. Un invocador es responsable de ejecutar los comandos.

#### **Beneficios:**
- Permite registrar, deshacer y rehacer operaciones.

#### **Ventajas:**
- Facilita la creación de macros o combinaciones de comandos.

#### **Desventajas:**
- Aumenta el número de clases en el sistema.

#### **Cuándo utilizarlo:**
- Cuando es necesario parametrizar objetos con acciones.
- Para soportar operaciones de deshacer/rehacer.

#### **Ejemplo:**

*Escenario:* Control remoto que ejecuta comandos para dispositivos electrónicos (TV, luces).

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Comando
class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

# Receptor
class Light:
    def turn_on(self):
        print("Luz encendida")

    def turn_off(self):
        print("Luz apagada")

# Comandos concretos
class TurnOnLightCommand(Command):
    def __init__(self, light: Light):
        self.light = light

    def execute(self):
        self.light.turn_on()

class TurnOffLightCommand(Command):
    def __init__(self, light: Light):
        self.light = light

    def execute(self):
        self.light.turn_off()

# Invocador
class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command: Command):
        self.command = command

    def press_button(self):
        self.command.execute()

# Uso
living_room_light = Light()

turn_on = TurnOnLightCommand(living_room_light)
turn_off = TurnOffLightCommand(living_room_light)

remote = RemoteControl()

remote.set_command(turn_on)
remote.press_button()

remote.set_command(turn_off)
remote.press_button()
```

---

### **15. Memento**

#### **Definición:** 
El patrón Memento permite capturar y almacenar el estado interno de un objeto en un punto determinado, para poder restaurarlo más tarde sin violar la encapsulación del objeto.

#### **Funcionamiento:** 
El objeto principal (originador) crea un memento que captura su estado interno. Este memento es administrado por un cuidador que puede devolver el memento al originador cuando sea necesario restaurar el estado.

#### **Beneficios:**
- Facilita la implementación de funciones de deshacer y rehacer.

#### **Ventajas:**
- Preserva la encapsulación del estado interno del objeto.
- Reduce el acoplamiento entre el cuidador y el originador.

#### **Desventajas:**
- Puede consumir demasiada memoria si se guardan muchos mementos o si el estado del objeto es grande.

#### **Cuándo utilizarlo:**
- Cuando necesitas guardar y restaurar el estado de un objeto complejo en un momento específico, por ejemplo, para funciones de deshacer/rehacer.

#### **Ejemplo:**

*Escenario:* Un editor de texto con funcionalidad de deshacer, que permite guardar el estado actual del documento y restaurarlo si el usuario lo desea.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
# Memento
class TextEditorMemento:
    def __init__(self, state):
        self.state = state

    def get_state(self):
        return self.state

# Originador
class TextEditor:
    def __init__(self):
        self.content = ""

    def set_content(self, content):
        self.content = content

    def get_content(self):
        return self.content

    def save(self):
        return TextEditorMemento(self.content)

    def restore(self, memento):
        self.content = memento.get_state()

# Cuidador
class Caretaker:
    def __init__(self):
        self.mementos = []

    def add_memento(self, memento):
        self.mementos.append(memento)

    def get_memento(self, index):
        return self.mementos[index]

# Uso
editor = TextEditor()
caretaker = Caretaker()

editor.set_content("Estado 1")
caretaker.add_memento(editor.save())

editor.set_content("Estado 2")
caretaker.add_memento(editor.save())

editor.set_content("Estado 3")

print("Estado actual:", editor.get_content())
editor.restore(caretaker.get_memento(0))
print("Estado restaurado:", editor.get_content())
```

---

### **16. Observer**

#### **Definición:** 
El patrón Observer establece una dependencia uno a muchos entre objetos, de manera que cuando un objeto (sujeto) cambia su estado, notifica automáticamente a todos los objetos dependientes (observadores).

#### **Funcionamiento:** 
El sujeto mantiene una lista de observadores y proporciona métodos para añadir, eliminar y notificar a los observadores. Los observadores implementan una interfaz común para ser notificados de los cambios del sujeto.

#### **Beneficios:**
- Desacopla el sujeto y los observadores, permitiendo modificaciones independientes.

#### **Ventajas:**
- Facilita la extensión del sistema al añadir nuevos observadores sin modificar el código del sujeto.

#### **Desventajas:**
- Puede afectar el rendimiento si hay muchos observadores o notificaciones frecuentes.

#### **Cuándo utilizarlo:**
- Cuando es necesario que múltiples objetos reaccionen a cambios en el estado de otro objeto sin acoplarse directamente a él.

#### **Ejemplo:**

*Escenario:* Sistema de notificaciones de ofertas en una tienda online. Los usuarios pueden suscribirse para recibir notificaciones cuando se publique una nueva oferta.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
# Sujeto
class Subject:
    def __init__(self):
        self.observers = []

    def subscribe(self, observer):
        self.observers.append(observer)

    def unsubscribe(self, observer):
        self.observers.remove(observer)

    def notify_observers(self, offer):
        for observer in self.observers:
            observer.update(offer)

# Observador
class User:
    def __init__(self, name):
        self.name = name

    def update(self, offer):
        print(f"{self.name} recibió la notificación: Nueva oferta - {offer}")

# Uso
store = Subject()

user1 = User("Alice")
user2 = User("Bob")

store.subscribe(user1)
store.subscribe(user2)

store.notify_observers("50% de descuento en laptops")
```

---

### **17. Strategy**

#### **Definición:** 
El patrón Strategy define una familia de algoritmos, los encapsula y hace que sean intercambiables durante la ejecución.

#### **Funcionamiento:** 
Proporciona una interfaz común para los algoritmos. El contexto utiliza un objeto de estrategia para delegar el comportamiento en lugar de implementarlo directamente.

#### **Beneficios:**
- Elimina la necesidad de usar condicionales complejos para seleccionar comportamientos.

#### **Ventajas:**
- Fácil de extender y mantener al añadir nuevas estrategias.

#### **Desventajas:**
- El cliente debe estar al tanto de las diferentes estrategias disponibles.

#### **Cuándo utilizarlo:**
- Cuando un sistema tiene múltiples variantes de un comportamiento específico y es necesario cambiar entre ellas de forma dinámica.

#### **Ejemplo:**

*Escenario:* Sistema de cálculo de precios con estrategias de descuento basadas en el cliente (estudiantes, empleados, clientes frecuentes).

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Estrategia
class DiscountStrategy(ABC):
    @abstractmethod
    def apply_discount(self, price):
        pass

# Estrategias concretas
class StudentDiscount(DiscountStrategy):
    def apply_discount(self, price):
        return price * 0.8  # 20% de descuento

class EmployeeDiscount(DiscountStrategy):
    def apply_discount(self, price):
        return price * 0.7  # 30% de descuento

class RegularCustomerDiscount(DiscountStrategy):
    def apply_discount(self, price):
        return price * 0.9  # 10% de descuento

# Contexto
class PriceCalculator:
    def __init__(self):
        self.strategy = None

    def set_strategy(self, strategy: DiscountStrategy):
        self.strategy = strategy

    def calculate_price(self, price):
        return self.strategy.apply_discount(price)

# Uso
calculator = PriceCalculator()

calculator.set_strategy(StudentDiscount())
print("Precio con descuento estudiante:", calculator.calculate_price(100))

calculator.set_strategy(EmployeeDiscount())
print("Precio con descuento empleado:", calculator.calculate_price(100))

calculator.set_strategy(RegularCustomerDiscount())
print("Precio con descuento cliente regular:", calculator.calculate_price(100))
```

---

### **18. Mediator**

#### **Definición:** 
El patrón Mediator define un objeto que encapsula la forma en que interactúan un conjunto de objetos. Este patrón promueve un bajo acoplamiento al evitar que los objetos se refieran entre sí explícitamente y permite variar sus interacciones de forma independiente.

#### **Funcionamiento:** 
El Mediador se encarga de coordinar la comunicación entre objetos participantes, actuando como un intermediario. Los objetos participantes no se comunican directamente entre sí, sino a través del mediador.

#### **Beneficios:**
- Reduce las dependencias directas entre objetos.

#### **Ventajas:**
- Simplifica la comunicación en sistemas complejos con múltiples objetos interdependientes.

#### **Desventajas:**
- Puede convertirse en un punto central de complejidad si no se diseña adecuadamente.

#### **Cuándo utilizarlo:**
- Cuando un sistema tiene múltiples componentes que interactúan entre sí de manera compleja y no quieres que estos componentes estén estrechamente acoplados.

#### **Ejemplo:**

*Escenario:* Un sistema de chat donde varios usuarios pueden enviar mensajes al mediador, y este se encarga de distribuirlos a los usuarios correspondientes.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
# Mediador
class ChatRoom:
    def __init__(self):
        self.users = []

    def add_user(self, user):
        self.users.append(user)

    def send_message(self, message, sender):
        for user in self.users:
            if user != sender:
                user.receive(message)

# Usuario
class User:
    def __init__(self, name, mediator):
        self.name = name
        self.mediator = mediator

    def send(self, message):
        print(f"{self.name}: Enviando mensaje -> {message}")
        self.mediator.send_message(message, self)

    def receive(self, message):
        print(f"{self.name}: Recibiendo mensaje -> {message}")

# Uso
chat_room = ChatRoom()

user1 = User("Alice", chat_room)
user2 = User("Bob", chat_room)
user3 = User("Charlie", chat_room)

chat_room.add_user(user1)
chat_room.add_user(user2)
chat_room.add_user(user3)

user1.send("Hola a todos!")
```

---

### *19. State**

#### **Definición:** 
El patrón State permite que un objeto cambie su comportamiento dinámicamente según su estado interno, delegando este comportamiento a objetos de estado específicos.

#### **Funcionamiento:** 
Define una interfaz común para todos los estados. Cada estado concreto implementa esta interfaz y define su propio comportamiento para las operaciones. El objeto principal (contexto) delega las operaciones al estado actual.

#### **Beneficios:**
- Facilita el mantenimiento al eliminar condicionales grandes relacionados con los estados.

#### **Ventajas:**
- Permite añadir nuevos estados sin modificar el código existente del contexto.
- Promueve el uso de objetos en lugar de estructuras condicionales complejas.

#### **Desventajas:**
- Puede aumentar el número de clases, ya que se necesita una clase para cada estado.

#### **Cuándo utilizarlo:**
- Cuando el comportamiento de un objeto depende de su estado y necesita cambiar en tiempo de ejecución.

#### **Ejemplo:**

*Escenario:* Máquina expendedora que cambia de comportamiento dependiendo de su estado: lista, esperando dinero, y dispensando producto.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Estado
class State(ABC):
    @abstractmethod
    def insert_money(self):
        pass

    @abstractmethod
    def dispense_product(self):
        pass

# Estado concreto: Lista
class ReadyState(State):
    def __init__(self, machine):
        self.machine = machine

    def insert_money(self):
        print("Dinero insertado. Selecciona un producto.")
        self.machine.set_state(self.machine.get_waiting_state())

    def dispense_product(self):
        print("Inserta dinero primero.")

# Estado concreto: Esperando dinero
class WaitingState(State):
    def __init__(self, machine):
        self.machine = machine

    def insert_money(self):
        print("Dinero ya insertado. Selecciona un producto.")

    def dispense_product(self):
        print("Producto dispensado. Gracias por tu compra.")
        self.machine.set_state(self.machine.get_ready_state())

# Contexto
class VendingMachine:
    def __init__(self):
        self.ready_state = ReadyState(self)
        self.waiting_state = WaitingState(self)
        self.current_state = self.ready_state

    def set_state(self, state):
        self.current_state = state

    def get_ready_state(self):
        return self.ready_state

    def get_waiting_state(self):
        return self.waiting_state

    def insert_money(self):
        self.current_state.insert_money()

    def dispense_product(self):
        self.current_state.dispense_product()

# Uso
machine = VendingMachine()

machine.insert_money()
machine.dispense_product()
machine.dispense_product()
```

---

### **20. Visitor**

#### **Definición:** 
El patrón Visitor permite añadir nuevas operaciones a una jerarquía de clases sin modificar las clases existentes, separando las operaciones del objeto que las realiza.

#### **Funcionamiento:** 
Define una interfaz para visitar cada clase concreta de una jerarquía. Cada clase concreta implementa un método que acepta el visitante, delegando así la operación en este.

#### **Beneficios:**
- Permite añadir nuevas operaciones sin alterar las clases existentes.

#### **Ventajas:**
- Mantiene la consistencia en la jerarquía de clases al delegar la lógica al visitante.

#### **Desventajas:**
- Dificulta la adición de nuevas clases en la jerarquía, ya que todos los visitantes deben actualizarse.

#### **Cuándo utilizarlo:**
- Cuando necesitas añadir operaciones que se aplican a una jerarquía de clases sin modificar estas clases.

#### **Ejemplo:**

*Escenario:* Un sistema de figuras geométricas que permite calcular el área y el perímetro utilizando visitantes separados.

##### **Java:**

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

##### **JavaScript:**

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

##### **TypeScript:**

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

##### **Python:**

```python
from abc import ABC, abstractmethod

# Elementos
class Shape(ABC):
    @abstractmethod
    def accept(self, visitor):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def accept(self, visitor):
        visitor.visit_circle(self)

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def accept(self, visitor):
        visitor.visit_rectangle(self)

# Visitantes
class Visitor(ABC):
    @abstractmethod
    def visit_circle(self, circle):
        pass

    @abstractmethod
    def visit_rectangle(self, rectangle):
        pass

class AreaCalculator(Visitor):
    def visit_circle(self, circle):
        area = 3.14159 * circle.radius ** 2
        print(f"Área del círculo: {area}")

    def visit_rectangle(self, rectangle):
        area = rectangle.width * rectangle.height
        print(f"Área del rectángulo: {area}")

class PerimeterCalculator(Visitor):
    def visit_circle(self, circle):
        perimeter = 2 * 3.14159 * circle.radius
        print(f"Perímetro del círculo: {perimeter}")

    def visit_rectangle(self, rectangle):
        perimeter = 2 * (rectangle.width + rectangle.height)
        print(f"Perímetro del rectángulo: {perimeter}")

# Uso
circle = Circle(5)
rectangle = Rectangle(4, 6)

area_calculator = AreaCalculator()
perimeter_calculator = PerimeterCalculator()

circle.accept(area_calculator)
circle.accept(perimeter_calculator)

rectangle.accept(area_calculator)
rectangle.accept(perimeter_calculator)
```

---

### **21. Template Method**

#### Definición:
El patrón Template Method define el esqueleto de un algoritmo en una clase base, permitiendo a las subclases redefinir ciertos pasos del algoritmo sin cambiar su estructura general.

#### Funcionamiento:
Crea una clase abstracta que define un método plantilla (template method). Este método contiene el flujo general del algoritmo y delega pasos específicos a métodos que las subclases deben implementar.

#### Beneficios:
- Promueve la reutilización de código al encapsular el flujo común del algoritmo en la clase base.
- Facilita la extensión al permitir que las subclases redefinan solo las partes necesarias.

#### Ventajas:
- Centraliza el control del algoritmo en la clase base.
- Reduce la duplicación de código.

#### Desventajas:
- Puede ser menos flexible si los pasos del algoritmo no se adaptan bien a todas las subclases.

#### Cuándo utilizarlo:
- Cuando varios algoritmos comparten una estructura común, pero difieren en algunos detalles.
- Para evitar la duplicación de código en subclases que implementan algoritmos similares.

#### Ejemplo:

*Escenario:* Un sistema de generación de informes que sigue un flujo general (preparar datos, generar informe, guardar informe) pero varía dependiendo del formato del informe.

##### **Java**:
```java
// Clase abstracta
abstract class ReportGenerator {
    // Método plantilla
    public final void generateReport() {
        prepareData();
        createReport();
        saveReport();
    }

    protected abstract void prepareData();
    protected abstract void createReport();

    private void saveReport() {
        System.out.println("Guardando informe...");
    }
}

// Implementación concreta
class PDFReportGenerator extends ReportGenerator {
    @Override
    protected void prepareData() {
        System.out.println("Preparando datos para el informe PDF...");
    }

    @Override
    protected void createReport() {
        System.out.println("Creando informe PDF...");
    }
}

class ExcelReportGenerator extends ReportGenerator {
    @Override
    protected void prepareData() {
        System.out.println("Preparando datos para el informe Excel...");
    }

    @Override
    protected void createReport() {
        System.out.println("Creando informe Excel...");
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        ReportGenerator pdfReport = new PDFReportGenerator();
        pdfReport.generateReport();

        ReportGenerator excelReport = new ExcelReportGenerator();
        excelReport.generateReport();
    }
}
```

##### **JavaScript**:
```javascript
// Clase base
class ReportGenerator {
    // Método plantilla
    generateReport() {
        this.prepareData();
        this.createReport();
        this.saveReport();
    }

    prepareData() {
        throw new Error("Este método debe ser implementado por la subclase");
    }

    createReport() {
        throw new Error("Este método debe ser implementado por la subclase");
    }

    saveReport() {
        console.log("Guardando informe...");
    }
}

// Implementaciones concretas
class PDFReportGenerator extends ReportGenerator {
    prepareData() {
        console.log("Preparando datos para el informe PDF...");
    }

    createReport() {
        console.log("Creando informe PDF...");
    }
}

class ExcelReportGenerator extends ReportGenerator {
    prepareData() {
        console.log("Preparando datos para el informe Excel...");
    }

    createReport() {
        console.log("Creando informe Excel...");
    }
}

// Uso
const pdfReport = new PDFReportGenerator();
pdfReport.generateReport();

const excelReport = new ExcelReportGenerator();
excelReport.generateReport();
```

##### **TypeScript**:
```typescript
// Clase base
abstract class ReportGenerator {
    // Método plantilla
    public generateReport(): void {
        this.prepareData();
        this.createReport();
        this.saveReport();
    }

    protected abstract prepareData(): void;
    protected abstract createReport(): void;

    private saveReport(): void {
        console.log("Guardando informe...");
    }
}

// Implementaciones concretas
class PDFReportGenerator extends ReportGenerator {
    protected prepareData(): void {
        console.log("Preparando datos para el informe PDF...");
    }

    protected createReport(): void {
        console.log("Creando informe PDF...");
    }
}

class ExcelReportGenerator extends ReportGenerator {
    protected prepareData(): void {
        console.log("Preparando datos para el informe Excel...");
    }

    protected createReport(): void {
        console.log("Creando informe Excel...");
    }
}

// Uso
const pdfReport = new PDFReportGenerator();
pdfReport.generateReport();

const excelReport = new ExcelReportGenerator();
excelReport.generateReport();
```

##### **Python**:
```python
from abc import ABC, abstractmethod

# Clase base
class ReportGenerator(ABC):
    # Método plantilla
    def generate_report(self):
        self.prepare_data()
        self.create_report()
        self.save_report()

    @abstractmethod
    def prepare_data(self):
        pass

    @abstractmethod
    def create_report(self):
        pass

    def save_report(self):
        print("Guardando informe...")

# Implementaciones concretas
class PDFReportGenerator(ReportGenerator):
    def prepare_data(self):
        print("Preparando datos para el informe PDF...")

    def create_report(self):
        print("Creando informe PDF...")

class ExcelReportGenerator(ReportGenerator):
    def prepare_data(self):
        print("Preparando datos para el informe Excel...")

    def create_report(self):
        print("Creando informe Excel...")

# Uso
pdf_report = PDFReportGenerator()
pdf_report.generate_report()

excel_report = ExcelReportGenerator()
excel_report.generate_report()
```

---

### **22. Iterator**

#### Definición:
El patrón Iterator permite recorrer elementos de una colección sin exponer su representación subyacente, utilizando un objeto iterador.

#### Funcionamiento:
El iterador proporciona una interfaz estándar para acceder a los elementos de una colección secuencialmente, manteniendo un registro de la posición actual. La colección y el iterador suelen ser clases separadas.

#### Beneficios:
- Permite recorrer colecciones complejas sin exponer sus detalles internos.
- Proporciona una manera uniforme de iterar sobre diferentes tipos de colecciones.

#### Ventajas:
- Desacopla la lógica de iteración de la estructura de la colección.
- Facilita la implementación de varias estrategias de recorrido.

#### Desventajas:
- Puede ser menos eficiente que iterar directamente sobre la colección en ciertos casos.

#### Cuándo utilizarlo:
- Cuando necesitas recorrer una colección sin conocer su implementación interna.
- Para proporcionar múltiples maneras de iterar sobre una colección.

#### Ejemplo:

*Escenario:* Un sistema que permite recorrer una colección personalizada de nombres de productos.

##### **Java**:
```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

// Colección
class ProductCollection implements Iterable<String> {
    private List<String> products = new ArrayList<>();

    public void addProduct(String product) {
        products.add(product);
    }

    @Override
    public Iterator<String> iterator() {
        return products.iterator();
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        ProductCollection collection = new ProductCollection();
        collection.addProduct("Laptop");
        collection.addProduct("Smartphone");
        collection.addProduct("Tablet");

        for (String product : collection) {
            System.out.println(product);
        }
    }
}
```

##### **JavaScript**:
```javascript
// Colección
class ProductCollection {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    [Symbol.iterator]() {
        let index = 0;
        const products = this.products;
        return {
            next() {
                if (index < products.length) {
                    return { value: products[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Uso
const collection = new ProductCollection();
collection.addProduct("Laptop");
collection.addProduct("Smartphone");
collection.addProduct("Tablet");

for (const product of collection) {
    console.log(product);
}
```

##### **TypeScript**:
```typescript
// Colección
class ProductCollection implements Iterable<string> {
    private products: string[] = [];

    public addProduct(product: string): void {
        this.products.push(product);
    }

    [Symbol.iterator](): Iterator<string> {
        let index = 0;
        const products = this.products;

        return {
            next(): IteratorResult<string> {
                if (index < products.length) {
                    return { value: products[index++], done: false };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}

// Uso
const collection = new ProductCollection();
collection.addProduct("Laptop");
collection.addProduct("Smartphone");
collection.addProduct("Tablet");

for (const product of collection) {
    console.log(product);
}
```

##### **Python**:
```python
# Colección
class ProductCollection:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def __iter__(self):
        return iter(self.products)

# Uso
collection = ProductCollection()
collection.add_product("Laptop")
collection.add_product("Smartphone")
collection.add_product("Tablet")

for product in collection:
    print(product)
```

Estos son los patrones principales del catálogo de **Refactoring.Guru**.