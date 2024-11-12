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