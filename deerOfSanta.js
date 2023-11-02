function deerOfSanta(input) {

    let daysWithoutSanta = Number(input[0]);
    let foodInKg = Number(input[1]);
    let foodPerDayForDeer1 = Number(input[2]);
    let foodPerDayForDeer2 = Number(input[3]);
    let foodPerDayForDeer3 = Number(input[4]);

    let neededFoodForDeer1 = foodPerDayForDeer1 * daysWithoutSanta;
    let neededFoodForDeer2 = foodPerDayForDeer2 * daysWithoutSanta;
    let neededFoodForDeer3 = foodPerDayForDeer3 * daysWithoutSanta;

    let totalNeededFood = neededFoodForDeer1 + neededFoodForDeer2 + neededFoodForDeer3;

    if (totalNeededFood <= foodInKg) {
        console.log(`${Math.floor(foodInKg - totalNeededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeededFood - foodInKg)} more kilos of food are needed.`);
    }

}

deerOfSanta(["2", "10", "1", "1", "2"]);

// Exercise 2