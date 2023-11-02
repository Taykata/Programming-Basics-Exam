function grandpaStavri(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;

    let amountOfBrandy = Number(input[index]);
    index++;
    let degrees = Number(input[index]);
    index++;

    let totalBrandyCount = 0;
    let sumOfDegreesPerLiter = 0;

    for (let i = 1; i <= days; i++) {

        totalBrandyCount += amountOfBrandy;
        sumOfDegreesPerLiter += amountOfBrandy * degrees;

        amountOfBrandy = Number(input[index]);
        index++;
        degrees = Number(input[index]);
        index++;

    }

    let avgDegrees = sumOfDegreesPerLiter / totalBrandyCount;

    console.log(`Liter: ${totalBrandyCount.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

    if (avgDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgDegrees >= 38 && avgDegrees <= 42) {
        console.log(`Super!`);
    } else if (avgDegrees > 42) {
        console.log(`Dilution with distilled water!`);
    }

}

grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);

// Exercise 4