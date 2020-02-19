var formContentContainer = document.getElementsByClassName('formInnerContentContainer')[0];
var originalLink = "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php";
var subjectsTitles = [];
var subjectsTitlesInQuotes = [];
var url = location.href;
var arrowBack = document.getElementById("formArrow");
var counter = 0;
var formContainer = document.getElementsByClassName("formContainer")[0];
var introContainer = document.getElementsByClassName("introContainer")[0];
var endScreen = document.getElementsByClassName("endScreenContainer")[0];
var introButton = document.getElementsByClassName("introButton")[0];
var endButton = document.getElementById("endScreenArrow");
var userAwnsers = [];
var eens = "\"" + "eens" + "\"";
var geenVanBeide = "\"" + "geen van beide" + "\"";
var oneens = "\"" + "oneens" + "\"";
var goBack = false;
var awnsered = false;
var awnsersUrl = "";
var endScreenQuestionsWeights = document.getElementsByClassName("endScreenQuestionsWeights")[0];
var endScreenPartiesContainer = document.getElementsByClassName("endScreenPartiesContainer")[0];
var formButton = document.getElementsByClassName("formButton")[0];
var endScreenQuestions = document.getElementsByClassName("endScreenQuestions")[0];
var endScreenParties = document.getElementsByClassName("endScreenParties")[0];
var endScreenResult = document.getElementsByClassName("endScreenResult")[0];
var endScreenResultsContainer = document.getElementsByClassName("endScreenResultsContainer")[0];
var endScreenPartiesArrow = document.getElementById("endScreenPartiesArrow");
var endScreenResultArrow = document.getElementById("endScreenResultArrow");
var questionsImportance = "\"" + "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#questionsImportance" + "\"";
var partiesLink = "\"" + "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#parties" + "\"";
var seats = ["VVD","PvdA","PVV","SP","CDA","D66","ChristenUnie","GroenLinks","SGP","Partij voor de Dieren","50Plus","VNL","DENK","Forum voor Democratie"];
var seated = [];
var score = [];

console.log(subjects);

for(d = 0; subjects.length > d; d++){
	subjectsTitles[d] = subjects[d]["title"];
	subjectsTitlesInQuotes[d] = "\"" + subjectsTitles[d] + "\""; 
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

	var newQuestionWeightContainer = document.createElement("div");
	newQuestionWeightContainer.className = "questionWeightContainer";

	var newQuestionWeightInput = document.createElement("input");
	newQuestionWeightInput.className = "questionWeightInput";
	newQuestionWeightInput.type = "checkbox";
	newQuestionWeightContainer.appendChild(newQuestionWeightInput);

	var newQuestionWeightSpan = document.createElement("span");
	newQuestionWeightSpan.innerHTML = subjectsTitles[a];
	newQuestionWeightContainer.appendChild(newQuestionWeightSpan);

	var newQuestionWeightLine = document.createElement("hr");
	newQuestionWeightContainer.appendChild(newQuestionWeightLine);

	endScreenQuestionsWeights.appendChild(newQuestionWeightContainer);

	var newScoreContainer = document.createElement("div");
	newScoreContainer.className = "endScoreContainer";

	endScreenResultsContainer.appendChild(newScoreContainer);
}

for(f = 0; subjects[0]["parties"].length > f; f++){
	var newPartiesContainer = document.createElement("div");
	newPartiesContainer.className = "partiesContainer";

	var newPartiestInput = document.createElement("input");
	newPartiestInput.className = "partiesInput";
	newPartiestInput.type = "checkbox";
	newPartiesContainer.appendChild(newPartiestInput);

	var newPartiesSpan = document.createElement("span");
	newPartiesSpan.innerHTML = subjects[0]["parties"][f]["name"];
	newPartiesContainer.appendChild(newPartiesSpan);

	var newPartiesLine = document.createElement("hr");
	newPartiesContainer.appendChild(newPartiesLine);

	endScreenPartiesContainer.appendChild(newPartiesContainer);
}

introButton.setAttribute("onclick", "page("+subjectsTitlesInQuotes[0]+");");
endButton.setAttribute("onclick", "back("+subjectsTitlesInQuotes[subjectsTitlesInQuotes.length-1]+");");
formButton.setAttribute("onclick", "questionWeight();");
endScreenPartiesArrow.setAttribute("onclick", "back("+questionsImportance+");");
endScreenResultArrow.setAttribute("onclick", "parties("+partiesLink+");");

