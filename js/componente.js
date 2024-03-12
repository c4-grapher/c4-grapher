class Componente extends Figura {
    constructor(x, y) {
        super(x, y);
        super.estereotipo = "Component";
    }
    draw() {
        push();
        stroke(Figura.estrategiaColor.getColorClaro());
        fill(Figura.estrategiaColor.getColorPalido());
        rect(this.x, this.y, this.ancho, this.alto);
        stroke(Figura.estrategiaColor.getColorPalido());
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        pop();
    }
}