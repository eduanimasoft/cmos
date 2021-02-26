
function animate() {
    let stressColor = '#FFF500';
    let animationDuration = 1000;

    SVG.find('.complementary-pmos')
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#FF0000');
    SVG.find('.complementary-nmos')
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#0029FF');
    SVG.find('.comp-text-anim')
        .opacity(1).animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010').opacity(0);
    SVG.find('.complementary-arrows')
        .attr({'fill-opacity': 1}).animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010').attr({ 'fill-opacity': 0 });

    SVG.find('.metal')
        .animate(animationDuration, 2 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010');
    SVG.find('.metal-text-anim')
        .animate(1, 2 * animationDuration).opacity(1)
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010').opacity(0);

    SVG.find('.oxid')
        .animate(animationDuration, 4 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#C4C4C4');
    SVG.find('.oxid-text-anim')
        .animate(1, 4 * animationDuration).opacity(1)
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010').opacity(0);

    SVG.find('.semiconductor')
        .animate(animationDuration, 6 * animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#77CAFF');
    SVG.find('.semic-text-anim')
        .animate(1, 6 * animationDuration).opacity(1)
        .animate(animationDuration).fill(stressColor)
        .animate(animationDuration).fill('#111010').opacity(0);
}

animate();
