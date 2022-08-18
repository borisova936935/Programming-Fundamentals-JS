function bitcounMining(input){
    let Day = 0;
    let Totallv = 0;
    let DayLv = 0;
    let TotalBitCoins=0;
    let DayFirstB=0;
     
        for(let i=0; i<input.length; i++){
             DayLv = 0;
             Day++;
             if(Day %3=== 0){
             input[i] = input[i]-input[i]*30/100;    
             }
             DayLv = input[i]*67.51;
             Totallv += DayLv;
     
             while (Totallv>=11949.16){     
                 if(DayFirstB===0){
                    DayFirstB = Day; 
                 }
               TotalBitCoins++; 
               Totallv -= 11949.16;
             }
     
        }
        console.log(`Bought bitcoins: ${TotalBitCoins}`);
        if(DayFirstB>0){
        console.log(`Day of the first purchased bitcoin: ${DayFirstB}`);
        }
        console.log(`Left money: ${Totallv.toFixed(2)} lv.`);
     
       
}
bitcounMining([100, 200, 300])
bitcounMining([50, 100])