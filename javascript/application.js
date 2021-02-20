// global objects
const languageElements = new LanguageElements();
let animation = null;

function initializeAnimation(animationName) {
    animation = new CmosAnimation(animationName);
    animation.open();
}

function closeCurrentAnimation() {
    animation.close();
}

function requestLanguageChange(lang) {
    languageElements.langChange(lang);
}

const app = () => {
    languageElements.translatePage();
}

app();
