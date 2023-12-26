class Telefono extends Figura {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        push();
        fill(8, 66, 123);
        rect(this.x, this.y, this.ancho, this.alto, 5);
        circle(this.x + 10, this.centroY, 9);
        rect(this.x + 20, this.y + 6, this.ancho - 30, this.alto - 11, 5);
        
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}