class SistemaEnDesarrollo extends Figura {
    constructor(x, y) {
        super(x, y);
        super.estereotipo = "Software system";
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
        stroke(Figura.estrategiaColor.getColor());
        fill(Figura.estrategiaColor.getColorClaro());
        rect(this.x, this.y, this.ancho, this.alto);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        super.dibujarPuntosDeSujecion();
        pop();
    }
}