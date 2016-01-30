export default class GlobalScore {

    constructor(){
        this.failedDisastersCount = 0;
        this.failedDisastersLimit = 5;
        this.miracles = 0;
    }

    failedDisasterLimitReached() {
        return this.failedDisastersCount >= this.failedDisastersLimit;
    }

    incrementMiracles() {
        this.miracles++;
    }

    incrementFailedDisasters() {
        this.failedDisastersCount++;
    }
}
