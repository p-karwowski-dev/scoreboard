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

    test('Allow to start multiple matches and get the summary of ongoing matches in the score-time order:', () => {
        scoreboard.startMatch('Poland', 'Brazil');
        scoreboard.startMatch('Spain', 'Italy');
        scoreboard.updateScore('Spain', 'Italy', 2, 1);
        scoreboard.startMatch('Germany', 'France');
        scoreboard.updateScore('Germany', 'France', 1, 2);
        expect(scoreboard.getSummary()).toEqual([
            'Spain 2 - Italy 1',
            'Germany 1 - France 2',
            'Poland 0 - Brazil 0',
        ]);
    });

    test('Allow to finish a match', () => {
        scoreboard.startMatch('Poland', 'Brazil');
        scoreboard.finishMatch('Poland', 'Brazil');
        expect(scoreboard.getSummary()).toEqual([]);
    });
});
