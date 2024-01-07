class Figura {
    static dibujarPuntosDeSujecion = false;
    constructor(x, y, estrategiaColor) {
        this.x = x;
        this.y = y;
        this.estrategiaColor = estrategiaColor || new EstrategiaColorAzul();//azul es el color por defecto
        this.alto = 100;
        this.ancho = 200;
        this.tamanoDeTextoNombre = 20;
        this.tamanoDeTextoEstereotipo = 10;
        this.tamanoDeTextoDescripcion = 13;
        this.seleccionado = false;
        this.nombre = "{nombre}";
        this.estereotipo = "{estereotipo}";
        this.descripcion = "{descripcion}";
        this.centroX = this.x + this.ancho / 2;
        this.centroY = this.y + this.alto / 2;
        this.colorCajaDeMovimiento = '#5086c1';//color(255, 255, 255); //mascara
        this.calcularPuntosDeSujecion();
    }
    calcularPuntosDeSujecion() {
        //Nota.- empiezan desde la esquina superior izquierda (al igual que la clase en general) y van en sentido de las agujas de reloj
        let seccionesAncho = this.getAncho / 4;
        let seccionesAlto = this.getAlto / 4;
        this.vectorDePuntosDeSujecion = [
            { x: this.x, y: this.y },
            { x: this.x + seccionesAncho, y: this.y },
            { x: this.x + seccionesAncho * 2, y: this.y },
            { x: this.x + seccionesAncho * 3, y: this.y },
            { x: this.x + this.getAncho, y: this.y },
            { x: this.x + this.getAncho, y: this.y + seccionesAlto },
            { x: this.x + this.getAncho, y: this.y + seccionesAlto * 2 },
            { x: this.x + this.getAncho, y: this.y + seccionesAlto * 3 },
            { x: this.x + this.getAncho, y: this.y + this.getAlto },
            { x: this.x + seccionesAncho * 3, y: this.y + this.getAlto },
            { x: this.x + seccionesAncho * 2, y: this.y + this.getAlto },
            { x: this.x + seccionesAncho, y: this.y + this.getAlto },
            { x: this.x, y: this.y + this.getAlto },
            { x: this.x, y: this.y + seccionesAlto * 3 },
            { x: this.x, y: this.y + seccionesAlto * 2 },
            { x: this.x, y: this.y + seccionesAlto }
        ];
    }
    dibujarPuntosDeSujecion() {
        if (Figura.dibujarPuntosDeSujecion) {
            this.vectorDePuntosDeSujecion.forEach((puntoActual, index) => {
                circle(puntoActual.x, puntoActual.y, 20);
                //console.log(`Punto ${index + 1}: x = ${punto.x}, y = ${punto.y}`);
            });
        }
    }
    getPuntoDeSujecion(indice) {
        return this.vectorDePuntosDeSujecion[indice];
    }
    reconstruirFigura(elOtroObjeto) {
        this.x = elOtroObjeto.x;
        this.y = elOtroObjeto.y;
        this.alto = elOtroObjeto.alto;
        this.ancho = elOtroObjeto.ancho;
        this.nombre = elOtroObjeto.nombre;
        this.descripcion = elOtroObjeto.descripcion;
        this.centroX = elOtroObjeto.centroX;
        this.centroY = elOtroObjeto.centroY;
    }
    set setCentroX(centroX) {
        this.centroX = centroX;
    }
    set setCentroY(centroY) {
        this.centroY = centroY;
    }
    get getCentroX() {
        return this.centroX;
    }
    get getCentroY() {
        return this.centroY;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    get getDescripcion() {
        return this.descripcion;
    }
    get getEstereotipo() {
        return this.estereotipo;
    }
    set setAncho(ancho) {
        this.ancho = ancho;
        this.centroX = this.x + this.ancho / 2;
    }
    get getAncho() {
        return this.ancho;
    }
    set setAlto(alto) {
        this.alto = alto;
        this.centroY = this.y + this.alto / 2;
    }
    get getAlto() {
        return this.alto;
    }
    get getSeleccionado() {
        return this.seleccionado;
    }
    set setSeleccionado(seleccionado) {
        this.seleccionado = seleccionado;
    }
    set setX(x) {
        this.x = x;
        this.centroX = this.x + this.ancho / 2;
    }
    get getX() {
        return this.x;
    }
    set setY(y) {
        this.y = y;
        this.centroY = this.y + this.alto / 2;
    }
    get getY() {
        return this.y;
    }
    dibujarTexto() {
        push();
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        textSize(this.tamanoDeTextoEstereotipo);
        text(`[${this.getEstereotipo}]`, this.getCentroX, this.getY + 40);
        textSize(this.tamanoDeTextoDescripcion);
        text(this.getDescripcion, this.getX + 10, this.getY + 60, this.getAncho - 15);
        textStyle(BOLD);
        textSize(this.tamanoDeTextoNombre);
        text(this.getNombre, this.getCentroX, this.getY + 20);
        pop();
    }
    //mascaras de colision
    enAreaCentral(x, y) {
        return this.x < x && this.x + this.ancho > x && this.y < y && this.y + this.alto > y;
    }
    enCajaDerecha(x, y) {
        //caja derecha (mascara)
        return this.x + this.ancho < x && this.x + this.ancho + 20 > x && y > this.y && y < this.y + 20;
    }
    enCajaIzquierda(x, y) {
        //caja izquierda (mascara)
        return this.x < x && this.x + 20 > x && y > this.y + this.alto && y < this.y + this.alto + 20;
    }
    dibujarCajaDeMovimiento() {
        if (this.seleccionado) {
            push();
            fill(this.colorCajaDeMovimiento);
            rect(this.x + this.ancho, this.y, 20, 20); //caja derecha
            rect(this.x, this.y + this.alto, 20, 20); //caja izquierda
            pop();
        }
    }
}
