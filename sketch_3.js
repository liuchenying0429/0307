function setup() { //設定函數，設定初始值得地方
    //建立依照視窗的高與寬當作畫布的寬高  
    createCanvas(windowWidth, windowHeight);
    //設定顏色模式為HSB
    colorMode(HSB, 360, 100, 100);
    //畫布背景顏色為粉紅色
    background(340, 50, 50);
  }
  
  function draw() {
    //畫布背景顏色為粉紅色
    background(340, 50, 100);
    
    // 根據滑鼠的X位置變化圓形和方形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 設定方框的模式為中心
    rectMode(CENTER);
  
    // 設定每個形狀之間的間距
    let spacing = size + 20;
  
    // 畫一整排的圓形與方形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        //畫方框的顏色為紅色
        fill(0, 70, 100);
        //畫方框的邊框顏色為深紅色
        stroke(0, 60, 50);
        //畫方框的邊框寬度為10
        strokeWeight(10);
        //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為動態大小
        rect(x, y, size, size); //畫方框
  
        //圓的顏色為黃色
        fill(60, 50, 100);
        //圓的邊框顏色為深紅色
        stroke(0, 60, 50);
        //畫方框的位置為視窗的中心，圓的寬高為動態大小             
        ellipse(x, y, size, size);
      }
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }