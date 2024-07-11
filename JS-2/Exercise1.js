let arrayItems = [1, 2, 3, 4, 4, 1,1,2,5,'a','a','b',2,2,3,3,3,5,'b'];

const deleteRepeated = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
        }
    }
    return newArray
}

const arrayWithoutRepeat = deleteRepeated(arrayItems)
console.log(arrayWithoutRepeat)