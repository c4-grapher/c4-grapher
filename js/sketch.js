let vectorDeDiagramas = [];
let vectorDeLineas = [];
let figuraSeleccionada = null;
let imagen;
let lienzo;
let posicionInicialFiguraX;
let posicionInicialFiguraY;

function setup() {
  let estrategiaAzul = new EstrategiaColorAzul();
  vectorDeDiagramas.push(
    //Nivel 1
    new Diagrama(100, 100, "Persona", estrategiaAzul),
    new Diagrama(500, 100, "SistemaEnDesarrollo", estrategiaAzul),
    new Diagrama(900, 100, "SistemaExistente"),
    //Nivel 2
    new Diagrama(100, 300, "Contenedor",estrategiaAzul),
    new Diagrama(400, 300, "BaseDeDatos",estrategiaAzul),
    new Diagrama(700, 300, "Telefono",estrategiaAzul),
    new Diagrama(1000, 300, "NavegadorWeb",estrategiaAzul),
    //Nivel 3
    new Diagrama(100, 500, "Componente",estrategiaAzul)
  );
  let figura1 = vectorDeDiagramas[0].getFigura;
  let figura2 = vectorDeDiagramas[1].getFigura;
  vectorDeLineas.push(
    new Linea(figura1, figura2)
  );

  lienzo = createCanvas(displayWidth, displayHeight);
}

function draw() {
  background('#ffffeb');
  
  //separador de niveles (para desarrollo, sera borrado mas tarde)
  text("Nivel 1", 30, 30);
  line(0, 250, 1000, 250);
  text("Nivel 2", 30, 280);
  line(0, 450, 1000, 450);
  text("Nivel 3", 30, 480);

  vectorDeDiagramas.forEach(function (diagramaActual, indice, array) {
    diagramaActual.getFigura.draw();
  })
  vectorDeLineas.forEach(function (lineaActual, indice, array) {
    lineaActual.draw();
  })
}

function mouseClicked() {
  if (mouseButton === LEFT) {
    let seleccionActual = null; //ninguno
    //para las figuras
    vectorDeDiagramas.forEach(function(diagramaActual, indice, array) {
      let figuraActual = diagramaActual.getFigura;
      if (figuraActual.enAreaCentral(mouseX, mouseY)) {
        print('Area figura');
        seleccionActual = figuraActual; //el seleccionado
      }
    })
    //para las vectorDeLineas
    /*
    vectorDeLineas.forEach(function(lineaActual, indice, array) {
      if (lineaActual.enCajaDeMovimiento1(mouseX, mouseY) || lineaActual.enCajaDeMovimiento2(mouseX, mouseY)) {
        print('Area linea');
        seleccionActual = lineaActual; //el seleccionado
      }
    })
    */
    //para ambos
    if (figuraSeleccionada) {
      figuraSeleccionada.setSeleccionado = false;
      figuraSeleccionada = null;
    }
    if (seleccionActual != null) {
      figuraSeleccionada = seleccionActual
      figuraSeleccionada.setSeleccionado = true;
    }
  }
}

function mouseReleased() {
  //print("release")
}

function mousePressed() {
  //print("presed")
  if (figuraSeleccionada) {
    if (figuraSeleccionada instanceof Figura) {
      posicionInicialFiguraX = mouseX - figuraSeleccionada.getX;
    posicionInicialFiguraY = mouseY - figuraSeleccionada.getY;
      print("instancia de figura");
    } else {
      print("instancia de linea");
      if (figuraSeleccionada.enCajaDeMovimiento1(mouseX, mouseY)) { //caja1
        posicionInicialFiguraX = mouseX - figuraSeleccionada.getX1;
    posicionInicialFiguraY = mouseY - figuraSeleccionada.getY1;
      } else { //caja2
        posicionInicialFiguraX = mouseX - figuraSeleccionada.getX2;
    posicionInicialFiguraY = mouseY - figuraSeleccionada.getY2;
      }
    }
  }
}

function mouseDragged() {
  if (figuraSeleccionada) {
    if (figuraSeleccionada instanceof Linea) {
      if (figuraSeleccionada.enCajaDeMovimiento1(mouseX, mouseY)) { //caja1
        figuraSeleccionada.setX1 = mouseX - posicionInicialFiguraX;
        figuraSeleccionada.setY1 = mouseY - posicionInicialFiguraY;
      } else { //caja2
        figuraSeleccionada.setX2 = mouseX - posicionInicialFiguraX;
        figuraSeleccionada.setY2 = mouseY - posicionInicialFiguraY;
      }
      return;
    }
    if (figuraSeleccionada.enAreaCentral(mouseX, mouseY)) {
      figuraSeleccionada.setX = mouseX - posicionInicialFiguraX;
      figuraSeleccionada.setY = mouseY - posicionInicialFiguraY;
    } else if (figuraSeleccionada.enCajaDerecha(mouseX, mouseY)) {
      //solo x
      if (figuraSeleccionada.getX + posicionInicialFiguraX - mouseX < 0) {
        //derecha
        figuraSeleccionada.setAncho = figuraSeleccionada.getAncho + abs(figuraSeleccionada.getX + posicionInicialFiguraX - mouseX);
      } else {
        //izquierda
        figuraSeleccionada.setAncho = figuraSeleccionada.getAncho - abs(figuraSeleccionada.getX + posicionInicialFiguraX - mouseX);
      }
      posicionInicialFiguraX = mouseX - figuraSeleccionada.getX;
    } else if (figuraSeleccionada.enCajaIzquierda(mouseX, mouseY)) {
      //solo y
      if (figuraSeleccionada.getY + posicionInicialFiguraY - mouseY < 0) {
        //abajo
        figuraSeleccionada.setAlto = figuraSeleccionada.getAlto + abs(figuraSeleccionada.getY + posicionInicialFiguraY - mouseY);
      } else {
        //arriba
        figuraSeleccionada.setAlto = figuraSeleccionada.getAlto - abs(figuraSeleccionada.getY + posicionInicialFiguraY - mouseY);
      }
      posicionInicialFiguraY = mouseY - figuraSeleccionada.getY;
    }
  }
}
