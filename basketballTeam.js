const team = {
    _players: [ {firstName: 'John', lastName: 'Doe', age: 25},
                {firstName: 'Jane', lastName: 'Doe', age: 22},
                {firstName: 'Jack', lastName: 'Doe', age: 20}],

    _games: [   {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
                {opponent: 'Lakers', teamPoints: 35, opponentPoints: 40},
                {opponent: 'Warriors', teamPoints: 50, opponentPoints: 45}],

                get players() {
                    return this._players;
                },
                get games() {
                    return this._games;
                },
                addPlayer(firstName, lastName, age) {
                    let player = {
                        firstName: firstName,
                        lastName: lastName,
                        age: age
                    };
                    this.players.push(player);
                },
                addGame(opponent, teamPoints, opponentPoints) {
                    let game = {
                        opponent: opponent,
                        teamPoints: teamPoints,
                        opponentPoints: opponentPoints
                    };
                    this.games.push(game);
                }

};
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);