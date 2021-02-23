
// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function numlong() {
    var myarray= [];
    for(i=1; i<=255; i++){
        myarray.push(i);
    }
    return myarray;
}
var y=numlong();
console.log(y);


// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function Sumtotal(){
    var sum =0;
    for( i= 1; i<= 1000; i++){
        if( i % 2 ==0){
        sum= sum +i; 
        }
    }
    return sum;
}
console.log(Sumtotal());


// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function Sumtotal(){
    var sum =0;
    for( i= 0; i<= 5000; i++){
        if( i % 2 ==1){
        sum= sum +i; 
        }
    }
    return sum;
}
console.log(Sumtotal());
//6250000


// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function funtimes(myarr){
var sum = 0;
    for (var i=0; i< myarr.length; i++){
        sum = sum + myarr[i];
    }
    return sum;
}
console.log(funtimes([7,4,5,3]));
//19


// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findmax(numArr){
    var max = numArr[0];
    for (var i=0; i< numArr.length; i++){
        if (numArr[i] > max){
            max = numArr[i]
        }
    }
    return max;    
}
console.log(findmax([7, -9, 43, 11, 2]));


//6.  Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findaverage(numArr){
    var sum =0;
    for (var i=0; i< numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum / numArr.length;
}
console.log(findaverage([5, 7, 18, 3, 6]));

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr(){
    var arr = [];
    for (var i = 1; i< 50; i+=2){
        arr.push(i);
    }
console.log(arr);
}
oddArr();
// this worked after i followed the solution walk through, but i coudln't get the return state,ent to work, and i don't know why, so i just used a console.log. hmmm..

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function Great(numArr, y){
    var count = 0;
    for (var x = 0; x < numArr.length; x++){
        if (numArr[x] > y){
        count++;
        }
    }
    return count;
}
console.log(Great([2, 6, 8, 9, 1], 4));
// i got the answer of 3, so it works. i need help with when and how to use semicolons and curly brackets.

//9.  Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr){
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx] * arr[idx];
    }
    console.log(arr);
}
squares([4, -6, 2, 3]);


//10.  Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function neg(arr){
    for (var idx= 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
neg([4,-2, 3, -6,-8]);
//[4, 0, 3, 0, 0]

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMin(Arr){
    var sum = 0;
    var max = Arr[0];
    var min = Arr[0];
    for (var idx= 0; idx < Arr.length; idx++){
        sum = sum + Arr[idx];
        if (Arr[idx] > max){
            max= Arr[idx];
        }
        else if (Arr[idx] < min);{
        min = Arr[idx];
        }
    }
    return [max, min, sum/ Arr.length];
}
console.log(maxMin([4, -4, 7, 11, 19]));


// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-6];
swap(tester);
console.log(tester)
// I do need help understanding this one. why did we make the arr to be a variable too> couldn't we have just skipped that?


// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function noNegativesDojo(arr){
    for (var idx= 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
noNegativesDojo([4,-2, 3, -6,-8]);