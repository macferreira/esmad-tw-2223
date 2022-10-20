/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

navigator.getUserMedia = navigator.getUserMedia
  || navigator.webkitGetUserMedia
  || navigator.mozGetUserMedia;

const errorCallback = (event) => {
  console.log(event);
};

navigator.getUserMedia(
  {
    video: true,
  },
  (stream) => {
    const videoPlayer = document.getElementById('my-video');
    // define video source
    try {
      videoPlayer.srcObject = stream;
    } catch (error) {
      videoPlayer.src = window.URL.createObjectURL(stream);
    }
  },
  errorCallback,
);
