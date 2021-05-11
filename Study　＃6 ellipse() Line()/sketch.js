function setup(){
    // 最初に一回だけ実行される処理

    // キャンバスの大きさ
    createCanvas(480, 240);
    background("skyblue");

    // 中央の座標、幅　高さ
    ellipse(width/2, height/2, 200, 100);

    //ellipseの種類
    // 中央の座標、幅　高さ
    //ellipseMode(CORNER);
    //ellipse(x,y,w,h);

    // 左上の座標と右下の座標
    //ellipseMode(CORNERS)
    //ellipse(x1,y1,x2,y2)

    // 中央の座標、幅と高さ
    //ellipseMode(CENTER);
    //ellipse(cx,cy,w,h);

    // 中央の座標、中央から辺の長さ
    //ellipseMode(RADIUS);
    //ellipse(cx,cy,w,h);


    // Line
    // line(x1,y1,x2,y2);
    line(width/2,height/2,0,0)


    // その他
    // 点を打つ　point
    // 円弧を描く　arc
    // 三角形を書く　triangle

}

function draw(){
    // その後繰り返し実行される処理

    
}