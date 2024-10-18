export default class Match {
    constructor(
        public homeTeam: string,
        public awayTeam: string,
        public homeScore: number = 0,
        public awayScore: number = 0,
        public startTime: Date = new Date()
    ) {}
}
