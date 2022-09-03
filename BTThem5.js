// Function handle data
function check_tax (tnct) {
    if ( tnct <= 60000000 ) {
        ts = 5;
    } else if ( 60000000 < tnct && tnct <= 120000000) {
        ts = 10;
    } else if ( 120000000 < tnct && tnct <= 210000000) {
        ts = 15;
    } else if ( 210000000 < tnct && tnct <= 384000000) {
        ts = 20;
    } else if ( 384000000 < tnct && tnct <= 624000000) {
        ts = 25;
    } else if ( 624000000 < tnct && tnct <= 960000000) {
        ts = 30;
    } else {
        ts = 35;
    }
    return ts;
}

var tax = document.getElementById('tax');
tax.onclick = function() {
    // Get data
    var name = document.getElementById('name').ariaValueMax;
    var income = document.getElementById('income').value*1;
    var related = document.getElementById('related').value*1;
    var tnct = 0;
    var ttncn = 0;

    tnct = income - 4000000 - related * 1600000;

    // Call function
    var ts = check_tax(tnct)

    // Calculate
    ttncn = tnct * ts / 100;
    // Format VND currency
    var currentFormat = new Intl.NumberFormat("VN-vn");
    // Print out
    document.getElementById('result1').innerHTML = 'Ho Ten: ' + name + '. Thue thu nhap ca nhan: ' + currentFormat.format(ttncn) + ' VND'
}

// Bai 2

function addClass () {
    var element = document.getElementById('addDevices');
    element.classList.add('devices');
}