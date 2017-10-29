var Item = function(name, modifier, description){
	this.name = name;
	this.modifier = modifier;
	this.description = description;
}
var items = {
	bat:new Item("bat",0.5,"This is an awesome bat!"),
    deadend:new Item("Dead end",0.3,"Dead end!"),
    anvil:new Item("Anvil",0.9,"Smash!"),
}
var characters = [];
;

var char1 = {
    name: 'Road-Runner',
    health: 100,
    items:[],
    hits:0
}
characters.push(char1)
var char2 = {
    name:'Wile e Cyote',
    health: 100,
    items:[],
    hits:0
}
characters.push(char2)






function giveBat(name) {
    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        if(name == char.name){
            char.items.push(bat)
            
        }
    }
}



function addMods(items){
    var modifier =0;
    for (var i = 0; i < items.length; i++) {
        var itemMod = items[i];

        if(i = items.modifier){
            modifier +=  itemMod
        }
    }

}







function slap() {
    health -= 1
    hits += 1
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
    if (health < 0) {
        document.getElementById("health").innerText = 0
        return
    }
}