class Persona extends Figura {
    constructor(x, y, estrategiaColor) {
        super(x, y, estrategiaColor);
        super.estereotipo = "Person";
    }
    draw() {
        push();
        fill(this.estrategiaColor.getColorOscuro());
        rect(this.x, this.y, this.ancho, this.alto, 20);
        circle(this.x + this.ancho / 2, this.y - 40, 100);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}
