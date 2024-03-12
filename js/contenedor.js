class Contenedor extends Figura {
    constructor(x, y) {
        super(x, y);
        super.estereotipo = "Container";
    }
    draw() {
        push();
        stroke(Figura.estrategiaColor.getColor());
        fill(Figura.estrategiaColor.getColorClaro());
        rect(this.x, this.y, this.ancho, this.alto);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}