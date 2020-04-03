import Controller from "./Controller";

class NetflixController extends Controller {
  constructor() {
    super();

    // eslint-disable-next-line no-undef
    const { videoPlayer } = netflix.appContext.state.playerApp.getAPI();

    // Getting player id
    const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];

    this.player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  seek(time) {
    this.player.seek(time);
  }
}

export default NetflixController;
