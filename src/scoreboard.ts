import Match from './match';

export default class Scoreboard {
    private matches: Match[] = [];

    startMatch(homeTeam: string, awayTeam: string): void {
        this.matches.push(new Match(homeTeam, awayTeam));
    }

    getSummary() {
        return this.matches.map((match) => match.getInfo());
    }
}
