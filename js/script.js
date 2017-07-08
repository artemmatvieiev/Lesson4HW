const resultFilter = filter(movies, function (element, index, arr) {
    if (element.year == 2017) return true
    return false
})
console.log(resultFilter)

const resultMap = map(movies, function (element, index, arr) {
    return {
        id: element.id,
        name: element.name,
        isSeen: Math.random() > 0.3 ? true : false
    }
})
console.log(resultMap)

const resultFind = find(movies, function (element, index,  arr) {
    if (element.name == "Some") return true
    return false
})
console.log(resultFind)

const resultJoin = join(movies2, "; ")
console.log(resultJoin)

const resultReduce = reduce(movies, function (acc, current, index, arr) {
    acc.year.push(current.year)
    return acc
}, {
    year: []
})
console.log(resultReduce)

let resultConcat = concat(arrExample,movies2)
console.log(resultConcat)

let resultReverse = reverse(arrExample)
console.log(resultReverse)

let resultSlice = slice(arrExample, 2, 6)
console.log(resultSlice)