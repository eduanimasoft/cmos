class CmosPrinciple {
    constructor() {
        console.log("Hello from CmosPrinciple constructor");
        this.name = "CMOS Principle";
        this.nameSk = "Princip CMOS Technologie";
        this.nameEn = "CMOS Principle";
        this.nextAnimation = null;
    }

    setNextAnimation(animation) {
        console.log("CmosPrinciple::setNextAnimation says hello");
        this.nextAnimation = animation;
    }

    open() {
        console.log("CmosPrinciple::show says hello");
    }

    close() {
        console.log("CmosPrinciple::close says hello");
    }
}

// exports
export { CmosPrinciple };