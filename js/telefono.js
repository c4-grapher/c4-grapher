class Telefono extends Figura {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        push();
        noStroke();
        fill(Figura.estrategiaColor.getColor());
        rect(this.x, this.y, this.ancho, this.alto, 5);
        fill(Figura.estrategiaColor.getColorClaro());
        circle(this.x + 10, this.centroY, 9);
        rect(this.x + 20, this.y + 6, this.ancho - 35, this.alto - 11, 5);
        stroke(Figura.estrategiaColor.getColorClaro());
        line(this.x + this.ancho - 7, this.y + (this.alto * 0.33), this.x + this.ancho - 7, this.y + (this.alto * 0.66)); 
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}