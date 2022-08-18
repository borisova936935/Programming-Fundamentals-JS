function requiredReading(numberOfPages, pagesPerHour, days) {
    let totalTimeToReadTheBook = numberOfPages / pagesPerHour;
    let requiredHoursPerDay = totalTimeToReadTheBook / days;
    console.log(requiredHoursPerDay);
}
requiredReading(212, 20, 2)
requiredReading(432, 15, 4)