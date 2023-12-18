class Diagrama {
    constructor(x, y, tipo) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.figura = this.crearFigura();
    }

    crearFigura() {
        //para determinar el tipo de figura del diagrama
        switch (this.tipo) {
            case "BaseDeDatos":
                console.log("base de datos");
                return new BaseDeDatos(this.x, this.y);
            case "NavegadorWeb":
                return new NavegadorWeb(this.x, this.y);
            case "Telefono":
                return new Telefono(this.x, this.y);
            default:
                return new Figura(this.x, this.y);
        }        
    }

    draw() {
        //console.log("dibujar");
        this.figura.draw();
    }
}