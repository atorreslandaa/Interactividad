    let nombre = " Anabelen";
    let edad = 22;
    let mayorDeEdad = edad >= 18;
    const TAU = 6.28;
    console.log( "hola" + nombre + " tienes " + edad + " años " + mayorDeEdad + " y el valor de TAU es " + TAU);



    function saludar(nombre = "mundo") {
        alert("hola " + nombre);
    }

    saludar(nombre);
    saludar("Anabelen ");
saludar()