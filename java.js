const areatext = document.querySelector(".area_text");
const mensagem = document.querySelector(".mensagem");
//const textcop = document.querySelector(".botao_copiar");

//let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]

function btnEncriptar() {
    const textoEncriptado = encriptar(areatext.value);
    mensagem.value = textoEncriptado;
    areatext.value = "";
} 

function encriptar (stringEncriptada) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
         if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }
    } 
    return stringEncriptada;
}

function btnDesincriptar() {
    const textoDesincriptar = desincriptar (areatext.value);
    mensagem.value = textoDesincriptar;
    areatext.value = "";

}

function desincriptar(stringDesincriptar) {
    let matrizCodigo = [["enter", "e"] , ["imes", "i"] , ["ai", "a"] , ["ober", "o"], ["ufat", "u"]];
    stringDesincriptar = stringDesincriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length;i++){
        if (stringDesincriptar.includes(matrizCodigo[i][0])){
            stringDesincriptar = stringDesincriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesincriptar;
}

function btncopiar() {
    let texto = document.getElementById("texto");
    //navigator.clipboard.writeText(copyText.value);
    texto.select();
    document.execCommand("copy");
    alert("Copied the text: ");
}