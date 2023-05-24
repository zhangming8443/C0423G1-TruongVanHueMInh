function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 100;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left += -50;
        console.log('ok ' + this.left);
    }
    this.moveTop = function () {

    }
    this.speed = function () {

    }

}

var hero = new Hero('amongus.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();