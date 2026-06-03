let G_Color1, G_Color2;

function setup() {
  createCanvas(600, 400);
  textSize(20);
  
  // 광물 색깔 (Gem_Color)
  G_Color1 = color('#aaeeff');
  G_Color2 = color('#eebbff');
}


function draw() {
  background(255);
  fill(0);
  stroke(0);
  strokeWeight(1);
  text("X: " + mouseX + "     Y: " + mouseY, 0, 20); // 마우스 위치

  
  // 400프레임 반복 (Frame_Time)
  let Frame_Time = frameCount % 400; 
  let Hit_Time = Frame_Time % 100; // 100 프레임마다 곡괭이질 반복

  
  // 색깔 변화 (G_CChange1, G_CChange2 - Gem_ColorChange)
  let G_CChange1 = (sin(frameCount * 0.05) + 1) / 2;
  let G_CChange2 = lerpColor(G_Color1, G_Color2, G_CChange1);

  
  // 크기 변화 (G_SChange - Gem_ShapeChange)
  let G_SChange = map(sin(frameCount * 0.1), -1, 1, 0.7, 1.3);

  
  // 곡괭이의 움직임 (P_Angle) / 곡괭이가 점점 빨라지는 모습 (P_Speed)
  let P_Angle = 0;
  if (Hit_Time < 70) { // 초반-느림
    let P_Speed = Hit_Time / 70;
    P_Angle = -map(sin(P_Speed * PI / 2), 0, 1, 0, PI / 3.5);
  } else {
    let P_Speed = (Hit_Time - 70) / 30; // 후반-빠름
    P_Angle = -map(1 - (P_Speed * P_Speed * P_Speed), 0, 1, 0, PI / 3.5);
  }

  
  // 돌이 깨짐 
  fill('#dddddd');
  beginShape();
  if (Frame_Time < 100) {
    // 처음
    vertex(210, 220); vertex(330, 220); vertex(330, 340); vertex(210, 340);
  } else if (Frame_Time < 200) {
    // 1번 깨짐
    vertex(260, 220); vertex(330, 220); vertex(330, 340); vertex(210, 340);
    vertex(210, 260); vertex(230, 250);
  } else if (Frame_Time < 300) {
    // 2번 깨짐
    vertex(290, 220); vertex(330, 220); vertex(330, 340); vertex(210, 340);
    vertex(210, 300); vertex(240, 280); vertex(260, 240);
  } else {
    // 3번 깨짐
    vertex(320, 220); vertex(330, 220); vertex(330, 340); vertex(240, 340);
    vertex(260, 320); vertex(280, 270); vertex(300, 230);
  }
  endShape(CLOSE);

  
  // 보석
  fill(G_CChange2);
  
  if (Frame_Time < 100) {
    push(); translate(230, 240); scale(G_SChange); ellipse(0, 0, 12, 8); pop();
  }
  if (Frame_Time < 200) {
    push(); translate(236, 275); scale(G_SChange); rect(-6, -5, 12, 11); pop();
    push(); translate(270, 245); scale(G_SChange); circle(0, 0, 15); pop();
  }
  if (Frame_Time < 300) {
    push(); translate(239, 311); scale(G_SChange); triangle(-7, -6, 8, -1, -1, 9); pop();
    push(); translate(280, 280); scale(G_SChange); ellipse(0, 0, 15, 20); pop();
  }

  push(); translate(304, 246); scale(G_SChange); rect(-4, -6, 8, 12); pop();
  push(); translate(294, 312); scale(G_SChange); quad(-14, -2, -3, -7, 26, 3, -9, 8); pop();

  
  // 떨어져 나가는 돌 
  if (Hit_Time < 35 && Frame_Time >= 100) {
    push();
    translate(220 - Hit_Time * 3, 230 - Hit_Time * 3 + (Hit_Time * Hit_Time * 0.2)); 
    rotate(-Hit_Time * 0.1);
    
    fill('#dddddd');
    triangle(-15, -15, 20, -10, -5, 20);
    fill(G_CChange2);
    circle(0, 0, 8);
    pop();
  }

  
  // 바닥에 쌓이는 보석 (Gem)
  let Gem = 0;
  if (Frame_Time >= 100 && Frame_Time < 200) Gem = 4;
  else if (Frame_Time >= 200 && Frame_Time < 300) Gem = 9;
  else if (Frame_Time >= 300) Gem = 16;

  for (let i = 0; i < Gem; i++) {
    let gemX = 130 + (i * 15) % 50; 
    let gemY = 370 + (i * 7) % 20;
    
    let gemColor = lerpColor(G_Color1, G_Color2, i / 16); fill(gemColor);
    fill(gemColor, 230, 255);
    triangle(gemX, gemY - 5, gemX + 5, gemY + 5, gemX - 5, gemY + 5);
  }

  
  // 곡괭이
  push();
  translate(120, 332); 
  rotate(P_Angle);       
  
  
  // 곡괭이 손잡이
  fill('brown');
  quad(-10, 0, 35, -137, 53, -133, 10, 1);
  
  
  // 곡괭이 머리
  fill('gold');
  quad(-35, -126, 22, -151, 102, -132, 111, -92);
  pop();
}


// GIF 제작 버튼
function keyPressed() {
  if (key === 'f' || key === 'F') {
    saveGif('assignment.gif', 400, { units: 'frames' }); 
  }
}