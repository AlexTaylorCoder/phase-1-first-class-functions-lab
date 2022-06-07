// Code your solution in this file!
const returnFirstTwoDrivers = (names)=> names.slice(0,2)
const returnLastTwoDrivers = (names)=> names.slice(names.length-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return (fare)=> num*fare
}

function fareDoubler(createFareMultiplier){
    return createFareMultiplier * 2
}
function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3
}

function selectDifferentDrivers(arr,func) {

    return arr.filter(item=>func(arr).indexOf(item)!==-1)
}