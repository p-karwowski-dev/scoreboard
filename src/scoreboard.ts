import Match from './match';

export default class Scoreboard {
    private matches: Match[] = [];

    private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
        return this.matches.find(
            (match) =>
                match.homeTeam === homeTeam && match.awayTeam === awayTeam
        );
    }

    startMatch(homeTeam: string, awayTeam: string): void {
        const match = this.findMatch(homeTeam, awayTeam);
        if (!match) {
            this.matches.push(new Match(homeTeam, awayTeam));
        }
    }

    updateScore(
        homeTeam: string,
        awayTeam: string,
        homeScore: number,
        awayScore: number
    ): void {
        const match = this.findMatch(homeTeam, awayTeam);
        if (match) {
            match.homeScore = homeScore;
            match.awayScore = awayScore;
        }
    }

    getSummary() {
        return this.matches
            .sort((a, b) => {
                if (a.getScore() === b.getScore()) {
                    return a.startTime.getTime() - b.startTime.getTime();
                }
                return b.getScore() - a.getScore();
            })
            .map((match) => match.getInfo());
    }

    finishMatch(homeTeam: string, awayTeam: string): void {
        this.matches = this.matches.filter(
            (match) =>
                match.homeTeam !== homeTeam || match.awayTeam !== awayTeam
        );
    }
}
