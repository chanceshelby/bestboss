var upgrades = u = {};
u.bb = {};

u.bb.create = function(name, desc, price, changeName, changeValue) {
	this.name = name;
	this.desc = desc;
	this.price = price;
	this.changeName = changeName;
	this.changeValue = changeValue;
};

u.bb.owned = [];
u.bb.list = [
	new u.bb.create("Ripe Tomatoes",			"Produce Stand profit x3", 20000,	'multiplier[0]',	'*3'),
	new u.bb.create("Expensive Shipping",		"Package Delivery profit x3",	50000,	'multiplier[1]',	'*3'),
	new u.bb.create("New Toys",			"Daycare profit x3",			100000,	'multiplier[2]',	'*3'),
	new u.bb.create("Free Car-Wash Deal",				"Car Dealership profit x3",	350000,	'multiplier[3]',	'*3'),

	new u.bb.create("New Fertilizer",		"Produce Stand profit x8",	1000000,	'multiplier[0]',	'*8'),
	new u.bb.create("Faster Busses",		"Package Delivery profit x4",	15000000,	'multiplier[1]',	'*4'),
	new u.bb.create("Better Staff",					"Daycare profit x3",			250000000,	'multiplier[2]',	'*3'),
	new u.bb.create("New Location",			"Car Dealership profit x2",	1000000000,	'multiplier[3]',	'*2'),

	new u.bb.create("Better Signs",	"Produce Stand profit x6",	15000000000,	'multiplier[0]',	'*6'),
	new u.bb.create("Better Boxes",		"Package Delivery profit x5",			50000000000,	'multiplier[1]',	'*5'),
	new u.bb.create("iPads",					"Daycare profit x4",			100000000000,	'multiplier[2]',	'*4'),
	new u.bb.create("Newer Cars",				"Car Dealership profit x3",	200000000000,	'multiplier[3]',	'*3'),

	new u.bb.create("More Veggies",		"Produce Stand profit x32",400000000000,	'multiplier[0]',	'*32'),
	new u.bb.create("Online Marketing",	"Package Delivery profit x16",	800000000000,	'multiplier[1]',	'*16'),
	new u.bb.create("Longer Slides",		"Daycare profit x4",			1600000000000,	'multiplier[2]',	'*4'),
	new u.bb.create("Buy one get one free deal",				"Car Dealership profit x2",	3200000000000,	'multiplier[3]',	'*2')
];

// init upgrades
u.bb.init = function() {
	for (var i = 0; i < u.bb.list.length; i++) {
		var a = u.bb.list[i];
		u.bb.owned.push(false);
		$("#upgrades-business").append('<div id="upgrade-business-' + (i+1) + '" class="upgrade text-center">' + a.name + "<br><i>" + a.desc + "</i><br>Cost $" + fix(a.price, 2) + "</div>");
		$("#upgrade-business-" + (i+1)).attr('onclick', 'u.bb.buy(' + i + ');');
	};
};
// buying upgrades
u.bb.buy = function(i) {
	var a = u.bb.list[i];
	if (c.money >= a.price && u.bb.owned[i] !== true) {
		c.money -= a.price;
		u.bb.owned[i] = true;
		var index = a.changeName.indexOf('[');
		var str = a.changeName.substring(0, index);
		var b = parseInt(a.changeName.substring(index + 1, a.changeName.length - 1));
		var value = window["bb"][str][b];
		window["bb"][str][b] = eval(value + a.changeValue);
		$("#upgrade-business-" + (i+1)).addClass('bought');
	};
	bb.update();
};
// check upgrades after loading save
u.bb.check = function() {
	for (var i = 0; i < u.bb.list.length; i++) {
		if (u.bb.owned[i])
			$("#upgrade-business-" + (i+1)).addClass('bought');
	};
};