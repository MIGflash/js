//for(let i=1;101>i;i++)console.log(i%5||i%3?i%3?i%5?i:"Tree":"Five":"TreeFive");

let num = 1;
for (i = 1; num <= 100; num ++) 
{
 if ((num % 3 === 0) && (num % 5 === 0))
  console.log("TreeFive");
  else
 if (num % 3 === 0)
  console.log("Tree");
  else
 if ((num % 3 != 0) && (num % 5 === 0))
  console.log("Five");
  else
  console.log(num);
}

