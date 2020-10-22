
class Shape {
    constructor(posX, posY, color = '#FFF') {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.visible = true;
        this.instance = undefined;
    }

    centerObj(x = this.posX, y = this.posY) {
        this.instance.center(x, y);
    }

    moveObj(x = this.posX, y = this.posY) {
        this.instance.x(x);
        this.instance.y(y);
    }

    hideObj() {
        if (this.visible) {
            this.instance.hide();
            this.visible = false;
        }
    }

    showObj() {
        if (!this.visible) {
            this.instance.show();
            this.visible = true;
        }
    }

    setStroke(color, width) {
        this.instance.attr({
            stroke: color,
            'stroke-width': width
        });
    }

    fillObj(color = this.color) {
        this.instance.fill(color);
    }

    pushToBack() {
        this.instance.back();
    }

    bringToFront() {
        this.instance.front();
    }
    setOpacity(number){
        this.instance.attr({
            'opacity':number
        })
    }
    changeFill(number) {
        this.instance.attr({
            'fill-opacity': number
        });
    }
    getSuradnicaX(){
        return this.posX;
    }
    getSuradnicaY(){
        return this.posY;
    }
    setSuradnice(x,y){
        this.posX=x;
        this.posY=y;
    }

}

class Circle extends Shape {
    constructor(size, centeredX, centeredY, strokeWidth, color = '#FFF', stroke = '#000') {
        super(centeredX, centeredY, color);
        this.size = size;
        this.instance = draw.circle(size);
        this.centerObj();
        this.fillObj();
        this.setStroke(stroke, strokeWidth);
    }

}


// constructor for rectangle
class Rectangle extends Shape {
    constructor(posX, posY, width, height, color) {
        super(posX, posY, color);
        this.width = width;
        this.height = height;
        this.instance = draw.rect(this.width, this.height);
        this.fillObj();
        this.moveObj();
    }



}
class Line extends Shape {
    constructor(x1, y1, x2, y2) {
        super();
        this.startX = x1;
        this.endX = x2;
        this.startY = y1;
        this.endY = y2;
        this.length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        this.instance = draw.line(this.startX, this.startY, this.endX, this.endY);

    }

    plotObj(x1, y1, x2, y2) {
        this.instance.plot(x1, y1, x2, y2);
    }

}


// simplifies working with svg paths
class Path extends Shape {
    constructor() {
        super();
        this.string = "";
    };

    addMoveTo(x, y) {
        this.string += `M ${x},${y} `;
    }

    addLineTo(x, y) {
        this.string += `L ${x},${y} `;
    }

    addArc(radiusX, radiusY, destX, destY, SweepFlag = 0, LargeArcFlag = 0, xAxisRotate = 0) {
        this.string += `A ${radiusX},${radiusY} ${xAxisRotate} ${LargeArcFlag},${SweepFlag} ${destX},${destY} `;
    }

    addQuadratic(pullX, pullY, x, y) {
        this.string += `Q ${pullX} ${pullY}, ${x} ${y} `;
    }

    create() {
        this.instance = draw.path(this.string);
        return this.path;
    }

    reset() {
        this.string = "";
    }

    update() {
        this.instance.plot(this.string);
    }

    doNotFill() {
        this.instance.attr({'fill-opacity': 0});
    }

    addDashArray(array) {
        let converted = ``;
        for (let number of array) {
            converted += `${number}, `;
        }
        // remove the last ', '
        converted = converted.slice(0, -2);
        this.instance.attr({'stroke-dasharray': converted});
    }

    addCustomString(string) {
        this.string += " " + string + " ";
    }
}



class CustomText {
    constructor(string, posX, posY, fontSize) {
        this.string = string;
        this.posX = posX;
        this.posY = posY;
        this.fontSize = fontSize;
        this.visible = true;
        this.text = draw.text(this.string).x(this.posX).y(this.posY).font({size: this.fontSize});
    }

    toBold() {
        this.text.font('weight', 'bold');
    }

    toItalic() {
        this.text.font('style', 'italic');
    }

    fillText(color) {
        this.text.font('fill', color);
    }

    moveText(x = this.posX, y = this.posY) {
        this.text.move(x, y);
    }

    hideText() {
        if (this.visible) {
            this.text.hide();
            this.visible = false;
        }
    }

    showText() {
        if (!this.visible) {
            this.text.show();
            this.visible = true;
        }
    }
    setOpacity(number){
        this.text.opacity(number);
    }
    setRotation(number,x,y){
        this.text.rotate(number,x,y);
    }

}


