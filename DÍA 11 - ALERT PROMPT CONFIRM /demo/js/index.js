alert("Hola desde la consola");

let nombre = prompt("¿Cuál es tu nombre?"); 

alert("El nombre que escribiste es " + nombre);

let confirmacion = confirm("Hola, " + nombre + ", ¿quieres continuar?");

alert("Su respuesta fue: " + confirmacion); 

let edad = prompt("Ingrese su edad: ");

if (edad < 13) {
   alert("No puedes ingresar a la Bresh");

} else {
   alert("Puede ingresar!");
}