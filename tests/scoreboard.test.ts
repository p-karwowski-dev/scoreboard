import Scoreboard from '../src/scoreboard';

describe('Scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    test('Allow to start a match and get the list of ongoing matches:', () => {
        scoreboard.startMatch('Poland', 'Brazil');
        expect(scoreboard.getSummary()).toEqual(['Poland 0 - Brazil 0']);
    });

    test('Allow update the score of a match:', () => {
        scoreboard.startMatch('Poland', 'Brazil');
        scoreboard.updateScore(1, 0);
        expect(scoreboard.getSummary()).toEqual(['Poland 3 - Brazil 0']);
    });
});
