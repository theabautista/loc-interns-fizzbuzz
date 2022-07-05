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

function fizzbuzz2() {
    console.log("Part 2")

    for (var i=1; i<144; i++) {
        divisors = getDivisors(i)

        var f = []

        if (i%3 == 0) {
            f.push("Fizz")
        }
        if (i%5 == 0) {
            f.push("Buzz")
        }
        if (i%7 == 0) {
            f.push("Bang")
        }

        if (i%11 == 0) {
            f = ["Bong"]
        }

        if (i%13 == 0) {
            idx = getIndexFirstB(f)
            if (!idx) {
                f.splice(idx,0,"Fezz")
            }else{
                f.push("Fezz")
            }
        }

        if (i%17 == 0){
            f.reverse()
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
fizzbuzz2();
// console.log(getIndexFirstB(["Buzz"]))



