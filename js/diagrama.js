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
            //Nivel 1
            case "Persona":
                return new Persona(this.x, this.y);
            case "SistemaEnDesarrollo":
                return new SistemaEnDesarrollo(this.x, this.y);
            case "SistemaExistente":
                return new SistemaExistente(this.x, this.y);
            //Nivel 2
            case "Contenedor":
                return new Contenedor(this.x, this.y);
            case "BaseDeDatos":
                return new BaseDeDatos(this.x, this.y);
            case "Telefono":
                return new Telefono(this.x, this.y);
            case "NavegadorWeb":
                return new NavegadorWeb(this.x, this.y);
            //Nivel 3
            case "Componente":
                return new Componente(this.x, this.y);
            default:
                return new Figura(this.x, this.y);
        }
    }

    get getFigura() {
        return this.figura;
    }
}