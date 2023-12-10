//Variables Initialization
let dataArray; //declaring the array here to give it a broader scope
let finalSum = 0;

//Getting HTML elements
let arrayListContainer = document.getElementById('arrayList'); //Getting container for array listing
let ul = document.createElement('ul'); //Creating ul variable containing the tag

let finalResultContainer = document.getElementById('finalResultContainer'); //Getting the final result container
let result = document.createElement('p');

//fetching response data from puzzleinput.txt (this has a lot of metadata from the response)
fetch('puzzleinput.txt')

    // The promise is resolved with the .then...
    //...trimmed out of the metadata to keep the text only
    //response.text() returns another promise
    .then(response => response.text())

    // this new promise is resolved underneath
    .then(textData => {
        const dataArray = textData.split('\n');
        console.log(dataArray);
        
        //Main loop iterating through array content :
        //The main loop needs to be in the .then otherwise...
        //...It might run before the program is done fetching the data
        for (let i = 0; i < dataArray.length; i++) {

            // This creates a <li> with the current string we are iterating through
            let li = document.createElement('li');
            li.textContent = dataArray[i];
            //and appends it to the ul element
            ul.appendChild(li);

            //Creating an array containing the digits present in the current string of index i
            const digitsArray = dataArray[i].match(/\d/g)

            //Making sure the array of digits is not empty
            if (digitsArray !== null) {

                //Getting the first and last digits
                const firstDigit = digitsArray[0]; 
                const lastDigit = digitsArray[digitsArray.length - 1];
                
                //Logging for debug purpose
                console.log(dataArray[i]); //string
                console.log(digitsArray); //array of only the numbers in that string
                console.log(firstDigit); //first digit of the array
                console.log(lastDigit); //last digit of the array

                //Concatenating both digits, as they are strings, and turning them into Int
                const resultInt = parseInt(firstDigit + lastDigit);
                console.log(resultInt);

                //adding the result to the total, final sum
                finalSum += resultInt;
                console.log(finalSum);
                
                /*Better solution with regex $ sign to get the last digit :
                
                const firstDigit = parseInt(example[i].match(/\d/)[0]);
                const lastDigit = parseInt(example[i].match(/\d$/)[0]);*/

            } else {
                console.log("No digit found in string");
            }
            
        //placing the ul list in the HTML container
        arrayListContainer.appendChild(ul);

        //adding the final sum to result which contains a <p> and appending that to the container
        result.textContent = finalSum;
        finalResultContainer.appendChild(result);

        }
    });
