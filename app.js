const player = document.getElementById('player');
const obstacle= document.getElementById('obstacle')

function jump()
{
      if(player.classList != "jump")
      {
            player.classList.add("jump");

            setTimeout(function()
                              {
           player.classList.remove("jump");
                  },300);
      }

}



// collision
let count=0;
let isAlive = setInterval(function(){
      let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
      console.log(playerTop);


      let obsLeft = parseInt(window.getComputedStyle(obstacle ).getPropertyValue("left"));
      console.log(obsLeft);

      if(obsLeft<40 && obsLeft >0  && playerTop>=125)
      { count++;
            //console.log(count);
           // console.log("collision");
             // alert("GAME OVER");
      }
      
}, 10);


music();

function music()
{
      let audio = new Audio('song.mp3');
      //audio.play();
}

document.addEventListener("keydown", function(event){
      jump();
      
})



