const packageEl = document.getElementById('packageDetails');

let residentialArray = [
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

    if (list=='r') list = residentialArray;
        else list = commercialArray;

    let details = '<p>';
    for (i = 0; i < list.length; i++) {
        details += '✅&nbsp;' + list[i] + '<br>';
    }
    details += '✅&nbsp;<em>and more as required/requested</em></p>';

    packageEl.innerHTML = details;
}