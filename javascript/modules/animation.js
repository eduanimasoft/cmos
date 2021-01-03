import { NoobAnimation } from './animation_objects/noob.js';
import { CmosPrinciple } from './animation_objects/cmos_principle.js';

export function getAnimation(animationName) {
    if ('CmosPrinciple' == animationName) {
        return new CmosPrinciple();
    }
    else {
        return new NoobAnimation();
    }
}
