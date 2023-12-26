class BaseDeDatos extends Figura {
    constructor(x, y, estrategiaColor) {
        super(x, y, estrategiaColor);
    }

    draw() {
        push();
        stroke(this.estrategiaColor.getColor());
        fill(this.estrategiaColor.getColorClaro());
        rect(this.x, this.y, this.ancho, this.alto);
        ellipse(this.getCentroX, this.getY, this.ancho, this.alto / 9);
        arc(this.getCentroX, this.getY + this.alto - 1, this.ancho, this.alto / 9, 0, PI, OPEN);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}