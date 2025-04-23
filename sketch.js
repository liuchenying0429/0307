function setup() {
  // 建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB, 360, 100, 100);
  // 設定背景顏色為黑色
  background(0);
}

function draw() {
  // 根據滑鼠的X位置變化色相
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  // 根據滑鼠的Y位置變化亮度
  let brightness = map(mouseY, 0, windowHeight, 0, 100);
  
  // 設定圓的顏色
  fill(hue, 100, brightness);
  // 設定圓的邊框顏色和寬度
  stroke(360 - hue, 100, 100); // 使用相反的色相作為邊框顏色
  strokeWeight(5); // 邊框寬度為5像素
  
  // 在滑鼠位置畫一個圓，寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

// 當視窗的大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 重新設定背景顏色為黑色
  background(0);
}



