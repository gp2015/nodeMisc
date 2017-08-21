var maxTime = 1000;

// if input is even, double it
// if input is odd, error
// (call takes a random amount of time < 1s)
var evenDoubler = function(v, callback) {
	if ((v % 2) == 0) {
		results = v * 2
	} else {
		results = "Odd number!"
	}
	return results
}

var handleResults = function(err, results, time) {
	if (err) {
		console.log("ERROR: " + err.message);
	} else {
		console.log("The results are: " + results + " (" + time + " ms)");
	}
};

evenDoubler(2, handleResults);
evenDoubler(3, handleResults);

console.log("-----");