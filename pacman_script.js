var grid = [
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,3,1,1,1,1,0,0,0,1,1,1,1,1,0],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,0,0,0,1,0,0,3,0,0,1,0,0,0,0],
              [0,1,1,1,1,0,3,3,3,0,1,1,1,1,0],
              [4,1,1,1,1,0,3,3,3,0,1,1,1,1,4],
              [0,0,0,1,1,0,0,0,0,0,1,0,0,0,0],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,1,1,0,1,1,1,0,1,1,1,0,1,1,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ];

var pacman = {
  x: 0,
  y: 0
}

var world = function()
{
  var layout = "";
  for(var y = 0; y < grid.length; y++)
  {
    layout += "<div class='row'>\n";
    for(var x = 0; x < grid[y].length; x++)
    {
      if(grid[y][x] == 0)
      {
        layout += "<div class='brick'></div>";
      }
      if(grid[y][x] == 1)
      {
        layout += "<div class='coin'></div>";
      }
      if(grid[y][x] == 2)
      {
        layout += "<div class='pacman'></div>";
      }
      if(grid[y][x] == 3)
      {
        layout += "<div class='empty'></div>";
      }
      if(grid[y][x] == 4)
      {
        layout += "<div class='open'></div>";
      }
    }
    layout += "</div>";
  }
  // console.log(layout);
  $("#world").append(layout);
}

var getScore = function(score)
{
  $(".score").css({left: "425px"}).html(score);
}

var loadPacman = function()
{
  $(".pacman").css({top: pacman.y *"px", left: pacman.x *"px"});
}

var movePacman = function()
{
  $(document).on('keydown', function(key)
  {
    console.log(grid[pacman.x][pacman.y]);
    if(key.keyCode == 37)
    {
      pacman.x++
     loadPacman();
    }
    if(key.keyCode == 38)
    {
      $(".pacman").animate({top: "-=25px"},150,function(){});
    }
    if(key.keyCode == 39)
    {
      $(".pacman").animate({left: "+=25px"},150,function(){});
    }
    if(key.keyCode == 40)
    {
      $(".pacman").animate({top: "+=25px"},150,function(){});
    }
  })
}

$(document).ready(function()
{
  world();
  loadPacman();
  getScore();
  movePacman();
});