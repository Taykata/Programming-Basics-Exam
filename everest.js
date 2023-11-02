function everest(input) {

    let index = 0
    let command = input[index];
    index++;
    let climbedMeters = Number(input[index]);
    index++;

    let daysCounter = 1;
    let height = 5364;

    while (true) {

        if (command === "END") {
            console.log(`Failed!`);
            console.log(`${height}`);
            break;
        }

        if (command === "Yes") {
            daysCounter++;
            if (daysCounter > 5) {
                console.log(`Failed!`);
                 console.log(`${height}`);
                break;
            }
            height += climbedMeters;
        } else if (command === "No") {
            height += climbedMeters;
        }

        if (height >= 8848) {
            console.log(`Goal reached for ${daysCounter} days!`);
            break;
        }

        if (daysCounter > 5) {
            console.log(`Failed!`);
            console.log(`${height}`);
            break;
        }

        command = input[index];
        index++;
        climbedMeters = Number(input[index]);
        index++;

    }

}

everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);

// Exercise 5