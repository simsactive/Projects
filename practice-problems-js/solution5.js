// Solution:5:

function gemsToDiamond(gems1,gems2,gems3){
    const myDiamond = gems1 * 21,
          friend1Diamond = gems2 * 32,
          friend2Diamond3 = gems3 * 43,
          totalDiamond = myDiamond + friend1Diamond + friend2Diamond3;

    if(totalDiamond > 2000){
        return (totalDiamond - 2000);
    }else{
        return totalDiamond;
    }
}
console.log(gemsToDiamond(20, 200, 50));