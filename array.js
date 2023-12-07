const meals = ["artichokes", "bbq", "chili"];
meals[0] = "apple pie";
console.log(meals[5])

// array is changable cuz const function here is to avoid meals pointing to other array
//if want to point to another array like [1,2,3] then use let
 meals.push("egg"); //adding items to array
 const lastMeal = meals.pop();
 console.log(lastMeal); //print out the last item of array
 console.log(meals.length); //print out the # of item in array
 meals.unshift("tacos"); //move array aside to have some memory so its named unshift and item
 //is inserted to the begg
 console.log(meals.includes("bbq"));
 console.log(meals.indexOf("chili"));
 const mealsSubset = meals.slice(1,3);
 meals.splice();//remove any item completely
 //string can't do any of these so concatination create a whole new
 //string and store it in a new variable

// break// as soon as it's hit loop is ended no matter where you at in the loop
for (cost meal of meals){
    console.log(meal);
}