const MissionUtils = require("@woowacourse/mission-utils");

class BaseBallGame {
    constructor() {
        this.computer = [];
    }

    init() {
        const computer = [];
        while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
            }
        }
        this.computer = computer;
    }

}

module.exports = BaseBallGame;