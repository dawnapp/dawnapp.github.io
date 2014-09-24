
document.onkeydown = TrapKey;
var debug=true;
function TrapKey(e){
	var key = (e) ? e.which : event.keyCode;
	if(debug)alert(key);
	if(key==39){
		changeExample();
	}
	return true;
}
//var path = "https://github.com/twitter/bootstrap/tree/master/docs/examples/";
var exampleNames=['carousel.html','fluid.html','hero.html','marketing-alternate.html','marketing-narrow.html','signin.html','starter-template.html','sticky-footer.html'];
var GloballyTrackedExampleNum = 0;
var tempPath="../assets/examples/"+exampleNames[GloballyTrackedExampleNum];
function changeExample(){
	
	//alert(tempPath+" and "+GloballyTrackedExampleNum);
	var tempPath="../assets/examples/"+exampleNames[GloballyTrackedExampleNum];
	//alert(tempPath);
	$.get(tempPath, function(data) {
    //alert('Load was performed.');
    show(data);
    if(GloballyTrackedExampleNum==7){GloballyTrackedExampleNum=-1;}
    ++GloballyTrackedExampleNum;
	});
}
//for(var i=0;i<exampleNames.length;i++){
//alert(tempPath)
  function show(input){
  	alert(input);
  	document.open('text/html');
    document.write(input);
	document.close();
}
  	//$("<div>",{class:"result",html:input
  // 	}).appendTo("body")
  	//document.getElementById("result").innerHtml=input;
  