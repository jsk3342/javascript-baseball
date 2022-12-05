const MissionUtils = require("@woowacourse/mission-utils");

function startGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요', (input) => {
        console.log(input)
    } )
}

module.exports = startGame;