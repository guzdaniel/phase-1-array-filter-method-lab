// Code your solution here

const driverNames = ['AnDres', 'Luis', 'Andre', 'Andres']

const driversWithInfo = [
    {
        name: "Andres",
        hometown: "Matamoros"
    },
    {
        name: "Luis",
        hometown: "San Luis Potosi"
    }
]

function findMatching(drivers, nametoMatch){
    const matchedDrivers = drivers.filter(function(driver){
        return driver.toUpperCase() === nametoMatch.toUpperCase()
    })
    return matchedDrivers
}

function fuzzyMatch(drivers, letters){
    const matchedDrivers = drivers.filter(function(driver){
       // return driver.toUpperCase().startsWith(letters.toUpperCase())
        if (driver.toUpperCase().indexOf(letters.toUpperCase()) === 0){
            return true
       }
    })
    return matchedDrivers
}

function matchName(drivers, queryName){
    const matchedDrivers = drivers.filter(function(driver){
        return driver.name.toUpperCase() === queryName.toUpperCase()
    })
    return matchedDrivers
}