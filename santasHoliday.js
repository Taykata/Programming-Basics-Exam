function santasHoliday(input) {

    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;

    switch (room) {
        case "room for one person" : price = 18.00 * nights; break;
        case "apartment" : price = 25.00 * nights; break;
        case "president apartment" : price = 35.00 * nights; break;
    }

    if (room === "room for one person") {
        if (days < 10) {
            price = price;
        } else if (days >= 10 && days <= 15) {
            price = price;
        } else if (days > 15) {
            price = price;
        }
    } else if (room === "apartment") {
        if (days < 10) {
            price *= 0.70;
        } else if (days >= 10 && days <= 15) {
            price *= 0.65;
        } else if (days > 15) {
            price *= 0.50;
        }
    } else if (room === "president apartment") {
        if (days < 10) {
            price *= 0.90;
        } else if (days >= 10 && days <= 15) {
            price *= 0.85;
        } else if (days > 15) {
            price *= 0.80;
        }
    }

    if (rating === "positive") {
        price *= 1.25;
    } else if (rating === "negative") {
        price *= 0.90;
    }

    console.log(price.toFixed(2));

}

santasHoliday(["30", "president apartment", "negative"]);

// Exercise 3