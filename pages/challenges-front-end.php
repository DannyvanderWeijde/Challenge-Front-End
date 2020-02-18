<div class="websiteContainer">
	<div class="introContainer">
		<button class="introButton">
			Start
		</button>
	</div>
	<div class="formContainer">
		<div class="formHeaderContainer">
			<div class="formColorBar"></div>
			<div class="formArrowContainer">
				<i id="formArrow" class="fas fa-arrow-left"></i>
			</div>
		</div>
		<div class="formContentContainer">
			<div class="formInnerContentContainer"></div>
		</div>
	</div>
	<div class="endScreenContainer">
		<div class="endScreenQuestions">
			<div class="endScreenColorBar"></div>
			<div class="formArrowContainer">
				<i id="endScreenArrow" class="fas fa-arrow-left"></i>
			</div>
			<div class="formContentContainer">
				<div class="formInnerContentContainer">
					<div class="endScreenQuestionsHeader">
						<h2>
							Zijn er onderwerpen die u extra belangrijk vindt?
						</h2>
						<p>
							Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.
						</p>
						<button class="formButton">
							Ga verder
						</button>
					</div>
					<div class="endScreenQuestionsWeights">
						<h3>
							Extra belangrijke onderwerpen
						</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="endScreenParties">
			<div class="endScreenColorBar"></div>
				<div class="formArrowContainer">
					<i id="endScreenPartiesArrow" class="fas fa-arrow-left"></i>
				</div>
				<div class="formContentContainer">
					<div class="formInnerContentContainer">
						<div class="endScreenPartiesHeader">
							<h2>
								Welke partijen wilt u meenemen in het resultaat?
							</h2>
							<p>
								U kunt kiezen voor <strong>zittende partijen</strong>, die nu in de Tweede Kamer vertegenwoordigd zijn. Daarbij nemen we ook de partijen mee die in de peilingen op minimaal één zetel staan. U kunt <strong>alle partijen</strong> meenemen en u kunt een <strong>eigen selectie</strong> maken van tenminste drie partijen.
							</p>
							<button class="formButton" onclick="result('http://localhost/leerjaar%202%20(www)/block%207/challenges/front-end/Challenge-Front-End/index/body.php#result');">
								Naar resultaat
							</button>
						</div>
						<div class="endScreenPartiesContainer">
							<div class="PartiesHeader">
								<h3>
									Kies de partijen die u mee wilt nemen in het resultaat
								</h3>
								<button onclick="select('allSeats');">
									Selecteer zittende partijen
								</button>
								<button onclick="select('all');">
									Selecteet alle partijen
								</button>
								<button onclick="select('none');">
									Verwijder selectie
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="endScreenResult">
				<div class="endScreenColorBar"></div>
				<div class="formArrowContainer">
					<i id="endScreenResultArrow" class="fas fa-arrow-left"></i>
				</div>
				<div class="formContentContainer">
					<div class="endScreenResultHeader">
						<h2>
							Dit zijn uw resultaten van onze stemwijzer.
						</h2>
					</div>
					<div class="endScreenResultsContainer">
					</div>
				</div>
			</div>
		</div>
	</div>
</div>