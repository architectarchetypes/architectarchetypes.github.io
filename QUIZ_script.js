//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
let resultDVScore = 0;
let resultTLScore = 0;
let resultEWScore = 0;
let resultCMScore = 0;
let resultCRScore = 0;
let resultATScore = 0;
let resultEMScore = 0;
let resultAKScore = 0;
let resultWCScore = 0;
let resultMAScore = 0;
let resultNCScore = 0;
let resultEPScore = 0;
const arrayProfile = ["the diva", "the tech lord", "the eco-warrior", "the client magnet", "the curator", "the activist", "the emeritus", "the art kid", "the west coaster", "the macho", "the normie", "the emerging practitioner"];

//#TODO: Use the DOM to create variables for the first quiz question.
//first question
//var q1a1 = document.getElementById("q1a1");
//var q1a2 = document.getElementById("q1a2");
//var q1a3 = document.getElementById("q1a3");
//var q1a4 = document.getElementById("q1a4");
////second question
//var q2a1 = document.getElementById("q2a1");
//var q2a2 = document.getElementById("q2a2");
//var q2a3 = document.getElementById("q2a3");
//var q2a4 = document.getElementById("q2a4");
////third question
//var q3a1 = document.getElementById("q3a1");
//var q3a2 = document.getElementById("q3a2");
//var q3a3 = document.getElementById("q3a3");
//var q3a4 = document.getElementById("q3a4");
////fourth question
//var q4a1 = document.getElementById("q4a1");
//var q4a2 = document.getElementById("q4a2");
//var q4a3 = document.getElementById("q4a3");
//var q4a4 = document.getElementById("q4a4");
////fifth question
//var q5a1 = document.getElementById("q5a1");
//var q5a2 = document.getElementById("q5a2");
//var q5a3 = document.getElementById("q5a3");
//var q5a4 = document.getElementById("q5a4");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");



//#TODO: Define quiz functions here
// Q1
function resultQ1A() { 
//questionCount++;
resultCRScore++;
resultATScore+=2;
resultAKScore+=3;
}
function resultQ1B() { 
//questionCount++;
resultEMScore++;
resultEWScore+=2;
resultDVScore+=3;
}
function resultQ1C() { 
//questionCount++;
resultCMScore++;
resultTLScore+=2;
resultMAScore+=3;
}
function resultQ1D() { 
//questionCount++;
resultEPScore++;
resultNCScore+=2;
resultWCScore+=3;
}



//Q2
function resultQ2A() { 
//questionCount++;
resultEWScore++;
resultEMScore+=2;
resultCMScore+=3;
}
function resultQ2B() { 
//questionCount++;
resultWCScore++;
resultTLScore+=2;
resultDVScore+=3;
}
function resultQ2C() { 
//questionCount++;
resultNCScore++;
resulMAScore+=2;
resultEMScore+=3;
}
function resultQ2D() { 
//questionCount++;
resultAKScore++;
resultEWScore+=2;
resultCRScore+=3;
}



//Q3
function resultQ3A() { 
//questionCount++;
resultDVScore++;
resultNCScore+=2;
resultEMScore+=3;
}
function resultQ3B() { 
//questionCount++;
resultMAScore++;
resultEPScore+=2;
resultTLScore+=3;
}
function resultQ3C() { 
//questionCount++;
resultCMScore++;
resultWCScore+=2;
resultEWScore+=3;
}
function resultQ3D() { 
//questionCount++;
resultAKScore++;
resultATScore+=2;
resultCRScore+=3;
}

//Q4

function resultQ4A() { 
//questionCount++;
resultNCScore++;
resultWCScore+=2;
resultEWScore+=3;
}
function resultQ4B() { 
//questionCount++;
resultEMScore++;
resultDVScore+=2;
resultMAScore+=3;
}
function resultQ4C() { 
//questionCount++;
resultAKScore++;
resultCRScore+=2;
resultATScore+=3;
}
function resultQ4D() { 
//questionCount++;
resultCMScore++;
resultEPScore+=2;
resultTLScore+=3;
}

//Q5

function resultQ5A() { 
//questionCount++;
resultAKScore++;
resultEMScore+=2;
resultCRScore+=3;
}
function resultQ5B() { 
//questionCount++;
resultEPScore++;
resultWCScore+=2;
resultTLScore+=3;
}
function resultQ5C() { 
//questionCount++;
resultDVScore++;
resultMAScore+=2;
resultATScore+=3;
}
function resultQ5D() { 
//questionCount++;
resultEWScore++;
resultCMScore+=2;
resultNCScore+=3;
}

//Q6

function resultQ6A() { 
//questionCount++;
resultEMScore++;
resultMAScore+=2;
resultTLScore+=3;
}
function resultQ6B() { 
//questionCount++;
resultCRScore++;
resultWCScore+=2;
resultERScore+=3;
}
function resultQ6C() { 
//questionCount++;
resultCMScore++;
resultNCScore+=2;
resultEPScore+=3;
}
function resultQ6D() { 
//questionCount++;
resultDVScore++;
resultAKScore+=2;
resultATScore+=3;
}

//Q7

function resultQ7A() { 
//questionCount++;
resultTLScore++;
resultDVScore+=2;
resultATScore+=3;
}
function resultQ7B() { 
//questionCount++;
resultEMScore++;
resultCRScore+=2;
resultAKScore+=3;
}
function resultQ7C() { 
//questionCount++;
resultMAScore++;
resultNCScore+=2;
resultCMScore+=3;
}
function resultQ7D() { 
//questionCount++;
resultEPScore++;
resultNCScore+=2;
resultEWScore+=3;
}

//Q8

