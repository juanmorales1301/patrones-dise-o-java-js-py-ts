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
public class facade {
    public static void main(String[] args) {
        MediaFacade mediaFacade = new MediaFacade();
        mediaFacade.playMedia();
    }
}