const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1, wall2, ground;
var bridge, joinPoint;
var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall1 = new Base(5, windowHeight/2, 350, 250);
  wall2 = new Base(windowWidth - 5, windowHeight/2, 350, 250);
  ground = new Base(windowWidth/2, windowHeight - 5, windowWidth, 25);

  bridge = new Bridge(25, {x : wall1.body.position.x + 10, y : wall1.body.position.y - 105})
  joinPoint = new Base(windowWidth - 150, windowHeight/2 - 100, 0, 0);

  for(var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300)
    var y = random(-10, 75)
    var stone = new Stone(x, y, 50);
    stones.push(stone);
    //for(var j = 0; j <= stones.length; j++){
      
    //}
  }

  
}

function draw() {
  background(51);
  Engine.update(engine);
  wall1.show();
  wall2.show();
  ground.show();

  Matter.Composite.add(bridge.body, joinPoint.body);
  jointLink = new Link(bridge, joinPoint);

  bridge.show();

  for(var i = 0; i <= 8; i++){
    stones[i].show();
  }
}
