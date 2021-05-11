function setup(){
    // 最初に一回だけ実行される処理

    // キャンバスの大きさ
    createCanvas(480, 240);
    background("skyblue")

    // 左上のｘ座標、ｙ座標、幅、高さ
    rect(50,50,150,100);

    // width height 描画領域の幅が入っている
    rect(width/2,height/2,150,100);


    // rectの種類
    // 中央の座標、幅　高さ
    // rectMode(CORNER);
    // rect(x,y,w,h);

    // 左上の座標と右下の座標
    // rectMode(CORNERS)
    // rect(x1,y1,x2,y2)

    // 中央の座標、幅と高さ
    // rectMode(CENTER);
    // rect(cx,cy,w,h);

    // 中央の座標、中央から辺の長さ
    // rectMode(RADIUS);
    // rect(cx,cy,w,h);
}

function draw(){
    // その後繰り返し実行される処理

    
}