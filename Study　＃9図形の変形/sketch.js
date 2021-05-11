function setup(){
    // 最初に一回だけ実行される処理

    // キャンバスの大きさ
    createCanvas(480, 240);
    background("skyblue");


    fill(255,0,0,127);
    rect(0,0,100,100);

    // 移動するときなどに使用　オブジェクトを色々保存してくれる
    push();

    // xy座標にその数分移動
    translate(10,10);
    // 回転　ラジアン
    rotate(PI/4);
    // 回転　度数法
    rotate(radians(30))
    // その図形の縮尺を変える
    scale(2,0.5);
    
    fill(0,0,255,127);
    rect(0,0,100,100);

    pop();



}

function draw(){
    // その後繰り返し実行される処理

}