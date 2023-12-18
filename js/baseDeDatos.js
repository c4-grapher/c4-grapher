class BaseDeDatos extends Figura {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        push();
        fill(8, 66, 123);
        point(this.x, this.y);
        rect(this.x, this.y, this.ancho, this.alto);
        ellipse(this.getCentroX, this.getY, this.ancho, this.alto / 9);
        arc(this.getCentroX, this.getY + this.alto - 1, this.ancho, this.alto / 9, 0, PI, OPEN);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}