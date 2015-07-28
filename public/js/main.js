'use strict';
var greyhound = function(){
    window.alert(" Greyhound ");
}

 var browser_test= function(){
     navigator.getUserMedia ||
      (navigator.getUserMedia = navigator.mozGetUserMedia ||
      navigator.webkitGetUserMedia || navigator.msGetUserMedia);
     
      window.audioContext ||
            (window.audioContext = window.AudioContext);
     
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
          video: true,
          audio: true
        }, onSuccess, onError);
    } else {
        alert('getUserMedia is not supported in this browser.');
 }
     
  
    function onSuccess(stream) {
        var video = document.getElementById('localVideo');
        var videoSource;
     
        if (window.URL) {
            videoSource = window.URL.createObjectURL(stream);
        } else {
          videoSource = window.webkitURL.createObjectURL(stream);
        }
     
        video.autoplay = true;
        video.src = videoSource;
        
          if (getAudio && window.audioContext) {
                audioContext = new window.audioContext();
                mediaStreamSource = audioContext.createMediaStreamSource(stream);
                mediaStreamSource.connect(audioContext.destination);
        }
    }
  
     
        function onError() {
            alert('There has been a problem retreiving the streams - did you disallow access?');
        }
     
}
