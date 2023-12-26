class Diagrama {
    constructor(x, y, tipo, estrategiaColor) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.figura = this.crearFigura(estrategiaColor);
    }

    crearFigura(estrategiaColor) {
        //para determinar el tipo de figura del diagrama
        switch (this.tipo) {
            case "Persona":
                return new Persona(this.x, this.y, estrategiaColor);
            case "SistemaEnDesarrollo":
                return new Sistema(this.x, this.y, estrategiaColor);
            case "SistemaExistente":
                return new Sistema(this.x, this.y, new EstrategiaColorGris());//siempre tiene el mismo color
            case "BaseDeDatos":
                return new BaseDeDatos(this.x, this.y, estrategiaColor);
            case "NavegadorWeb":
                return new NavegadorWeb(this.x, this.y, estrategiaColor);
            case "Telefono":
                return new Telefono(this.x, this.y);
            default:
                return new Figura(this.x, this.y);
        }
    }

    get getFigura() {
        return this.figura;
    }
}