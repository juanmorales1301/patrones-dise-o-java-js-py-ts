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
public class memento {
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