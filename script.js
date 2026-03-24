let currentScreen = "decimal";

function showScreen() {
    //Define a tela toda vez que a funcção é chamada
    currentScreen = document.getElementById("selectedScreen").value;
    //Esconde as telas não desejadas
    document.getElementById("decimal").style.display = "none"
    document.getElementById("binary").style.display = "none"
    document.getElementById("octal").style.display = "none"
    document.getElementById("hexadecimal").style.display = "none"

    if (currentScreen == "decimal") {
        document.getElementById("decimal").style.display = "flex"
    } else if (currentScreen == "binary") {
        document.getElementById("binary").style.display = "flex"
    } else if (currentScreen == "octal") {
        document.getElementById("octal").style.display = "flex"
    } else if (currentScreen == "hexadecimal") {
        document.getElementById("hexadecimal").style.display = "flex"
    }
}

showScreen();

function converterDecimal() {
    if (ipt_numeroD.value >= 0) {
        decVerifyError.innerHTML = "";
        let input = parseInt(ipt_numeroD.value, 10);

        document.getElementById("decResultadoBinario").innerHTML = `Decimal (${ipt_numeroD.value})<sub>10</sub> -> Binário (${input.toString(2)})<sub>2</sub>`;
        document.getElementById("decResultadoOctal").innerHTML = `Decimal (${ipt_numeroD.value})<sub>10</sub> -> Octal (${input.toString(8)})<sub>8</sub>`;
        document.getElementById("decResultadoHexadecimal").innerHTML = `Decimal (${ipt_numeroD.value})<sub>10</sub> -> Hexadecimal (${input.toString(16).toUpperCase()})<sub>16</sub>`;
    } else if (ipt_numeroD.value == "") {
        decVerifyError.innerHTML = "Insira algum valor antes de converter.";
        limparDadosDec();
    } else {
        decVerifyError.innerHTML = `${ipt_numeroD.value} não é um numero válido.`;
        limparDadosDec();
    }
}

function converterBinario() {
    let input = ipt_numeroB.value;
    let trava = ["2", "3", "4", "5", "6", "7", "8", "9",]
    let invalid = false;
    let i = 0;
    while (i < trava.length) {
        if (input.includes(trava[i])) {
            invalid = true;
        }
        i++;
    }

    if (input == "") {
        binVerifyError.innerHTML = "Insira algum valor antes de converter.";
        limparDadosBin();
    } else if (invalid == true) {
        binVerifyError.innerHTML = `${input} não é um número binário.`;
        limparDadosBin();
    } else {
        binVerifyError.innerHTML = "";
        input = parseInt(ipt_numeroB.value, 2);

        document.getElementById("binResultadoDecimal").innerHTML = `Binário (${ipt_numeroB.value})<sub>2</sub> -> Decimal (${input.toString(10)})<sub>10</sub>`;
        document.getElementById("binResultadoOctal").innerHTML = `Binário (${ipt_numeroB.value})<sub>2</sub> -> Octal (${input.toString(8)})<sub>8</sub>`;
        document.getElementById("binResultadoHexadecimal").innerHTML = `Binário (${ipt_numeroB.value})<sub>2</sub> -> Hexadecimal (${input.toString(16).toUpperCase()})<sub>16</sub>`;
    }
}

function converterOctal() {
    let input = ipt_numeroO.value;
    let trava = ["8", "9"];
    let invalid = false;
    let i = 0;
    while (i < trava.length) {
        if (input.includes(trava[i])) {
            invalid = true;
        }
        i++
    }

    if (input == "") {
        octalVerifyError.innerHTML = "Insira algum valor antes de converter.";
        limparDadosOctal();
    } else if (invalid == true) {
        octalVerifyError.innerHTML = `${input} não é um número octal.`;
        limparDadosOctal();
    } else {
        octalVerifyError.innerHTML = "";
        input = parseInt(ipt_numeroO.value, 8);

        document.getElementById("octalResultadoDecimal").innerHTML = `Octal (${ipt_numeroO.value})<sub>8</sub> -> Decimal (${input.toString(10)})<sub>10</sub>`
        document.getElementById("octalResultadoBinario").innerHTML = `Octal (${ipt_numeroO.value})<sub>8</sub> -> Binário (${input.toString(2)})<sub>2</sub>`
        document.getElementById("octalResultadoHexadecimal").innerHTML = `Octal (${ipt_numeroO.value})<sub>8</sub> -> Hexadecimal (${input.toString(16).toUpperCase()})<sub>16</sub>`
    }

}

function converterHexadecimal() {
    let input = ipt_numeroH.value.toLowerCase();
    let parametros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let invalid = false;
    let i = 0;
    while (i < input.length) {
        if (!parametros.includes(input[i])) {
            invalid = true
        }
        i++;
    }

    if (input == "") {
        hexVerifyError.innerHTML = "Insira algum valor antes de converter.";
        limparDadosHex();
    } else if (invalid == true) {
        hexVerifyError.innerHTML = `${input} não é um número hexadecimal.`;
        limparDadosHex();
    } else {
        hexVerifyError.innerHTML = "";
        input = parseInt(ipt_numeroH.value, 16);

        document.getElementById("hexResultadoDecimal").innerHTML = `Hexadecimal (${ipt_numeroH.value.toUpperCase()})<sub>16</sub> -> Decimal (${input.toString(10)})<sub>10</sub>`;
        document.getElementById("hexResultadoBinario").innerHTML = `Hexadecimal (${ipt_numeroH.value.toUpperCase()})<sub>16</sub> -> Binário (${input.toString(2)})<sub>2</sub>`;
        document.getElementById("hexResultadoOctal").innerHTML = `Hexadecimal (${ipt_numeroH.value.toUpperCase()})<sub>16</sub> -> Octal (${input.toString(8)})<sub>8</sub>`;
    }
}

function limparDadosDec() {
    document.getElementById("decResultadoBinario").innerHTML = "";
    document.getElementById("decResultadoOctal").innerHTML = "";
    document.getElementById("decResultadoHexadecimal").innerHTML = "";
}

function limparDadosBin() {
    document.getElementById("binResultadoDecimal").innerHTML = "";
    document.getElementById("binResultadoHexadecimal").innerHTML = "";
    document.getElementById("binResultadoOctal").innerHTML = "";
}

function limparDadosOctal() {
    document.getElementById("octalResultadoDecimal").innerHTML = "";
    document.getElementById("octalResultadoBinario").innerHTML = "";
    document.getElementById("octalResultadoHexadecimal").innerHTML = "";
}

function limparDadosHex() {
    document.getElementById("hexResultadoDecimal").innerHTML = "";
    document.getElementById("hexResultadoBinario").innerHTML = "";
    document.getElementById("hexResultadoOctal").innerHTML = "";
}

// estudar sub
