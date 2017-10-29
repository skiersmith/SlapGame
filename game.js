
var Item = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}
var Target = function (name, health, hits, items[]) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items[] = items[];
}

var targets = { 
   wilecyote:new Target("Wile E Cyote", 100, 0),
}



var items = {
    acmetnt:new Item("TNT", 0.5, "This is an awesome bat!"),
    deadend:new Item("Dead end", 0.3, "Dead end!"),
    anvil:new Item("Anvil", 0.9, "Smash!"),
}











/**
 * 
 var characters = [];
 
 var char1 = {
     name: 'Road-Runner',
     health: 100,
     items: [],
     hits: 0
    }
    characters.push(char1)
    var char2 = {
        name: 'Wile e Cyote',
        health: 100,
        items: [],
        hits: 0
    }
    characters.push(char2)
    */







    function giveTnt(name) {
    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        if (name == char.name) {
            char.items.push(acmetnt)

        }
    }
}

/** 
 * 
 //????
 function addMods(arr) {
     var modifier = 0;
     for (var i = 0; i < arr.length; i++) {
         var mods = arr[i];
         if(modifier){
             mods += modifier;
            }
            
        }
        return modifier
    }
    
    */
//?????





function slap(target) {
    targets.health -= 1
    targets.hits += 1
    update()
    //alert(health) 
}
function punch() {
    health -= 5
    hits += 1
    update()
    //alert(health) 
}
function kick() {
    health -= 10
    hits += 1
    update()
    //alert(health) 
}
function update() {
    document.getElementById("hits").innerText = hits
    document.getElementById("health").innerText = health
    if (targets.health < 0) {
        document.getElementById("health").innerText = 0
        return
    }
}