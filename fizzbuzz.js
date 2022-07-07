// This is our main function
function fizzbuzz() {
    console.log("Part 1");

    for (let i=1; i<101; i++) {

        var f = ""

        if (i%3 == 0) {
            f += "Fizz"
        }
        if (i%5 == 0) {
            f += "Buzz"
        }

        if (!f) {
            console.log(i)
        }else{
            console.log(f)
        }
    }


}

function fizzbuzz2(num, rules) {
    console.log("Part 2")

    for (var i=1; i<num; i++) {
        
        let idx = 0;
        var f = []
        while (idx < rules.length){
            switch (rules[idx]) {
                case 3:
                    if (i%3 == 0) f.push("Fizz")
                    break;
                case 5: 
                    if (i%5 == 0) f.push("Buzz")
                    break;
                case 7:
                    if (i%7 == 0) f.push("Bang")
                    break;
                case 11:
                    if (i%11 == 0) f = ["Bong"]
                    break;
                case 13: 
                    if (i%13 == 0) {
                        idx = getIndexFirstB(f)
                        if (!idx) {
                            f.splice(idx,0,"Fezz")
                        }else{
                            f.push("Fezz")
                        }
                    }
                    break;
                case 17:
                    if (i%17 == 0) f.reverse()
                    break;
            }
        }

        if (f.length === 0) {
            console.log(i)
        }else{
            console.log(f.join(''))
        } 
    }
}


function getIndexFirstB(f) {
    for (var y=0; y<f.length; y++){
        if (f[y].indexOf('B') === 0) var r = y
    }
    return r;
}

// Now, we run the main function:
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question('Please enter your number and rules you\'d like to apply: ', [num, rules] => {
//     fizzbuzz2(num, rules);
// })

const inquirer = require('inquierer')

const questions = [
    {
        type: 'input',
        name: 'max_num',
        message: 'Input max range'
    }
]
