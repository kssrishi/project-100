var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var content;
function start() {
  recognition.start();
}
recognition.onresult = function (event) {
  console.log(event);
    var content = event.results[0][0].transcript.toLowerCase();
  console.log(content);
  if (content == "selfie.") {
    console.log("taking selfie");
    speak();
  }
};
function speak() {
  var synth = window.speechSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
  Webcam.attach(camera);
    setTimeout(function () {
        image_id = "selfie1"
        take_snapshot();
        speak_data = "taking your selfie in 5 seconds"; 
       synth.speak(utterthis);  
    }, 5000);
    setTimeout(function () {
      image_id = "selfie2";
      take_snapshot();
      speak_data = "taking your selfie in 10 seconds";
      synth.speak(utterthis);
    }, 10000);
    setTimeout(function () {
      image_id = "selfie3";
      take_snapshot();
      speak_data = "taking your selfie in 15 seconds";
      synth.speak(utterthis);
    }, 15000);
}
Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 90,
});
camera = document.getElementById("camera");
function take_snapshot() {
    console.log(image_id);
    Webcam.snap(function (data_uri) {
      if (image_id=="selfie1") {
        document.getElementById("result").innerHTML =
          '<img id="selfie1"src="' + data_uri + '">';   
      }
if (image_id == "selfie2") {
  document.getElementById("result1").innerHTML =
    '<img id="selfie2"src="' + data_uri + '">';
        }
        if (image_id == "selfie3") {
          document.getElementById("result2").innerHTML =
            '<img id="selfie3"src="' + data_uri + '">';
        }
  });
}
