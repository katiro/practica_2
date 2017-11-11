var formulario = document.getElementById("form1");
//este metodo utiliza el submit y le manda al php con post
formulario.onsubmit = function() {
    var oProcesador;
    var nuevoform = new FormData(formulario);
    oProcesador = new XMLHttpRequest();
    oProcesador.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    oProcesador.open("POST", "logiado.php", false);
    oProcesador.send(nuevoform);
}
