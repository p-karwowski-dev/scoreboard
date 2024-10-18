import Scoreboard from '../src/scoreboard';

describe('Scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    test('Allow to start a match and get the summary of ongoing matches:', () => {
        scoreboard.startMatch('Poland', 'Brazil');
        expect(scoreboard.getSummary()).toEqual(['Poland 0 - Brazil 0']);
    });

    test('Allow update the score of a match:', () => {
        scoreboard.startMatch('Poland', 'Brazil');
        expect(scoreboard.updateScore('Poland', 'Brazil', 1, 0)).toEqual(
            'Score updated'
        );
        expect(scoreboard.getSummary()).toEqual(['Poland 1 - Brazil 0']);
    });

    test('Inform if score update did not happen:', () => {
        expect(scoreboard.updateScore('Poland', 'Brazil', 1, 0)).toEqual(
            'Match not found'
        );
    });
});
