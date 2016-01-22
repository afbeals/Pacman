var grid = [
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,2,1,1,1,1,0,0,0,1,1,1,1,1,0],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,0,0,0,1,0,0,3,0,0,1,0,0,0,0],
              [0,1,1,1,1,0,3,3,3,0,1,1,1,1,0],
              [4,1,1,1,1,0,3,3,3,0,1,1,1,1,4],
              [0,0,0,1,1,0,0,0,0,0,1,0,0,0,0],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,1,1,0,1,1,1,0,1,1,1,0,1,1,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ];

var world = function()
{
  var layout = "";
  for(var y = 0; y < grid.length; y++)
  {
    layout += "<div class='row'>";
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
    console.log(layout);
  }

  $("#world").append(layout);
}

$(document).ready(function()
{
  world();
});