/* ------------------------------------------
# isometric calendar:
# - A week has 6 days - S M T W T F
# - A month has 30 days or 5 weeks
# - An year has 366 days or 12 full months and an extra year-end month of 1 week
# - - The 12 months are 
# - - - |01-Jan|02-Feb|03-Mar|
# - - - |04-Apr|05-May|06-Jun|
# - - - |07-Jul|08-Aug|09-Sep|
# - - - |19-Oct|11-Nov|12-Dec|
# - - - |13-Sat| [Sat - Saturn - Extra year-end month of 1 week]
# - - Leap years skip the extra year-end month. Leap years occur every 8 years.
# - - - The Rule for Leap year is: 
# - - -       Every year that is divisible by 4 but not divisible by 8 is a leap year. 
# - - -       If a centuarial year is divisible by 400 but not divisible by 800 is a leap year.
# - The calendar starts on the exact same day as first day of gregorian calendar 01-01-0001.
# ------------------------------------------- */

/* ------------------------------------------
# divisibility check
# ------------------------------------------- */
function isDivisible(a, b) {
    return !(a % b);
}

/* ------------------------------------------
# get nubmer of days in a given isometric calendar year
# ------------------------------------------- */

export function daysInYear(year) {
    let days = 0;
    if ((isDivisible(year, 4) && !isDivisible(year, 8))
        ||
        (isDivisible(year, 400) && !isDivisible(year, 800))) {
        days = 360;
    }
    else {
        days = 366;
    }
    return days;
}

/* ------------------------------------------
* get number of days from 01-01-0001 till end of the given year
*  ------------------------------------------ */
export function daysTillYear(toYear) {
    let totalDays = 0;

    for (let year = 1; year <= toYear; year++)
        totalDays = totalDays + daysInYear(year);

    return totalDays;
}

/* ------------------------------------------
# get number of days from 01-01-0001 till given date
# ------------------------------------------- */
function getDaysTillDate(dateStr) { //yyyy-mm-dd format
    let [year, month, day] = (dateStr.split("-"));
    //print(year,month,day);
    let daysTillDate = daysTillYear((year) - 1) + 30*((month) - 1) + (day);
    
    return daysTillDate;
}

/* ------------------------------------------
# get 'year' from number of days from 01-01-0001
# ------------------------------------------- */
function getYear(days) {
    let year = 0;
    let daysLeft = days;
    while(daysLeft > 0)
    {
        year = year + 1;
        daysLeft = daysLeft - daysInYear(year);
    }
    //add the days back before returning. 
    return [year, daysLeft +  daysInYear(year)];
}

/* ------------------------------------------
# get 'month' from number of days, range 1-366
# ------------------------------------------- */
function getMonth(days) {
    console.log(days)
    days = days + 29; 
    // adding 29 days does the trick of adding 1 to the month, and boundary case of 30th for day.
    // if days is 30, it returns 1-month and 30-days
    return [parseInt((days)/30), (days)%30 + 1];
}

/* ------------------------------------------
# get isometric date from given number of days from 01-01-0001
# ------------------------------------------- */
export function getDateFromDays(days) {
    let [year, daysLeft] = getYear(days);
    
    let [month, day] = getMonth(daysLeft);
    //print(year, month, day);
    return year.toString().padStart(4, "0") + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");
}

/* ------------------------------------------
# 
# ------------------------------------------- */

