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
