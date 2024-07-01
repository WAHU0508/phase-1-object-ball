function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            },
        }
    };
}
function numPointsScored(name) {
    let object = gameObject();
        for (let key in object.home.players) {
            if (key === name) {
                return `The points for ${name} are ${object.home.players[name].points}`;
            }
        }
        for (let key in object.away.players) {
            if (key === name) {
                return `The points for ${name} are ${object.away.players[name].points}`;
            }
        }
        return `Input ${name} is invalid`

}

function shoeSize(name) {
    let object = gameObject();
        for (let key in object.home.players) {
            if (key === name) {
                    return `The shoeSize for payer ${name} is ${object.home.players[name].shoe}`;
            }
        }
        for (let key in object.away.players) {
            if (key === name) {
                    return `The shoeSize for player ${name} is ${object.away.players[name].shoe}`;
            }
        }
        return `Input ${name} is invalid`

}

function teamColors(team) {
    let object = gameObject();
    if (object.home.teamName === team) {
        return object.home.colors
        //return `The colors for team ${team} are ${color}`
    }
    if (object.away.teamName === team) {
        return object.away.colors
        //return `The colors for team ${team} are ${color}`
    }
    return `Input ${team} is invalid`
}

function teamNames() {
    let object = gameObject(); 
    return [object.home.teamName, object.away.teamName]
}
function playernumbers(team) {
    const object = gameObject();
    let teamData;
    if (team === object.home.teamName) {
        teamData = object.home.players;
    }
    else if (team === object.away.teamName) {
        teamData = object.away.teamName;
    }
    else {
        return `${team} is an invalid team name`
    }
    const numbers = Object.values(teamData).map(player => player.number)
    return numbers
}
function playerStats(name) {
    const object = gameObject();
    let data;

    for (const key of [object.home.players, object.home.players]) {
        if (name in key) {
            data = key[name];
            break;
        }
    }
    return data;
}
function bigShoeRebounds() {
    const object = gameObject();
    let largestShoeSize = 0;
    let largestPlayer;
    for (const team of [object.home.players, object.away.players]) {
        for (const player in team) {
            if (team[player].shoe > largestShoeSize) {
                largestShoeSize = team[player].shoe;
                largestPlayer = player;
            }
        }
    }
    return `The player is ${largestPlayer} with ${object.home.players[largestPlayer].rebounds || object.home.players[largestPlayer].rebounds} rebounds`;
    
}
console.log(bigShoeRebounds())

function mostPointsScored() {
    const object = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints;
    for (const team of [object.home.players, object.away.players]) {
        for (const player in team) {
            if (team[player].points > mostPoints) {
                mostPoints = team[player].points;
                playerWithMostPoints = player;
            }
        }
    }
        return `The player ${playerWithMostPoints} has the most points with`;
}
console.log(mostPointsScored())