function resultQ8A() { 
//questionCount++;
resultMAScore++;
resultTLScore+=2;
resultNCScore+=3;
}
function resultQ8B() { 
//questionCount++;
resultEWScore++;
resultATScore+=2;
resultCMScore+=3;
}
function resultQ8C() { 
//questionCount++;
resultATScore++;
resultEMScore+=2;
resultCRScore+=3;
}
function resultQ8D() { 
//questionCount++;
resultDVScore++;
resultWCScore+=2;
resultAKScore+=3;
}

//Q9

function resultQ9A() { 
//questionCount++;
resultATScore++;
resultCRScore+=2;
resultEMScore+=3;
}
function resultQ9B() { 
//questionCount++;
resultMAScore++;
resultAKScore+=2;
resultDVScore+=3;
}
function resultQ9C() { 
//questionCount++;
resultCMScore++;
resultTLScore+=2;
resultWCScore+=3;
}
function resultQ9D() { 
//questionCount++;
resultEPScore++;
resultEWScore+=2;
resultNCScore+=3;
}

//Q10

function resultQ10A() { 
//questionCount++;
resultEPScore++;
resultCMScore+=2;
resultNCScore+=3;
}
function resultQ10B() { 
//questionCount++;
resultDVScore++;
resultMAScore+=2;
resultEWScore+=3;
}
function resultQ10C() { 
//questionCount++;
resultTLScore++;
resultWCScore+=2;
resultATScore+=3;
}
function resultQ10D() { 
//questionCount++;
resultAKScore++;
resultCRScore+=2;
resultEMScore+=3;
}

//Q11

function resultQ11A() { 
//questionCount++;
resultEPScore++;
resultAKScore+=2;
resultEMScore+=3;
}
function resultQ11B() { 
//questionCount++;
resultATScore++;
resultDVScore+=2;
resultCRScore+=3;
}
function resultQ11C() { 
//questionCount++;
resultMAScore++;
resultNCScore+=2;
resultCMScore+=3;
}
function resultQ11D() { 
//questionCount++;
resultWCScore++;
resultTLScore+=2;
resultEWScore+=3;
}

//Q12

function resultQ12A() { 
//questionCount++;
resultEWScore++;
resultCRScore+=2;
resultAKScore+=3;
}
function resultQ12B() { 
//questionCount++;
resultWCScore++;
resultTLScore+=2;
resultDVScore+=3;
}
function resultQ12C() { 
//questionCount++;
resultATScore++;
resultMAScore+=2;
resultCMScore+=3;
}
function resultQ12D() { 
//questionCount++;
resultEPScore++;
resultEMScore+=2;
resultNCScore+=3;
}




function updateResult() {
let arrayResults = [resultDVScore, resultTLScore, resultEWScore, resultCMScore, resultCRScore, resultATScore, resultEMScore, resultAKScore, resultWCScore, resultMAScore, resultNCScore, resultEPScore];
  let resultMax = 0;
  let result2Max = 0;
  let result3Max = 0;
  let topResultIndex = 0;
  let top2ResultIndex = 0;
  let top3ResultIndex = 0;
  for (let i = 0; i < arrayResults.length; i++) {
    if (arrayResults[i] > resultMax) {
      resultMax = arrayResults[i];
      topResultIndex = i;
    }
  }
  arrayResults[topResultIndex] = 0;
  for (let i = 0; i < arrayResults.length; i++) {
    if (arrayResults[i] > result2Max) {
      result2Max = arrayResults[i];
      top2ResultIndex = i
    }
  }
  arrayResults[top2ResultIndex] = 0;
  for (let i = 0; i < arrayResults.length; i++) {
    if (arrayResults[i] > result3Max) {
      result3Max = arrayResults[i];
      top3ResultIndex = i
    }
  }
  for (let n = 0; n < arrayResults.length; n++) {
    if (topResultIndex == n) {
      result.innerHTML = arrayProfile[n];
    }
    if (top2ResultIndex == n) {
      result2.innerHTML = arrayProfile[n];
    }
    if (top3ResultIndex == n) {
      result3.innerHTML = arrayProfile[n];
    }
  }
let resultPage = document.getElementById("resultspage");
resultPage.style.display = "block";
let imgPro = document.getElementById("resultpro");
let imgInfo = document.getElementById("resultinfo");	
	if (topResultIndex== 0){imgPro.src = "images/purplebg.png";
	   imgInfo.src = "images/Divainfo.png"}
else if (topResultIndex==1){imgPro.src = "images/bluebg.png";
				  imgInfo.src = "images/TLinfo.png"}
else if (topResultIndex==2){imgPro.src = "images/greenbg.png";
					  imgInfo.src = "images/EWinfo.png"}
else if(topResultIndex==3){imgPro.src = "images/blackbg.png";
				  imgInfo.src = "images/CMinfo.png"}
else if(topResultIndex==4){imgPro.src = "images/blueebg.png";
				  imgInfo.src = "images/CRinfo.png"}
else if(topResultIndex==5){imgPro.src = "images/purplebg.png";
				  imgInfo.src = "images/ATinfo.png"}
else if(topResultIndex==6){imgPro.src = "images/bluebg.png";
				  imgInfo.src = "images/EMinfo.png"}
else if(topResultIndex==7){imgPro.src = "images/orangebg.png";
				  imgInfo.src = "images/AKinfo.png"}
else if(topResultIndex==8){imgPro.src = "images/greenbg.png";
				  imgInfo.src = "images/WCinfo.png"}
else if(topResultIndex==9){imgPro.src = "images/orangebg.png";
				  imgInfo.src = "images/Mainfo.png"}
else if(topResultIndex==10){imgPro.src = "images/blackbg.png";
				  imgInfo.src = "images/NCinfo.png"}
else {imgPro.src = "images/orangebg.png";
				  imgInfo.src = "images/EPinfo.png"}
}



	
