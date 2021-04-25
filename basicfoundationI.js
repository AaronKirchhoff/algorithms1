
// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
// function numlong() {
//     var myarray= [];
//     for(i=1; i<=255; i++){
//         myarray.push(i);
//     }
//     return myarray;
// }
// var y=numlong();
// console.log(y);

function Mynumbers() {
    var Thisarray = [];
    for (i = 1; i <= 30; i++) {
        Thisarray.push(i);
    }
    return Thisarray;
}
// var y= Mynumbers();
// console.log(Mynumbers());

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function Sumtotal() {
    var sum = 0;
    // sum is a variable we are going to add all even numbers from 1 -1000
    for (i = 1; i <= 1000; i++) {
        // then we create a for loop to run through all even numbers only 1- 1000, and increment by i++, thats one
        if (i % 2 == 0) {
            // and if i can be divided by 2 with no remainder... 
            sum = sum + i;
            // change sum to be sum + what i is, when i is an odd number, it will not add to sum. this function runs through till i is 1000, the for loop breaks, the function returns sum, and ends th function.
        }
    }
    return sum;
}
// console.log(Sumtotal());
// 250500

// add all numbers between 1 and 100 together,
function Allnums() {
    var tot = 0;
    for (i = 0; i <= 100; i++) {
        tot = tot + i;
    }
    return tot;
}
// console.log(Allnums())
// 5050

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function Sumtotal() {
    var sum = 0;
    for (i = 0; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
}
// console.log(Sumtotal());
//6250000

// add all the even numbers together, but without the modulous operator
function noModTotal() {
    var nm = 0;
    var myArray = [];
    for (i = 0; i <= 50; i += 2) {
        myArray.push(i);
        nm = nm + i;
    }
    // console.log(myArray);
    return myArray;
    // return nm;

}
// console.log(noModTotal());


// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

// function funtimes(myarr){
// var sum = 0;
//     for (var i=0; i< myarr.length; i++){
//         sum = sum + myarr[i];
//     }
//     return sum;
// }
// console.log(funtimes([7,4,5,3]));
//19


// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findmax(numArr) {
    var max = numArr[0];
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i]
        }
    }
    return max;
}
// console.log(findmax([7, -9, 43, 11, 2]));


//6.  Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// function findaverage(numArr){
//     var sum =0;
//     for (var i=0; i< numArr.length; i++){
//         sum = sum + numArr[i];
//     }
//     return sum / numArr.length;
// }
// console.log(findaverage([5, 7, 18, 3, 6]));

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// function oddArr(){
//     var arr = [];
//     for (var i = 1; i< 50; i+=2){
//         arr.push(i);
//     }
// console.log(arr);
// }
// oddArr();
// this worked after i followed the solution walk through, but i coudln't get the return state,ent to work, and i don't know why, so i just used a console.log. hmmm..

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// function Great(numArr, y){
//     var count = 0;
//     for (var x = 0; x < numArr.length; x++){
//         if (numArr[x] > y){
//         count++;
//         }
//     }
//     return count;
// }
// console.log(Great([2, 6, 8, 9, 1], 4));
// i got the answer of 3, so it works. i need help with when and how to use semicolons and curly brackets.

//9.  Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// function squares(arr){
//     for (var idx = 0; idx < arr.length; idx++){
//         arr[idx] = arr[idx] * arr[idx];
//     }
//     console.log(arr);
// }
// squares([4, -6, 2, 3]);


//10.  Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// function neg(arr){
//     for (var idx= 0; idx < arr.length; idx++){
//         if (arr[idx] < 0){
//             arr[idx] = 0;
//         }
//     }
//     console.log(arr);
// }
// neg([4,-2, 3, -6,-8]);
//[4, 0, 3, 0, 0]

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

// function maxMin(Arr){
//     var sum = 0;
//     var max = Arr[0];
//     var min = Arr[0];
//     for (var idx= 0; idx < Arr.length; idx++){
//         sum = sum + Arr[idx];
//         if (Arr[idx] > max){
//             max= Arr[idx];
//         }
//         else if (Arr[idx] < min);{
//         min = Arr[idx];
//         }
//     }
//     return [max, min, sum/ Arr.length];
// }
// console.log(maxMin([4, -4, 7, 11, 19]));


