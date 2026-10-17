function obtenerdatos()
{
    var nombre = document.getElementById('nombre').value;
    document.registro.nombreobtenido.value = nombre;
    if (document.getElementById('radio1').checked)
    {
        var estado = "Soltero(a)";
        document.registro.estadocivil.value = estado;
    }
    if (document.getElementById('radio2').checked)
    {
        var estado = "Casado(a)";
        document.registro.estadocivil.value = estado;
    }
    if (document.getElementById('radio3').checked)
    {
        var estado = "Otro";
        document.registro.estadocivil.value = estado;
    }
    var sub1 = document.getElementById('check1');
    var sub2 = document.getElementById('check2');
    var sub3 = document.getElementById('check3');
    var sub4 = document.getElementById('check4');
    var habilidades = [];
    if (sub1.checked)
    {
        habilidades.push(sub1.value);
    }
    if (sub2.checked)
    {
        habilidades.push(sub2.value);
    }
    if (sub3.checked)
    {
        habilidades.push(sub3.value);
    }
    if (sub4.checked)
    {
        habilidades.push(sub4.value);
    }
    document.registro.tushabilidades.value = habilidades.join(", ");
    var dato = document.getElementById("tienda");
    var suc = dato.options[dato.selectedIndex].value;
    document.registro.tusucursal.value = suc;
}