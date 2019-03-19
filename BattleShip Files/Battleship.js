var view={
        //this method takes a string message and displays it
        //in the message display area
        displayMessage: function(msg){
            var messageArea = document.getElementById("messageArea");
            messageArea.innerHTML=msg;
        },
        displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
        },
        displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");   
        }
    }
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk:0,
    ships:[
        { locations: ["10","20","30"], hits:["","",""]},
        { locations: ["32","33","34"], hits:["","",""]},
        { locations: ["63","64","65"], hits:["","",""]}
    ],
    fire: function(guess){
        for (var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
            var locations = ship.locations.indexOf(guess);
            if(index>= 0){
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)){
                    view.displayMessage("You sank my ship!")
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function(ship){
        for(var i = 0; i < this.shipLength; i++){
            if(ship.hits[i] !== "hit"){
            return false;
            }
        }
        return true;
    }
};