var getPartiesInputs = [];
var inputValues = [];
for(g = 0; document.getElementsByClassName("partiesInput").length > g; g++){
	getPartiesInputs[g] = document.getElementsByClassName("partiesInput")[g];
}

var getQuestionInputs = [];
var inputValues = [];
for(g = 0; document.getElementsByClassName("questionWeightInput").length > g; g++){
	getQuestionInputs[g] = document.getElementsByClassName("questionWeightInput")[g];
}

function page(url = subjectsTitles[subjectsTitles.length-1]){
	if(url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php" || url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#intro"){
		formContainer.style.display = "none";
		endScreen.style.display = "none";
		introContainer.style.display = "block";
		endScreenParties.style.display = "none";
		endScreenQuestions.style.display = "none";
		endScreenResult.style.display = "none";
	}else if(url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#questionsImportance"){
		formContainer.style.display = "none";
		endScreen.style.display = "block";
		introContainer.style.display = "none";
		endScreenParties.style.display = "none";
		endScreenQuestions.style.display = "block";
		endScreenResult.style.display = "none";
		location.href = originalLink + "#questionsImportance";
	}else if(url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#parties"){
		formContainer.style.display = "none";
		endScreen.style.display = "block";
		introContainer.style.display = "none";
		endScreenParties.style.display = "block";
		endScreenQuestions.style.display = "none";
		endScreenResult.style.display = "none";
		location.href = originalLink + "#parties";
	}else if(url == "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#result"){
		formContainer.style.display = "none";
		endScreen.style.display = "block";
		introContainer.style.display = "none";
		endScreenParties.style.display = "none";
		endScreenQuestions.style.display = "none";
		endScreenResult.style.display = "block";
		location.href = originalLink + "#result";
	}else{
		url = url.replace('http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#','');
		url = url.replace("%20"," ");
		for(c = 0; subjectsTitles.length > c; c++){
			if(subjectsTitles[c] == url){
				formContainer.style.display = "block";
				introContainer.style.display = "none";
				endScreen.style.display = "none";
				endScreenQuestions.style.display = "none";
				endScreenParties.style.display = "none";

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
				counter++;
			}
		}
		if(counter == subjectsTitles.length){
			awnsered = false;
			location.href = originalLink + "#intro";
			url = "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#intro";
			page(url);
		}
		if(subjectsTitles[subjectsTitles.length-1] == url){
			if(goBack != true){
				document.getElementsByClassName("formColorBar")[0].style.width = "100%";
				if(userAwnsers.length == subjectsTitles.length && awnsered == true){
					location.href = originalLink + "#questionsImportance";
					url = "http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#questionsImportance";
					page(url);
				}
			}
			goBack = false;
			awnsered = false;
		}
		counter = 0;
	}
}

function awnsers(question,awnser,url){
	var choiceButtons = document.getElementsByClassName("formChoice");
	awnsersUrl = location.href.replace('http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#','');
	awnsersUrl = awnsersUrl.replace("%20"," ");
	if(awnser == "eens"){
		userAwnsers[question] = "eens";
		var question = question * 3;
		choiceButton = choiceButtons[question];
		choiceButton.style.backgroundColor = "#01B4DC";

		choiceButtonAlt = choiceButtons[question+1];
		choiceButtonAlt.style.backgroundColor = "#000";

		choiceButtonAlt = choiceButtons[question+2];
		choiceButtonAlt.style.backgroundColor = "#000";
	}else if(awnser == "geen van beide"){
		userAwnsers[question] = "geen van beide";
		var question = question * 3 + 1;
		choiceButton = choiceButtons[question];
		choiceButton.style.backgroundColor = "#01B4DC";

		choiceButtonAlt = choiceButtons[question-1];
		choiceButtonAlt.style.backgroundColor = "#000";

		choiceButtonAlt = choiceButtons[question+1];
		choiceButtonAlt.style.backgroundColor = "#000";
	}else if(awnser == "oneens"){
		userAwnsers[question] = "oneens";
		var question = question * 3 + 2;
		choiceButton = choiceButtons[question];
		choiceButton.style.backgroundColor = "#01B4DC";

		choiceButtonAlt = choiceButtons[question-2];
		choiceButtonAlt.style.backgroundColor = "#000";

		choiceButtonAlt = choiceButtons[question-1];
		choiceButtonAlt.style.backgroundColor = "#000";
	}else{
		userAwnsers[question] = "";
	}
	if(subjectsTitles[subjectsTitles.length-1] == awnsersUrl){
		awnsered = true;
	}
	page(url);
}

