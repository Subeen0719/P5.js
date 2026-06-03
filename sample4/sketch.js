let eyeH = 20 // 눈의 크기 (감고 뜨는 정도)
let face_red = 0 // 웃으면서 생기는 볼터치
let sleepTimer = 0 // f 누르는 시간 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  if (keyIsPressed === true && (key === 'f' || key === 'F')) { // f 클릭 시
    if(eyeH > 0) {
      eyeH -= 3.0; // 눈 크기 
    }
    sleepTimer = sleepTimer + 1; // f를 누르는 동안 타이머 증가
  }
  else { // f 안클릭시
    if(eyeH < 20) {
      eyeH += 3.0; // 눈 크기 키움
    }
    sleepTimer = 0; // 키를 떼면 타이머 초기화
  }

  // 볼터치 수치 조절
  if (mouseIsPressed === true && mouseButton === LEFT) {
    if (face_red < 150) face_red += 5;
  } else {
    if (face_red > 0) face_red -= 5;
  }

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

  if (mouseIsPressed === true && mouseButton === LEFT) { // 
    stroke(0);
    strokeWeight(2);
    noFill(); 
    arc(262, 195, 35, 20, PI, 0); // 왼쪽 눈웃음
    arc(338, 195, 35, 20, PI, 0); // 오른쪽 눈웃음
    
    fill('#fa7575');
    noStroke();
    arc(300, 245, 60, 45, 0, PI); // 입 크게
  }
  else {
    fill('#ffffff'); // 눈 외형
    ellipse(262,195,35,eyeH); // 좌
    ellipse(338,195,35,eyeH); // 우
  
    fill('#000000'); // 눈알
    circle(262,195,15*(eyeH/20)); // 좌
    circle(338,195,15*(eyeH/20)); // 우
    
    strokeWeight(0); // 입
    fill('#fa7575')
    arc(300,250,50,35,0,PI);
    strokeWeight(1);
  }
  
  // f를 3초 이상 누르면 취침
  if (sleepTimer > 180) { 
    fill(0);
    textSize(32);
    text("Zzz...", 380, 120); 
  }

  fill('#fcdfcc'); // 코
  triangle(300,200,290,230,305,235);
  
  fill(255, 100, 100, face_red); 
  noStroke();
  ellipse(260, 225, 30, 20); // 왼쪽 볼
  ellipse(340, 225, 30, 20); // 오른쪽 볼
  
  fill('#242B44'); // 옷
  arc(302,400,250,185,PI,0);
  
  fill('#F9F69E'); // 옷 단추
  circle(300,345,12);
  circle(300,385,12);
  
  stroke('#101112'); // 안경
  noFill();
  strokeWeight(1.1); 
  circle(262,195,45);
  circle(338,195,45);
  line(286,190,314,190);
  line(240,195,218,178);
  line(360,195,388,178);
  stroke('#000000');
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myCharacter.gif', 13); // 녹화
  }
}