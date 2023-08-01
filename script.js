function quadrado() {
    let b = Number(prompt("Informe o valor B"));
    let h = Number(prompt("Informe o valor H"));
    res='O resultado da área é '+ b * h +'m²' ;
    alert(res);
    document.getElementById('certo').innerHTML = res;
}

function triangulo() {
    let b = Number(prompt("Informe o valor B"));
    let h = Number(prompt("Informe o valor H"));
    res='O resultado da área é '+ b*h/2 +'m²' ;
    alert(res);
    document.getElementById('dois').innerHTML = res;
}

function circulo() {
    let pi=Math.PI
    let b = Number(prompt("Informe o valor R"));
    res='O resultado da área é '+ pi*b**2 +'m²' ;
    alert(res);
    document.getElementById('tres').innerHTML = res;
}

function trapezio() {
    let b = Number(prompt("Informe o valor B (base maior)"));
    let c = Number(prompt("Informe o valor b (base menor)"));
    let h = Number(prompt("Informe o valor H"));
    res='O resultado da área é '+ (b+c)*h/2 +'m²' ;
    alert(res);
    document.getElementById('quatro').innerHTML = res;
}

function losango() {
    let b = Number(prompt("Informe o valor D (diagonal maior)"));
    let c = Number(prompt("Informe o valor d (diagonal menor)"));
    res='O resultado da área é '+ b*c/2 +'m²' ;
    alert(res);
    document.getElementById('cinco').innerHTML = res;
}
