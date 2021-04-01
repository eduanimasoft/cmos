/*
 * This file contains helper function for CMOS principle animation.
 * Since it requires another external library GSAP, it was necessary
 * to separate the usages of two main libraries - svgdotjs and gsap
*/


let numberOfParticlesPerType = 11;

let mutualDuration = 5;


/**
 * This function animates a transition between state 1 and state 2 
 * where the undefined state occurs.
 * @param {any} stateNumber - defines a state in which the animation is
 */
function changePrincipleColors(stateNumber) {
    let delta = 0.5
    gsap.to('.orange-undefined-state', { duration: mutualDuration - 1, stroke: '#FFBB00' });
    gsap.to(`.red-state-${stateNumber}`, { delay: mutualDuration - delta, duration: delta, stroke: '#FF0000' });
    gsap.to(`.green-state-${stateNumber}`, { delay: mutualDuration - delta, duration: delta, stroke: '#00CC00' });
}


/**
 * Helper function to animate a cursor indicating an output voltage 
 * @param {any} begin_end - an array of 2 elements, defines a motion start (1st index) and end (2nd index)
 */
function principleCursorAnimation(begin_end) {
    gsap.to(".cursor", {
        duration: mutualDuration,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
            path: ".cursor-path",
            align: ".cursor-path",
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: begin_end[1],
            end: begin_end[0]
        }
    });
}


/**
 * Animate motion of red and green circle in CMOS animation along their path
 * @param {any} begin_end - an array of 2 elements, defines a motion start (1st index) and end (2nd index)
 */
function principleGraphAnimation(begin_end) {
    let ease_function = "power0";
    let path1_duration = 1.3, path2_duration = 2.2, path3_duration = 1.5;
    let path1 = ".green-circle-path1", path2 = ".green-circle-path2", path3 = ".green-circle-path3";
    if (0 == begin_end[0]) {
        [path1, path3] = [path3, path1];
        [path1_duration, path3_duration] = [path3_duration, path1_duration];
    }
    gsap.to(".red-circle", {
        duration: mutualDuration,
        yoyo: false,
        ease: ease_function,
        delay: 0,
        motionPath: {
            path: ".red-circle-path",
            align: ".red-circle-path",
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: begin_end[1],
            end: begin_end[0]
        }
    });
    gsap.to(".green-circle", {
        duration: path1_duration,
        yoyo: false,
        ease: ease_function,
        delay: 0,
        motionPath: {
            path: path1,
            align: path1,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: begin_end[1],
            end: begin_end[0]
        }
    });
    gsap.to(".green-circle", {
        duration: path2_duration,
        yoyo: false,
        ease: ease_function,
        delay: path1_duration,
        motionPath: {
            path: path2,
            align: path2,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: begin_end[1],
            end: begin_end[0]
        }
    });
    gsap.to(".green-circle", {
        duration: path3_duration,
        yoyo: false,
        ease: ease_function,
        delay: path1_duration + path2_duration,
        motionPath: {
            path: path3,
            align: path3,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: begin_end[1],
            end: begin_end[0]
        }
    });
}


/**
 * This function animates an opacity of the channel (green background in which protons/electrons are while channel exists).
 * @param {any} stateNumber - defines a state in which the animation is
 */
function channelChange(stateNumber) {
    gsap.to(`.no-channel-state-${stateNumber}`, { duration: mutualDuration, attr: { 'fill-opacity': 0.0 } });
    gsap.to(`.channel-state-${stateNumber}`, { duration: mutualDuration, attr: { 'fill-opacity': 0.5 } });
}


/**
 * Find a particle in svg and move it along its path in direction specified by begin_end parameter
 * which must be an array of 2 elements - starting and ending position of the movement
 * @param {any} begin_end - an array of 2 elements, defines a motion start (2nd index) and end (1st index)
 * @param {*} particle - defines which animation will be moved along its path (Possible values : [proton, electron] )
 */
function moveParticle(begin_end, particle) {
    for (let i = 1; i <= numberOfParticlesPerType; ++i) {
        gsap.to(`.${particle}-${i}`, {
            duration: mutualDuration,
            yoyo: true,
            ease: "power1.inOut",
            motionPath: {
                path: `.${particle}-${i}-path`,
                align: `.${particle}-${i}-path`,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
                start: begin_end[1],
                end: begin_end[0],
            }
        });
    }
}


/**
 * Search for all protons and electrons, search for their paths and animate their motion along paths.
 * @param {any} begin_end - an array of 2 elements, defines a motion start (1st index) and end (2nd index)
 * @param {any} stateNumber - defines a state in which the animation is
 */
function principleParticlesAnimation(begin_end, stateNumber) {
    ['proton', 'electron'].forEach((particle) => {
        moveParticle(begin_end, particle);
    });
    channelChange(stateNumber);
}


/**
 * Initialize GSAP.MotionPathPlugin plugin
 */
gsap.registerPlugin(MotionPathPlugin);
