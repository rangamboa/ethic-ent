const packageEl = document.getElementById('packageDetails');

let residentialArray = [
    '<em>We also clean <strong>condominiums.</strong></em><br>',
    '<strong>air vent</strong> dust',
    '<strong>appliance</strong> wipe-down',
    '<strong>baseboard/trim</strong> dust',
    '<strong>cabinet/shelf</strong> surface wipe-down', 
    '<strong>carpet/hard flooring</strong> vacuum',
    '<strong>cobweb</strong> removal',
    '<strong>furniture</strong> dust & wipe-down',
    '<strong>hard flooring</strong> mop',
    '<strong>garbage</strong> removal/liner replacement',
    '<strong>interior window/mirror</strong> clean',
    '<strong>light fixture/ceiling fan</strong> (within reach) dust',
    '<strong>sink</strong> cleaning',
    '<strong>switchplate</strong> wipe-down',
    '<strong>toilet</strong> clean & disinfect',
    '<strong>window blinds & sills</strong> dust',
];

let commercialArray = [
    '<em>We also clean <strong>chiropractor and dental offices.</strong></em><br>',
    '<strong>cabinet/shelf</strong> surface wipe-down', 
    '<strong>carpet/hard flooring</strong> vacuum',
    '<strong>interior window/mirror</strong> clean',
    '<strong>garbage</strong> removal/liner replacement',
    '<strong>hard flooring</strong> mop',
    '<strong>light fixture/ceiling fan</strong> (within reach) dust',
    '<strong>office equipment</strong> dust',
    '<strong>sink</strong> cleaning',
    '<strong>switchplate</strong> wipe-down',
    '<strong>toilet</strong> clean & disinfect',
    '<strong>window blinds & sills</strong> dust',
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
            pack = '<h3 class="h3blank">Commercial Package Checklist</h3><p>';
        }

    let details = pack + '<p>';
    for (i = 0; i < list.length; i++) {
        details += '&middot;&nbsp;' + list[i] + '<br>';
    }
    details += '&middot;&nbsp;<em>and more as required/requested</em></p>';

    packageEl.innerHTML = details;
}