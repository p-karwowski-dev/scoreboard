import Match from './match';

export default class Scoreboard {
    private matches: Match[] = [];

    getSummary() {
        return this.matches;
    }
}
