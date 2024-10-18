import Scoreboard from "../src/scoreboard";

describe("Scoreboard", () => {
    let scoreboard: Scoreboard;
    scoreboard = new Scoreboard("hello");
    test("test env health check", () => {
        expect(scoreboard.envTest).toEqual("hello");
    })
});