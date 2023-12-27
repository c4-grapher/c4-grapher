class Linea {
    constructor(figura1, figura2) {
        this.figura1 = figura1;
        this.figura2 = figura2;
        this.radioDeAreaCentral = 20;
        this.estereotipo = "{technology}";
        this.tieneEstereotipo = true; //para saber si ponerne o no
        this.centroLineaX;
        this.centroLineaY;
        this.seleccionado = false;
        this.nombreDeRelacion = "{descripcion}";
    }
    reconstruirLinea(elOtroObjeto) {
        this.setEstereotipo = elOtroObjeto.estereotipo;
        this.setTieneEstereotipo = elOtroObjeto.tieneEstereotipo;
        this.setNombreDeRalacion = elOtroObjeto.nombreDeRelacion;
        this.centroLineaX = elOtroObjeto.centroLineaX;
        this.centroLineaY = elOtroObjeto.centroLineaY;
    }
    set setEstereotipo(estereotipo) {
        this.estereotipo = estereotipo;
    }
    get getEstereotipo() {
        return this.estereotipo;
    }
    set setSeleccionado(seleccionado) {
        this.seleccionado = seleccionado;
    }
    get getSeleccionado() {
        return this.seleccionado;
    }
    set setNombreDeRalacion(nombreDeRelacion) {
        this.nombreDeRelacion = nombreDeRelacion;
    }
    get getNombreDeRalacion() {
        return this.nombreDeRelacion;
    }
    set setTieneEstereotipo(tieneEstereotipo) {
        this.tieneEstereotipo = tieneEstereotipo;
    }
    get getTieneEstereotipo() {
        return this.tieneEstereotipo;
    }
    draw() {
        push();
        this.centroLineaX = (this.figura1.getCentroX + this.figura2.getCentroX) / 2;
        this.centroLineaY = (this.figura1.getCentroY + this.figura2.getCentroY) / 2;
        drawingContext.setLineDash([10, 5]); //formato de la linea segmentada
        line(this.figura1.getCentroX, this.figura1.getCentroY, this.figura2.getCentroX, this.figura2.getCentroY);
        if (this.getSeleccionado) {
            fill(255, 255, 255);  //pintar la mascara blanca
            circle(this.centroLineaX, this.centroLineaY, this.radioDeAreaCentral);
            fill(0, 0, 0); //pintar las letras negras
        }
        if (this.getTieneEstereotipo) {
            textAlign(CENTER, CENTER);
            text(this.figura1.getNombre + "►" + this.figura2.getNombre, this.centroLineaX, this.centroLineaY + 20);
            text(`[${this.getEstereotipo}]`, this.centroLineaX, this.centroLineaY + 5);
        } else {
            textAlign(CENTER, CENTER);
            text(this.figura1.getNombre + "►" + this.figura2.getNombre, this.centroLineaX, this.centroLineaY + 5);
        }
        textStyle(BOLD);
        text(this.nombreDeRelacion, this.centroLineaX, this.centroLineaY - 10);
        this.dibujarFlecha(this.figura1.getCentroX,this.figura1.getCentroY,
            this.figura2.getCentroX, this.figura2.getCentroY,20);
        pop();
    }
    enAreaCentral(x, y) {
        if (this.radioDeAreaCentral > dist(this.centroLineaX, this.centroLineaY, x, y)) {
            return true;
        }
        return false;
    }

    // Funcion para dibujar un triangulo en la punta de la linea
    dibujarFlecha(x1, y1, x2, y2, tamanoFlecha) {
        let angulo = atan2(y2 - y1, x2 - x1);
        let x3 = x2 - tamanoFlecha * cos(angulo - PI / 6);
        let y3 = y2 - tamanoFlecha * sin(angulo - PI / 6);
        let x4 = x2 - tamanoFlecha * cos(angulo + PI / 6);
        let y4 = y2 - tamanoFlecha * sin(angulo + PI / 6);

        fill(0);
        drawingContext.setLineDash([]); //valor por defecto
        triangle(x2, y2, x3, y3, x4, y4);
    }
}
