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

    compareNumber(input) {
        const inputNumber = input.toString().split("").map(i => +i)
        let strike = this.isStrike(inputNumber);
        let ball = this.isBall(inputNumber)
        return [strike, ball]
    }

    isStrike(inputNumber) {
        let strike = 0;
        for(let i = 0; i < inputNumber.length; i++){
            if(inputNumber[i] === this.computer[i]) {
                strike++;
            }
        }
        return strike;
    }

    isBall(inputNumber) {
        let ball = 0;
        this.computer.forEach((number, index) => {
            if(inputNumber.indexOf(number) !== -1 && inputNumber[index] !== number) {
                ball++;
            }
        })
        return ball;
    }
}

module.exports = BaseBallGame;