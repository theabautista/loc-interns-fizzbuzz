// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    for (let i=0; i<101; i++) {

        var f = ""

        if (i/3 == 0) {
            f += "Fizz"
        }
        if (i/5 == 0) {
            f += "Buzz"
        }

        if (!f) {
            console.log(i)
        }else{
            console.log(f)
        }
    }


}

// Now, we run the main function:
fizzbuzz();

