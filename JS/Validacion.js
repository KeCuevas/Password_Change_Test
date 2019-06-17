function verificarClave(){
    clave1 = document.f1.clave1.value
    clave2 = document.f1.clave2.value

    if (clave1 == clave2)
       alert("Cambio de contraseña realizado\n")
    else
       alert("Constraseña no valida, intente de nuevo\n")
}