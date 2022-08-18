function vacation(people, type, day) {

    let peopleCount = people;
    let groupType = type;
    let dayOfTheWeek = day;

    if (groupType === "Business" && peopleCount >= 100) {
       peopleCount -= 10;
    }


    switch (groupType) {
        case "Students":
            if (dayOfTheWeek === "Friday") {
                totalPrice = 8.45 * peopleCount;
            } else if (dayOfTheWeek === "Saturday") {
                totalPrice = 9.80 * peopleCount;
            } else if (dayOfTheWeek === "Sunday") {
                totalPrice = 10.46 * peopleCount;
            }
            break;

        case "Business":
            if (dayOfTheWeek === "Friday") {
                totalPrice = 10.90 * peopleCount;
            } else if (dayOfTheWeek === "Saturday") {
                totalPrice = 15.60 * peopleCount;
            } else if (dayOfTheWeek === "Sunday") {
                totalPrice = 16 * peopleCount;
            }
            break;

        case "Regular":
            if (dayOfTheWeek === "Friday") {
                totalPrice = 15 * peopleCount;
            } else if (dayOfTheWeek === "Saturday") {
                totalPrice = 20 * peopleCount;
            } else if (dayOfTheWeek === "Sunday") {
                totalPrice = 22.50 * peopleCount;
            }
            break;
    }


    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice = totalPrice * 0.85;
    }

   
    if (groupType === "Regular" && (peopleCount >= 10 && peopleCount <= 20)) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday")