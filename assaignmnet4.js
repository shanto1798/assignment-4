// problem solve 1

function radiantToDegree ( radiant ) {
    if(typeof radiant === 'number') {
        const degree = radiant * 57.2958;
        return degree.toFixed(2);
    }
    else{
        return 'Give me a number';
    }
}

// call function

let result = radiantToDegree(2);
console.log(result);

// // problem solve 2

// function isJavaScriptFile (fileName) {
//     if (typeof fileName === 'string') {
//         if (fileName.includes('.js')) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else {
//         return 'please Enter A String Namr';
//     }
// }

// const extentionName = isJavaScriptFile('mokbul.js');
// console.log(extentionName);

// // problem solve 3

// function oilPrice (oilQuality, petrolQuality, diselQuality) {
//     if (typeof oilQuality !== 'number') {
//         return 'please Enter your First Perameter Value Number'
//     }
//     else if (typeof petrolQuality !== 'number') {
//         return 'please Enter your Second Perameter Value Number'
//     }
//     else if (typeof diselQuality !== 'number') {
//         return 'please Enter your Third Perameter Value Number'
//     }

//     const perLiterOil = 114;
//     const perLiterPetrol = 130;
//     const perLiterDisel = 135;

//     const oil = oilQuality * perLiterOil;
//     const petrol = petrolQuality * perLiterPetrol;
//     const disel = diselQuality * perLiterDisel;

//     const totalCost =  oil + petrol + disel;
//     return totalCost;
    
// }

// const totalCost = oilPrice(2, 2, 1);
// console.log(totalCost);

// // problem solve 4

// function publicBusFare(people) {
//     if (typeof people === 'number'){
//         let perBus = 50;
//         let perMicroBus = 11;
//         let reminingBusPeople = people % perBus;
//         let microBusPeople = reminingBusPeople % perMicroBus;
//         let publicBusPeople = microBusPeople;
//         let publicBusPeopleCost = 250;
//         let totalLocalCost = publicBusPeople * publicBusPeopleCost;
//         return totalLocalCost;
//     }
//     else {
//         return 'Give Me People Number';
//     }
// }

// const public = publicBusFare(365);
// console.log(public);

// // problem solve 5

// const friendsOne = {name: 'jahangir alam', address: 'sylet', friend: 'nurul amin'};
// const friendsTwo = {name: 'nurul amin', address: 'sylet', friend: 'jahangir alam'};

// function isBestFriend (friendsNameOne, friendsNameTwo){
//     if (friendsNameOne.name === friendsNameTwo.friend &&friendsNameTwo.name === friendsNameOne.friend){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const result1 = isBestFriend(friendsOne, friendsTwo);
// console.log(result1);