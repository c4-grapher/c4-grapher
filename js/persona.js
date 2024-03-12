class Persona extends Figura {
    constructor(x, y) {
        super(x, y);
        super.estereotipo = "Person";
        this.ajustarSeccionesAnchoYAlto();
    }
    ajustarSeccionesAnchoYAlto() {
        this.seccionesAlto = this.getAlto / 3;
        this.seccionesAncho = this.getAncho / 5;
    }
    set setAncho(ancho) {
        this.ancho = ancho;
        this.centroX = this.x + this.ancho / 2;
        this.ajustarSeccionesAnchoYAlto();
    }
    set setAlto(alto) {
        this.alto = alto;
        this.centroY = this.y + this.alto / 2;
        this.ajustarSeccionesAnchoYAlto();
    }
    draw() {
        push();
        fill(Figura.estrategiaColor.getColorOscuro());
        rect(this.x, this.y, this.ancho, this.alto, 20);
        circle(this.x + this.ancho / 2, this.y - 40, 100);
        line(this.getX + this.seccionesAncho, this.getY + this.seccionesAlto, this.getX + this.seccionesAncho, this.getY + this.getAlto);
        line(this.getX + this.seccionesAncho * 4, this.getY + this.seccionesAlto, this.getX + this.seccionesAncho * 4, this.getY + this.getAlto);
        super.dibujarTexto();
        super.dibujarCajaDeMovimiento();
        super.dibujarPuntosDeSujecion();
        pop();
    }
}
