/*
 * This file contains helper function for CMOS principle animation.
 * Since it requires another external library GSAP, it was necessary
 * to separate the usages of two main libraries - svgdotjs and gsap
*/


let numberOfParticlesPerType = 11;

let mutualDuration = 3;


/**
 * This function animates a transition between state 1 and state 2 
 * where the undefined state occurs.
 * @param {any} stateNumber - defines a state in which the animation is
 */
function changePrincipleColors(stateNumber) {
    let delta = 0.5
    gsap.to('.orange-undefined-state', {duration: mutualDuration - 1, stroke: '#FFBB00'});
    gsap.to(`.red-state-${stateNumber}`, {delay: mutualDuration - delta, duration: delta, stroke: '#FF0000'});
    gsap.to(`.green-state-${stateNumber}`, {delay: mutualDuration - delta, duration: delta, stroke: '#00CC00'});
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
    // was also for ".green-circle"
    [".red-circle"].forEach((element) => {
        gsap.to(element, {
            duration: mutualDuration,
            yoyo: false,
            ease: "power1.inOut",
            motionPath: {
              path: `${element}-path`,
              align: `${element}-path`,
              autoRotate: false,
              alignOrigin: [0.5, 0.5],
              start: begin_end[0],
              end: begin_end[1]
            }
          });
    });
}


/**
 * This function animates an opacity of the channel (green background in which protons/electrons are while channel exists).
 * @param {any} stateNumber - defines a state in which the animation is
 */
function channelChange(stateNumber) {
    gsap.to(`.no-channel-state-${stateNumber}`, { duration: mutualDuration, attr: {'fill-opacity':0.0}});
    gsap.to(`.channel-state-${stateNumber}`, { duration: mutualDuration, attr: {'fill-opacity': 0.5}});
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
            motionPath:{
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
    ['proton', 'electron'].forEach( (particle) => {
        moveParticle(begin_end, particle);
    });
    channelChange(stateNumber);
}


/**
 * Initialize GSAP.MotionPathPlugin plugin
 */
gsap.registerPlugin(MotionPathPlugin);
