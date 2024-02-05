var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    //console.log(res);

// 1.Solving problems using array functions on rest countries data
// a.Get all the countries from Asia continent /region using Filter function
// Solution

var asia = res.filter((ele)=>ele.region == "Asia");
//console.log(asia);
var asian_country = asia.map((ele)=>ele.name.common);
console.log(asian_country);

// b.Get all the countries with a population of less than 2 lakhs using Filter function

 var popul = res.filter((ele)=>ele.population <= 200000);
 //console.log(popul);
 var name = popul.map((ele)=>ele.name.common);
 console.log(name);

 // c.Print the following details name, capital, flag, using forEach function

  res.forEach((ele)=>
  {
    if(ele.capital == undefined)
    {
        console.log (`Name ${ele.name.common} "No capital" Flag ${ele.flags.png}`);
    }
    else{
        console.log (`Name ${ele.name.common} Capital ${ele.capital[0]} flag ${ele.flags.png}`);
        }
    });
  
// d.Print the total population of countries using reduce function

 var total_popul = res.reduce((acc,cv)=> acc+cv.population,0);
 console.log(total_popul);

// e.Print the country that uses US dollars as currency

var currenc = res.filter((ele)=>ele.currencies && ele.currencies.USD);
//console.log(currenc);
var US_Dollar = currenc.map((ele)=> ele.name.common);
console.log(US_Dollar);
}