const packageEl = document.getElementById('packageDetails');

let residentialArray = [
    '<strong>air vent</strong> dust',
    '<strong>appliance</strong> wipe-down',
    '<strong>baseboard & trim</strong> dust',
    '<strong>cabinet & shelf</strong> surface wipe-down', 
    '<strong>carpet & hard flooring</strong> vacuum',
    '<strong>cobweb</strong> removal',
    '<strong>furniture</strong> dust & wipe-down',
    '<strong>hard flooring</strong> mop',
    '<strong>garbage</strong> removal & liner replacement',
    '<strong>interior window & mirror*</strong> clean',
    '<strong>light fixture & ceiling fan*</strong> dust',
    '<strong>sink</strong> cleaning',
    '<strong>switchplate</strong> wipe-down',
    '<strong>toilet</strong> clean & disinfect',
    '<strong>window blinds & sills*</strong> dust',
];

let commercialArray = [
    '<strong>cabinet & shelf</strong> surface wipe-down', 
    '<strong>carpet & hard flooring</strong> vacuum',
    '<strong>interior window & mirror*</strong> clean',
    '<strong>garbage</strong> removal & liner replacement',
    '<strong>hard flooring</strong> mop',
    '<strong>light fixture & ceiling fan*</strong> dust',
    '<strong>office equipment</strong> dust',
    '<strong>sink</strong> cleaning',
    '<strong>switchplate</strong> wipe-down',
    '<strong>toilet</strong> clean & disinfect',
    '<strong>window blinds & sills*</strong> dust',
];

function showList(list) {
    list=list.charAt(0);
    let pack = '';

    if (list == 'r') {
            list = residentialArray;
            pack = '<h3 class="h3blank">Residential Package Checklist</h3>';
        }
        else {
            list = commercialArray;
            pack = '<h3 class="h3blank">Commercial Package Checklist</h3>';
        }

    let details = pack + '<p>';
    for (i = 0; i < list.length; i++) {
        details += '<span class="packItem">&nbsp;&nbsp;&middot;&nbsp;' + list[i] + '</span>';
    }
    details += '<span class="packItem">&nbsp;&nbsp;&middot;&nbsp;<em>and more as required/requested</em></span><br><em>&nbsp;&nbsp;*&nbsp;within reasonable reach</em><br><br>';

    if (list ==  residentialArray) {
        details += '<span class="packItem">We also clean <strong>condominiums.</strong></span></p>';
    }
    else {
        details += '<span class="packItem">We also clean <strong>chiropractic and dental offices.</strong></span></p>';
    }

    packageEl.innerHTML = details;
}

