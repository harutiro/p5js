function setup(){
    // 最初に一回だけ実行される処理

    // キャンバスの大きさ
    createCanvas(480, 240);
    background("skyblue");

    // 背景の色
    fill("pink");

    // 変数による色の変更
    var iro = color("red");
    fill(iro);

    // 背景をなくす
    noFill();


    // 線の色
    stroke("pink");

    // 変数による色の変更
    var iro = color("red");
    stroke(iro);

    // 線の太さ
    strokeWeight(5);

    // 線をなくす
    noStroke();


    ellipse(width/2,height/2,200,200);


}

function draw(){
    // その後繰り返し実行される処理

    
}