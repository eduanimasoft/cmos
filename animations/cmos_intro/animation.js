let draw = SVG('#introduction-svg');


let pmos = SVG.find('.complementary-pmos');
let nmos = SVG.find('.complementary-nmos');
let complementaryText = SVG.find('.complementary-title');
pmos.animate(1000).fill('#FFF500').animate(1000).fill('#FF0000');
nmos.animate(1000).fill('#FFF500').animate(1000).fill('#0029FF');
complementaryText.animate(1000).fill('#FFF500').animate(1000).fill('#111010');

let metal = SVG.find('.metal');
let metalText = SVG.find('.metal-title');
metal.animate(1000, 2000).fill('#FFF500').animate(1000).fill('#111010');
metalText.animate(1000, 2000).fill('#FFF500').animate(1000).fill('#111010');

let oxid = SVG.find('.oxid');
let oxidText = SVG.find('.oxid-title');
oxid.animate(1000, 4000).fill('#FFF500').animate(1000).fill('#C4C4C4');
oxidText.animate(1000, 4000).fill('#FFF500').animate(1000).fill('#111010');

let semiconductor = SVG.find('.semiconductor');
let semiconductorText = SVG.find('.semiconductor-title');
semiconductor.animate(1000, 6000).fill('#FFF500').animate(1000).fill('#77CAFF');
semiconductorText.animate(1000, 6000).fill('#FFF500').animate(1000).fill('#111010');
