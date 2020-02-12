var formContentContainer = document.getElementsByClassName('formInnerContentContainer')[0];
var originalLink = "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php";
var subjectsTitles = [];
var subjectsTitlesInQuotes = [];
var url = location.href;
var arrowBack = document.getElementById("formArrow");
var intro = 0;
var formContainer = document.getElementsByClassName("formContainer")[0];
var introContainer = document.getElementsByClassName("introContainer")[0];
var introButton = document.getElementsByClassName("introButton")[0];
var score = [];
var eens = "\"" + "eens" + "\"";
var geenVanBeide = "\"" + "geen van beide" + "\"";
var oneens = "\"" + "oneens" + "\"";

for(b = 0; subjects.length > b; b++){
	subjectsTitles[b] = subjects[b]["title"];
	subjectsTitlesInQuotes[b] = "\"" + subjectsTitles[b] + "\""; 
}

for(a = 0; subjects.length > a; a++){
	var newDiv = document.createElement("div");
	newDiv.className = "formContentSlideContainer";

	var newH2 = document.createElement("h2");
	newH2.innerHTML = a+1 + "." + " " + subjects[a]["title"];
	newDiv.appendChild(newH2);

	var newP = document.createElement("p");
	newP.innerHTML = subjects[a]["statement"];
	newDiv.appendChild(newP); 

	var newButtonDiv = document.createElement("div");
	newButtonDiv.className = "formChoiceContainer";

	for(b = 0; 3 > b; b++){
		var newButton = document.createElement("button");
		var awnserNumber = "\"" + a + "\""; 
		if(b == 0){
			newButton.innerHTML = "Eens";
			newButton.setAttribute("onclick", "awnsers("+awnserNumber+","+eens+","+subjectsTitlesInQuotes[a+1]+");");
		}else if(b == 1){
			newButton.innerHTML = "Geen van beide";
			newButton.setAttribute("onclick", "awnsers("+awnserNumber+","+geenVanBeide+","+subjectsTitlesInQuotes[a+1]+");");
		}else if(b == 2){
			newButton.innerHTML = "Oneens";
			newButton.setAttribute("onclick", "awnsers("+awnserNumber+","+oneens+","+subjectsTitlesInQuotes[a+1]+");");
		}
		newButton.className = "formChoice";
		newButtonDiv.appendChild(newButton);
	}

	var newSkip = document.createElement("button");
	newSkip.className = "formSkip";
	newSkip.setAttribute("onclick", "awnsers("+awnserNumber+","+"\""+"\""+","+subjectsTitlesInQuotes[a+1]+");");

	var newSpan = document.createElement("span");
	newSpan.innerHTML = "Sla deze vraag over";
	newSkip.appendChild(newSpan);

	var newSpan = document.createElement("span");
	newSpan.innerHTML = "&#8594;";
	newSkip.appendChild(newSpan);
	newButtonDiv.appendChild(newSkip);

	newDiv.appendChild(newButtonDiv);

	var newCompanies = document.createElement("div");
	newCompanies.className = "formCompanyOpinion";

	var newCompaniesImage = document.createElement("img");
	newCompaniesImage.src = "../images/spreek-wolkje.svg";
	newCompanies.appendChild(newCompaniesImage);

	var newCompaniesText = document.createElement("div");
	newCompaniesText.className = "formCompanyText";
	newCompaniesText.innerHTML = "Wat vinden de partijen?";
	newCompanies.appendChild(newCompaniesText);
		
	newDiv.appendChild(newCompanies);
	formContentContainer.appendChild(newDiv);
}

introButton.setAttribute("onclick", "page("+subjectsTitlesInQuotes[0]+");");

function page(url){
	if(url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php" || url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#intro"){
		formContainer.style.display = "none";
		introContainer.style.display = "block";
	}else{
		url = url.replace('http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#','');
		url = url.replace("%20"," ");
		for(c = 0; subjectsTitles.length > c; c++){
			if(subjectsTitles[c] == url){
				formContainer.style.display = "block";
				introContainer.style.display = "none";
				arrowBack.setAttribute("onclick", "page("+subjectsTitlesInQuotes[c-1]+");");
				location.href = originalLink + "#" + url;
				var formContentSlideContainer = document.getElementsByClassName("formContentSlideContainer");
				var amount = 125 * (c);
				amount = "-" + amount + "%";
				var barAmount = 3.33 * (c+1);
				barAmount = "" + barAmount + "%";
				document.getElementsByClassName("formColorBar")[0].style.width = barAmount;
				for(d = 0; formContentSlideContainer.length > d; d++){
					formContentSlideContainer[d].style.transform = "translateX("+amount+")";
				}
				if(subjectsTitlesInQuotes[c-1] == undefined){
					arrowBack.setAttribute("onclick", "page(\"" + "intro" + "\");");
				}else{
					arrowBack.setAttribute("onclick", "page("+subjectsTitlesInQuotes[c-1]+");");
				}
			}else{
				intro++;
			}
		}
		if(intro == subjectsTitles.length){
			location.href = originalLink + "#intro";
			url = "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#intro";
			page(url);
		}
		intro = 0;
	}
}

function awnsers(question,awnser,url){
	var choiceButtons = document.getElementsByClassName("formChoice");
	if(awnser == "eens"){
		score[question] = "eens";
		var question = question * 3;
		choiceButton = choiceButtons[question];
		choiceButton.style.backgroundColor = "#01B4DC";

		choiceButtonAlt = choiceButtons[question+1];
		choiceButtonAlt.style.backgroundColor = "#000";

		choiceButtonAlt = choiceButtons[question+2];
		choiceButtonAlt.style.backgroundColor = "#000";
	}else if(awnser == "geen van beide"){
		score[question] = "geen van beide";
		var question = question * 3 + 1;
		choiceButton = choiceButtons[question];
		choiceButton.style.backgroundColor = "#01B4DC";

		choiceButtonAlt = choiceButtons[question-1];
		choiceButtonAlt.style.backgroundColor = "#000";

		choiceButtonAlt = choiceButtons[question+1];
		choiceButtonAlt.style.backgroundColor = "#000";
	}else if(awnser == "oneens"){
		score[question] = "oneens";
		var question = question * 3 + 2;
		choiceButton = choiceButtons[question];
		choiceButton.style.backgroundColor = "#01B4DC";

		choiceButtonAlt = choiceButtons[question-2];
		choiceButtonAlt.style.backgroundColor = "#000";

		choiceButtonAlt = choiceButtons[question-1];
		choiceButtonAlt.style.backgroundColor = "#000";
	}else{
		score[question] = "";
	}
	page(url);
}

page(url);