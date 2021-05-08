var i = document.querySelectorAll(".drum")

for (var a = 0; a < i.length; a++) {
  i[a].addEventListener("click", function() {
    var b=this.innerHTML;
    makeSound(b);

    buttonAnimation(b);

  });
}

document.addEventListener("keypress",function(event)
{
  makeSound(event.key);



   buttonAnimation(event.key);

});

function makeSound(key)
{
 switch(key){

    case "w":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "a":
      var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "s":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case"d":
      var tom2=new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;

      case"l":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case"j":
          var snare=new Audio("sounds/snare.mp3");
          snare.play();
          break;
      case"k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

     default:
            console.log(key);
 }
}
    var audio= new Audio("sounds/"+i[a]+".mp3");
    audio.play();

function buttonAnimation(currentkey)
{
    document.querySelector("."+currentkey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
  },100);

}
