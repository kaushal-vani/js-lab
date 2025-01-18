// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console,
along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win.
Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players:[
        [
            'Newer',
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
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};

console.table(game);

const[players1,players2]= game.players;

console.log("Team-1",players1);
console.log("Team-2",players2);


const [gk,...fieldPlayers] = players1;
console.log("Team-1 Goal keeper",gk);
console.log("Team-1 Field Player",fieldPlayers);

const allPlayers = [...players1,...players2];

console.log(allPlayers);

const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

console.log("team1",team1);
console.log("team2",team2);
console.log("draw",draw);


const printGoals = function(...players){
    console.log(`${players.length} number of goals scored by ${players}`)
};

printGoals(...game.scored)

team1 < team2 && console.log("team 1 is likely to win")
team1 > team2 && console.log("team 2 is likely to win")


/* concepts covered
destructuring of array
destructuring of object
spread operator
rest operator
logical operator
short circuiting
*/


// Coding Challenge #2
/*
Let's continue with our football betting app!
GOOD LUCK 😀
*/

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for(const [index,value] of game.scored.entries()){
    console.log(`Goal ${index+1} is socred by ${value}`)
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds)
let average = 0;
for(const odd of odds)average += odd;
console.log(average)
    average /= odds.length;
    console.log(average);
/* 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
     Odd of victory Bayern Munich: 1.33
     Odd of draw: 3.25
     Odd of victory Borrussia Dortmund: 6.5
*/
for(const [team,odd] of Object.entries(game.odds)){
    const teamResult = team === 'x'? 'Draw' : `${game[team]}`
    console.log(`Odd of ${teamResult}: ${odd} `)
}