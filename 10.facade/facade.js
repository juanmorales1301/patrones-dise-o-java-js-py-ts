// Subsistemas
class AudioSystem {
    playAudio() {
        console.log("Reproduciendo audio...");
    }
}

class VideoSystem {
    playVideo() {
        console.log("Reproduciendo video...");
    }
}

// Facade
class MediaFacade {
    constructor() {
        this.audioSystem = new AudioSystem();
        this.videoSystem = new VideoSystem();
    }

    playMedia() {
        this.audioSystem.playAudio();
        this.videoSystem.playVideo();
    }
}

// Uso
const mediaFacade = new MediaFacade();
mediaFacade.playMedia();