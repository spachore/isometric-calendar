/* ------------------------------------------
# Return Array of Gregorian weekdays
# ------------------------------------------- */
export function getGregorianWeekdays() {
    return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
}

/* ------------------------------------------
# Return the gregorian weekday for given gregorian date
# ------------------------------------------- */
export function getGregorianWeekday(dateStr) {
    let [year, month, day] = dateStr.split("-").map((val)=>parseInt(val));
    let newDate = new Date(year, month-1, day);
    return getGregorianWeekdays()[newDate.getDay()];
}

/* ------------------------------------------
# Return Array of isometric weekdays
# ------------------------------------------- */
export function addDaysToGregorianDate(dateStr, ddiff) {
    let [year, month, day] = dateStr.split("-").map((val)=>parseInt(val));
    let newDate = new Date(year, month-1, day+ddiff);
    return (
        newDate.getFullYear().toString().padStart(4, "0") + "-" +
        (newDate.getMonth()+1).toString().padStart(2, "0") + "-" +
        newDate.getDate().toString().padStart(2, "0")
    )
}