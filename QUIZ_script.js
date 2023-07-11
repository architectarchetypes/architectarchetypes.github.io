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
document.getElementById("PuBl").style.backgroundColor = 'whitesmoke';
document.getElementById("PuBl").style.color = '#231F20';
resultCRScore++;
resultATScore+=2;
resultAKScore+=3;
}
function resultQ1B() { 
//questionCount++;
document.getElementById("OnBl").style.backgroundColor = 'whitesmoke';
document.getElementById("OnBl").style.color = '#231F20';
resultEMScore++;
resultEWScore+=2;
resultDVScore+=3;
}
function resultQ1C() { 
//questionCount++;
document.getElementById("OlBl").style.backgroundColor = 'whitesmoke';
document.getElementById("OlBl").style.color = '#231F20';
resultCMScore++;
resultTLScore+=2;
resultMAScore+=3;
}
function resultQ1D() { 
//questionCount++;
document.getElementById("LiBl").style.backgroundColor = 'whitesmoke';
document.getElementById("LiBl").style.color = '#231F20';
resultEPScore++;
resultNCScore+=2;
resultWCScore+=3;
}



//Q2
function resultQ2A() { 
//questionCount++;
document.getElementById("BloBl").style.backgroundColor = 'whitesmoke';
document.getElementById("BloBl").style.color = '#231F20';
resultEWScore++;
resultEMScore+=2;
resultCMScore+=3;
}
function resultQ2B() { 
//questionCount++;
document.getElementById("BloWh").style.backgroundColor = 'whitesmoke';
document.getElementById("BloWh").style.color = '#231F20';
resultWCScore++;
resultTLScore+=2;
resultDVScore+=3;
}
function resultQ2C() { 
//questionCount++;
document.getElementById("WhoBl").style.backgroundColor = 'whitesmoke';
document.getElementById("PuBl").style.color = '#231F20';
resultNCScore++;
resulMAScore+=2;
resultEMScore+=3;
}
function resultQ2D() { 
//questionCount++;
document.getElementById("WhoWh").style.backgroundColor = 'whitesmoke';
document.getElementById("WhoWh").style.color = '#231F20';
resultAKScore++;
resultEWScore+=2;
resultCRScore+=3;
}



//Q3
function resultQ3A() { 
//questionCount++;
document.getElementById("CoreI").style.backgroundColor = 'whitesmoke';
document.getElementById("COreI").style.color = '#231F20';
resultDVScore++;
resultNCScore+=2;
resultEMScore+=3;
}
function resultQ3B() { 
//questionCount++;
document.getElementById("Geo").style.backgroundColor = 'whitesmoke';
document.getElementById("Geo").style.color = '#231F20';
resultMAScore++;
resultEPScore+=2;
resultTLScore+=3;
}
function resultQ3C() { 
//questionCount++;
document.getElementById("ET").style.backgroundColor = 'whitesmoke';
document.getElementById("ET").style.color = '#231F20';
resultCMScore++;
resultWCScore+=2;
resultEWScore+=3;
}
function resultQ3D() { 
//questionCount++;
document.getElementById("Pos").style.backgroundColor = 'whitesmoke';
document.getElementById("Pos").style.color = '#231F20';
resultAKScore++;
resultATScore+=2;
resultCRScore+=3;
}

//Q4

function resultQ4A() { 
//questionCount++;
document.getElementById("sus").style.backgroundColor = 'whitesmoke';
document.getElementById("sus").style.color = '#231F20';
resultNCScore++;
resultWCScore+=2;
resultEWScore+=3;
}
function resultQ4B() { 
//questionCount++;
document.getElementById("rec").style.backgroundColor = 'whitesmoke';
document.getElementById("rec").style.color = '#231F20';
resultEMScore++;
resultDVScore+=2;
resultMAScore+=3;
}
function resultQ4C() { 
//questionCount++;
document.getElementById("socJu").style.backgroundColor = 'whitesmoke';
document.getElementById("socJu").style.color = '#231F20';
resultAKScore++;
resultCRScore+=2;
resultATScore+=3;
}
function resultQ4D() { 
//questionCount++;
document.getElementById("innov").style.backgroundColor = 'whitesmoke';
document.getElementById("innov").style.color = '#231F20';
resultCMScore++;
resultEPScore+=2;
resultTLScore+=3;
}

