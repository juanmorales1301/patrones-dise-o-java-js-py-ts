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