# Subsistemas
class AudioSystem:
    def play_audio(self):
        print("Reproduciendo audio...")

class VideoSystem:
    def play_video(self):
        print("Reproduciendo video...")

# Facade
class MediaFacade:
    def __init__(self):
        self.audio_system = AudioSystem()
        self.video_system = VideoSystem()

    def play_media(self):
        self.audio_system.play_audio()
        self.video_system.play_video()

# Uso
media_facade = MediaFacade()
media_facade.play_media()