//Q5

function resultQ5A() { 
//questionCount++;
document.getElementById("s+e").style.backgroundColor = 'whitesmoke';
document.getElementById("s+e").style.color = '#231F20';
resultAKScore++;
resultEMScore+=2;
resultCRScore+=3;
}
function resultQ5B() { 
//questionCount++;
document.getElementById("f+f").style.backgroundColor = 'whitesmoke';
document.getElementById("f+f").style.color = '#231F20';
resultEPScore++;
resultWCScore+=2;
resultTLScore+=3;
}
function resultQ5C() { 
//questionCount++;
document.getElementById("p+u").style.backgroundColor = 'whitesmoke';
document.getElementById("p+u").style.color = '#231F20';
resultDVScore++;
resultMAScore+=2;
resultATScore+=3;
}
function resultQ5D() { 
//questionCount++;
document.getElementById("m+c").style.backgroundColor = 'whitesmoke';
document.getElementById("m+c").style.color = '#231F20';
resultEWScore++;
resultCMScore+=2;
resultNCScore+=3;
}

//Q6

function resultQ6A() { 
//questionCount++;
document.getElementById("f+g").style.backgroundColor = 'whitesmoke';
document.getElementById("f+g").style.color = '#231F20';
resultEMScore++;
resultMAScore+=2;
resultTLScore+=3;
}
function resultQ6B() { 
//questionCount++;
document.getElementById("m+a").style.backgroundColor = 'whitesmoke';
document.getElementById("m+a").style.color = '#231F20';
resultCRScore++;
resultWCScore+=2;
resultERScore+=3;
}
function resultQ6C() { 
//questionCount++;
document.getElementById("f+p").style.backgroundColor = 'whitesmoke';
document.getElementById("f+p").style.color = '#231F20';
resultCMScore++;
resultNCScore+=2;
resultEPScore+=3;
}
function resultQ6D() { 
//questionCount++;
document.getElementById("s+pi").style.backgroundColor = 'whitesmoke';
document.getElementById("s+pi").style.color = '#231F20';
resultDVScore++;
resultAKScore+=2;
resultATScore+=3;
}

//Q7

function resultQ7A() { 
//questionCount++;
document.getElementById("Within/out").style.backgroundColor = 'whitesmoke';
document.getElementById("Within/out").style.color = '#231F20';
resultTLScore++;
resultDVScore+=2;
resultATScore+=3;
}
function resultQ7B() { 
//questionCount++;
document.getElementById("Chartruth").style.backgroundColor = 'whitesmoke';
document.getElementById("Chartruth").style.color = '#231F20';
resultEMScore++;
resultCRScore+=2;
resultAKScore+=3;
}
function resultQ7C() { 
//questionCount++;
document.getElementById("MoMoney").style.backgroundColor = 'whitesmoke';
document.getElementById("MoMoney").style.color = '#231F20';
resultMAScore++;
resultNCScore+=2;
resultCMScore+=3;
}
function resultQ7D() { 
//questionCount++;
document.getElementById("Hose").style.backgroundColor = 'whitesmoke';
document.getElementById("Hose").style.color = '#231F20';
resultEPScore++;
resultNCScore+=2;
resultEWScore+=3;
}

//Q8

function resultQ8A() { 
//questionCount++;
document.getElementById("Est").style.backgroundColor = 'whitesmoke';
document.getElementById("Est").style.color = '#231F20';
resultMAScore++;
resultTLScore+=2;
resultNCScore+=3;
}
function resultQ8B() { 
//questionCount++;
document.getElementById("interdisc").style.backgroundColor = 'whitesmoke';
document.getElementById("interdisc").style.color = '#231F20';
resultEWScore++;
resultATScore+=2;
resultCMScore+=3;
}
function resultQ8C() { 
//questionCount++;
document.getElementById("acad").style.backgroundColor = 'whitesmoke';
document.getElementById("acad").style.color = '#231F20';
resultATScore++;
resultEMScore+=2;
resultCRScore+=3;
}
function resultQ8D() { 
//questionCount++;
document.getElementById("notArch").style.backgroundColor = 'whitesmoke';
document.getElementById("notArch").style.color = '#231F20';
resultDVScore++;
resultWCScore+=2;
resultAKScore+=3;
}

