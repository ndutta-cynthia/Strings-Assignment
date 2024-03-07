let text = "extravaganza";
let output = text.substring(0,8);
console.log({output})
// no. 1 Extract the last four characters from the string below;"extravaganza"


//no.2 Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});


//no.3 Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
let story="The quick brown fox jumps over the lazy dog";
console.log((story.match('the')).length);
console.log((story.match('brown')).length);

//no.4
const string1 = "The pupils are reading in the library";
console.log({index: string1.indexOf('are')})



//no.5
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  console.log(titleCase('A wonderful world'));