// const arr = [1,1,2]
// const removeDuplicates = (nums) => {
//     let expectedNums = []
//     for(let i = 0; i < nums.length; i++){
//         if(!expectedNums.includes(nums[i])){
//            expectedNums.push(nums[i])
//            }
//     }
//     console.log(expectedNums)
//    return expectedNums
// };  

// const k = removeDuplicates([1,6,6]) 
const price = [7,1,5,3,6,4]
var maxProfit = (prices) => {
    newPrices = []
    for (var i = 0; i < prices.length - 1 ; i++) {
        for (var j = 1; j < prices.length - 1 ; j++) {
          if (prices[i] > prices[j]) {
            newPrices.push(prices[j]);
          }
        }
      }
      console.log(newPrices)
};

price.maxProfit()
  
