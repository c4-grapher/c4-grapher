class Envoltura {
    constructor() {
        this.vectorDeFiguras = [];
    }
    actualizarArea() {
        this.anchoTotal;
        this.altoTotal;
        if (this.vectorDeFiguras) {
            let figuraMasIzquierda = vectorDeFiguras[0];
            let figuraMasDerecha = vectorDeFiguras[0];
            let figuraMasArriba = vectorDeFiguras[0];
            let figuraMasAbajo = vectorDeFiguras[0];
            this.vectorDeFiguras.forEach((figuraActual, index) => {
                if (figuraActual.getX < figuraMasIzquierda.getX) {
                    figuraMasIzquierda = figuraActual;
                }
                if (figuraActual.getX > figuraMasDerecha.getX) {
                    figuraMasDerecha = figuraActual;
                }
                if (figuraActual.getY < figuraMasArriba.getY) {
                    figuraMasArriba = figuraActual;
                }
                if (figuraActual.getY > figuraMasAbajo.getY) {
                    figuraMasAbajo = figuraActual;
                }
            });
        }
    }
    aumentarFigura(nuevaFigura) {
        this.vectorDeFiguras.push(nuevaFigura);
    }
    quitarFigura(figuraAQuitar) {
        this.vectorDeFiguras = this.vectorDeFiguras.filter(figuraActual => !(figuraActual === figuraAQuitar));
    }
    draw() {

    }
}