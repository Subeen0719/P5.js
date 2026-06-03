function setup() {
  createCanvas(600, 400);
  textSize(20);  // 텍스트 크기 설정
  fill(0);       // 텍스트 색상 설정 (검정색)
}

function draw() {
  background(250);
  text("X: " + mouseX + "     Y: " + mouseY, 0, 20);  // 텍스트 출력
  
  // 아래에 본인의 코드 입력
  
  strokeWeight(1);
  fill('#dddddd');
  rect(210,220,120,120);
  
  fill('#aaeeff');
  ellipse(230,240,12,8);
  ellipse(280,280,15,20);
  circle(270,245,15);
  rect(300,240,8,12);
  triangle(232,305,247,310,238,320);
  rect(230,270,12,11);
  quad(280,310,291,305,320,315,285,320);
  
  fill('brown');
  quad(110,332,155,195,173,199,130,333);
  
  fill('gold');
  quad(85,206,142,181,222, 200,231,240);
  
  
}