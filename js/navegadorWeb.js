class NavegadorWeb extends Figura {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        push();
        fill(8, 66, 123);
        rect(this.x, this.y, this.ancho, this.alto, 5);
        circle(this.x + 10, this.y + 10, 9);
        circle(this.x + 25, this.y + 10, 9);
        circle(this.x + 40, this.y + 10, 9);
        rect(this.x + 50, this.y + 6, this.ancho - 55, 9, 5);
        rect(this.x + 6, this.y + 20, this.ancho - 11, this.alto - 25, 5);
        // circle(this.x, this.y, 5);// punto de x y  de la persona
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}