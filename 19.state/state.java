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
public class state {
    public static void main(String[] args) {
        VendingMachine machine = new VendingMachine();

        machine.insertMoney();
        machine.dispenseProduct();
        machine.dispenseProduct(); // Comportamiento según el estado actual
    }
}