function Transportation(name, cost, seats) {
	this.name = name;
	this.cost = cost;
	this.seats = seats;
}

var bart = new Transportation('Bart', 5.80, 120)
var muni = new Transportation('Muni', 2.25, 50)
var trolley = new Transportation('Trolley', 7, 25)

console.log(bart, muni, trolley)


