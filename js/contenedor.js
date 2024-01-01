class Contenedor extends Figura {
    constructor(x, y, estrategiaColor) {
        super(x, y, estrategiaColor);
        super.estereotipo = "Container";
    }
    draw() {
        push();
        stroke(this.estrategiaColor.getColor());
        fill(this.estrategiaColor.getColorClaro());
        rect(this.x, this.y, this.ancho, this.alto);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}