function sum() {
	var sum=0;
	
	for (var i=2; i < process.argv.length; i++){
		var elm = process.argv[i];
		if (!Number.isNaN(Number(elm))){
			sum += Number(elm);
		}
	}
	return sum;
}
console.log("resultat :",sum());