// // 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// function swap(arr){
//     var temp = arr[arr.length-1];
//     arr[arr.length-1] = arr[0];
//     arr[0] = temp;
// }
// var tester = [1,4,10,-6];
// swap(tester);
// console.log(tester)
// I do need help understanding this one. why did we make the arr to be a variable too> couldn't we have just skipped that?


// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

// function noNegativesDojo(arr){
//     for (var idx= 0; idx < arr.length; idx++){
//         if (arr[idx] < 0){
//             arr[idx] = "Dojo";
//         }
//     }
//     console.log(arr);
// }
// noNegativesDojo([4,-2, 3, -6,-8]);


// CODILITY TEST 4/21/21

// write a function that returns the smallest possible integer not present in the array.
// fisrt, lets establish the biggest integer in the array.
// then I want to write a for loop that starts at 0 and runs to that biggest integer, looking for the the first ingeter that does not exixst,
// that will be the smallest integer in the array.
// function solution(A) {
//     var myNum = A[0];
//     var lowNum = 0;
//     for (var i = 0; i < A.length; i++) {
//         if (A[i] >= myNum) {
//             myNum = A[i];
//         }
//     }
//     for (var t = 1; t <= myNum + 1; t++){
//         if (!A.includes(t)) {
//             lowNum = t;
//             return lowNum;
//         }
//     }
//     return lowNum;

// }
// console.log(solution([54,5,3,1,9]));
// console.log(solution([1,2,3]));
// console.log(solution([-1,-3]));
// should be 1, cause its greater than 0.

// ************** new puzzle **************
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// first i need to convert N to a string of binary. i use the toString(2) method
// 2nd i need to convert the string to an array so i can look at each integer, i use   Array.from(d);
// then, I want ed to look at each integer and say, if it is equal to '0', go ahead and add it to the variable oneCount. do this until you hit a 1 in the binary sequence..
// which takes you to the else statement and pushes that count to our empty array, gapArray. we do this for the whole loop, creating a new array, wiwht a list of gap lengths!
// then we just create another new variable called max, and loop through the gapArray looking for the biggest number. and we return that number.
// there is a runtime issue however, that if the binary seqeunce is super long, the resulting array will be too long and cause the computer to freeze running my program.


function solution2(N) {
    var oneCount = 0;
    var gapArray = [];
    var d = (N >>> 0).toString(2);
    console.log(d);
    var thisArray = Array.from(d);
    console.log(thisArray);
    for (var i = 0; i <= thisArray.length; i++) {
        if (thisArray[i] === '0') {
            oneCount++;       
        } else {
            gapArray.push(oneCount);
            oneCount = 0;
        }
    }
    var max = gapArray[0];
    for (var t = 0; t <= gapArray.length; t++) {
        if (gapArray[t] > max) {
            max = gapArray[t];
        }
    }
    return max;
}
console.log(solution2(15));
// shpuold return 5

// ********* new puzzle , cylcic rotation*************
// so i know I need a new array, i can create a variable that empty = newArr
// solution found...https://gist.github.com/k0ff33/3029d30fb4ae62a72b0c54f2cb39893d
// A.splice adds/ removes elemtns from array, months.splice(1, 0, 'Feb'); says make the 1 index 'Feb', the 0 means deleteCount, nevermid that doesnt work.



function solution(A, K) {
    var myArray = [];
    myArray = A.splice(K).concat(A.slice(0, K));
    return myArray;
}

// console.log(solution([2,3,4,5,6], 1));
// should return [6,2,3,4,5]

// *************** odd occurance in array *******************
// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// I think what i want to do is take an index, and loop it through the array, comparing it othe rindecies, and if it == that index, stop and move to the next one. if one index != does not equal another, add it to an empty list and return it at the end.
// success!!! so the first thing i did was .sort() the array ascending by default.
// create an empty variable to capture the first odd, no pair intiger in the array.
// then I looped through starting at 0 index and comparing it the following index...
// and if they are equal (A[i] === A[i + 1]), then skip the pair, change i to the next intiger, increment by 2. genius!
// if they are not equal, change the empty variabe to what that index is and return the function, ending it.
function solution4(A) {
    A.sort();
    var noPair = 0;
    for (var i = 0; i < A.length;) {
        if (A[i] === A[i + 1]) {
            i = i + 2;
        } else {
            noPair = A[i];
            return noPair;
        }
    }
}
// console.log(solution4([2,4,6,4,6,2,9]));
// should return 9
