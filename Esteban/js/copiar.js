var boton = document.getElementById('copiador');
boton.addEventListener('click', copiarAlPortapapeles, false);

function copiarAlPortapapeles(){
    var enlace = document.getElementById('enlace');
    var inputFalso = document.createElement('input');
    inputFalso.setAttribute("value", enlace.innerHTML);

    document.body.appendChild(inputFalso);

    inputFalso.select();

    document.execCommand('copy');

    document.body.removeChild(inputFalso);
    alert ("Copiado");
}

var boton2 = document.getElementById('copiador2');
boton2.addEventListener('click', copiarAlPortapapeles2, false);

function copiarAlPortapapeles2(){
    var enlace2 = document.getElementById('enlace2');
    var inputFalso2 = document.createElement('input');
    inputFalso2.setAttribute("value", enlace2.innerHTML);

    document.body.appendChild(inputFalso2);

    inputFalso2.select();

    document.execCommand('copy');

    document.body.removeChild(inputFalso2);
    alert ("Copiado");
}