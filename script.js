function media() {



    console.log("inicio do programa")

    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    
    const media = (nota1 + nota2 + nota3) / 3
    document.getElementById("resultado").innerHTML = "A média do aluno é:" + media + "<br>";

    if (media >= 7 ) {
        document.getElementById("resultado").innerHTML += "Aprovado";
    } else if (media >= 5 ) {
        document.getElementById("resultado").innerHTML += "Reprovado para exame";
    } else {
        document.getElementById("resultado").innerHTML += "Reprovado";
    }
}