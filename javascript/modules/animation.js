function getAnimationDirectory(animationName) {
    return "/animations/" + animationName;
}

class CmosAnimation {
    constructor(animationName) {
        this.animationDirectory = getAnimationDirectory(animationName);
    }

    setLanguage() {
        let lang = new LanguageElements();
        lang.translatePage();
    }

    open() {
        $('.animation-legend').load(this.animationDirectory + '/legend.html', this.setLanguage)
        $('.animation-options').load(this.animationDirectory + '/options.html', this.setLanguage);
        $('.animation-canvas').load(this.animationDirectory + '/frame.html', this.setLanguage);
        document.getElementById("main-flexbox-container").style.display="none";
        document.getElementById("main-animation-container").style.display="grid";
    }

    close() {
        $('.animation-canvas').empty();
        $('.animation-legend').empty();
        $('.animation-options').empty();
        document.getElementById("main-flexbox-container").style.display="flex";
        document.getElementById("main-animation-container").style.display="none";
    }
}
