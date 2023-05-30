// coding challenge two //

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
}

1
for (const [i, score] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${score}`);
}

// 2
const odds = Object.values(game.odds);
let average = 0;

for (const value of odds) {
    average += value;
    average /= odds.length;
}

console.log(average);

// 3
for (const [team, goal] of Object.entries(game.odds)) {
    let teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
    console.log(`Odd of ${teamStr} : ${goal}`);
}

