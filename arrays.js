const arr1 = ['jagan', 'pk', 'cbn'];
let arr2 = ['suneel', 143, 2, 'suneel reddy', '420', arr1];
console.log("arr1 ", arr1);
console.log("arr2", arr2);
let arr3 = arr2.concat(arr1);
console.log("arr3", arr3);
arr3.push('love');
arr3.pop();
arr3.unshift('item');
arr3.shift();
let sampleArray = [1, 'two', 3, 'four', 5, 'six', 7];
let slicedArray1 = sampleArray.slice(2);//from index 2 (inclusive) till last
console.log("slicedArray1 " + slicedArray1);
let slicedArray2 = sampleArray.slice(2, 5)// from index 2(inclusive) till 5th index (exclusive)
console.log("slicedArray2 " + slicedArray2);
let slicedArray3 = sampleArray.slice(-3);// from last it will take consider last element as -1 and second last as -2 and 3rd will be included
console.log("slicedArray3 " + slicedArray3);
let slicedArray4 = sampleArray.slice(-4, -1);// from last 4th element (inclusive) till last 1st element (exclusive)
console.log("slicedArray4 " + slicedArray4);

//splice will change the original array, but where as slice wont change the original array
let splicedArray1 = sampleArray.splice(2, 3); //starting from index 2 it will remove 3 elements
//sampleArray.splice(-3); //as same as slice() from last it will take consider last element as -1 and second last as -2 and 3rd will be included
//sampleArray.splice(2, 3, "new1", "new2"); // it will remove 3 elements from the index 2 and add the provided elements can reomve 1 and add n elements and remove n and u can add 1 also
//sampleArray.splice(2, 0, "new1", "new2"); // it wont remove any elements but add the given elements before 2nd index
//sampleArray.splice(2); // removes all the elemnets from index 2
console.log("splicedArray1 " + splicedArray1);//return removed elements
console.log("sampleArray" + sampleArray);// returns remaining array after removal
let reversed = sampleArray.toReversed();//  reverse the array
console.log("reversed " + reversed);
let withMethod = sampleArray.with(0, "changed value");// changes the element in that particular index with the given element
console.log("with " + withMethod);