//Q9

function resultQ9A() { 
//questionCount++;
document.getElementById("stitch").style.backgroundColor = 'whitesmoke';
document.getElementById("stitch").style.color = '#231F20';
resultATScore++;
resultCRScore+=2;
resultEMScore+=3;
}
function resultQ9B() { 
//questionCount++;
document.getElementById("kiss").style.backgroundColor = 'whitesmoke';
document.getElementById("kiss").style.color = '#231F20';
resultMAScore++;
resultAKScore+=2;
resultDVScore+=3;
}
function resultQ9C() { 
//questionCount++;
document.getElementById("interface").style.backgroundColor = 'whitesmoke';
document.getElementById("interface").style.color = '#231F20';
resultCMScore++;
resultTLScore+=2;
resultWCScore+=3;
}
function resultQ9D() { 
//questionCount++;
document.getElementById("meet").style.backgroundColor = 'whitesmoke';
document.getElementById("meet").style.color = '#231F20';
resultEPScore++;
resultEWScore+=2;
resultNCScore+=3;
}

//Q10

function resultQ10A() { 
//questionCount++;
document.getElementById("res").style.backgroundColor = 'whitesmoke';
document.getElementById("res").style.color = '#231F20';
resultEPScore++;
resultCMScore+=2;
resultNCScore+=3;
}
function resultQ10B() { 
//questionCount++;
document.getElementById("public").style.backgroundColor = 'whitesmoke';
document.getElementById("public").style.color = '#231F20';
resultDVScore++;
resultMAScore+=2;
resultEWScore+=3;
}
function resultQ10C() { 
//questionCount++;
document.getElementById("park").style.backgroundColor = 'whitesmoke';
document.getElementById("park").style.color = '#231F20';
resultTLScore++;
resultWCScore+=2;
resultATScore+=3;
}
function resultQ10D() { 
//questionCount++;
document.getElementById("crit").style.backgroundColor = 'whitesmoke';
document.getElementById("crit").style.color = '#231F20';
resultAKScore++;
resultCRScore+=2;
resultEMScore+=3;
}

//Q11

function resultQ11A() { 
//questionCount++;
document.getElementById("pedagogy").style.backgroundColor = 'whitesmoke';
document.getElementById("pedagogy").style.color = '#231F20';
resultEPScore++;
resultAKScore+=2;
resultEMScore+=3;
}
function resultQ11B() { 
//questionCount++;
document.getElementById("archive").style.backgroundColor = 'whitesmoke';
document.getElementById("archive").style.color = '#231F20';
resultATScore++;
resultDVScore+=2;
resultCRScore+=3;
}
function resultQ11C() { 
//questionCount++;
document.getElementById("program").style.backgroundColor = 'whitesmoke';
document.getElementById("program").style.color = '#231F20';
resultMAScore++;
resultNCScore+=2;
resultCMScore+=3;
}
function resultQ11D() { 
//questionCount++;
document.getElementById("mass").style.backgroundColor = 'whitesmoke';
document.getElementById("mass").style.color = '#231F20';
resultWCScore++;
resultTLScore+=2;
resultEWScore+=3;
}

//Q12

function resultQ12A() { 
//questionCount++;
document.getElementById("d+c").style.backgroundColor = 'whitesmoke';
document.getElementById("d+c").style.color = '#231F20';
resultEWScore++;
resultCRScore+=2;
resultAKScore+=3;
}
function resultQ12B() { 
//questionCount++;
document.getElementById("fsb").style.backgroundColor = 'whitesmoke';
document.getElementById("fsb").style.color = '#231F20';
resultWCScore++;
resultTLScore+=2;
resultDVScore+=3;
}
function resultQ12C() { 
//questionCount++;
document.getElementById("u+di").style.backgroundColor = 'whitesmoke';
document.getElementById("u+di").style.color = '#231F20';
resultATScore++;
resultMAScore+=2;
resultCMScore+=3;
}
function resultQ12D() { 
//questionCount++;\
document.getElementById("sleep").style.backgroundColor = 'whitesmoke';
document.getElementById("sleep").style.color = '#231F20';
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


/*$('input[type=button]').click(function() {
   $('input[type=button]').removeClass('active');
   $(this).addClass('active');
});*/
	