function back(url,buttonCommand = true){
	goBack = buttonCommand;
	page(url);
}

function questionWeight(){
	for(e = 0; subjectsTitles.length > e; e++){
		inputValues[e] = getQuestionInputs[e].checked;
	}
	var newUrl = location.href = originalLink + "#parties";
	parties(newUrl);
}

function parties(url){
	page(url);
}

function select(type){
	if(type == "all"){
		for(e = 0; subjectsTitles.length > e; e++){
			if(getPartiesInputs[e]){
				getPartiesInputs[e].checked = true;
				inputValues[e] = getPartiesInputs[e].checked;
			}
		}
	}else if(type == "none"){
		for(e = 0; subjectsTitles.length > e; e++){
			if(getPartiesInputs[e]){
				getPartiesInputs[e].checked = false;
				inputValues[e] = getPartiesInputs[e].checked;
			}
		}
	}else if(type == "allSeats"){
		for(e = 0; subjectsTitles.length > e; e++){
			for(h = 0; subjects[0]["parties"].length > h; h++){
				seated[h] = seats.includes(subjects[0]["parties"][h]["name"]);
			}
			if(getPartiesInputs[e] && seated[e] == true){
				getPartiesInputs[e].checked = true;
				inputValues[e] = getPartiesInputs[e].checked;
			}else if(getPartiesInputs[e] && seated[e] == false){
				getPartiesInputs[e].checked = false;
				inputValues[e] = getPartiesInputs[e].checked;
			}
		}
	}
}

function result(url){
	page(url);
	var totalScore = [];
	var partiesAndScores = [];

	for(m = 0; subjects[0]["parties"].length > m; m++){
	    score[m] = [];
	    partiesAndScores[m] = [];
	    partiesAndScores[m].push(subjects[0]["parties"][m]["name"]); 
	}
	for(i = 0; subjects[i]["parties"].length > i; i++){
		totalScore[i] = 0;
		for(h = 0; subjects.length > h; h++){
			for(n = 0; subjects[i]["parties"].length > n; n++){
				if(subjects[h]["parties"][n]["name"] == partiesAndScores[i][0]){
					if(subjects[h]["parties"][n]["position"] == "pro"){
						if(userAwnsers[h] == "eens"){
							if(getQuestionInputs[h].checked == true){
								score[i][h] = 2;
							}else{
								score[i][h] = 1;
							}
						}else{
							if(getQuestionInputs[h].checked == true){
								score[i][h] = -1;
							}else{
								score[i][h] = 0;
							}
						}
					}else if(subjects[h]["parties"][n]["position"] == "none"){
						if(userAwnsers[h] == "geen van beide"){
							if(getQuestionInputs[h].checked == true){
								score[i][h] = 2;
							}else{
								score[i][h] = 1;
							}
						}else{
							if(getQuestionInputs[h].checked == true){
								score[i][h] = -1;
							}else{
								score[i][h] = 0;
							}
						}
					}else if(subjects[h]["parties"][n]["position"] == "constra"){
						if(userAwnsers[h] == "oneens"){
							if(getQuestionInputs[h].checked == true){
								score[i][h] = 2;
							}else{
								score[i][h] = 1;
							}
						}else{
							if(getQuestionInputs[h].checked == true){
								score[i][h] = -1;
							}else{
								score[i][h] = 0;
							}
						}
					}else{
						if(getQuestionInputs[h].checked == true){
							score[i][h] = -1;
						}else{
							score[i][h] = 0;
						}
					}
					totalScore[i] = totalScore[i] + score[i][h];
				}
			}
		}
		partiesAndScores[i].push(totalScore[i]);
	}
	totalScore.sort(sortNumber);
	var usedParties = [];
	for(k = 0; totalScore.length > k; k++){
		q = 0;
		for(l = 0; totalScore.length > l; l++){
			if(totalScore[k] == partiesAndScores[l][1]){
				if(q == 0){
					if(usedParties.includes(partiesAndScores[l][0])){
					
					}else{
						var endScoreContainer = document.getElementsByClassName("endScoreContainer")[k];
						endScoreContainer.innerHTML = partiesAndScores[l][0] + partiesAndScores[l][1];
						usedParties.push(partiesAndScores[l][0]);
						q++;
					}
				}
			}
		}
	}
}

function sortNumber(a, b){
	return b - a;
}

page(url);