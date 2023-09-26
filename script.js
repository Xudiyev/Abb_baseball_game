// Baseball_Game_Task.
var operation = [5, -2, 4, "C", "D", 9, "+", "+"]   

function callPoints(operation) {
    let newArr = []
    let sumOfNewArr = 0

    for (let i = 0; i < operation.length; i++) {
        if (operation[i] !== "C" && operation[i] !== "D" && operation[i] !== "+") {
            newArr.push(Number(operation[i]))
        }
        if (operation[i] === "C") {
            newArr.pop()
        }
        if (operation[i] === "D") {
            let add = newArr.at(-1) * 2
            newArr.push(add)
        }
        if (operation[i] === "+") {
            let sum = newArr.at(-1) + newArr.at(-2)
            newArr.push(sum)
        }

    }
    // Ilk once hansi regemleri alirig console yazb baxmisam output (6) [5, -2, -4, 9, 5, 14]
    console.log(newArr)

    //  next yeni newArr - i yeni bir for salib toplamisiq regemleri.
    for (let i = 0; i < newArr.length; i++) {
        sumOfNewArr += newArr[i]
    }
    console.log(sumOfNewArr);

}

callPoints(operation)


