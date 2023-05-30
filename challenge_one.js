// coding challenge one //

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

// 1
const [player1, player2] = game.players;

// 2
const [gk, ...fieldPlayers] = player1;

// 3
const allPlayers = [...player1, ...player2];

// 4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

// 5
const {odds: {team1, x: draw, team2} } = game;


// 6

function printGaols(...total) {
    console.log(`total goals are ${total.length} & players are :  ${total}`);
}

// printGaols('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGaols('Muller', 'Lewandowski', 'Kimmich');
printGaols(...game.scored);


// 7
team1 < team2 && console.log('team 2 winner');
team1 > team2 && console.log('team 1 winner');