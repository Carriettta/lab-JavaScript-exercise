// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{ x: 0, y: 0 }]
  };
  
  // ======================
  //Left
  function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        console.log("Current direction is West");
        break;
      case "W":
        rover.direction = "S";
        console.log("Current direction is South");
        break;
      case "S":
        rover.direction = "E";
        console.log("Current direction is East");
        break;
      case "E":
        rover.direction = "N";
        console.log("Current direction is North");
        break;
    }
  }
  
  //Right
  function turnRight(rover) {
    console.log("turnRight was called!");
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        console.log("Current direction is East");
        break;
      case "E":
        rover.direction = "S";
        console.log("Current direction is South");
        break;
      case "S":
        rover.direction = "W";
        console.log("Current direction is West");
        break;
      case "W":
        rover.direction = "N";
        console.log("Current direction is North");
        break;
    }
  }
  
  //Forward
  function moveForward(rover) {
    console.log("moveForward was called");
    switch (rover.direction) {
      case "W":
        rover.x--;
        break;
      case "N":
        rover.y--;
        break;
      case "E":
        rover.x++;
        break;
      case "S":
        rover.y++;
        break;
    }
    console.log(`Current coordinates are x:${rover.x}, y:${rover.y}`);
    rover.travelLog.push({ x: rover.x, y: rover.y });
  }
  
  //commandList
  function commands(list) {
    for (let i = 0; i < list.length; i++) {
      switch (list[i]) {
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "f":
          moveForward(rover);
          break;
      }
    }
  }
  
  // travelLog
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(
      `Travelled coordinate ${i}: x:${rover.travelLog[i].x} y:${rover.travelLog[i].y}`
    );
  }
  
  //Fill below to command the rover!
  commands("");