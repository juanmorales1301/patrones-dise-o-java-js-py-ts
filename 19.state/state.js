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