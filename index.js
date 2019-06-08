var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    playSound(this.innerHTML);

    buttonAnnimation(this.innerHTML);

  });
}

document.addEventListener("keydown", function(event) {

  playSound(event.key);

  buttonAnnimation(event.key);

});

function playSound(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    default:
      console.log("This button is not linked to a sound file!");
  }
}

function buttonAnnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
