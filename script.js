var broj = prompt("Unesite broj :");

var operacija = prompt('Unesite operaciju: +-/*');

var broj1 = prompt("Unesite broj :");

var potvrda = confirm('Da li ste sigurni?');

if (potvrda) {
    var rezultat = izracunaj(parseInt(broj),parseInt(broj1),operacija);
    document.write(rezultat) 
}

else{
    document.write('Prekid')
}

function izracunaj(broj, broj1,operacija) {

    switch (operacija) {
        case '+' :
            rezultat = broj+broj1;
            break;
        case '-' :
            rezultat = broj-broj1
            break;
        case '/' :
            rezultat = broj/broj1
            break;
        case '*' :
            rezultat = broj*broj1
            break;
           
    }
    return rezultat;
}
       




