function setup(){
    // 最初に一回だけ実行される処理

    // キャンバスの大きさ
    createCanvas(480, 240);
    background("skyblue");


    // 文字の基準のいちを変更
    textAlign(LEFT,TOP);
    // 文字の大きさ
    textSize(32);
    // 文字のフォント
    textFont("Impact");
    // 文字のスタイル変更
    textStyle(BOLD);  //ふと文字

    fill("pink");
    strokeWeight(5);
    stroke("gray");
    // 文字列、左下のｘ座標、ｙ座標、（幅、高さ）←なかったら、文字の大きさをそのまま反映。
    text("Hello World!",width/2,height/2);


}

function draw(){
    // その後繰り返し実行される処理

}