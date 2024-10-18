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
});
