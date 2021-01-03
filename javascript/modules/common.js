// const langCMOS = "langCMOS";

class LanguageElements {
    constructor(){
        this.langCMOS = "langCMOS";
    }

    /**
     * This function is used only when the page is displayed in a browser \
     * with no lang variable in its localStorage.
     * @returns a language that is set in localStorage
     */
    initLanguage() {
        if (localStorage.getItem(this.langCMOS) === null) {
            let lang = navigator.language || navigator.userLanguage;
            console.log(lang)
            switch (lang) {
                case 'sk-SK':
                    this.langChange('sk');
                default:
                    this.langChange('en');
            }
        }
        return localStorage.getItem(this.langCMOS);
    }

    /**
     * 
     */
    reloadPageWithLanguage() {
        this.buildPageWithLangElements();
    }

    /** 
     * The following function switches lang value in browser's local storage. \
     * The lang variable defines whether to use SK or EN version of the page. \
     * @param lang - a value that is going to be saved into localStorage. [SK, EN] allowed.
     */
    langChange(lang) {
        localStorage.setItem(this.langCMOS, lang);
        this.reloadPageWithLanguage();
    }

    /**
     * Iterates over all the page elements of class [sk|en]-only 
     * and changes 'display' css property to 'none'.
     * @param lang specifies whether SK or EN lang elements will be hided
     */
    hideLanguageElements(lang) {
        Array.from(document.getElementsByClassName(lang + "-only")).forEach(
            function(element, index, array) {
                element.style.display = "none";
            }
        );
    }

    /**
     * Iterates over all the page elements and changes 'display' css property to 'block'
     * @param lang specifies whether SK or EN lang elements will be displayed
     */
    displayLanguageElements(lang) {
        Array.from(document.getElementsByClassName(lang + "-only")).forEach(
            function(element, index, array) {
                element.style.display = "block";
            }
        );
    }

    /**
     * This method hides elements in a different language as the specified one
     * and displays elements in that language.
     * @param lang specifies which language will be the page changed to
     */
    switchLanguage(lang) {
        if ('en' === lang) {
            this.hideLanguageElements("sk");
        } else {
            this.hideLanguageElements("en");
        }
        this.displayLanguageElements(lang);
    }

    /**
     * This function is the most important since it determines language
     * and builds page elements according to a detected language.
     * It also sets click event listener, so the language can be changed
     * by choosing it in language selector.
     */
    buildPageWithLangElements() {
        let lang = this.initLanguage();
        $("#menu-placeholder").load("/menu/menu." + lang + ".html");
        $("#legend-placeholder").load("/legend/legend." + lang + ".html");
        this.switchLanguage(lang);
    }
    
}

// exports
export { LanguageElements };