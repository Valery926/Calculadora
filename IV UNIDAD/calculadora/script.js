function sumar() {
let n1 = parseFloat(document.getElementById("numero1").value);
let n2 = parseFloat(document.getElementById("numero2").value);
let resultado = n1 + n2;
document.getElementById("resultado").innerText = "Resultado: " +

}
function resta(){
    let n1 =parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    resultado=n1 - n2;
    document.getElementById(resultado)innerText = "resultado"

}
function multiplicacion(){
    let n1 =parseFloat(document.getElementById("numero1").value);
    let n2 =parseFloat(document.getElementById("numero2").value);
    resultado=n1 * n2;
    document.getElementById(resultado).innerText ="resultado"

}
fuction multiplicacion(){
    let n1 =parseFloat(document.getElemtyById("numero1").value);
    let n2 =parseFloat(document.getElementById("numero2").value);

    resultado=n1 / n2;

    document.getElementById(resultado).innerText = "resultado"
}