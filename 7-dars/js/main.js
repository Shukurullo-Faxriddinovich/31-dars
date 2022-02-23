// Alisher's travel app

/*
var userBudget = Number(prompt("Alisher aka qancha pulingiz bor ? ", 0));

// Magic number

var ticket = 500;
var hotel = 250;
var museum = 120;

var USD_TO_UZS = 10900;
var EURO_TO_UZS = 12273;

var totalCost = (ticket + hotel) * USD_TO_UZS + museum * EURO_TO_UZS;

if(userBudget >= totalCost){
  console.log("Oq yo'l");
}else if (userBudget <= 0 ){
  console.log("Aka qarzga ketmoqchimisiz ???");
}
else{
  console.log("Alisher aka sabr qiling va ko'proq ishlang ! ");
}
*/



// var armyAge = 18;
// var health = true;


// Shart operatorlari
// <
// <=
// >
// >=
// !=
// !==
// && AND
// || OR


/*
if(18 >= armyAge || (armyAge > 15 && health == true) ){
  console.log("Xizmatga qabul qilindingiz ");
}else{
  console.log("Qabul qilinmadingiz  !");
}

*/


/*

var randomNumber = Number(prompt("Ixtiyoriy raqam kiriting :" , 0));



if(randomNumber % 3 == 0 && randomNumber % 5 == 0 ){
  console.log(`${randomNumber} soni 3 ham 5 ga ham bo'linadi !`);

}else if (randomNumber % 3 ==0 ){

  console.log(randomNumber + " soni 3 ga bo'linadi !");

}else if (randomNumber % 5 ==0 ){

  console.log(randomNumber + " soni 5 ga bo'linadi !");
}else{
  console.log(`${randomNumber} soni 3 ga ham 5 ga ham bo'linmaydi `);
}

*/


// DOM = Document Object Model


// var elSiteHeading = document.getElementsByTagName("h1");

// var elSiteHeading = document.getElementById("site-title"); #

// var elSiteHeading = document.getElementsByClassName("site-heading"); .


// var elTitle = document.querySelector(".site-heading");


// elTitle.textContent = "Hello TS";



var elForm  = document.querySelector(".form");
var elInput  = document.querySelector(".form__input");
var elSelect  = document.querySelector(".form__select");
var elResult  = document.querySelector(".form__result");



elForm.addEventListener("submit", function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
  var elSelectVal = elSelect.value;

  elResult.textContent = (`${elInputVal} VS ${elSelectVal}`);

});