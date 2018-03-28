var scores = {}; //Va a llevar el resgistro de los jugadores y sus puntos.

//

function createPlayer(object, name){
    object[name.toLowerCase()] = 0;
    console.log(object);
}

function addPoints(name, points) {
    scores[name.toLowerCase()] += points;
    console.log(scores);
}

function printAllPoints(){
    var arrayPlayers = Object.keys(scores);
    var results = '';
    for(var k = 0; k < arrayPlayers.length; k++){
        if(k == arrayPlayers.length -1){
        results += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]];
      }else{
        results += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]] + ', ';
      }

      console.log(results);
    }
return results;
}

createPlayer(scores, 'Ana');
addPoints('ana', 20);
addPoints('ana', 40);
createPlayer(scores, 'Silvana');
addPoints('Silvana', 50);
printAllPoints();
console.log(printAllPoints());
