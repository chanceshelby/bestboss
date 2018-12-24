var achievements = a = {};
a.bb = {};

a.bb.create = function(name, desc, desc2, reqName, reqValue, changeName, changeValue) {
	this.name = name;
	this.desc = desc;
	this.desc2 = desc2;
	this.reqName = reqName;
	this.reqValue = reqValue;
	this.changeName = changeName;
	this.changeValue = changeValue;
};

a.bb.owned = [];
a.bb.list = [
	new a.bb.create("Fresh Produce I",		"Own 10 Produce Stands",	"Produce Stand speed x2", 'owned[0]', 10,		'timeMultiplier[0]', '/2'),
	new a.bb.create("Fresh Produce II",	"Own 25 Produce Stands",	"Produce Stand speed x2", 'owned[0]', 25,		'timeMultiplier[0]', '/2'),
	new a.bb.create("Fresh Produce III",	"Own 50 Produce Stands",	"Produce Stand speed x2", 'owned[0]', 50,		'timeMultiplier[0]', '/2'),
	new a.bb.create("Fresh Produce IV",	"Own 100 Produce Stands",	"Produce Stand speed x2", 'owned[0]', 100,		'timeMultiplier[0]', '/2'),
	new a.bb.create("Fresh Produce V",		"Own 200 Produce Stands",	"Produce Stand speed x2", 'owned[0]', 200,		'timeMultiplier[0]', '/2'),
	new a.bb.create("Produce God I",			"Own 300 Produce Stands",	"Produce Stand speed x2", 'owned[0]', 300,		'timeMultiplier[0]', '/2'),
	elmnt.innerHTML = "<br><br>";
	new a.bb.create("On-Time Delivery I",	"Own 10 Package Delivery Companies",	"Package Delivery speed x2",			'owned[1]',	10,		'timeMultiplier[1]', '/2'),
	new a.bb.create("On-Time Delivery II",	"Own 25 Package Delivery Companies",	"Package Delivery speed x2",			'owned[1]',	25,		'timeMultiplier[1]', '/2'),
	new a.bb.create("On-Time Delivery III","Own 50 Package Delivery Companies",	"Package Delivery speed x2",			'owned[1]',	50,		'timeMultiplier[1]', '/2'),
	new a.bb.create("On-Time Delivery IV",	"Own 100 Package Delivery Companies",	"Package Delivery speed x2",			'owned[1]',	100,	'timeMultiplier[1]', '/2'),
	new a.bb.create("On-Time Delivery V",	"Own 200 Package Delivery Companies",	"Package Delivery speed x2",			'owned[1]',	200,	'timeMultiplier[1]', '/2'),
	new a.bb.create("Delivery God I",		"Own 300 Package Delivery Companies",	"Package Delivery speed x2",			'owned[1]',	300,	'timeMultiplier[1]', '/2'),
	elmnt.innerHTML = "<br><br>";
	new a.bb.create("Coolest Toys I",		"Own 10 Daycares",		"Daycare speed x2",				'owned[2]',	10,		'timeMultiplier[2]', '/2'),
	new a.bb.create("Coolest Toys II",		"Own 25 Daycares",		"Daycare speed x2",				'owned[2]',	25,		'timeMultiplier[2]', '/2'),
	new a.bb.create("Coolest Toys III",		"Own 50 Daycares",		"Daycare speed x2",				'owned[2]',	50,		'timeMultiplier[2]', '/2'),
	new a.bb.create("Coolest Toys IV",		"Own 100 Daycares",		"Daycare speed x2",				'owned[2]',	100,	'timeMultiplier[2]', '/2'),
	new a.bb.create("Coolest Toys V",		"Own 200 Daycares",		"Daycare speed x2",				'owned[2]',	200,	'timeMultiplier[2]', '/2'),
	new a.bb.create("Coolest Toys VI",		"Own 300 Daycare",		"Daycare speed x2",				'owned[2]',	300,	'timeMultiplier[2]', '/2'),
	elmnt.innerHTML = "<br><br>";
	new a.bb.create("Fast Cars I",		"Own 10 Car Dealerships",	"Car Dealership speed x2",	'owned[3]',	10,		'timeMultiplier[3]', '/2'),
	new a.bb.create("Fast Cars II",	"Own 25 Car Dealerships",	"Car Dealership speed x2",	'owned[3]',	25,		'timeMultiplier[3]', '/2'),
	new a.bb.create("Fast Cars III",	"Own 50 Car Dealerships",	"Car Dealership speed x2",	'owned[3]',	50,		'timeMultiplier[3]', '/2'),
	new a.bb.create("Fast Cars IV",	"Own 100 Car Dealerships",	"Car Dealership speed x2",	'owned[3]',	100,	'timeMultiplier[3]', '/2'),
	new a.bb.create("Fast Cars V",		"Own 200 Car Dealerships",	"Car Dealership speed x2",	'owned[3]',	200,	'timeMultiplier[3]', '/2'),
	new a.bb.create("Fast Cars VI",	"Own 300 Car Dealership",	"Car Dealership speed x2",	'owned[3]',	300,	'timeMultiplier[3]', '/2'),
];

// main achievement loop
a.loop = function() {
	a.bb.achieve();
};
// init achievements
a.bb.init = function() {
	for (var i = 0; i < a.bb.list.length; i++) {
		var b = a.bb.list[i];
		a.bb.owned.push(false);
		var index = b.reqName.indexOf('[');
		var z = parseInt(b.reqName.substring(index+1, b.reqName.length-1));
		$("#achievements-business").append('<div id="achievements-business-' + (i+1) + '" class="achievement text-center">' + b.name + "<br>" + b.desc + "<br><i>" + b.desc2 + "</i></div>");
	};
};
// check if achievement is complete
a.bb.isComplete = function(i) {
	var l = a.bb.list[i];
	var index = l.reqName.indexOf('[');
	var str = l.reqName.substring(0, index);
	var z = parseInt(l.reqName.substring(index+1, l.reqName.length-1));
	var value = window["bb"][str][z];
	return value >= l.reqValue;
};
// apply achievement effect if complete
a.bb.achieve = function() {
	for (var i = 0; i < a.bb.list.length; i++) {
		var l = a.bb.list[i];
		if (a.bb.isComplete(i) && a.bb.owned[i] !== true) { // todo
			var index = l.changeName.indexOf('[');
			var str = l.changeName.substring(0, index);
			var z = parseInt(l.changeName.substring(index+1, l.changeName.length-1));
			var value = window["bb"][str][z];
			window["bb"][str][z] = eval(value + l.changeValue);
			a.bb.owned[i] = true;
			$("#achievements-business-" + (i+1)).addClass('bought');
			bb.update();
		};
	};
};
// check acheivements after loading save
a.bb.check = function() {
	for (var i = 0; i < a.bb.list.length; i++) {
		if (a.bb.owned[i])
			$("#achievements-business-" + (i+1)).addClass('bought');
	};
};
