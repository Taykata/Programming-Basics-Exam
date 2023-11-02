function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let printCounter = 0;
    let isFinish = false;

    for (let a = k; a <= 8; a++) {
        for (let b = 9; b >= l; b--) {
            for (let c = m; c <= 8; c++) {
                for (let d = 9; d >= n; d--) {
                    if ((a % 2 === 0 && b % 2 !== 0 && c % 2 === 0 && d % 2 !== 0) && (`${a}${b}` !== `${c}${d}`)) {
                        console.log(`${a}${b} - ${c}${d}`);
                        printCounter++;

                        if (printCounter >= 6) {
                            isFinish = true;
                            break;
                        }

                    } else if ((a % 2 === 0 && b % 2 !== 0 && c % 2 === 0 && d % 2 !== 0) && (`${a}${b}` === `${c}${d}`)) {
                        console.log(`Cannot change the same player.`);
                    }
                    if (isFinish) {
                        break;
                    }
                }
                if (isFinish) {
                    break;
                }
            }
            if (isFinish) {
                break;
            }
        }
        if (isFinish) {
            break;
        }
    }

}

substitute(["7", "6", "8", "5"]);

// Exercise 6