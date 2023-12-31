class Componente extends Figura {
    constructor(x, y, estrategiaColor) {
        super(x, y, estrategiaColor);
        super.estereotipo = "Component";
    }
    draw() {
        push();
        stroke(this.estrategiaColor.getColorClaro());
        fill(this.estrategiaColor.getColorPalido());
        rect(this.x, this.y, this.ancho, this.alto);
        stroke(this.estrategiaColor.getColorPalido());
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}