const langCMOS = "langCMOS";

// the Object containing all the titles in EN and SK (code rely on format EN:SK!)
const titleDictionary = {
    "Introduction": "Úvod",
    "Theory": "Teória",
    "Logical Circuits": "Logické obvody",
    "Help": "Pomoc"
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}


/**
 * This function is used only when the page is displayed in a browser \
 * with no lang variable in its localStorage.
 * @returns a language that is set in localStorage
 */
function getLanguage() {
    if (localStorage.getItem(langCMOS) === null) {
        let lang = navigator.language || navigator.userLanguage;
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
 * The following function switches lang value in browser's local storage. \
 * The lang variable defines whether to use SK or EN version of the page. \
 * @param lang - a value that is going to be saved into localStorage. [SK, EN] allowed.
 */
function langChange(lang) {
    localStorage.setItem(langCMOS, lang);
    let body = document.getElementsByTagName('body')[0];
    body.classList = "";
    body.classList.add(`lang-${lang}`);
    translateTitleTo(lang);
}


function translateTitleTo(lang) {
    let changedTitle = null;
    if ('en' == lang) {
        changedTitle = getKeyByValue(titleDictionary, document.title);
    }
    else {
        changedTitle = titleDictionary[document.title];
    }
    if(null != changedTitle) {
        document.title = changedTitle;
    }
}


/**
 * This function is the most important since it determines language
 * and builds page elements according to a detected language.
 * It also sets click event listener, so the language can be changed
 * by choosing it in language selector.
 */
function translatePage() {
    let lang = getLanguage();
    langChange(lang);
}
