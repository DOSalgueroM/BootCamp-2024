let data = [
      ["The", "little", "horse"],
      ["Plane", "over", "the", "ocean"],
      ["Chocolate", "ice", "cream", "is", "awesome"], 
      ["this", "is", "a", "long", "sentence"]
    ]
const concatEachArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].join(" "))
    }
    return newArray
}
const resultado = concatEachArray(data)
console.log(resultado);