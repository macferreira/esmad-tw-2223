window.onload = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById('lat').innerHTML = position.coords.latitude;
    document.getElementById('lon').innerHTML = position.coords.longitude;
  }, () => {
    // error callback
  });
};
