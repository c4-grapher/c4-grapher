class Sistema extends Figura {
    constructor(x, y, estrategiaColor) {
        super(x, y, estrategiaColor);
        if (estrategiaColor instanceof EstrategiaColorGris) {
            super.estereotipo = "Software system, Existing System";
        } else {
            super.estereotipo = "Software system";
        }
        /*
        this.esAzul = esAzul;
        if (this.esAzul) {
            this.colorCentro = color(17, 104, 189);
            this.colorBorde = color(15, 94, 170);
        } else {
            this.colorCentro = color(153, 153, 153);
            this.colorBorde = color(138, 138, 138);
        }*/
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