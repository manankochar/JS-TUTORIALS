function sum(num1,num2,fnToCall){
    let results = num1+num2;
    fnToCall(results);
}

function displayResults(data){
    console.log("Results of the sum is " + data);
}

function displayResultsPassive(data){
    console.log("Sum's result is "+data);
}

const ans = sum(1,2,displayResultsPassive);