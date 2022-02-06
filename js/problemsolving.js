// anaToVori convert
function anaToVori(ana){
    if((typeof(ana) == 'number') && (ana > 0)){
        const vori = ana / 16;
        return vori;
    }
    else{
        return 'error: please input a valid number';
    }
}
const totalVori = anaToVori(32);
console.log(totalVori);

// pandaCost calculate
function pandaCost(singara, daalBaji, jalebi){
    if((typeof(singara) == 'number') && (singara>= 0) && (typeof(daalBaji) == 'number') && (jalebi>= 0)&& (typeof(jalebi) == 'number') && (daalBaji>= 0)){
        let singaraPrice = 7;
        let daalBajiPrice = 10;
        let jalebiPrice = 15;
        const totalSingaraPrice = singara * singaraPrice;
        const totalDaalBajiPrice = daalBaji * daalBajiPrice;
        const totalJalebiPrice = jalebi * jalebiPrice;
        const totalPrice = totalSingaraPrice + totalDaalBajiPrice + totalJalebiPrice;
        return totalPrice;
    }
    else{
        return 'error: please input a valid number';
    }
}
const totalPandaCost = pandaCost(5,11,14);
console.log(totalPandaCost);

// picnicBudget calculation
function picnicBudget(people){
    const zeroToHundred = 5000;
    const hundredToTwoHundred = 4000;
    const moreThanTwoHundred = 3000;
    if((typeof(people) == 'number') && (people > 0)){
        if(people <= 100){
            const zeroToHundredCost = people * zeroToHundred;
            const totalCost = zeroToHundredCost;
            return totalCost;
        }
        if(people <= 200){
            const zeroToHundredCost = 100 * zeroToHundred;
            const hundredToTwoHundredPeople = people - 100;
            const hundredToTwoHundredCost = hundredToTwoHundredPeople * hundredToTwoHundred;
            const totalCost = zeroToHundredCost + hundredToTwoHundredCost;
            return totalCost;
        }
        else{
            const zeroToHundredCost = 100 * zeroToHundred;
            const hundredToTwoHundredCost = 100 * hundredToTwoHundred;
            const restPeople = people - 200;
            const restPeopleCost = restPeople * moreThanTwoHundred;
            const totalCost = zeroToHundredCost + hundredToTwoHundredCost + restPeopleCost;
            return totalCost;
        }
    }
    else{
        return 'error: please input a valid number';
    }
}
const totalCost = picnicBudget(155);
console.log(totalCost);

// oddFriend task
function oddFriend(myFriends){
    for(let i = 0; i < myFriends.length; i++){
        const element = myFriends[i];
        if(element.length%2 != 0){
            return element;
        }
    }
}
let myFriendsName = ['Mehedi', 'Polash','Wahab', 'Nadim', 'Apu', 'Somnath']
const myfriend = oddFriend(myFriendsName);
console.log(myfriend);