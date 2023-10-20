let nacionalidad = prompt("Ingrese su nacionalidad");
let profesion = prompt("Ingrese su profesión");
let kms = prompt("Ingrese cuántos kms camina por día");

function filosofoHipster (nacionalidad, profesion, kms) {
    let mensaje 
    if (nacionalidad === "argentino" && profesion === "músico" && kms > 2) {
        mensaje = "Soy un filósofo hipster";
    } else {
        mensaje = "Aún no soy filósofo hipster";
    }
    return mensaje
}

alert(filosofoHipster(nacionalidad, profesion, kms))

