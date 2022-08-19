function meetings(input) {
    let calendar = {};
    for (let entry of input) {
        entry = entry.split(" ");
        let weekDay = entry[0];
        let person = entry[1];
        
        if(calendar.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
        }else{
            calendar[weekDay] = person;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    for (let assocKey in calendar){
        console.log(`${assocKey} -> ${calendar[assocKey]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
