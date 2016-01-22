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
  x: 1,
  y: 1
}

var ghost = {
  x: 7,
  y: 4
}

var score = 0;

var world = function()
{
  var layout = "<div class='pacman'></div>\n"+"<div class='score'></div>\n"+"<div class='ghost'></div>\n";
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
  $("#world").html(layout);
}

var getScore = function()
{
  if(grid[pacman.y][pacman.x]==1)
  {
    grid[pacman.y][pacman.x]=3;
    score+=25;
  }

}

var displayScore = function()
{
  $(".score").css({left: "425px"}).html(score +"pts");
}

var loadPacman = function()
{
  $(".pacman").css({top: pacman.y *25+"px", left: pacman.x *25+"px"});
}

var loadGhost = function()
{
  $(".ghost").css({top: ghost.y *25+"px", left: ghost.x *25+"px"});
}

var movePacman = function()
{
  $(document).on('keydown', function(key)
  {
    if(key.keyCode == 37 && grid[pacman.y][pacman.x-1] > 0)
    {
      if(grid[pacman.y][pacman.x-1] == 4)
      {
        pacman.x = grid[pacman.y].length-1;
        getScore();
      }
      else
      {
        pacman.x--;
        getScore();
      }
      
    }
    if(key.keyCode == 38  && grid[pacman.y-1][pacman.x] > 0)
    {
      pacman.y--;
      getScore();
    }
    if(key.keyCode == 39  && grid[pacman.y][pacman.x+1] > 0)
    {
      if(grid[pacman.y][pacman.x+1] == 4)
      {
        pacman.x = 0;
        getScore();
      }
      else
      {
        pacman.x++;
        getScore();
      }
    }
    if(key.keyCode == 40  && grid[pacman.y+1][pacman.x] > 0)
    {
      pacman.y++;
      getScore();
    }
    world();
    loadPacman();
    loadGhost();
    displayScore();
  })
}

$(document).ready(function()
{
  world();
  loadPacman();
  loadGhost();
  displayScore();
  movePacman();
});