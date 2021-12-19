const packageEl = document.getElementById('packageDetails');

let residentialArray = [
    'air vent dust',
    'appliance wipe-down',
    'baseboard/trim dust',
    'cabinet/shelf surface wipe-down', 
    'carpet/hard flooring vacuum',
    'cobweb removal',
    'furniture dust & wipe-down',
    'hard flooring mop',
    'garbage removal/liner replacement',
    'interior window/mirror clean',
    'light fixture/ceiling fan (within arm\'s reach) dust',
    'sink cleaning',
    'switchplate wipe-down',
    'toilet clean & disinfect',
    'window blinds & sills dust',
];

let commercialArray = [
    'cabinet/shelf surface wipe-down', 
    'carpet/hard flooring vacuum',
    'interior window/mirror clean',
    'garbage removal/liner replacement',
    'hard flooring mop',
    'light fixture/ceiling fan (within arm\'s reach) dust',
    'office equipment dust',
    'sink cleaning',
    'switchplate wipe-down',
    'toilet clean & disinfect',
    'window blinds & sills dust',
];

function showList(list) {
    list=list.charAt(0);

    if (list=='r') list = residentialArray;
        else list = commercialArray;

    let details = '<p>';
    for (i = 0; i < list.length; i++) {
        details += '&middot;&nbsp;' + list[i] + '<br>';
    }
    details += '</p>';

    packageEl.innerHTML = details;
}