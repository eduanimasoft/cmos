const langCMOS = "langCMOS";

/**
 * This function is used only when the page is displayed in a browser \
 * with no lang variable in its localStorage.
 * @returns a language that is set in localStorage
 */
function initLanguage() {
    if (localStorage.getItem(langCMOS) === null) {
        let lang = navigator.language || navigator.userLanguage;
        console.log(lang)
        switch (lang) {
            case 'sk-SK':
                langChange('sk');
            default:
                langChange('en');
        }
    }
    return localStorage.getItem(langCMOS);
}

/**
 * 
 */
function reloadPageWithLanguage() {
    buildPageWithLangElements();
}

/** 
 * The following function switches lang value in browser's local storage. \
 * The lang variable defines whether to use SK or EN version of the page. \
 * @param lang - a value that is going to be saved into localStorage. [SK, EN] allowed.
 */
function langChange(lang) {
    localStorage.setItem(langCMOS, lang);
    reloadPageWithLanguage();
}

function hideLanguageElements(lang) {
    Array.from(document.getElementsByClassName(lang + "-only")).forEach(
        function(element, index, array) {
            element.style.display = "none";
        }
    );
}

function displayLanguageElements(lang) {
    Array.from(document.getElementsByClassName(lang + "-only")).forEach(
        function(element, index, array) {
            element.style.display = "block";
        }
    );
}

function switchLanguage(lang) {
    if ('en' === lang) {
        hideLanguageElements("sk");
    } else {
        hideLanguageElements("en");
    }
    displayLanguageElements(lang);
}

/**
 * @todo documentation
 */
function buildPageWithLangElements() {
    lang = initLanguage();
    $("#menu-placeholder").load("/menu/menu." + lang + ".html");
    $("#legend-placeholder").load("/legend/legend." + lang + ".html");
    switchLanguage(lang);
}