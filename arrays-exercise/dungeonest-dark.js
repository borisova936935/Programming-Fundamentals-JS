function dungeonestDark(input) {   //to be finished
    let health = 100;
    let coins = 0;
    let rooms = input[0].split('|')
 
    for(let i = 0; i < rooms.length; i++){
        let item = rooms[i].split(' ');
 
        if(item[0] === 'chest'){
            coins += Number(item[1]);
            console.log(`You found ${item[1]} coins.`);
        } else if (item[0] === 'potion'){
            health += Number(item[1]);
            if(health > 100){
                health2 = health - item[1];
                item[1] = Math.abs(100 - health2);
                health = 100;
            }
            console.log(`You healed for ${item[1]} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else {
            health -= Number(item[1]);
 
            if(health <= 0){
                console.log(`You died! Killed by ${item[0]}.`);
                console.log(`Best room: ${i+1}`);
                return;
            } else {
                console.log(`You slayed ${item[0]}.`);
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(
    ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]
);
dungeonestDark(
    ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]
);
