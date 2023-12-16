class Persona extends Figura {
    constructor(x, y) {
        super(x, y);
        super.estereotipo = "Person";
    }
    draw() {
        push();
        fill(8, 66, 123);
        rect(this.x, this.y, this.ancho, this.alto, 20);
        circle(this.x + this.ancho / 2, this.y - 40, 100);
        // circle(this.x, this.y, 5);// punto de x y  de la persona
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}
