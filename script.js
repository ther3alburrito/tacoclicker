var stockValue = 1000
setInterval(function() {
    before = stockValue
    var chance = Math.random()
    if (chance > 0.5) {
        change = 1
    }
    else {
        change = -1
    }
    stockValue += (1.1**(randomArbitrary(1, 100) - 25)) * change
    document.getElementById("stockValue").innerHTML = "Value: $" + (Math.round((stockValue) * 100)/100) 
    document.getElementById("changePercentage").innerHTML = "Change: " + (stockValue - before) / (before) * 100 + "%"
}, 1000)

function randomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
