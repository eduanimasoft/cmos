
function animate() {
    let stressColor = '#FFF500';
    let animationDuration = 1000;

    SVG.find('.complementary-pmos')
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#FF0000');
    SVG.find('.complementary-nmos')
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#0029FF');
    SVG.find('.complementary-title')
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010');

    SVG.find('.metal')
        .animate(animationDuration, 2 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010');
    SVG.find('.metal-title')
        .animate(animationDuration, 2 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010');

    SVG.find('.oxid')
        .animate(animationDuration, 4 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#C4C4C4');
    SVG.find('.oxid-title')
        .animate(animationDuration, 4 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010');

    SVG.find('.semiconductor')
        .animate(animationDuration, 6 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#77CAFF');
    SVG.find('.semiconductor-title')
        .animate(animationDuration, 6 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010');
}

animate();
