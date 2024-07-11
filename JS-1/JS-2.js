const findLessTimes = (array) => {
    let count = 0
    let countAux = Infinity
    let element=null
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]){
                count++
            }
        }
        if (count < countAux){
            countAux = count
            element = array[i]
        }
        count = 0
        
    }
    console.log(`The element that appears less is ${element} with ${countAux} times`);
}
let arrayItems = [1, 2, 3, 4, 4, 1,1,2,5,'a','a','b',2,2,3,3,3,5,'b'];
findLessTimes(arrayItems)

