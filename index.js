// Code your solution in this file!

//const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const drivers = ["Antonia", "Nuru", "Amari", "Claudia"];

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);


const returnLastTwoDrivers = drivers => drivers.slice(drivers.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = (x) => {
    return function(fare) {
        return x * fare;
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
