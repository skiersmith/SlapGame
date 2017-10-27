var health = 100;
var name = 'target';
var hits = 0;

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
