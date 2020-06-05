const readlineSync = require('readline-sync');

let userArray = []; let computerArray = [];
let bulls = 0; let cows = 0;
Generate();

function Generate(){
    for(let i = 0; i < 4; i++){
        let v = Math.floor(Math.random()*10)
        if((computerArray[0]!=v)&&(computerArray[1]!=v)&&(computerArray[2]!=v)&&(computerArray[3]!=v)){
            computerArray[i]=v;
        }
        else {
            i--;
        }
    }
    console.log(computerArray);
}

function InputArray(){
    for(let i = 0; i < 4;i++){
        userArray[i] = readlineSync.question('Pls, input '+(i+1)+' element: ');
    }
    bulls = 0 , cows = 0;
}

function Check(){   
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            computerArray[i]===(+userArray[j]) && i===j ? bulls +=1 :
            computerArray[i]===(+userArray[j]) && i!=j ? cows +=1 :
            null;
        }
    }
    Result()
};

function Result(){
    console.log("Bulls: "+bulls+"\r\nCows: "+cows);
};

while(true){
    Check(InputArray());
    if(bulls != 4){
        continue;
    } else {
        break;
    }
}