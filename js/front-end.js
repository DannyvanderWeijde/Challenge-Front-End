// Ziet er netjes uit! 
// Probeer comments te plaatsen bij functions.
// Probeer bijv. bij de for loops; de variabelen zoals a of i, een naam te geven. Dit maakt je code duidelijker te lezen.
// Probeer te kijken of je bepaalde functions, zoals je result function, single responsibility kunt maken. D.w.z. dat de functie 1 taak heeft.
// Ziet er voor de rest erg netjes uit! Ben onder de indruk hoe je problemen in de opdracht hebt opgelost, en je kennis m.b.t. javascript.
// Nagekeken door Jesse Sommeling 91102801. 11/03/2020.

//General variables
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

//Get all quation names.
for(d = 0; subjects.length > d; d++){
	subjectsTitles[d] = subjects[d]["title"];
	subjectsTitlesInQuotes[d] = "\"" + subjectsTitles[d] + "\""; 
}

//Make the layout for all the quations.
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
}

//Create more pages.
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

	var newScoreContainer = document.createElement("div");
	newScoreContainer.className = "endScoreContainer";

	var endScoreNames = document.createElement("div");
	endScoreNames.className = "endScoreNames";
	newScoreContainer.appendChild(endScoreNames);

	var endScoreGraphBar = document.createElement("div");
	endScoreGraphBar.className = "endScoreGraphBar";

	var newPercentage = document.createElement("span");
	endScoreGraphBar.appendChild(newPercentage);

	var endScoreInnerGraphBar = document.createElement("div");
	endScoreInnerGraphBar.className = "endScoreInnerGraphBar";
	endScoreGraphBar.appendChild(endScoreInnerGraphBar);

	newScoreContainer.appendChild(endScoreGraphBar);
	endScreenResultsContainer.appendChild(newScoreContainer);
}

//Add some onclicks to buttons.
introButton.setAttribute("onclick", "page("+subjectsTitlesInQuotes[0]+");");
endButton.setAttribute("onclick", "back("+subjectsTitlesInQuotes[subjectsTitlesInQuotes.length-1]+");");
formButton.setAttribute("onclick", "questionWeight();");
endScreenPartiesArrow.setAttribute("onclick", "back("+questionsImportance+");");
endScreenResultArrow.setAttribute("onclick", "parties("+partiesLink+");");

//Putting the parties inputs in an array.
var getPartiesInputs = [];
var inputValues = [];
for(g = 0; document.getElementsByClassName("partiesInput").length > g; g++){
	getPartiesInputs[g] = document.getElementsByClassName("partiesInput")[g];
}

//Putting the quation weights in an array.
var getQuestionInputs = [];
var inputValues = [];
for(g = 0; document.getElementsByClassName("questionWeightInput").length > g; g++){
	getQuestionInputs[g] = document.getElementsByClassName("questionWeightInput")[g];
}

//Function to let the application now which sreen should be shown.
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

//Saves the awnsers of the person thats doing the test.
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

//This gives a command that the sceen has to go one back but this is online for the screens after all the quastions have been displayed.
function back(url,buttonCommand = true){
	goBack = buttonCommand;
	page(url);
}

//This checks which quations have a higher priority
function questionWeight(){
	for(e = 0; subjectsTitles.length > e; e++){
		inputValues[e] = getQuestionInputs[e].checked;
	}
	var newUrl = location.href = originalLink + "#parties";
	parties(newUrl);
}

//This makes the parties page appear.
function parties(url){
	page(url);
}

//This selects the parties for each button.
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

//This checks if the person doing the test has selected at least three parties.
function preResult(url){
	var amountOfPartiesSelected = 0;
	for(k = 0; getPartiesInputs.length > k; k++){
		var endScoreContainer = document.getElementsByClassName("endScoreContainer")[k];
		if(getPartiesInputs[k].checked == true){
			amountOfPartiesSelected++;
			endScoreContainer.style.display = "block";
		}else{
			endScoreContainer.style.display = "none";
		}
	}
	if(amountOfPartiesSelected < 3){
		alert("u moet minimaal 3 partijen kiezen");
	}else{
		calculateResult(url);
	}
}

//This make calculations for the result.
function calculateResult(url){
	var totalScore = [];
	var partiesAndScores = [];
	var totalAmountOfPoints = 0;
	totalAmountOfPoints = totalAmountOfPoints + subjects.length;
	for(e = 0; subjectsTitles.length > e; e++){
		if(getQuestionInputs[e].checked == true){
			totalAmountOfPoints++;
		}
	}
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
	result(url,totalScore,partiesAndScores,totalAmountOfPoints);
}

//This makes the result screen.
function result(url,totalScore,partiesAndScores,totalAmountOfPoints){
	page(url);
	totalScore.sort(sortNumber);
	var usedParties = [];
	for(k = 0; totalScore.length > k; k++){
		q = 0;
		for(l = 0; totalScore.length > l; l++){
			if(totalScore[k] == partiesAndScores[l][1]){
				if(q == 0){
					if(usedParties.includes(partiesAndScores[l][0])){
					
					}else{
						if(getPartiesInputs[k].checked == true){
							var endScoreNames = document.getElementsByClassName("endScoreContainer")[k].getElementsByClassName("endScoreNames")[0];
							var endScoreInnerGraphBar = document.getElementsByClassName("endScoreContainer")[k].getElementsByClassName("endScoreInnerGraphBar")[0];
							var endScoreGraphBar = document.getElementsByClassName("endScoreContainer")[k].getElementsByClassName("endScoreGraphBar")[0];
							var span = endScoreGraphBar.getElementsByTagName("span")[0];
							endScoreNames.innerHTML = partiesAndScores[l][0];
							var percentage = partiesAndScores[l][1] / totalAmountOfPoints * 100;
							percentage = Math.round(percentage);
							if(percentage < 0){
								percentage = 0;
							}
							endScoreInnerGraphBar.style.width = percentage + "%";
							span.innerHTML = percentage + "%";
							usedParties.push(partiesAndScores[l][0]);
							q++;
						}
					}
				}
			}
		}
	}
}


//This is to sort the points so it shows the one with the most points at the top.
function sortNumber(a, b){
	return b - a;
}

page(url);