function setup() { //設定函數，設定初始值得地方
    //建立依照視窗的高與寬當作畫布的寬高  
    createCanvas(windowWidth, windowHeight);
    //畫布背景顏色為ff8fa3
    background('#ff8fa3');
  }
  
  function draw() {
    //畫布背景顏色為ff8fa3  
    background('#ff8fa3');
    //畫圓的顏色為c9184a   
    fill('#c9184a');
    //畫圓的邊框顏色為800f2f
    stroke('#800f2f');
    //畫圓的邊框寬度為10
    strokeWeight(10);
    //畫圓的位置為視窗的中心，圓的寬高為200             
    //ellipse(windowWidth / 2, windowHeight / 2, 200, 200);
    //依照上面的圓顏色與框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
    for (let i = 0; i < windowWidth+200; i += 200) {
      ellipse(i, windowHeight / 2, 200, 200);
    }
  
    //當視窗的大小改變時，重新設定畫布的寬高
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
    
  
  }
  