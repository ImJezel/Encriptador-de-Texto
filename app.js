function encriptarTexto() {
    var textoOriginal = document.getElementById('textoOriginal').value;
    var textoEncriptado = invertirTexto(textoOriginal);
    mostrarTextoEncriptado(textoEncriptado);
}

function desencriptarTexto() {
    var textoEncriptado = obtenerTextoEncriptado();
    var textoDesencriptado = invertirTexto(textoEncriptado);
    mostrarTextoEncriptado(textoDesencriptado);
}

function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

function obtenerTextoEncriptado() {
    var resultadoContainer = document.getElementById('resultadoContainer');
    return resultadoContainer.firstChild ? resultadoContainer.firstChild.textContent : '';
}

function mostrarTextoEncriptado(texto) {
    var resultadoContainer = document.getElementById('resultadoContainer');
    var nuevoContenedor = document.createElement('div');
    nuevoContenedor.textContent = texto;

    resultadoContainer.innerHTML = '';
    resultadoContainer.appendChild(nuevoContenedor);
}

function copiarTexto() {
    var resultadoContainer = document.getElementById('resultadoContainer');

    if (resultadoContainer.firstChild) {
        var texto = resultadoContainer.firstChild.textContent;

        var textareaTemporal = document.createElement('textarea');
        textareaTemporal.value = texto;

        textareaTemporal.style.position = 'absolute';
        textareaTemporal.style.left = '-9999px';

        document.body.appendChild(textareaTemporal);

        textareaTemporal.select();
        document.execCommand('copy');

        document.body.removeChild(textareaTemporal);

        alert('Texto copiado al portapapeles: ' + texto);
    } else {
        alert('No hay texto para copiar.');
    }
}
