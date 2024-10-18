import Scoreboard from '../src/scoreboard';

describe('Scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    test('Get the list of ongoing matches:', () => {
        expect(scoreboard.getSummary()).toEqual([]);
    });
});
