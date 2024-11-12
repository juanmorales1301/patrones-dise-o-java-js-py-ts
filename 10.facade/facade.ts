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