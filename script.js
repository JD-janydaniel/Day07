let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let res = JSON.parse(request.response);
    //console.log(res);

// 1.Solving problems using array functions on rest countries data
// a.Get all the countries from Asia continent /region using Filter function
// Solution

let asia = res.filter((ele)=>ele.region == "Asia");
//console.log(asia);
let asian_country = asia.map((ele)=>ele.name.common);
console.log(asian_country);

// b.Get all the countries with a population of less than 2 lakhs using Filter function

 let popul = res.filter((ele)=>ele.population <= 200000);
 //console.log(popul);
 let name = popul.map((ele)=>ele.name.common);
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

 let total_popul = res.reduce((acc,cv)=> acc+cv.population,0);
 console.log(total_popul);

// e.Print the country that uses US dollars as currency

let currenc = res.filter((ele)=>ele.currencies && ele.currencies.USD);
//console.log(currenc);
let US_Dollar = currenc.map((ele)=> ele.name.common);
console.log(US_Dollar);
}