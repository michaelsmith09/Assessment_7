const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// In the tinyArray it takes Insert 36.4 us and Append 115.5 us.
// In the smallArray it takes Insert 46.9 us and Append 107.1 us.
// In the mediumArray it takes Insert 173.8 us and Append 264 us.
// In the largeArray it takes Insert 4.0228 ms and Append 628.6 us.
// in the extraLargeArray is takes Insert 382.4016 ms and Append 2.6069 ms.

//                  Insert:         Append:
//      tiny        36.4 us         115.5 us
//      small       46.9 us         107.1 us
//      medium      173.8 us        264 us
//      large       4.0228 ms       628.6 us
//      exLarge     328.4016 ms     2.6069 ms

// It too awhile untile the Insert array took longer than the append. The array needed to be at 10000 in the large array before
// it passed it time wise. The small and the medium arrays scaled better against each other.

// Try it with first function
perf.start();                    // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
