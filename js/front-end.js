var formContentContainer = document.getElementsByClassName('formInnerContentContainer')[0];
var originalLink = "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/index/body.php";
console.log(subjects);

for(a = 0; subjects.length > a; a++){
	var newDiv = document.createElement("div");
	newDiv.className = "formContentSlideContainer";

	var newH2 = document.createElement("h2");
	newH2.innerHTML = a+1 + "." + " " + subjects[a]["title"];
	newDiv.appendChild(newH2);

	var newP = document.createElement("p");
	newP.innerHTML = subjects[a]["statement"];
	newDiv.appendChild(newP); 

	for(b = 0; 3 > b; b++){
		var newButton = document.createElement("button");
		if(b == 0){
			newButton.innerHTML = "Eens";
		}else if(b == 1){
			newButton.innerHTML = "Geen van beide";
		}else if(b == 2){
			newButton.innerHTML = "Oneens";
		}
		newDiv.appendChild(newButton);
	}

	var newSkip = document.createElement("button");

	var newSpan = document.createElement("span");
	newSpan.innerHTML = "Sla deze vraag over";
	newSkip.appendChild(newSpan);

	var newSpan = document.createElement("span");
	newSpan.innerHTML = "&#8594;";
	newSkip.appendChild(newSpan);
	newDiv.appendChild(newSkip);

	var newCompanies = document.createElement("div");
	newCompanies.innerHTML = "Wat vinden de partijen";
	newDiv.appendChild(newCompanies);
 	 
	formContentContainer.appendChild(newDiv); 
}