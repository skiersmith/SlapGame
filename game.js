
var Item = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description
}
var Target = function (name, health, hits, items) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = []
    this.totalMod = 1
}
var targets =[]
var cyote = new Target("Wile E Cyote", 100, 0)
    targets.push(cyote)
var me = new Target("me", 100, 0)
    targets.push(me)

var items =[]
var bat = new Item("Bat", 1.6, "This is an awesome bat!")
items.push(bat)
var sword = new Item("Sword", 2, "Dead end!")
items.push(sword)
var anvil = new Item("Anvil", 3, "Smash!")
items.push(anvil)


function giveBat() {
    me.items.push(items[0])
    addMods()
}
function giveSword() {
    me.items.push(items[1])
    addMods()
}
function giveAnvil() {
    me.items.push(items[2])
    addMods()
}



function addMods() {
    // var totalMod = 0;
    for (var i = 0; i < me.items.length; i++) {
       me.totalMod += me.items[i].modifier;  
    }
    return me.totalMod
}




function slap() {
    cyote.health -= 1 
    cyote.hits += 1
    update()
    //alert(health) 
}
function punch() {
    cyote.health -= 5 
    cyote.hits += 1
    update()
    //alert(health) 
}
function kick() {

    cyote.health -= (10 * me.totalMod)
    cyote.hits += 1
    update()
    //alert(health) 
}





function update() {
    document.getElementById("hits").innerText = cyote.hits
    document.getElementById("health").innerText = cyote.health
    if (cyote.health < 0) {
        document.getElementById("health").innerText = 0
        return
    }
}