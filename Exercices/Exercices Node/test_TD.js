console.log('Hello World')
// print process.argv
var sum =0;

for (var i= 2; i < process.argv.length; i++) {
	var elm =process.argv[i];
	if(!Number.isNaN(Number(elm))){
		sum+= Number(process.argv[i]);
	}
}
	console.log(sum);

process.argv.forEach

setInterval(function(){
	console.log("Chris la pute");
}, 1000);