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