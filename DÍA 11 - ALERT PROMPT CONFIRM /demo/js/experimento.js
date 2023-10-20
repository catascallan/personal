let nombre = prompt("¿Cuál es tu nombre?"); 

console.log(nombre);

let edad = prompt("¿Cuántos años tenés?"); 

console.log(edad);

let fanDeportes = confirm("¿Te gusta el deporte?");

console.log(fanDeportes);

alert("Muchas gracias, " + nombre + ", por responder nuestras preguntas");

let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
}

function deportistaProfesional (fanDeportes) {
    let mensaje
    if (fanDeportes === true) {
        mensaje = "Si, soy fan de los deportes";
    } else {
        mensaje = "No soy tan fan aún de los deportes";
    }
    return mensaje
}

console.log(deportistaProfesional(fanDeportes));