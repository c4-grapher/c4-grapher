let figuras = [];
let lineas = [];
let figuraSeleccionada = null;
let imagen;
let lienzo;
let posicionInicialFiguraX;
let posicionInicialFiguraY;

let diagrama = new Diagrama(300, 300, "Telefono");

function setup() {
  let figura1 = new Persona(100, 100);
  let figura2 = new Persona(700, 300);
  figuras.push(figura1, figura2);

  lienzo = createCanvas(displayWidth, displayHeight);
}

function draw() {
  background('#ffffeb');
  diagrama.draw();

  figuras.forEach(function (figuraActual, indice, array) {
    figuraActual.draw();
  })
  lineas.forEach(function (lineaActual, indice, array) {
    lineaActual.draw();
  })
}

function mouseClicked() {
  if (mouseButton === LEFT) {
    let seleccionActual = null; //ninguno
    //para las figuras
    figuras.forEach(function(figuraActual, indice, array) {
      if (figuraActual.enAreaCentral(mouseX, mouseY)) {
        print('Area figura');
        seleccionActual = figuraActual; //el seleccionado
      }
    })
    //para las lineas
    lineas.forEach(function(lineaActual, indice, array) {
      if (lineaActual.enCajaDeMovimiento1(mouseX, mouseY) || lineaActual.enCajaDeMovimiento2(mouseX, mouseY)) {
        print('Area linea');
        seleccionActual = lineaActual; //el seleccionado
      }
    })
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
