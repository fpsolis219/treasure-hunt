var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)


const treasureHunt = (location) => {
    if(location === treasureLocation) {
      document.getElementById("outcome").innerHTML = "You WON! 💎"
    }
    else if(location === bombLocation) {
        document.getElementById("outcome").innerHTML = "You LOST! ❌"
      }
      else {
          document.getElementById(location).innerHTML="☠️"
      }
  }
  console.log(treasureHunt())

  function refreshPage(){
    window.location.reload();
} 