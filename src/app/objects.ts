export interface spread {
    odds: string,
    points: string
};

export interface oddsCard {
    hometeam: string,
    awayteam: string,
    homeMoneyLine: string,
    awayMoneyLine: string,
    homeSpread: spread,
    awaySpread: spread,
    overUnder: string
}

export interface scoreCard {
    gameTime: string,
    homeTeamName: string,
    awayTeamName: string,
    homeTeamScore: string,
    awayTeamScore: string
};