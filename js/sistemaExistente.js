class SistemaExistente extends Figura {
    static estrategiaColor = new EstrategiaColorGris();//color por defecto
    constructor(x, y) {
        super(x, y);
        super.estereotipo = "Software system, Existing System";
    }
    draw() {
        push();
        stroke(SistemaExistente.estrategiaColor.getColor());
        fill(SistemaExistente.estrategiaColor.getColorClaro());
        rect(this.x, this.y, this.ancho, this.alto);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        super.dibujarPuntosDeSujecion();
        pop();
    }
}