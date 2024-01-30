// COUNTER TIAP PRODUK
let countAxe = 0;
let countJayrosse = 0;
let countGatsby = 0;
let countSauvage = 0;
let countRexonaCotton = 0;
let countRexonaLime = 0;





// AMBIL VALUE DARI DISPLAY DI HTML
let total;
let productAxe = document.getElementById('priceAxe').innerHTML;
let productJayrosse = document.getElementById('priceJayrosse').innerHTML;
let productGatsby = document.getElementById('priceGatsby').innerHTML;
let productSauvage = document.getElementById('priceSauvage').innerHTML;
let productRexonaCotton = document.getElementById('priceRexonaCotton').innerHTML;
let productRexonaLime = document.getElementById('priceRexonaLime').innerHTML;


// ELEMENT UNTUK MENAMPILKAN VALUE
let displayAxeGolden = document.getElementById('displayAxeGolden');
let displayJayrosse = document.getElementById('displayJayrosse');
let displayGatsby = document.getElementById('displayGatsby');
let displaySauvage = document.getElementById('displaySauvage');
let displayRexonaCotton = document.getElementById('displayRexonaCotton');
let displayRexonaLime = document.getElementById('displayRexonaLime');
let exitIcon = document.getElementsByClassName('exitIcon');


let confirmBut = document.getElementsByClassName('confirmBut');



// TAMBAH DAN KURANG PRODUK YANG INGIN DI BELI

// AXE GOLDEN DISPLAY CONTROLLER
document.getElementById('plusButton1').onclick = function () {
    countAxe += 1;
    total = countAxe * productAxe;
    document.getElementById('totalPrice1').innerHTML = total;
    document.getElementById('counterDisplay1').innerHTML = countAxe;

}

document.getElementById('minButton1').onclick = function () {
    countAxe -= 1;
    if (countAxe <= 0) {
        return countAxe = 0;
    }
    total = countAxe * productAxe;
    document.getElementById('totalPrice1').innerHTML = total;
    document.getElementById('counterDisplay1').innerHTML = countAxe;
}
// document.getElementById('minButton1').onclick = function () {
//     countAxe -= 1;
//     if (countAxe <= 0) {
//         return countAxe = 0;
//     }
//     total = count * productAxe;
//     document.getElementById('totalPrice1').innerHTML = total;
//     document.getElementById('counterDisplay1').innerHTML = countAxe;
// }


// JAYROSSE DISPLAY CONTROLLER
document.getElementById('plusButton2').onclick = function () {
    countJayrosse += 1;
    total = countJayrosse * productJayrosse;
    document.getElementById('totalPrice2').innerHTML = total;
    document.getElementById('counterDisplay2').innerHTML = countJayrosse;

}
document.getElementById('minButton2').onclick = function () {
    countJayrosse -= 1;
    if (countJayrosse <= 0) {
        return countJayrosse = 0;
    }
    total = countJayrosse * productJayrosse;
    document.getElementById('totalPrice2').innerHTML = total;
    document.getElementById('counterDisplay2').innerHTML = countJayrosse;
}



// GATSBYs DISPLAY CONTROLLER
document.getElementById('plusButton3').onclick = function () {
    countGatsby += 1;
    total = countGatsby * productGatsby;
    document.getElementById('totalPrice3').innerHTML = total;
    document.getElementById('counterDisplay3').innerHTML = countGatsby;

}
document.getElementById('minButton3').onclick = function () {
    countGatsby -= 1;
    if (countGatsby <= 0) {
        return countGatsby = 0;
    }
    total = countGatsby * productGatsby;
    document.getElementById('totalPrice3').innerHTML = total;
    document.getElementById('counterDisplay3').innerHTML = countGatsby;
}



// SAUVAGE DISPLAY CONTROLLER
document.getElementById('plusButton4').onclick = function () {
    countSauvage += 1;
    total = countSauvage * productSauvage;
    document.getElementById('totalPrice4').innerHTML = total;
    document.getElementById('counterDisplay4').innerHTML = countSauvage;

}
document.getElementById('minButton4').onclick = function () {
    countSauvage -= 1;
    if (countSauvage <= 0) {
        return countSauvage = 0;
    }
    total = countSauvage * productSauvage;
    document.getElementById('totalPrice4').innerHTML = total;
    document.getElementById('counterDisplay4').innerHTML = countSauvage;
}


// REXONA COTTON DISPLAY CONTROLLER
document.getElementById('plusButton5').onclick = function () {
    countRexonaCotton += 1;
    total = countRexonaCotton * productRexonaCotton;
    document.getElementById('totalPrice5').innerHTML = total;
    document.getElementById('counterDisplay5').innerHTML = countRexonaCotton;

}
document.getElementById('minButton5').onclick = function () {
    countRexonaCotton -= 1;
    if (countRexonaCotton <= 0) {
        return countRexonaCotton = 0;
    }
    total = countRexonaCotton * productRexonaCotton;
    document.getElementById('totalPrice5').innerHTML = total;
    document.getElementById('counterDisplay5').innerHTML = countRexonaCotton;
}


// REXONA LIME DISPLAY CONTROLLER
document.getElementById('plusButton6').onclick = function () {
    countRexonaLime += 1;
    total = countRexonaLime * productRexonaLime;
    document.getElementById('totalPrice6').innerHTML = total;
    document.getElementById('counterDisplay6').innerHTML = countRexonaLime;

}
document.getElementById('minButton6').onclick = function () {
    countRexonaLime -= 1;
    if (countRexonaLime <= 0) {
        return countRexonaLime = 0;
    }
    total = countRexonaLime * productRexonaLime;
    document.getElementById('totalPrice6').innerHTML = total;
    document.getElementById('counterDisplay6').innerHTML = countRexonaLime;
}










for (let i = 0; i < confirmBut.length; i++) {

    confirmBut[i].onclick = function () {
        return alert("Thank you for purchasing our Product");
    }

}







function activeAxeGolden() {
    displayAxeGolden.style.display = 'flex';
}
function activeJayrosse() {
    displayJayrosse.style.display = 'flex';
}
function activeGatsby() {
    displayGatsby.style.display = 'flex';
}
function activeSauvage() {
    displaySauvage.style.display = 'flex';
}
function activeRexonaCotton() {
    displayRexonaCotton.style.display = 'flex';
}
function activeRexonaLime() {
    displayRexonaLime.style.display = 'flex';
}

function exitIconFun() {
    displayRexonaLime.style.display = 'none';
    displayRexonaCotton.style.display = 'none';
    displayJayrosse.style.display = 'none';
    displayAxeGolden.style.display = 'none';
    displayGatsby.style.display = 'none';
    displaySauvage.style.display = 'none';
}
