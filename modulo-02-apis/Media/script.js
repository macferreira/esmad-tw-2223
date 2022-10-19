/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

navigator.getUserMedia = navigator.getUserMedia
  || navigator.webkitGetUserMedia
  || navigator.mozGetUserMedia;

const errorCallback = (event) => {
  console.log(event);
};

navigator.getUserMedia(
  {
    video: true, // indicar que queremos video
  },
  (stream) => {
    // seleccionar o video do DOM
    const videoPlayer = document.getElementById('my-video');
    // definir a source do video
    try {
      videoPlayer.srcObject = stream;
    } catch (error) {
      videoPlayer.src = window.URL.createObjectURL(stream);
    }
  },
  errorCallback,
);
