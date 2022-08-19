function pirates(input) {
    let linesOfInput = input.shift();
    let targets = {};


    while (linesOfInput !== "Sail") {
        let [city, population, gold] = linesOfInput.split("||");

        if (!targets.hasOwnProperty(city)) {
            targets[city] = [Number(population), Number(gold)];
        } else {
            targets[city][0] += Number(population);
            targets[city][1] += Number(gold);
        }
        linesOfInput = input.shift();
    }

    while (linesOfInput !== "End") {
        let [command, city, people, gold] = linesOfInput.split("=>");
        if (command === "Plunder") {
            targets[city][0] -= Number(people);
            targets[city[1]] -= Number(gold);

            if (targets[city][0] <= 0 || targets[city][1] <= 0) {
                if (targets[city][0] < 0) {
                    people = Number(people) + Number(targets[city][0])
                } else if (targets[city][1] < 0) {
                    gold = Number(gold) + Number(targets[city][1]);
                }
                delete targets[city];
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                console.log(`${city} has been wiped off the map!`);
            }
        }
        linesOfInput = input.shift();
    }

}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);