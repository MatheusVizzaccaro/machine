let currentScreen = "decimal";

function showScreen () {
    //Define a tela toda vez que a funcção é chamada
    currentScreen = document.getElementById("selectedScreen").value;
    //Esconde as telas não desejadas
    document.getElementById("decimal").style.display = "none"
    document.getElementById("binary").style.display = "none"
    document.getElementById("octal").style.display = "none"
    document.getElementById("hexadecimal").style.display = "none"

    if(currentScreen == "decimal") {
        document.getElementById("decimal").style.display = "flex"
    } else if(currentScreen == "binary") {
        document.getElementById("binary").style.display = "flex"
    } else if (currentScreen == "octal") {
        document.getElementById("octal").style.display = "flex"
    } else if (currentScreen == "hexadecimal") {
        document.getElementById("hexadecimal").style.display = "flex"
    }
}

showScreen();