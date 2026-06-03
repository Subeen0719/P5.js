let eye_height = 20;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  fill('#fbdfcc'); // 이하 얼굴/귀 모양 표현
  ellipse(220,200,40,40); // 왼쪽 귀
  ellipse(380,200,40,40); // 오른쪽 귀
  strokeWeight(0);
  rect(275,270,50,50); // 목
  strokeWeight(1);
  ellipse(300,200,150,160); // 얼굴
  
  fill('#000000'); // 이하 머리카락 표현
  circle(230,160,50);
  circle(240,140,52);
  circle(250,150,54);
  circle(260,120,56);
  circle(270,130,58);
  circle(280,150,55);
  circle(290,105,50);
  circle(300,150,60);
  circle(310,105,50);
  circle(320,150,55);
  circle(330,130,58);
  circle(340,120,56);
  circle(350,150,54);
  circle(360,140,52);
  circle(370,160,50);
  
  fill('#ffffff'); // 눈 외형
  ellipse(262,195,35,20); // 좌
  ellipse(338,195,35,20); // 우
  
  fill('#000000'); // 눈알
  circle(262,195,15); // 좌
  circle(338,195,15); // 우
  
  fill('#fcdfcc'); // 코
  triangle(300,200,290,230,305,235);
  
  strokeWeight(0); // 입
  fill('#fa7575')
  arc(300,250,50,35,0,PI);
  strokeWeight(1);
  
  fill('#242B44'); // 옷
  arc(302,400,250,185,PI,0);
  
  fill('#F9F69E'); // 옷 단추
  circle(300,345,12);
  circle(300,385,12);
  
  stroke('#101112');
  noFill();
  circle(262,195,45);
  circle(338,195,45);
  line(286,190,314,190);
  stroke('#000000');
}