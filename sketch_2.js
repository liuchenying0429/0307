function setup() { //設定函數，設定初始值得地方
    //建立依照視窗的高與寬當作畫布的寬高  
    createCanvas(windowWidth, windowHeight);
    //畫布背景顏色為ff8fa3
    background('#ff8fa3');
  }
  
  function draw() {
    //畫布背景顏色為ff8fa3  
    background('#ff8fa3');
    //畫方框的顏色為c9184a   
    fill('#c9184a');
    //畫方框的邊框顏色為800f2f
    stroke('#800f2f');
    //畫方框的邊框寬度為10
    strokeWeight(10);
    //畫方框的位置為視窗的中心，圓的寬高為200             
    ellipse(windowWidth / 2, windowHeight / 2, 200, 200);
    //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為200
    rectMode(CENTER);  //設定方框的模式為中心                               
    rect(windowWidth / 2, windowHeight / 2, 200, 200); //畫方框
  
    //圓的顏色為fbf8cc
    fill('#fbf8cc');
    //圓的邊框顏色為800f2f  function setup() { //設定函數，設定初始值得地方
      //建立依照視窗的高與寬當作畫布的寬高  
      createCanvas(windowWidth, windowHeight);
      //畫布背景顏色為ff8fa3
      background('#ff8fa3');
    }
    
    function draw() {
      //畫布背景顏色為ff8fa3  
      background('#ff8fa3');
      
      // 根據滑鼠的X位置變化圓形和方形的大小
      let size = map(mouseX, 0, windowWidth, 100, 500);
    
      //畫方框的顏色為c9184a   
      fill('#c9184a');
      //畫方框的邊框顏色為800f2f
      stroke('#800f2f');
      //畫方框的邊框寬度為10
      strokeWeight(10);
      //畫方框的位置為視窗的中心，圓的寬高為動態大小             
      ellipse(windowWidth / 2, windowHeight / 2, size, size);
      //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為動態大小
      rectMode(CENTER);  //設定方框的模式為中心                               
      rect(windowWidth / 2, windowHeight / 2, size, size); //畫方框
    
      //圓的顏色為fbf8cc
      fill('#fbf8cc');
      //圓的邊框顏色為800f2f
      stroke('#800f2f');
      //在視窗的中間畫一個圓，圓的寬高為動態大小
      ellipse(windowWidth / 2, windowHeight / 2, size, size);
    }
    
    //當視窗的大小改變時，重新設定畫布的寬高
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
    stroke('#800f2f');
    //在視窗的中間畫一個圓，圓的寬高為200
    ellipse(windowWidth / 2, windowHeight / 2, 200, 200);
  function setup() { //設定函數，設定初始值得地方
    //建立依照視窗的高與寬當作畫布的寬高  
    createCanvas(windowWidth, windowHeight);
    //畫布背景顏色為ff8fa3
    background('#ff8fa3');
  }
  
  function draw() {
    //畫布背景顏色為ff8fa3  
    background('#ff8fa3');
    
    // 根據滑鼠的X位置變化圓形和方形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 設定方框的模式為中心
    rectMode(CENTER);
  
    // 設定每個形狀之間的間距
    let spacing = size + 20;
  
    // 畫一整排的圓形與方形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      //畫方框的顏色為c9184a   
      fill('#c9184a');
      //畫方框的邊框顏色為800f2f
      stroke('#800f2f');
      //畫方框的邊框寬度為10
      strokeWeight(10);
      //畫方框的位置為視窗的中心，圓的寬高為動態大小             
      ellipse(x, windowHeight / 2, size, size);
      //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為動態大小
      rect(x, windowHeight / 2, size, size); //畫方框
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }function setup() { //設定函數，設定初始值得地方
    //建立依照視窗的高與寬當作畫布的寬高  
    createCanvas(windowWidth, windowHeight);
    //畫布背景顏色為ff8fa3
    background('#ff8fa3');
  }
  
  function draw() {
    //畫布背景顏色為ff8fa3  
    background('#ff8fa3');
    
    // 根據滑鼠的X位置變化圓形和方形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 設定方框的模式為中心
    rectMode(CENTER);
  
    // 設定每個形狀之間的間距
    let spacing = size + 20;
  
    // 畫一整排的圓形與方形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      //畫方框的顏色為c9184a   
      fill('#c9184a');
      //畫方框的邊框顏色為800f2f
      stroke('#800f2f');
      //畫方框的邊框寬度為10
      strokeWeight(10);
      //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為動態大小
      rect(x, windowHeight / 2, size, size); //畫方框
  
      //圓的顏色為fbf8cc
      fill('#fbf8cc');
      //圓的邊框顏色為800f2f
      stroke('#800f2f');
      //畫方框的位置為視窗的中心，圓的寬高為動態大小             
      ellipse(x, windowHeight / 2, size, size);
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }-function setup() { //設定函數，設定初始值得地方
    //建立依照視窗的高與寬當作畫布的寬高  
    createCanvas(windowWidth, windowHeight);
    //畫布背景顏色為ff8fa3
    background('#ff8fa3');
  }
  
  function draw() {
    //畫布背景顏色為ff8fa3  
    background('#ff8fa3');
    
    // 根據滑鼠的X位置變化圓形和方形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 設定方框的模式為中心
    rectMode(CENTER);
  
    // 設定每個形狀之間的間距
    let spacing = size + 20;
  
    // 畫一整排的圓形與方形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        //畫方框的顏色為c9184a   
        fill('#c9184a');
        //畫方框的邊框顏色為800f2f
        stroke('#800f2f');
        //畫方框的邊框寬度為10
        strokeWeight(10);
        //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為動態大小
        rect(x, y, size, size); //畫方框
  
        //圓的顏色為fbf8cc
        fill('#fbf8cc');
        //圓的邊框顏色為800f2f
        stroke('#800f2f');
        //畫方框的位置為視窗的中心，圓的寬高為動態大小             
        ellipse(x, y, size, size);
      }
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
    //當視窗的大小改變時，重新設定畫布的寬高
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }