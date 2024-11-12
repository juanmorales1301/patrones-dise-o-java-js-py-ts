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
