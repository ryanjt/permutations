/**
 * The following is the function where the solution shall be written
 */

function solution(input) {
    //Check and remove letters.
    //Regex to check for characters A-Z. Bonus - remove special characters.
    var regex = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    var newInput = input.replace(regex, '');
    //Remove spaces.
    newInput = newInput.replace(/\s/g, '');
    var numbers = [];
    if (newInput.length == 0) {
        return "No integers present. Exiting program.";

    }

    //Start the permutations - get newInput and convert to char array.
    generate(newInput.length, newInput.split(''));

    function generate(k, a) {

        if (k == 1) {
            numbers.push(parseInt(a.slice(0).join("")));

        } else {
            generate(k - 1, a);
            for (var i = 0; i < k - 1; i += 1) {

                //swap based on even or odd.
                if (k % 2 == 0) {
                    swap(a, i, k - 1)


                } else {
                    swap(a, 0, k - 1);
                }
                generate(k - 1, a);



            }
        }

    }

    //Swap - swaps value within array.
    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;

    }

    //remove duplicate values.
    //Creates a unique set of values - ES6 then converts back to array.
    function removeDupes(nums) {
        const uniqueSet = new Set(nums);

        return [...uniqueSet];

    }

    //sort from highest to lowest.
    function sortNumbers(a, b) {
        return b - a;
    }

    //Remove duplicates.
    numbers = removeDupes(numbers);
    //Finally sort.

    numbers.sort(sortNumbers);
    return numbers;

}

// some example inputs

console.log(solution('236')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC1234')); // No integers present. Exiting program.